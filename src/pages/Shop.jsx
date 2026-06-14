const products = [
  { name: 'Tommy Dogs T-Shirt', price: '24.99', desc: 'Now available to buy in-person! Online purchase coming soon.', emoji: '👕', tile: 'bg-tommy-red' },
]

export default function Shop() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="font-display text-tommy-red text-5xl text-center mb-2">Shop</h1>
      <p className="text-center text-lg max-w-2xl mx-auto mb-12">
        Rep the only authentic Chicago Dog in Miami with official Tommy Dogs gear!
      </p>

      <div className="max-w-sm mx-auto">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
