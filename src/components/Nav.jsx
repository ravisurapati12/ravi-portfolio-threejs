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
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="section py-4 flex items-center justify-between">
        <div className="font-semibold tracking-wide">
          <span className="text-brand-500">Ravi</span> Surapati
        </div>
        <div className="hidden md:flex gap-4">
          {items.map((it) => (
            <button key={it.id} onClick={() => go(it.id)} className="px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 hover:border-brand-600 hover:text-brand-500 transition">
              {it.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
