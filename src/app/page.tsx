import Footer from '@/components/layout/Footer'
import Marquee from '@/components/layout/Marquee'
import Navbar from '@/components/layout/Navbar'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Lentera Siber — Platform Literasi Digital',
  description: 'Ribuan konten literasi berkualitas — komik edukatif, podcast inspiratif, dan kabar terkini.',
}

interface Komik {
  id: number
  title: string
  episode_number: string
  category: string
  excerpt: string
  cover_image: string | null
}

interface Podcast {
  id: number
  title: string
  episode_number: string
  category: string
  excerpt: string
  content: string | null
  duration_minutes: number | null
  published_date: string
  cover_image: string | null
}

async function getLatestKomik(): Promise<Komik[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/content?label=KOMIK&per_page=4`,
      { next: { revalidate: 60 } }
    )
    if (!res.ok) return []
    const data = await res.json()
    return data.data ?? []
  } catch {
    return []
  }
}

async function getLatestPodcast(): Promise<Podcast[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/content?label=PODCAST&per_page=4`,
      { next: { revalidate: 60 } }
    )
    if (!res.ok) return []
    const data = await res.json()
    return data.data ?? []
  } catch {
    return []
  }
}

function formatTanggal(dateStr: string): string {
  const bulan = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Ags','Sep','Okt','Nov','Des']
  const d = new Date(dateStr)
  return `${String(d.getDate()).padStart(2,'0')} ${bulan[d.getMonth()]} ${d.getFullYear()}`
}

export default async function HomePage() {
  const [komikList, podcastList] = await Promise.all([
    getLatestKomik(),
    getLatestPodcast(),
  ])

  return (
    <>
      <Navbar />
      <Marquee />
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

        {/* ── Program Highlight ─────────────────────────── */}
<section className="max-w-6xl mx-auto px-6 py-10 border-t border-gray-100">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

{/* Banner besar JSC */}
<Link href="/junior-sentinel-challenge"
  className="md:col-span-2 relative bg-primary-800 rounded-2xl p-8 overflow-hidden group hover:bg-primary-900 transition-colors"
>
  <div className="grid grid-cols-2 gap-6">

    {/* Kiri: info utama + syarat */}
    <div>
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-400 text-amber-900 rounded-full text-xs font-medium mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-600 inline-block animate-pulse" />
        Securing Tomorrow
      </span>
      <h3 className="text-xl font-medium text-white leading-snug mb-2">
        Junior Sentinel Challenge 2026
      </h3>
      <p className="text-sm leading-relaxed mb-4 text-white">
        Literasi keamanan informasi dan kompetisi pengetahuan + skill cyber security tingkat SMK.
      </p>

      {/* Garis horizontal */}
      <div className="border-t border-white/20 mb-4" />

      <div className="text-xs font-medium text-white uppercase tracking-wide mb-2">
        Syarat peserta
      </div>
      <ul className="flex flex-col gap-1.5 mb-6 text-white">
        {[
          'Pelajar SMK se-Provinsi Bali',
          '1 Kelompok (3 orang) per SMK',
          'Penyisihan per Kota/Kabupaten',
        ].map((s) => (
          <li key={s} className="flex items-start gap-2 text-xs text-primary-200">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0 mt-1" />
            {s}
          </li>
        ))}
      </ul>

                  <div className="inline-flex items-center gap-2 text-sm text-primary-50 font-medium group-hover:gap-3 transition-all">
        Lihat detail
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>

    </div>

    {/* Kanan: hadiah */}
    <div className="flex flex-col justify-between">
      <div>

        <div className="flex flex-col gap-3">
  <div className="flex items-center gap-3 p-3 bg-amber-400/10 border border-amber-400/20 rounded-xl">
    <span style={{ fontSize: 24 }}>🏆</span>
    <div className="text-sm font-medium text-amber-300">Gelar Juara I, II & III</div>
  </div>

  <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl">
    <span style={{ fontSize: 24 }}>🎖️</span>
    <div className="text-sm font-medium text-white">Trofi</div>
  </div>

  <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl">
    <span style={{ fontSize: 24 }}>💰</span>
    <div className="text-sm font-medium text-white">Uang tunai</div>
  </div>

  <div className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl">
    <span style={{ fontSize: 24 }}>📜</span>
    <div>
      <div className="text-sm font-medium text-white">Piagam penghargaan</div>
    </div>
  </div>
</div>
          

         


                            
                   
      </div>
    </div>

  </div>
</Link>

    {/* Card kecil — program lainnya */}
    <div className="flex flex-col gap-4">
      <Link href="/workshop"
        className="flex-1 border border-gray-100 rounded-2xl p-5 hover:border-primary-100 transition-colors group"
      >
        <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center mb-3">
          <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        </div>
        <div className="text-sm font-medium text-gray-800 mb-1 group-hover:text-primary-600 transition-colors">
          Workshop Lentera Siber
        </div>
        <div className="text-xs text-gray-400 leading-relaxed">
          Pelatihan literasi keamanan siber untuk ASN Pemprov Bali
        </div>
      </Link>

      <Link href="/roadshow"
        className="flex-1 border border-gray-100 rounded-2xl p-5 hover:border-primary-100 transition-colors group"
      >
        <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center mb-3">
          <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/>
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </div>
        <div className="text-sm font-medium text-gray-800 mb-1 group-hover:text-primary-600 transition-colors">
          Roadshow Lentera Siber
        </div>
        <div className="text-xs text-gray-400 leading-relaxed">
          Literasi kamsiber ke Perangkat Daerah Pemprov Bali, Sekolah dan tempat lainnya yang membutuhkan
        </div>
      </Link>
    </div>

  </div>
</section>

        {/* Komik terbaru — sama persis dengan komik/page.tsx */}
        <section className="max-w-6xl mx-auto px-6 py-10 border-t border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Komik terbaru</h2>
            <Link href="/komik" className="text-sm text-primary-600 hover:text-primary-800">
              Lihat semua →
            </Link>
          </div>

          {komikList.length === 0 ? (
            <div className="text-sm text-gray-400 py-8 text-center">Belum ada komik.</div>
          ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {komikList.map((item) => (
                <Link
                  key={item.id}
                  href={`/komik/${item.id}`}
                  className="border border-gray-100 rounded-xl overflow-hidden hover:border-primary-100 hover:shadow-sm transition-all group"
                >
                  <div className="relative h-36 bg-gray-50 flex items-center justify-center overflow-hidden">
                    {item.cover_image ? (
                      <img
                        src={item.cover_image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center scale-150 group-hover:scale-[1.6] transition-transform duration-300 origin-center"
                      />
                    ) : (
                      <svg className="w-8 h-8 text-gray-200" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18M9 21V9" />
                      </svg>
                    )}
                    {item.episode_number && (
                      <span className="absolute top-2 left-2 text-xs px-2 py-0.5 rounded-full bg-primary-50 text-primary-800 font-medium">
                        {item.episode_number}
                      </span>
                    )}
                  </div>
                  <div className="p-3">
                    {item.category && (
                      <div className="text-xs text-primary-600 mb-1">{item.category}</div>
                    )}
                    <div className="text-sm font-medium text-gray-800 leading-snug mb-1 line-clamp-2">
                      {item.title}
                    </div>
                    <div className="text-xs text-gray-400 line-clamp-2">{item.excerpt}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Podcast pilihan — sama persis dengan podcast/page.tsx */}
        <section className="max-w-6xl mx-auto px-6 py-10 border-t border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">Podcast Terbaru</h2>
            <Link href="/podcast" className="text-sm text-primary-600 hover:text-primary-800">
              Lihat semua →
            </Link>
          </div>

          {podcastList.length === 0 ? (
            <div className="text-sm text-gray-400 py-8 text-center">Belum ada podcast.</div>
          ) : (
            <div className="flex flex-col gap-3">
              {podcastList.map((item) => (
                <Link
                  key={item.id}
                  href={`/podcast/${item.id}`}
                  className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:border-primary-100 transition-colors group"
                >
                  {/* Cover — sama dengan podcast/page.tsx: w-20 h-20 */}
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-50 shrink-0">
                    {item.cover_image ? (
                      <img
                        src={item.cover_image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="4" />
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {item.episode_number && (
                        <span className="text-xs text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full shrink-0">
                          {item.episode_number}
                        </span>
                      )}
                      {item.category && (
                        <span className="text-xs text-gray-400 truncate">{item.category}</span>
                      )}
                    </div>
                    <div className="text-sm font-medium text-gray-800 truncate mb-1">
                      {item.title}
                    </div>
                    {item.content && (
                      <div className="flex items-center gap-2 mb-1">
                        <svg className="w-3.5 h-3.5 text-primary-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                        </svg>
                        <span className="text-xs text-gray-500 truncate">{item.content}</span>
                      </div>
                    )}
                    <div className="flex gap-3 text-xs text-gray-400">
                      <span>{formatTanggal(item.published_date)}</span>
                      {item.duration_minutes && (
                        <>
                          <span>·</span>
                          <span>{item.duration_minutes} mnt</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Play button */}
                  <div className="w-9 h-9 rounded-full bg-primary-600 flex items-center justify-center shrink-0 group-hover:bg-primary-800 transition-colors">
                    <svg className="w-3.5 h-3.5 text-primary-50 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <polygon points="5 3 19 12 5 21" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

      </main>
      <Footer />
    </>
  )
}