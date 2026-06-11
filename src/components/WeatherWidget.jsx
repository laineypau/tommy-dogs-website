import { useEffect, useState } from 'react'

// WMO weather codes -> friendly label + emoji (Open-Meteo current weather).
const CODE_MAP = {
  0: { label: 'Clear', emoji: '☀️' },
  1: { label: 'Mostly Sunny', emoji: '🌤️' },
  2: { label: 'Partly Cloudy', emoji: '⛅' },
  3: { label: 'Overcast', emoji: '☁️' },
  45: { label: 'Foggy', emoji: '🌫️' },
  48: { label: 'Foggy', emoji: '🌫️' },
  51: { label: 'Light Drizzle', emoji: '🌦️' },
  53: { label: 'Drizzle', emoji: '🌦️' },
  55: { label: 'Drizzle', emoji: '🌦️' },
  61: { label: 'Light Rain', emoji: '🌧️' },
  63: { label: 'Rain', emoji: '🌧️' },
  65: { label: 'Heavy Rain', emoji: '🌧️' },
  80: { label: 'Showers', emoji: '🌦️' },
  81: { label: 'Showers', emoji: '🌦️' },
  82: { label: 'Heavy Showers', emoji: '⛈️' },
  95: { label: 'Thunderstorm', emoji: '⛈️' },
  96: { label: 'Thunderstorm', emoji: '⛈️' },
  99: { label: 'Thunderstorm', emoji: '⛈️' },
}

const API_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=25.7617&longitude=-80.1918' +
  '&current=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min' +
  '&temperature_unit=fahrenheit&timezone=America%2FNew_York&forecast_days=1'

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const controller = new AbortController()
    fetch(API_URL, { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        const code = data.current?.weather_code ?? 0
        setWeather({
          temp: Math.round(data.current?.temperature_2m),
          high: Math.round(data.daily?.temperature_2m_max?.[0]),
          low: Math.round(data.daily?.temperature_2m_min?.[0]),
          ...(CODE_MAP[code] || { label: 'Miami', emoji: '🌴' }),
        })
      })
      .catch(() => {})
    return () => controller.abort()
  }, [])

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

  return (
    <div className="bg-sky-blue border-4 border-black rounded-2xl shadow-lg px-4 py-3 text-center text-black">
      <p className="font-display text-2xl tracking-wide leading-none">Miami</p>
      <p className="font-body text-xs uppercase tracking-wide text-black/70">{today}</p>
      {weather ? (
        <>
          <p className="text-4xl mt-1 leading-none" aria-hidden="true">{weather.emoji}</p>
          <p className="font-body font-bold text-4xl leading-none mt-1">{weather.temp}&deg;F</p>
          <p className="font-body text-sm font-bold mt-0.5">{weather.label}</p>
          <p className="font-body text-xs mt-1 text-black/70">
            H {weather.high}&deg; &middot; L {weather.low}&deg;
          </p>
        </>
      ) : (
        <p className="font-body text-sm py-4 text-black/70">Loading…</p>
      )}
      <p className="font-display text-mustard text-base leading-tight tracking-wide mt-2 pt-2 border-t border-black/20 drop-shadow-[1px_1px_0_rgba(0,0,0,0.6)]">
        It's a great day for Tommy Dogs!
      </p>
    </div>
  )
}
