import { Link } from 'react-router-dom'
import Starburst from '../components/Starburst'
import { menuItems } from '../data/menu'
import { images } from '../data/images'
import { withSlashSevens } from '../components/SlashSeven'

export default function Menu() {
  return (
    <div>
      {/* Pop-culture / attitude banner */}
      <section
        className="relative bg-cover bg-center text-center -mt-20 pt-48 pb-56 px-4"
        style={{ backgroundImage: `url(${images.think})` }}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10">
          <p className="font-display text-white text-6xl md:text-8xl tracking-wide drop-shadow-[3px_3px_0_rgba(0,0,0,0.6)]">
            YOU BETTER THINK!
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="font-display text-tommy-red text-5xl text-center mb-2">The Menu</h1>
        <p className="font-display text-mustard text-2xl text-center mb-10">Dragged Through the Garden!</p>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Red menu board */}
          <ul className="md:col-span-2 bg-tommy-red border-4 border-black rounded-2xl p-6 sm:p-8 shadow-lg">
            {menuItems.map((item) => (
              <li key={item.name} className="py-1">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-mustard text-2xl uppercase tracking-wide">{item.name}</span>
                  <span className="flex-1 border-b-[3px] border-dotted border-mustard mb-1.5" />
                  <span className="font-display text-mustard text-2xl">${withSlashSevens(item.price)}</span>
                </div>
                {item.notes && (
                  <p className="font-display text-mustard/95 text-base uppercase tracking-wide pl-6 -mt-0.5">
                    {item.notes.replace(/ \+ /g, ' - ')}
                  </p>
                )}
              </li>
            ))}
          </ul>

          {/* Special event pricing badges in the open space */}
          <div className="flex flex-col items-center text-center md:pt-6">
            <Starburst className="w-44 h-44 text-lg uppercase rotate-[-8deg] drop-shadow-lg relative z-10">
              Special Event Pricing!
            </Starburst>
            <Starburst className="w-44 h-44 text-lg uppercase rotate-[7deg] drop-shadow-lg relative z-20 -mt-12 self-end mr-4">
              Veterans Receive 10% Off!
            </Starburst>
            <Link
              to="/catering"
              className="font-display uppercase text-sm bg-tommy-red text-white px-5 py-2 rounded hover:bg-tommy-red-dark transition-colors mt-6"
            >
              Catering &amp; Events
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
