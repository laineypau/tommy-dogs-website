import { useEffect, useRef } from 'react'

// Height (px) of JotForm's bottom "Create your own Jotform" promo strip, which we
// crop off with an overflow-hidden wrapper.
const FOOTER_CLIP = 72

export default function Catering() {
  const iframeRef = useRef(null)
  const wrapRef = useRef(null)

  // Listen for JotForm's auto-resize messages so the embed grows to fit every
  // question (no inner scrollbar), then clip the promo strip off the bottom.
  useEffect(() => {
    function handleMessage(e) {
      if (typeof e.origin === 'string' && !e.origin.includes('jotform')) return
      if (typeof e.data !== 'string' || !e.data.startsWith('setHeight')) return
      const height = parseInt(e.data.split(':')[1], 10)
      if (!height || !iframeRef.current || !wrapRef.current) return
      iframeRef.current.style.height = `${height}px`
      wrapRef.current.style.height = `${Math.max(height - FOOTER_CLIP, 0)}px`
    }
    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="font-display text-tommy-red text-5xl text-center mb-2">Catering &amp; Special Events</h1>
      <p className="text-center text-lg max-w-2xl mx-auto mb-12">
        Bring the only authentic Chicago Dog in Miami to your next party, office lunch, or big game
        watch. Tommy Dogs will treat your guests like family.
      </p>

      {/* Inquiry form (JotForm embed). Auto-resizes to fit all questions; the
          overflow-hidden wrapper crops JotForm's bottom promo strip. */}
      <div ref={wrapRef} className="overflow-hidden" style={{ height: '900px' }}>
        <iframe
          ref={iframeRef}
          title="Tommy Dogs catering inquiry form"
          src="https://form.jotform.com/261444674154156"
          className="w-full border-0 block"
          style={{ height: '972px' }}
          scrolling="no"
          allow="geolocation; microphone; camera; fullscreen"
        />
      </div>
    </div>
  )
}
