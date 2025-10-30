import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="w-full text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl"
      >
        <h1 className="text-balance bg-gradient-to-br from-slate-100 to-slate-300 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl">
          Create Stunning Product Photoshoots in Seconds.
        </h1>
        <p className="mt-4 text-pretty text-sm leading-relaxed text-slate-300 sm:text-base">
          Upload a single product photo. Our AI will generate an entire lifestyle photoshoot for your brand, ready for any ad campaign.
        </p>
        <div className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs text-indigo-200 shadow-inner">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Premium AI workflow</span>
        </div>
      </motion.div>
    </section>
  )
}
