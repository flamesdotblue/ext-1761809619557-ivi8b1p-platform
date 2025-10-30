import { useRef, useState } from 'react'
import { Image as ImageIcon, Upload, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function UploadDropzone({ file, previewUrl, onFileSelect, onRemove }) {
  const inputRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    const f = e.dataTransfer.files?.[0]
    if (f && f.type.startsWith('image/')) onFileSelect(f)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const onBrowseClick = () => inputRef.current?.click()

  const onChange = (e) => {
    const f = e.target.files?.[0]
    if (f && f.type.startsWith('image/')) onFileSelect(f)
  }

  const sizeInMB = file ? (file.size / (1024 * 1024)).toFixed(2) : null

  return (
    <div className="w-full">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`relative flex min-h-[260px] w-full cursor-pointer items-center justify-center rounded-2xl border-2 border-dashed p-6 transition-all duration-200 ease-out ${
          isDragging
            ? 'border-indigo-400/80 shadow-[0_0_0_3px_rgba(99,102,241,0.25),0_0_30px_rgba(99,102,241,0.35)]'
            : 'border-slate-600/40 hover:border-slate-500/60'
        } bg-gradient-to-b from-slate-800/40 to-slate-900/60 backdrop-blur-sm`}
        onClick={onBrowseClick}
        role="button"
        aria-label="Upload product image"
      >
        {!file ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-center text-center"
          >
            <div className={`mb-4 rounded-xl border ${
                isDragging ? 'border-indigo-500/50 bg-indigo-500/10' : 'border-slate-600/40 bg-slate-800/40'
              } p-4 text-indigo-300 shadow-inner`}>
              <div className="relative">
                <ImageIcon className="h-10 w-10" />
                <div className="absolute -right-2 -top-2 rounded-full bg-indigo-600 p-1 shadow-lg shadow-indigo-600/30">
                  <Upload className="h-3.5 w-3.5 text-indigo-100" />
                </div>
              </div>
            </div>
            <p className="text-sm font-medium text-slate-200 sm:text-base">
              Drag & drop your product image here
            </p>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                onBrowseClick()
              }}
              className="mt-2 text-xs font-medium text-indigo-300 underline-offset-4 hover:text-indigo-200 hover:underline"
            >
              or browse files
            </button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="flex w-full max-w-xl flex-col items-center"
          >
            <div className="relative w-full overflow-hidden rounded-xl border border-slate-700/60 shadow-lg">
              <img
                src={previewUrl}
                alt={file.name}
                className="h-64 w-full object-contain bg-slate-900"
                draggable={false}
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onRemove()
                }}
                aria-label="Remove file"
                className="group absolute right-3 top-3 rounded-full border border-slate-600/60 bg-slate-800/80 p-2 text-slate-300 backdrop-blur hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-300 transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-3 flex w-full items-center justify-between gap-3 text-xs text-slate-300">
              <div className="truncate">
                <span className="font-medium text-slate-200">{file.name}</span>
                <span className="ml-2 text-slate-400">{sizeInMB} MB</span>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onRemove()
                }}
                className="rounded-md px-2 py-1 text-[11px] font-semibold text-slate-200 underline-offset-4 hover:text-indigo-200 hover:underline"
              >
                Change file
              </button>
            </div>
          </motion.div>
        )}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onChange}
        />
      </div>
    </div>
  )
}
