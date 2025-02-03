"use client"

import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 py-6 px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-medium">ALDAS</span>
        </div>

        <div className="text-center text-sm">
          <div>FRONTEND DEVELOPER</div>
          <div className="text-xs mt-1">FOLIO / 2021 — 2024</div>
        </div>

        <button className="px-6 py-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition-colors">
          CONTACT
        </button>
      </div>
    </motion.nav>
  )
}

