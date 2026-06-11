import { useEffect, useState } from 'react'

// Live scores / upcoming games for a single MLB club, pulled from the public
// MLB StatsAPI (no key required, sends permissive CORS headers). Same
// fetch-in-useEffect shape as WeatherWidget.

// Pad a Date to YYYY-MM-DD for the schedule query window.
function isoDate(d) {
  return d.toISOString().slice(0, 10)
}

// "San Francisco Giants" -> "Giants" — casual nickname for compact display.
function nickname(name) {
  return name.split(' ').slice(-1)[0]
}

export default function TeamScoreWidget({ team }) {
  const { id, name, emoji, accent, city } = team
  const [state, setState] = useState({ status: 'loading' })

  useEffect(() => {
    const controller = new AbortController()
    const now = new Date()
    const start = new Date(now)
    start.setDate(start.getDate() - 8)
    const end = new Date(now)
    end.setDate(end.getDate() + 14)
    const url =
      `https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=${id}` +
      `&startDate=${isoDate(start)}&endDate=${isoDate(end)}`

    fetch(url, { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        const games = (data.dates || [])
          .flatMap((d) => d.games)
          .sort((a, b) => new Date(a.gameDate) - new Date(b.gameDate))

        const live = games.find((g) => g.status.abstractGameState === 'Live')
        const finals = games.filter((g) => g.status.abstractGameState === 'Final')
        const lastFinal = finals[finals.length - 1]
        const next = games.find(
          (g) =>
            g.status.abstractGameState === 'Preview' &&
            new Date(g.gameDate).getTime() > Date.now(),
        )

        const current = live || lastFinal
        setState({
          status: 'ready',
          current: current ? describe(current, id) : null,
          next: next ? describeNext(next, id) : null,
        })
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setState({ status: 'error' })
      })
    return () => controller.abort()
  }, [id])

  return (
    <div className="bg-white border-4 border-black rounded-2xl shadow-lg overflow-hidden text-black">
      <div
        className="px-4 py-2 flex items-center gap-2 border-b-4 border-black"
        style={{ backgroundColor: accent }}
      >
        <span className="text-2xl leading-none" aria-hidden="true">{emoji}</span>
        <div className="leading-tight">
          <p className="font-display text-white text-xl tracking-wide drop-shadow-[1px_1px_0_rgba(0,0,0,0.7)]">
            {name}
          </p>
          <p className="font-body text-[10px] uppercase tracking-widest text-white/80">{city}</p>
        </div>
      </div>

      <div className="px-4 py-3 min-h-[7.5rem] flex flex-col justify-center">
        {state.status === 'loading' && (
          <p className="font-body text-sm text-black/60 text-center py-6">Loading scores…</p>
        )}

        {state.status === 'error' && (
          <p className="font-body text-sm text-black/60 text-center py-6">
            Scores unavailable right now.
          </p>
        )}

        {state.status === 'ready' && (
          <>
            {state.current ? (
              <div className="text-center">
                <span
                  className={`inline-block font-body text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border-2 border-black ${
                    state.current.live ? 'bg-tommy-red text-white' : 'bg-mustard text-black'
                  }`}
                >
                  {state.current.live ? '● Live' : 'Final'}
                </span>
                <p className="font-display text-2xl tracking-wide mt-1.5 leading-none">
                  {state.current.label}
                </p>
                <p className="font-body font-bold text-3xl leading-none mt-1">
                  {state.current.us}
                  <span className="text-black/40 mx-1.5">–</span>
                  {state.current.them}
                </p>
                {state.current.live && (
                  <p className="font-body text-xs text-black/60 mt-0.5">{state.current.detail}</p>
                )}
              </div>
            ) : (
              <p className="font-body text-sm text-black/60 text-center">No recent game.</p>
            )}

            {state.next && (
              <div className="mt-2 pt-2 border-t border-black/15 text-center">
                <p className="font-body text-[10px] font-bold uppercase tracking-widest text-black/50">
                  Next
                </p>
                <p className="font-body text-sm font-bold leading-tight">{state.next.label}</p>
                <p className="font-body text-xs text-black/60">{state.next.when}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

// Build a finished/live game line from our team's perspective.
function describe(game, teamId) {
  const isHome = game.teams.home.team.id === teamId
  const ours = isHome ? game.teams.home : game.teams.away
  const opp = isHome ? game.teams.away : game.teams.home
  return {
    live: game.status.abstractGameState === 'Live',
    label: `${isHome ? 'vs' : '@'} ${nickname(opp.team.name)}`,
    us: ours.score ?? 0,
    them: opp.score ?? 0,
    detail: game.status.detailedState,
  }
}

// Build the "next game" line.
function describeNext(game, teamId) {
  const isHome = game.teams.home.team.id === teamId
  const opp = isHome ? game.teams.away : game.teams.home
  const when = new Date(game.gameDate).toLocaleString('en-US', {
    weekday: 'short',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'America/New_York',
  })
  return {
    label: `${isHome ? 'vs' : '@'} ${nickname(opp.team.name)}`,
    when: `${when} ET`,
  }
}
