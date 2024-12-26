"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Sparkles } from 'lucide-react'

interface GlowingButtonProps {
  href: string
  children: React.ReactNode
}

export function GlowingButton({ href, children }: GlowingButtonProps) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <motion.button
        className="relative px-8 py-4 text-lg font-bold text-white bg-purple-700 rounded-lg overflow-hidden group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        <span className="relative z-10 flex items-center justify-center">
          <Sparkles className="w-5 h-5 mr-2" />
          {children}
        </span>
        <motion.div
          className="absolute inset-0 bg-purple-600"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
          animate={{
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.3 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 blur-sm"
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.button>
    </Link>
  )
}

