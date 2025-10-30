import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import UploadDropzone from './components/UploadDropzone'
import PrimaryButton from './components/PrimaryButton'
import Footer from './components/Footer'

function App() {
  const [file, setFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)

  const handleFileSelect = (selected) => {
    if (!selected) return
    setFile(selected)
    const url = URL.createObjectURL(selected)
    setPreviewUrl(url)
  }

  const handleRemove = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl)
    setFile(null)
    setPreviewUrl(null)
  }

  const isReady = useMemo(() => !!file, [file])

  const handleGenerate = () => {
    // This is where generation would be triggered.
    // For now, we can simulate a subtle confirmation animation.
    // The actual generation flow will be implemented in subsequent screens.
    alert('Generating photoshoot...')
  }

  return (
    <div className="min-h-screen bg-[#111827] text-slate-200 antialiased selection:bg-indigo-500/20 selection:text-slate-100">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(600px_circle_at_50%_-10%,rgba(99,102,241,0.25),transparent_60%),radial-gradient(500px_circle_at_80%_20%,rgba(139,92,246,0.18),transparent_50%)]" />
      </div>

      <main className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-4 py-16 md:py-24">
        <Hero />

        <div className="mt-10 w-full">
          <UploadDropzone
            file={file}
            previewUrl={previewUrl}
            onFileSelect={handleFileSelect}
            onRemove={handleRemove}
          />

          <div className="mt-6 flex w-full items-center justify-center">
            <AnimatePresence initial={false}>
              <motion.div
                key={isReady ? 'ready' : 'disabled'}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <PrimaryButton disabled={!isReady} onClick={handleGenerate}>
                  Generate Photoshoot
                </PrimaryButton>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
