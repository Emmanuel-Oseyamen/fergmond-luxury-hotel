import Image from "next/image";

const rooms = [
  {
    name: "Deluxe Room",
    price: "₦15,000",
    image: "/rooms/deluxe.webp",
    description:
      "Elegant accommodation featuring a king-size bed, luxury bathroom, and city views.",
    features: ["King Bed", "Free WiFi", "Breakfast"],
  },
  {
    name: "Executive Room",
    price: "₦20,000",
    image: "/rooms/executive.webp",
    description:
      "Spacious executive accommodation designed for business and leisure travelers.",
    features: ["Workspace", "Smart TV", "Room Service"],
  },
  {
    name: "Presidential Suite",
    price: "₦35,000",
    image: "/rooms/presidential.png",
    description:
      "Our most luxurious suite with premium furnishings and exceptional comfort.",
    features: ["Living Area", "VIP Service"],
  },
];

export default function Rooms() {
  return (
    <section
      id="rooms"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-14 text-center">

          <p className="mb-3 uppercase tracking-[6px] text-[#D4A373]">
            Luxury Accommodation
          </p>

          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Signature Rooms & Suites
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-slate-600">
            Designed for comfort, elegance, and unforgettable stays.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-10 lg:grid-cols-3">

          {rooms.map((room, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Image */}
              <div className="relative h-72 overflow-hidden">

                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Price Badge */}
                <div className="absolute right-4 top-4 rounded-full bg-[#D4A373] px-4 py-2 text-sm font-semibold text-black">
                  {room.price}/night
                </div>

              </div>

              {/* Content */}
              <div className="p-8">

                <h3 className="text-2xl font-bold text-slate-900">
                  {room.name}
                </h3>

                <p className="mt-4 leading-relaxed text-slate-600">
                  {room.description}
                </p>

                {/* Features */}
                <div className="mt-6 flex flex-wrap gap-2">

                  {room.features.map((feature, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                    >
                      {feature}
                    </span>
                  ))}

                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="mt-8 block rounded-xl bg-slate-900 py-3 text-center font-semibold text-white transition hover:bg-[#D4A373] hover:text-black"
                >
                  Reserve This Room
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}