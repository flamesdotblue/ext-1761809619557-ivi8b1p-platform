import { forwardRef } from 'react'
import { Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const PrimaryButton = forwardRef(function PrimaryButton({ children, disabled, onClick }, ref) {
  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : undefined}
      whileTap={!disabled ? { scale: 0.98 } : undefined}
      onClick={onClick}
      ref={ref}
      disabled={disabled}
      className={`group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold tracking-wide transition focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:ring-offset-2 focus:ring-offset-slate-900 ${
        disabled
          ? 'cursor-not-allowed bg-slate-700/60 text-slate-400'
          : 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-900/20 hover:shadow-indigo-900/30'
      }`}
    >
      <span className={`inline-flex h-5 w-5 items-center justify-center rounded-md ${
          disabled ? 'bg-slate-600/70' : 'bg-white/10'
        }`}
      >
        <Sparkles className="h-3.5 w-3.5" />
      </span>
      {children}
    </motion.button>
  )
})

export default PrimaryButton
