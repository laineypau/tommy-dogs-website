import { useState } from 'react'
import { images } from '../data/images'

// All-time Chicago blues legends shown in the "Blues Artist Rap Sheet" card.
const BLUES_ARTISTS = [
  {
    name: 'Muddy Waters',
    url: 'https://www.youtube.com/watch?v=bSfqNEvykv0',
    bullets: [
      'Often called the "Father of modern Chicago blues"',
      'Electrified Delta blues and shaped the entire Chicago sound',
    ],
  },
  {
    name: 'Howlin’ Wolf',
    url: 'https://www.youtube.com/watch?v=aVIA1n5ng4Y',
    bullets: [
      'Known for his powerful voice and commanding presence',
      'One of the most recognizable figures in blues history',
    ],
  },
  {
    name: 'Willie Dixon',
    url: 'https://www.youtube.com/watch?v=SW4FE8WkvuM',
    bullets: [
      'Legendary bassist, songwriter, and producer',
      'Helped define the post-WWII Chicago blues sound',
    ],
  },
  {
    name: 'Buddy Guy',
    url: 'https://www.youtube.com/watch?v=0zhV99Bvrgg',
    bullets: [
      'One of the most influential guitarists ever',
      'Inspired rock icons like Jimi Hendrix and Eric Clapton',
    ],
  },
  {
    name: 'Little Walter',
    url: 'https://www.youtube.com/watch?v=UqUfuW6kZnY',
    bullets: [
      'Revolutionized amplified harmonica',
      'A key member of Muddy Waters’ band',
    ],
  },
  {
    name: 'Koko Taylor',
    url: 'https://www.youtube.com/watch?v=1qXp3nlcWoU',
    bullets: [
      'Known as the "Queen of the Blues"',
      'Powerful voice and major figure in Chicago blues’ later era',
    ],
  },
  {
    name: 'Elmore James',
    url: 'https://www.youtube.com/watch?v=d_XQYDxXg9A',
    bullets: [
      'Master of slide guitar',
      'Famous for intense, driving electric blues style',
    ],
  },
  {
    name: 'Otis Rush',
    url: 'https://www.youtube.com/watch?v=Uy2tEP3I3DM',
    bullets: [
      'Pioneer of the "West Side Sound"',
      'Influenced blues rock and British blues players',
    ],
  },
  {
    name: 'Junior Wells',
    url: 'https://www.youtube.com/watch?v=CUqHeiUHibk',
    bullets: [
      'Iconic harmonica player and singer',
      'Helped define the Chicago amplified harp style',
    ],
  },
]

const BLUES_WHY_IT_MATTERS =
  'Chicago blues emerged in the 1940s–50s when musicians migrated north and electrified the Delta blues sound. The style became a foundation for rock & roll, R&B, and modern blues worldwide.'

const BLUES_BOTTOM_LINE =
  'These artists define the Chicago blues sound with electric guitar, harmonica, and raw emotion, and directly influenced everything from classic rock to modern blues.'

// Interactive markers placed over the clean Chicago photo. Hover a marker to
// see its name; click to open a styled info card. Positions are percentages so
// they track the photo as it scales.
const HOTSPOTS = [
  {
    id: 'blues',
    label: 'Blues',
    pos: { left: '7%', top: '14%' },
    cardTitle: 'The Blues Artist Rap Sheet',
  },
  {
    id: 'history',
    label: 'History',
    pos: { left: '66%', top: '30%' },
    cardTitle: 'History of the Chicago Hot Dog',
    video: 'BDp0VlNApu8',
  },
  {
    id: 'hotdogs',
    label: 'The Blues Brothers',
    pos: { left: '9%', top: '74%' },
    videos: [
      { id: 'qdbrIrFxas0', title: 'Shake a Tail Feather' },
      { id: 'RTXszRHc0qs', title: 'Think' },
      { id: 'RdR6MN2jKYs', title: 'Rawhide' },
    ],
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
        <div className="fixed inset-x-0 top-20 bottom-0 z-[60] flex items-center justify-center bg-black/70 px-4 py-4">
          <div
            className={`relative w-full bg-white border-4 border-black rounded-2xl shadow-2xl ${
              activeSpot.id === 'blues' || activeSpot.videos
                ? 'max-w-lg'
                : activeSpot.video
                ? 'max-w-2xl'
                : 'max-w-md'
            }`}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute -top-3 -right-3 z-10 h-9 w-9 rounded-full bg-tommy-red text-white border-4 border-black font-display text-xl leading-none flex items-center justify-center hover:bg-tommy-red-dark"
            >
              &times;
            </button>
            <div
              className={`p-6 text-center overflow-y-auto ${
                activeSpot.id === 'blues' ? 'max-h-[70vh]' : 'max-h-[calc(100vh-7rem)]'
              }`}
            >
            <h3 className="font-display text-tommy-red text-3xl tracking-wide drop-shadow-[1px_1px_0_rgba(0,0,0,0.2)]">
              {activeSpot.cardTitle || activeSpot.label}
            </h3>

            {activeSpot.id === 'blues' ? (
              <div className="text-left mt-4 space-y-4">
                <ol className="space-y-3 list-decimal list-inside">
                  {BLUES_ARTISTS.map((artist) => (
                    <li key={artist.name} className="font-display text-black text-lg tracking-wide">
                      <a
                        href={artist.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-tommy-red underline hover:text-tommy-red-dark"
                      >
                        {artist.name}
                      </a>
                      <ul className="list-disc list-inside font-body text-black/80 text-base font-normal tracking-normal mt-1 mb-1 space-y-0.5">
                        {artist.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ol>

                <p className="font-body text-black/80 leading-relaxed">
                  {BLUES_WHY_IT_MATTERS} {BLUES_BOTTOM_LINE}
                </p>
              </div>
            ) : activeSpot.video ? (
              <div className="relative w-full overflow-hidden rounded-xl shadow-lg mt-4" style={{ paddingTop: '56.25%' }}>
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${activeSpot.video}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : activeSpot.videos ? (
              <div className="mt-4 space-y-4">
                {activeSpot.videos.map((vid) => (
                  <div key={vid.id}>
                    <h4 className="font-display text-tommy-red text-lg tracking-wide mb-1">{vid.title}</h4>
                    <div className="relative w-full overflow-hidden rounded-xl shadow-lg" style={{ paddingTop: '56.25%' }}>
                      <iframe
                        className="absolute inset-0 h-full w-full"
                        src={`https://www.youtube.com/embed/${vid.id}`}
                        title={vid.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="font-body text-black/80 mt-2 leading-relaxed">{activeSpot.body}</p>
            )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
