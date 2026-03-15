import Link from 'next/link'

const sosmed = [
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .6 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12c0-3.2 0-3.6.1-4.8C2.4 3.9 4 2.3 7.2 2.3c1.2-.1 1.6-.1 4.8-.1zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1.0 8.3 0 8.7 0 12c0 3.3 0 3.7.1 4.9.2 4.4 2.6 6.8 7 7C8.3 24 8.7 24 12 24c3.3 0 3.7 0 4.9-.1 4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9 0-3.3 0-3.7-.1-4.9C23.7 2.7 21.3.3 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>
      </svg>
    ),
  },
  {
    label: 'Spotify',
    href: 'https://spotify.com',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.5 17.3c-.2.3-.6.4-.9.2-2.6-1.6-5.8-1.9-9.6-1-.4.1-.7-.1-.8-.5-.1-.4.1-.7.5-.8 4.1-1 7.7-.6 10.6 1.2.3.2.4.6.2.9zm1.5-3.3c-.3.4-.8.5-1.1.2-2.9-1.8-7.4-2.3-10.8-1.3-.4.1-.9-.1-1-.6-.1-.4.1-.9.6-1 3.9-1.2 8.8-.6 12.1 1.5.3.3.4.8.2 1.2zm.1-3.4C15.6 8.7 9.9 8.5 6.5 9.5c-.5.2-1.1-.1-1.3-.6-.2-.5.1-1.1.6-1.3 3.9-1.2 10.4-1 14.4 1.4.5.3.6.9.4 1.4-.3.4-.9.6-1.5.2z"/>
      </svg>
    ),
  },
  {
    label: 'Linktree',
    href: 'https://linktr.ee',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.95 4.64L12 .5l4.05 4.14H13.4v5.55h-2.8V4.64H7.95zM16.05 9.4l4.05-4.14L24 9.4h-3.26v5.55h-2.8V9.4h-1.89zM0 5.26l4.05 4.14H5.94v5.55h2.8V9.4H5.26L0 5.26zm10.6 9.88h2.8v8.36h-2.8v-8.36z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:hello@lenterasiber.id',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 7l10 7 10-7"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Kiri — brand + sosmed */}
          <div className="md:col-span-1">
            <div className="text-gray-900 font-medium text-base mb-2">Lentera Siber</div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Platform literasi digital untuk semua kalangan.
            </p>
            <div className="flex items-center gap-3">
              {sosmed.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-100 text-gray-400 hover:text-primary-600 hover:border-primary-200 transition-colors"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Layanan */}
          <div>
            <span className="text-gray-800 font-medium text-sm mb-3 block">Layanan</span>
            <div className="flex flex-col gap-2">
              <Link href="/workshop"       className="text-sm text-gray-400 hover:text-primary-600 transition-colors">Workshop</Link>
              <Link href="/roadshow"       className="text-sm text-gray-400 hover:text-primary-600 transition-colors">Roadshow</Link>
              <Link href="/goes-to-latsar" className="text-sm text-gray-400 hover:text-primary-600 transition-colors">Goes To Latsar</Link>
            </div>
          </div>

          {/* Konten */}
          <div>
            <span className="text-gray-800 font-medium text-sm mb-3 block">Konten</span>
            <div className="flex flex-col gap-2">
              <Link href="/komik"   className="text-sm text-gray-400 hover:text-primary-600 transition-colors">Komik</Link>
              <Link href="/podcast" className="text-sm text-gray-400 hover:text-primary-600 transition-colors">Podcast</Link>
              <Link href="/kabar"   className="text-sm text-gray-400 hover:text-primary-600 transition-colors">Kabar</Link>
            </div>
          </div>

          {/* Info */}
          <div>
            <span className="text-gray-800 font-medium text-sm mb-3 block">Info</span>
            <div className="flex flex-col gap-2">
              <Link href="/tentang"        className="text-sm text-gray-400 hover:text-primary-600 transition-colors">Tentang</Link>
              <Link href="/jsc"            className="text-sm text-gray-400 hover:text-primary-600 transition-colors">JSC</Link>
              <Link href="/tentang#kontak" className="text-sm text-gray-400 hover:text-primary-600 transition-colors">Kontak</Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100 py-4 text-center text-xs text-gray-300">
        © {new Date().getFullYear()} Lentera Siber. Hak cipta dilindungi.
      </div>
    </footer>
  )
}