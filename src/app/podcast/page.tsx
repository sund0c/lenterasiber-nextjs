import Footer from '@/components/layout/Footer'
import Marquee from '@/components/layout/Marquee'
import Navbar from '@/components/layout/Navbar'
import Pagination from '@/components/ui/Pagination'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Podcast',
  description: 'Dengarkan cerita dan diskusi literasi kapan saja.',
}

const PER_PAGE = 20

interface Podcast {
  id: number
  title: string
  slug: string
  episode_number: string
  category: string
  excerpt: string
  content: string
  cover_image: string | null
  external_url: string
  duration_minutes: number | null
  published_date: string
}

interface ApiResponse {
  data: Podcast[]
  total: number
  last_page: number
  current_page: number
}

async function getPodcast(page: number, category?: string): Promise<ApiResponse> {
  const params = new URLSearchParams({
    label: 'PODCAST',
    per_page: String(PER_PAGE),
    page: String(page),
  })
  if (category) params.append('category', category)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/content?${params}`,
    { next: { revalidate: 60 } }
  )
  if (!res.ok) throw new Error('Gagal mengambil data podcast')
  return res.json()
}

async function getKategori(): Promise<string[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/content?label=PODCAST&per_page=100`,
    { next: { revalidate: 300 } }
  )
  if (!res.ok) return []
  const data: ApiResponse = await res.json()
  const kategori = [...new Set(data.data.map((k) => k.category).filter(Boolean))]
  return kategori
}

function formatTanggal(dateStr: string): string {
  const bulan = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Ags','Sep','Okt','Nov','Des']
  const d = new Date(dateStr)
  return `${String(d.getDate()).padStart(2,'0')} ${bulan[d.getMonth()]} ${d.getFullYear()}`
}

export default async function PodcastPage({
  searchParams,
}: {
  searchParams: { category?: string; page?: string }
}) {
  const currentPage = Number(searchParams.page) || 1

  const [response, kategoriList] = await Promise.all([
    getPodcast(currentPage, searchParams.category),
    getKategori(),
  ])

  const podcastList = response.data

  return (
    <>
      <Navbar />
      <Marquee />
      <main className="max-w-6xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-50 text-primary-800 rounded-full text-xs font-medium mb-4">
        Literasi Digital
      </div>
          <h1 className="text-3xl font-medium text-gray-900 tracking-tight mb-2">Podcast Lentera</h1>
          <p className="text-gray-400 text-sm">
            Obrolan hangat bersama para narasumber terkait keamanan siber dan sandi, membahas isu-isu terkini, tips praktis, dan kisah nyata, semuanya dalam format podcast yang santai dan informatif.
            Gratis dan cocok untuk semua kalangan usia serta apapun profesi Anda. Security Without You Is Not Complete !
            #jagaRuangSiber #sayaNETizenCerdas! 
          </p>
        </div>

        {/* Filter */}
        <div className="flex gap-2 flex-wrap mb-8">
          <Link
            href="/podcast"
            className={`px-4 py-1.5 rounded-full text-xs border transition-colors ${
              !searchParams.category
                ? 'bg-primary-600 text-primary-50 border-primary-600'
                : 'border-gray-200 text-gray-500 hover:border-primary-400 hover:text-primary-600'
            }`}
          >
            Semua
          </Link>
          {kategoriList.map((kat) => (
            <Link
              key={kat}
              href={`/podcast?category=${encodeURIComponent(kat)}`}
              className={`px-4 py-1.5 rounded-full text-xs border transition-colors ${
                searchParams.category === kat
                  ? 'bg-primary-600 text-primary-50 border-primary-600'
                  : 'border-gray-200 text-gray-500 hover:border-primary-400 hover:text-primary-600'
              }`}
            >
              {kat}
            </Link>
          ))}
        </div>


        {/* Banner dengarkan di platform */}
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-primary-50 border border-primary-100 rounded-2xl mb-8">
  <div className="flex items-start gap-3">
    <div className="w-9 h-9 rounded-lg bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
      <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      </svg>
    </div>
    <div>
      <div className="text-sm font-medium text-primary-800 mb-0.5">
        Dengarkan Podcast Lentera
      </div>
      <div className="text-xs text-primary-600 leading-relaxed">
        Tersedia di Spotify dan YouTube. Dengarkan kapan saja, di mana saja.
      </div>
    </div>
  </div>
  <div className="flex gap-2 shrink-0">
    
      <a href="https://open.spotify.com/show/1JlW2ZiElMZeHWl26GMVPn"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1DB954] text-white rounded-lg text-xs hover:bg-[#1aa34a] transition-colors"
    >
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.5 17.3c-.2.3-.6.4-.9.2-2.6-1.6-5.8-1.9-9.6-1-.4.1-.7-.1-.8-.5-.1-.4.1-.7.5-.8 4.1-1 7.7-.6 10.6 1.2.3.2.4.6.2.9zm1.5-3.3c-.3.4-.8.5-1.1.2-2.9-1.8-7.4-2.3-10.8-1.3-.4.1-.9-.1-1-.6-.1-.4.1-.9.6-1 3.9-1.2 8.8-.6 12.1 1.5.3.3.4.8.2 1.2zm.1-3.4C15.6 8.7 9.9 8.5 6.5 9.5c-.5.2-1.1-.1-1.3-.6-.2-.5.1-1.1.6-1.3 3.9-1.2 10.4-1 14.4 1.4.5.3.6.9.4 1.4-.3.4-.9.6-1.5.2z"/>
      </svg>
      Spotify
    </a>
    
      <a href="https://www.youtube.com/@lenterasiber156"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FF0000] text-white rounded-lg text-xs hover:bg-[#cc0000] transition-colors"
    >
      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .6 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z"/>
      </svg>
      YouTube
    </a>
  </div>
</div>

        {/* List */}
        {podcastList.length === 0 ? (
          <div className="text-center py-20 text-gray-400 text-sm">
            Belum ada podcast yang dipublikasikan.
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {podcastList.map((item) => (
              <Link
                key={item.id}
                href={`/podcast/${item.id}`}
                className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:border-primary-100 transition-colors group"
              >
                {/* Cover */}
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

{item.excerpt && (
  <div className="flex items-center gap-2 mb-1">
    <svg className="w-3.5 h-3.5 text-primary-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
    </svg>
    <span className="text-xs text-gray-500 truncate">{item.excerpt}</span>
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

        {/* Pagination */}
        <Pagination
          currentPage={response.current_page}
          lastPage={response.last_page}
          total={response.total}
          perPage={PER_PAGE}
        />

      </main>
      <Footer />
    </>
  )
}
