import Shell from '@/components/layout/Shell'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lentera Siber — Platform Literasi Digital',
  description: 'Ribuan konten literasi berkualitas — komik edukatif, podcast inspiratif, dan kabar terkini.',
}

const featuredKomik = [
  { id: 1, title: 'Petualangan di Alam Semesta', kategori: 'Sains',      episode: 12, rating: '4.8' },
  { id: 2, title: 'Pahlawan Nusantara',          kategori: 'Sejarah',    episode: 8,  rating: '4.9' },
  { id: 3, title: 'Bumi Kita Bersama',           kategori: 'Lingkungan', episode: 5,  rating: '4.7' },
]

const featuredPodcast = [
  { id: 1, title: 'Merawat Tradisi Lokal di Era Digital', kategori: 'Budaya',     episode: 24, durasi: '34 mnt' },
  { id: 2, title: 'Literasi Digital untuk Anak-anak',     kategori: 'Teknologi',  episode: 11, durasi: '28 mnt' },
  { id: 3, title: 'Metode Belajar Efektif untuk Remaja',  kategori: 'Pendidikan', episode: 7,  durasi: '41 mnt' },
]

export default function HomePage() {
  return (
    <Shell>
      <main>

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-50 text-primary-800 rounded-full text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 inline-block" />
            Program Literasi Keamanan Informasi Pemerintah Provinsi Bali
          </div>
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight tracking-tight max-w-2xl mb-5">
            Belajar lebih menyenangkan,<br />
            lewat <span className="text-primary-600">komik & cerita</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-xl mb-8">
            Ribuan konten literasi berkualitas — komik edukatif, podcast inspiratif,
            dan kabar terkini — dalam satu platform.
          </p>
          <div className="flex gap-3">
            <Link href="/komik"
              className="px-5 py-2.5 bg-primary-600 text-primary-50 rounded-lg text-sm hover:bg-primary-800 transition-colors">
              Jelajahi konten
            </Link>
            <Link href="/tentang"
              className="px-5 py-2.5 border border-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-50 transition-colors">
              Tentang kami
            </Link>
          </div>
        </section>

        {/* Komik terbaru */}
        <section className="max-w-6xl mx-auto px-6 py-10 border-t border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Komik terbaru</h2>
            <Link href="/komik" className="text-sm text-primary-600 hover:text-primary-800">
              Lihat semua →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {featuredKomik.map((item) => (
              <Link href={`/komik/${item.id}`} key={item.id}
                className="border border-gray-100 rounded-xl overflow-hidden hover:border-primary-100 transition-colors group">
                <div className="h-32 bg-gray-50 flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-200 group-hover:text-primary-100 transition-colors"
                    fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                </div>
                <div className="p-3">
                  <span className="text-xs text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                    {item.kategori}
                  </span>
                  <div className="text-sm font-medium text-gray-800 mt-2 mb-1">{item.title}</div>
                  <div className="text-xs text-gray-400">Eps. {item.episode} · {item.rating} ★</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Podcast pilihan */}
        <section className="max-w-6xl mx-auto px-6 py-10 border-t border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Podcast pilihan</h2>
            <Link href="/podcast" className="text-sm text-primary-600 hover:text-primary-800">
              Lihat semua →
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            {featuredPodcast.map((item) => (
              <Link href={`/podcast/${item.id}`} key={item.id}
                className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:border-primary-100 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="4" /><path d="M12 2v4M12 18v4" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-800 truncate">{item.title}</div>
                  <div className="text-xs text-gray-400 mt-0.5">
                    Ep. {item.episode} · {item.kategori} · {item.durasi}
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-primary-50" fill="currentColor" viewBox="0 0 24 24">
                    <polygon points="5 3 19 12 5 21" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>
    </Shell>
  )
}