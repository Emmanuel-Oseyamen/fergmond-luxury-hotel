"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* TEXT FIRST */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >

          <h2 className="text-3xl font-bold text-black md:text-4xl">
            Welcome to Fergmond Luxury Hotel
          </h2>

          <h3 className="mt-4 text-lg font-medium text-slate-700 md:text-xl">
            A new standard of luxury hospitality
          </h3>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Fergmond Luxury Hotel combines modern elegance,
            exceptional service, and world-class amenities to
            create unforgettable experiences for every guest.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Whether you're visiting for business, leisure,
            celebrations, or relaxation, every detail has been
            designed to provide comfort, sophistication, and
            memorable moments.
          </p>

        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 grid grid-cols-3 gap-6 max-w-3xl"
        >
          <div>
            <h3 className="text-3xl font-bold text-[#8B1E2D]">
              50+
            </h3>
            <p className="text-sm text-slate-600">
              Luxury Rooms
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#8B1E2D]">
              24/7
            </h3>
            <p className="text-sm text-slate-600">
              Concierge Service
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#8B1E2D]">
              5★
            </h3>
            <p className="text-sm text-slate-600">
              Guest Experience
            </p>
          </div>
        </motion.div>

        {/* VIDEO BELOW */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >

          {/* Luxury Showcase Frame */}
          <div className="relative mx-auto max-w-6xl">

            {/* Decorative outer frame */}
            <div className="absolute -inset-4 rounded-[2rem] border border-[#D4A373]/20" />

            {/* Main frame */}
            <div className="relative overflow-hidden rounded-[2rem] border border-[#D4A373]/30 bg-white p-4 shadow-[0_30px_80px_rgba(0,0,0,0.15)]">

              {/* Gold accent line */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#D4A373] via-[#F3D6B2] to-[#D4A373]" />

              {/* Video Container */}
              <div className="relative overflow-hidden rounded-[1.5rem]">

                <video
                  className="h-[500px] w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/about.mp4" type="video/mp4" />
                </video>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/15" />

                {/* Luxury Shine */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent" />

              </div>

            </div>

            {/* Floating label */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-[#D4A373]/30 bg-white px-6 py-2 shadow-lg">
              <span className="text-sm font-medium tracking-[3px] text-[#8B1E2D] uppercase">
                Luxury Experience
              </span>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}