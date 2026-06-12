import { images } from '../data/images'
import TeamScoreWidget from '../components/TeamScoreWidget'
import ChicagoHotspots from '../components/ChicagoHotspots'

const TEAMS = [
  { id: 112, name: 'Cubs', city: 'Chicago', emoji: '🐻', accent: '#0e3386' },
  { id: 146, name: 'Marlins', city: 'Miami', emoji: '🐟', accent: '#00a3e0' },
]

const LEGENDS = [
  {
    name: 'Portillo’s',
    blurb: 'The Chicago institution. Char-grilled dogs dragged through the garden since 1963.',
    url: 'https://www.portillos.com/index.html',
  },
  {
    name: 'The Wiener’s Circle',
    blurb: 'Char dogs, cheese fries, and the city’s most legendary late-night attitude.',
    url: 'https://www.wienerscirclechicago.com/',
  },
  {
    name: 'Gene & Jude’s',
    blurb: 'A no-frills River Grove stand keeping the depression-style dog pure since 1946.',
    url: 'https://www.geneandjudes.com/',
  },
  {
    name: 'Superdawg',
    blurb: 'The drive-in with the dancing dogs on the roof — a Chicago original since 1948.',
    url: 'https://superdawg.com/menu-chicago/',
  },
]

export default function Explore() {
  return (
    <div>
      <section
        className="relative bg-cover bg-center min-h-[40vh] -mt-20 pt-20 flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${images.exploreHero})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4">
          <h1 className="font-display text-mustard text-6xl drop-shadow-lg">Explore</h1>
          <p className="font-display text-white text-xl mt-2 tracking-wide">
            Chicago Pride. Miami Energy. Real Stories.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="font-display text-tommy-red text-4xl tracking-wide drop-shadow-[2px_2px_0_rgba(0,0,0,0.2)]">
          Two Cities, One Stand
        </h2>
        <p className="font-body text-black/80 text-lg mt-3 leading-relaxed">
          At Tommy Dogs we're mixing Chicago vibes with the rich Miami culture!
          It shows up in our dogs, our music, and yeah, the teams we root for. So
          whether you bleed Cubbie blue or you're all about that Marlins teal,
          pull up a stool and catch the scores with us.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 max-w-2xl mx-auto">
          {TEAMS.map((team) => (
            <TeamScoreWidget key={team.id} team={team} />
          ))}
        </div>
      </section>

      <section className="bg-black/5 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-display text-tommy-red text-4xl tracking-wide drop-shadow-[2px_2px_0_rgba(0,0,0,0.2)]">
            Explore Chicago
          </h2>
          <p className="font-body text-black/70 text-lg mt-3 mb-8">
            Tap a marker to dig into the city that started it all.
          </p>
          <ChicagoHotspots />
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="font-display text-tommy-red text-4xl tracking-wide drop-shadow-[2px_2px_0_rgba(0,0,0,0.2)]">
          Inspired by Chicago Legends
        </h2>
        <p className="font-body text-black/70 text-lg mt-3 mb-8">
          The stands that wrote the book on the Chicago dog. Tap one to pay them a visit.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {LEGENDS.map((legend) => (
            <a
              key={legend.url}
              href={legend.url}
              target="_blank"
              rel="noreferrer"
              className="group block rounded-xl border-2 border-tommy-red bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:bg-tommy-red hover:shadow-lg"
            >
              <h3 className="font-display text-2xl tracking-wide text-tommy-red group-hover:text-mustard">
                {legend.name}
              </h3>
              <p className="font-body text-black/75 mt-2 leading-relaxed group-hover:text-white">
                {legend.blurb}
              </p>
              <span className="font-display text-sm tracking-wide text-tommy-red mt-3 inline-block group-hover:text-mustard">
                Visit →
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-black/5 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative w-full overflow-hidden rounded-xl shadow-lg" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/BDp0VlNApu8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  )
}
