import { images } from '../data/images'
import TeamScoreWidget from '../components/TeamScoreWidget'

const TEAMS = [
  { id: 112, name: 'Cubs', city: 'Chicago', emoji: '🐻', accent: '#0e3386' },
  { id: 146, name: 'Marlins', city: 'Miami', emoji: '🐟', accent: '#00a3e0' },
]

export default function Explore() {
  return (
    <div>
      <section
        className="relative bg-cover bg-center min-h-[40vh] flex items-center justify-center text-center"
        style={{ backgroundImage: `url(${images.chicagoSkyline})` }}
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
          At Tommy Dogs we're mixing the vibes of Chicago and Miami culture — the
          deep-dish grit of the Windy City meets the sunshine and salsa of South
          Beach. It shows up in our dogs, our music, and yeah, the teams we root
          for. So whether you bleed Cubbie blue or you're all about that Marlins
          teal, pull up a stool and catch the scores with us.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 max-w-2xl mx-auto">
          {TEAMS.map((team) => (
            <TeamScoreWidget key={team.id} team={team} />
          ))}
        </div>
      </section>
    </div>
  )
}
