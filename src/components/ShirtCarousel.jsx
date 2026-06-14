import { useEffect, useState } from 'react'
import { tshirtPhotos } from '../data/images'

export default function ShirtCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % tshirtPhotos.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative aspect-[3/4] bg-tommy-red overflow-hidden">
      {tshirtPhotos.map((src, i) => (
        <img
          key={src}
          src={src}
          alt="Tommy Dogs T-Shirt"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {tshirtPhotos.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full border border-black/30 transition-colors ${
              i === index ? 'bg-tommy-red' : 'bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
