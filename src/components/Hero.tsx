"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.02 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 8,
          ease: "easeOut",
        }}
      >
        <Image
          src="/hero.png"
          alt="Fergmond Luxury Hotel"
          fill
          priority
          className="object-contain"
          style={{
            filter: "contrast(1.15) saturate(1.15) brightness(0.9)",
          }}
        />
      </motion.div>

      {/* Luxury Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25" />

      {/* Bottom Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-20 md:pb-28">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="max-w-3xl text-white"
        >
          <h1
            className="text-4xl md:text-5xl lg:text-6xl"
            style={{
              textShadow:
                "0 4px 20px rgba(0,0,0,.5), 0 2px 8px rgba(0,0,0,.4)",
            }}
          >
            Welcome!
          </h1>

          <p
            className="mt-3 text-lg text-white/90 md:text-2xl lg:text-3xl"
            style={{
              textShadow: "0 2px 12px rgba(0,0,0,0.5)",
            }}
          >
            to Fergmond Luxury Hotel Obiaruku
          </p>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#8B0015] px-10 py-4 text-base font-semibold uppercase tracking-wider text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-105 hover:bg-[#A3001A]"
            >
              Book Now
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}