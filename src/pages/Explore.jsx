import { images } from '../data/images'

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
    </div>
  )
}
