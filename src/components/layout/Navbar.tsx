'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const mainLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/junior-sentinel-challenge',    label: 'JSC'     },
  { href: '/komik',  label: 'Komik'   },
  { href: '/podcast',label: 'Podcast' },
  { href: '/kabar',  label: 'Kabar'   },
  { href: '/tentang',label: 'Tentang' },
]

const layananLinks = [
  { href: '/workshop',       label: 'Workshop',        desc: 'Program literasi ASN Pemprov Bali'    },
  { href: '/roadshow',       label: 'Roadshow',        desc: 'Kunjungan literasi Lentera Siber' },
  { href: '/goes-to-latsar', label: 'Goes To Latsar',  desc: 'Latsar CPNS Pemprov Bali'     },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const isLayananActive = layananLinks.some(l => pathname === l.href)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<Link href="/" className="flex items-center gap-2 shrink-0">
  <img src="/logolenterasiber.png" alt="Lentera Siber" className="h-8 w-auto" />
  <span className="text-gray-900 font-medium text-lg tracking-tight">
    Lentera Siber
  </span>
</Link>

        <div className="hidden md:flex items-center gap-6">

  {/* Beranda */}
  <Link
    href="/"
    className={cn(
      'text-sm transition-colors',
      pathname === '/'
        ? 'text-primary-600 font-medium'
        : 'text-gray-500 hover:text-gray-800'
    )}
  >
    Beranda
  </Link>

  {/* Layanan dropdown */}
  <div
    className="relative"
    onMouseEnter={() => setOpen(true)}
    onMouseLeave={() => setOpen(false)}
  >
    <button
      className={cn(
        'flex items-center gap-1 text-sm transition-colors',
        isLayananActive
          ? 'text-primary-600 font-medium'
          : 'text-gray-500 hover:text-gray-800'
      )}
    >
      Layanan
      <svg
        className={cn('w-3.5 h-3.5 transition-transform', open && 'rotate-180')}
        fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>

    {open && (
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-2 w-64">
          {layananLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                'flex flex-col gap-0.5 px-4 py-3 rounded-xl transition-colors',
                pathname === l.href ? 'bg-primary-50' : 'hover:bg-gray-50'
              )}
            >
              <span className={cn(
                'text-sm font-medium',
                pathname === l.href ? 'text-primary-600' : 'text-gray-800'
              )}>
                {l.label}
              </span>
              <span className="text-xs text-gray-400">{l.desc}</span>
            </Link>
          ))}
        </div>
      </div>
    )}
  </div>

  {/* Sisa menu */}
  {mainLinks.slice(1).map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={cn(
        'text-sm transition-colors',
        pathname === link.href
          ? 'text-primary-600 font-medium'
          : 'text-gray-500 hover:text-gray-800'
      )}
    >
      {link.label}
    </Link>
  ))}

</div>

        <Link
          href="/tentang#kontak"
          className="text-sm px-4 py-2 bg-primary-600 text-primary-50 rounded-full hover:bg-primary-800 transition-colors shrink-0"
        >
          Hubungi Kami
        </Link>

      </div>
    </nav>
  )
}