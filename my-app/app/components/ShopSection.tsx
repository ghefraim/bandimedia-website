import { LiquidGlassButton } from "./LiquidGlassButton";

const products = [
  {
    title: "Bandi Presets Pro",
    description: "20 de presetări care oferă oricărei fotografii un aspect original și stilizat",
    price: "$14.99",
    image: "/presets1.png",
  },
  {
    title: "Nu aparținem Zonei de Confort",
    description: "Poartă viziunea noastră prin linia noastră vestimentară premium.",
    price: "$24.99",
    image: "/Tshirt1.png",
  },
];

export default function ShopSection() {
  return (
    <section id="shop" className="py-10 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-medium mb-2">
        Cumpără și poartă viziunea noastră
      </h2>
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Bandi Media Shop</h1>

      <div className="flex flex-wrap justify-center items-stretch gap-10 max-w-6xl mx-auto">
        {products.map(({ title, description, price, image }, idx) => (
          <div
            key={idx}
            className="relative flex-grow basis-[240px] max-w-[720px] min-w-[300px]"
          >
            <div className="absolute inset-0 -translate-x-3 translate-y-3 bg-[#65C18C] rounded-2xl z-0"></div>

            <div className="relative bg-white text-black p-4 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 z-10 min-h-[280px] h-full">
              <div className="flex flex-col items-start text-left max-w-md">
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-sm mb-4">{description}</p>
                <p className="text-xl font-bold mb-4">{price}</p>
                <LiquidGlassButton variant="primary">Buy</LiquidGlassButton>
              </div>
              <img
                src={image}
                alt={title}
                className="w-32 md:w-70 object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <a
          href="#"
          className="inline-flex items-center px-6 py-3 border border-green-300 text-green-300 rounded-lg hover:bg-green-900 hover:text-white transition-colors"
        >
          View All Products →
        </a>
      </div>
    </section>
  );
}