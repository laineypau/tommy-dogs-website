import CtaButton from '../components/CtaButton'
import Logo from '../components/Logo'
import WeatherWidget from '../components/WeatherWidget'
import { images } from '../data/images'
import { menuItems } from '../data/menu'

const ingredients = [
  'Vienna all beef hot dog',
  'Vienna steamed poppy seed bun',
  'Classic yellow mustard',
  'Fresh chopped onions',
  'Neon green Chicago relish',
  'Freshly sliced tomatoes',
  'Sport peppers',
  'Dill pickle spears',
  'and finally... Celery salt!',
]

export default function Home() {
  return (
    <div>
      {/* Hero: Miami Beach aerial; fills the viewport with the photo's bottom anchored */}
      <section className="relative h-svh min-h-[420px] -mt-20 overflow-hidden">
        <img
          src={images.heroMiamiBeach}
          alt="Tommy Dogs Chicago Style Hot Dogs, the only authentic Chicago dog in Miami"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />
        {/* Miami weather widget, upper-right */}
        <div className="absolute top-24 right-3 sm:right-4 z-20 w-24 sm:w-52">
          <WeatherWidget />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 pt-20 translate-y-16 sm:-translate-y-12 text-center">
          <Logo className="h-64 md:h-96 drop-shadow-[3px_3px_0_rgba(0,0,0,0.5)]" />
          <p
            className="font-display text-3xl md:text-5xl tracking-wide -mt-1 md:-mt-3"
            style={{
              color: '#cc0000',
              WebkitTextStroke: '0.08em #000',
              paintOrder: 'stroke fill',
            }}
          >
            Chicago Style Hot Dogs
          </p>
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pt-20 pb-20 px-4 text-center">
          <div className="mt-3 md:mt-4">
            <CtaButton to="/menu">View Menu</CtaButton>
          </div>
        </div>
      </section>

      {/* Product spotlight */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src={images.hotDogTray}
          alt="Three Chicago style Tommy Dogs, dragged through the garden, on a tray"
          className="w-full rounded shadow-lg"
        />
        <div className="text-left">
          <h2 className="font-display text-tommy-red text-4xl mb-4">No Better Dog Than a Tommy Dog!</h2>
          <p className="text-lg leading-relaxed">
            Tommy Dogs serves the best hot dog you can get in Miami! With an all-beef Vienna sausage on a
            steamed poppy seed bun, this Authentic Chicago Style hot dog is "dragged through the garden"
            with all the proper ingredients you expect on a true classic, Chicago Dog!
          </p>
          <div className="mt-6">
            <CtaButton to="/menu">See the Full Menu</CtaButton>
          </div>
        </div>
      </section>

      {/* Commitment strip */}
      <section
        className="relative bg-cover bg-center text-white flex items-center justify-center min-h-[70vh] md:aspect-[1366/768] md:min-h-0"
        style={{ backgroundImage: `url(${images.commitment})` }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 py-16 text-center">
          <h2 className="font-display text-mustard text-4xl mb-4">Our Commitment to You</h2>
          <p className="text-lg leading-relaxed text-white/90">
            Tommy Dogs will serve the best Chicago Style Hot Dog in the greater Miami area and we will
            treat our customers like family! We use only the finest ingredients and construct every Tommy
            Dog with consistency and care. Tommy Dogs partners exclusively with Vienna Beef for our franks
            and poppyseed buns.
          </p>
        </div>
      </section>

      {/* Menu preview */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="font-display text-tommy-red text-4xl text-center mb-8">From the Menu</h2>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-3">
          {menuItems.slice(0, 6).map((item) => (
            <div key={item.name} className="price-row">
              <span className="font-semibold">{item.name}</span>
              <span className="leader" />
              <span className="font-display text-tommy-red text-xl">${item.price}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <CtaButton to="/menu">View Full Menu</CtaButton>
        </div>
      </section>

      {/* What sets us apart */}
      <section
        className="relative bg-cover bg-center py-20"
        style={{ backgroundImage: `url(${images.guitarsWall})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 text-white">
          <div>
            <h3 className="font-display text-mustard text-3xl mb-3">Highest Quality Ingredients</h3>
            <p className="mb-3">Tommy Dogs serves only the classic toppings of an Authentic Chicago Dog:</p>
            <ul className="space-y-1 list-disc list-inside text-white/90">
              {ingredients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-mustard text-3xl mb-3">Meticulous Construction</h3>
            <p className="text-white/90 leading-relaxed">
              We build Tommy Dogs <em>exactly</em> the same way every time, delivering the consistent
              experience our customers expect every time they order their Tommy Dogs!
            </p>
          </div>
        </div>
      </section>

      {/* Special event pricing callout */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="font-display text-tommy-red text-4xl mb-3">Catering &amp; Special Events</h2>
        <p className="text-lg leading-relaxed">
          Bringing the authentic Chicago Dog experience to your next event in Miami. Veterans always
          receive 10% off every order.
        </p>
        <div className="mt-6">
          <CtaButton to="/catering">Get Catering Pricing</CtaButton>
        </div>
      </section>
    </div>
  )
}
