const products = [
  { name: 'Tommy Dogs T-Shirt', price: '24.99', desc: 'Bold red logo tee, 100% cotton.', emoji: '👕', tile: 'bg-tommy-red' },
  { name: 'Snapback Hat', price: '21.99', desc: 'Embroidered "TD" badge logo, adjustable fit.', emoji: '🧢', tile: 'bg-sky-blue' },
  { name: 'Vienna Beef Starter Pack', price: '34.99', desc: 'Take the authentic Chicago Dog home: franks, buns & relish.', emoji: '🌭', tile: 'bg-mustard' },
  { name: 'Tommy Dogs Gift Card', price: '25.00', desc: 'Treat your favorite Chicago Dog fan.', emoji: '🎁', tile: 'bg-black' },
]

export default function Shop() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="font-display text-tommy-red text-5xl text-center mb-2">Shop</h1>
      <p className="text-center text-lg max-w-2xl mx-auto mb-4">
        Rep the only authentic Chicago Dog in Miami with official Tommy Dogs gear and take-home goods.
      </p>
      <p className="text-center text-sm italic text-black/60 mb-12">
        (This section is a placeholder; the brand doc notes SHOP is still TBD. Swap in real
        merchandise, pricing, and an online store/checkout integration before launch.)
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.name} className="border border-tommy-red/20 rounded overflow-hidden flex flex-col">
            <div className={`${product.tile} h-40 flex items-center justify-center text-6xl`} aria-hidden="true">
              {product.emoji}
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h2 className="font-display text-xl uppercase">{product.name}</h2>
              <p className="text-sm text-black/70 flex-1 mt-1">{product.desc}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="font-display text-tommy-red text-2xl">${product.price}</span>
                <button
                  type="button"
                  className="font-display uppercase text-sm bg-tommy-red text-white px-4 py-2 hover:bg-tommy-red-dark transition-colors"
                  disabled
                  title="Online store coming soon"
                >
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
