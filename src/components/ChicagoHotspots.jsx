import { useState } from 'react'
import { images } from '../data/images'

// Interactive markers placed over the clean Chicago photo. Hover a marker to
// see its name; click to open a styled info card. Positions are percentages so
// they track the photo as it scales.
const HOTSPOTS = [
  {
    id: 'blues',
    label: 'Blues',
    pos: { left: '7%', top: '14%' },
    // TODO: replace with final copy
    body: 'Add the Blues blurb here.',
  },
  {
    id: 'history',
    label: 'History',
    pos: { left: '66%', top: '30%' },
    body: 'Add the History blurb here.',
  },
  {
    id: 'hotdogs',
    label: 'Hot Dog Joints',
    pos: { left: '9%', top: '74%' },
    body: 'Add the Hot Dog Joints blurb here.',
  },
]

export default function ChicagoHotspots() {
  const [active, setActive] = useState(null)
  const activeSpot = HOTSPOTS.find((h) => h.id === active)

  return (
    <div className="relative max-w-4xl mx-auto border-4 border-black rounded-2xl shadow-lg overflow-hidden">
      <img
        src={images.chicagoExplore}
        alt="A bustling street outside the Chicago Theatre"
        className="block w-full"
      />

      {HOTSPOTS.map((spot) => (
        <button
          key={spot.id}
          type="button"
          onClick={() => setActive(spot.id)}
          style={spot.pos}
          aria-label={spot.label}
          className="group absolute -translate-x-1/2 -translate-y-1/2 z-10"
        >
          {/* Pulsing marker dot */}
          <span className="relative flex h-6 w-6 items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-mustard opacity-75 animate-ping" />
            <span className="relative inline-flex h-5 w-5 rounded-full bg-mustard border-[3px] border-black" />
          </span>

          {/* Name label — shows on hover/focus */}
          <span
            className="pointer-events-none absolute left-1/2 bottom-full mb-2 -translate-x-1/2 whitespace-nowrap
                       bg-black text-mustard font-display text-lg tracking-wide px-3 py-1 rounded-lg border-2 border-mustard
                       opacity-0 scale-90 transition group-hover:opacity-100 group-hover:scale-100 group-focus:opacity-100 group-focus:scale-100"
          >
            {spot.label}
          </span>
        </button>
      ))}

      {/* Click-to-open info card */}
      {activeSpot && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/70 px-4">
          <div className="relative max-w-md w-full bg-white border-4 border-black rounded-2xl shadow-2xl p-6 text-center">
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute -top-3 -right-3 h-9 w-9 rounded-full bg-tommy-red text-white border-4 border-black font-display text-xl leading-none flex items-center justify-center hover:bg-tommy-red-dark"
            >
              &times;
            </button>
            <h3 className="font-display text-tommy-red text-3xl tracking-wide drop-shadow-[1px_1px_0_rgba(0,0,0,0.2)]">
              {activeSpot.label}
            </h3>
            <p className="font-body text-black/80 mt-2 leading-relaxed">{activeSpot.body}</p>
          </div>
        </div>
      )}
    </div>
  )
}
