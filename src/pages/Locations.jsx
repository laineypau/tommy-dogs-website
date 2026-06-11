const INSTAGRAM_URL = 'https://www.instagram.com/tommydogsmiami'

const locations = [
  { street: '19400 SW 106th Ave', city: 'Miami, FL' },
  { street: '15680 SW 127th Ave', city: 'Miami, FL' },
  { street: '18506 SW 104th Ave', city: 'Miami, FL' },
]

const mapSrc = (loc) =>
  `https://www.google.com/maps?q=${encodeURIComponent(`${loc.street}, ${loc.city}`)}&output=embed`

const directionsHref = (loc) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${loc.street}, ${loc.city}`)}`

export default function Locations() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="font-display text-tommy-red text-5xl text-center mb-2">Find Us in Miami</h1>
      <p className="text-center text-lg max-w-2xl mx-auto mb-8">
        Tommy Dogs is a <span className="font-semibold">pop-up cart</span>, not a daily storefront. We
        pop up <span className="font-semibold">Thursday, Friday, and Saturday</span>, rotating between
        the three Miami spots below, so we're not at all of them every day.
      </p>

      {/* Instagram callout — where are we today */}
      <div className="bg-sky-blue border-4 border-black rounded-2xl shadow-lg p-6 text-center max-w-3xl mx-auto mb-14">
        <p className="font-display text-tommy-red text-3xl tracking-wide mb-2">Where are we today?</p>
        <p className="text-black/80 mb-4">
          We post our next pop-up spot on Instagram, so check before you head out to see which of these
          three locations we're at!
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-block font-display uppercase tracking-wide bg-tommy-red text-white px-6 py-3 rounded hover:bg-tommy-red-dark transition-colors"
        >
          📸 Follow @tommydogsmiami
        </a>
      </div>

      {/* Three pinned Google Maps */}
      <div className="grid md:grid-cols-3 gap-8">
        {locations.map((loc) => (
          <div
            key={loc.street}
            className="border-4 border-sky-blue rounded-2xl overflow-hidden flex flex-col shadow-lg"
          >
            <iframe
              title={`Map of ${loc.street}, ${loc.city}`}
              className="w-full h-64 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={mapSrc(loc)}
            />
            <div className="p-5 text-center flex flex-col items-center flex-1">
              <span className="font-display text-mustard text-sm uppercase tracking-wide bg-tommy-red rounded-full px-3 py-1 mb-2">
                Pop-Up Spot
              </span>
              <h3 className="font-display text-tommy-red text-2xl uppercase tracking-wide">{loc.street}</h3>
              <p className="text-black/70 flex-1">{loc.city}</p>
              <a
                href={directionsHref(loc)}
                target="_blank"
                rel="noreferrer"
                className="mt-4 font-display uppercase text-sm bg-tommy-red text-white px-5 py-2 rounded hover:bg-tommy-red-dark transition-colors"
              >
                🗺️ Get Directions
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-lg mt-12">
        Not sure where we are right now? Always check{' '}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="font-display text-tommy-red tracking-wide hover:underline"
        >
          @tommydogsmiami
        </a>{' '}
        for our latest pop-up location!
      </p>
    </div>
  )
}
