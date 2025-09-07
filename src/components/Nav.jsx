import React from 'react'

export default function Nav() {
  const items = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]

  const go = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-sky-200">
      <div className="section py-4 flex items-center justify-between">
        <div className="font-semibold tracking-wide text-sky-700">
          <span className="text-sky-500">Ravi</span> Surapati
        </div>
        <div className="hidden md:flex gap-4">
          {items.map((it) => (
            <button
              key={it.id}
              onClick={() => go(it.id)}
              className="px-3 py-1 rounded-full bg-white border border-sky-300 text-sky-600 hover:bg-sky-50 transition"
            >
              {it.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
