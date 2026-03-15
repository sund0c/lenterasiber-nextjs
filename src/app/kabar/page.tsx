import Footer from '@/components/layout/Footer'
import Marquee from '@/components/layout/Marquee'
import Navbar from '@/components/layout/Navbar'
import Pagination from '@/components/ui/Pagination'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kabar Lentera',
  description: 'Berita dan informasi seputar dunia keamanan siber dan sandi',
}

const PER_PAGE = 15

interface Kabar {
  id: number
  title: string
  slug: string
  category: string
  excerpt: string
  cover_image: string | null
  published_date: string
  view_count: number
}

interface ApiResponse {
  data: Kabar[]
  total: number
  last_page: number
  current_page: number
}

async function getKabar(page: number, category?: string): Promise<ApiResponse> {
  const params = new URLSearchParams({
    label: 'KABAR',
    per_page: String(PER_PAGE),
    page: String(page),
  })
  if (category) params.append('category', category)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/content?${params}`,
    { next: { revalidate: 60 } }
  )
  if (!res.ok) throw new Error('Gagal mengambil data kabar')
  return res.json()
}

async function getKategori(): Promise<string[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/content?label=KABAR&per_page=100`,
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

const kategoriColor: Record<string, string> = {
  'TIPS KEAMANAN': 'bg-primary-50 text-primary-800',
  'KEBIJAKAN':     'bg-purple-50 text-purple-700',
  'KOMUNITAS':     'bg-amber-50 text-amber-700',
  'TEKNOLOGI':     'bg-blue-50 text-blue-700',
  'BUDAYA':        'bg-rose-50 text-rose-700',
  'WASPADA':       'bg-red-50 text-red-700',
  'EDUKASI':       'bg-green-50 text-green-700',
  'PROGRAM':       'bg-teal-50 text-teal-700',
  'BERITA':        'bg-gray-100 text-gray-600',
}

function getKategoriStyle(kat: string): string {
  return kategoriColor[kat?.toUpperCase()] ?? 'bg-gray-100 text-gray-600'
}

export default async function KabarPage({
  searchParams,
}: {
  searchParams: { category?: string; page?: string }
}) {
  const currentPage = Number(searchParams.page) || 1

  const [response, kategoriList] = await Promise.all([
    getKabar(currentPage, searchParams.category),
    getKategori(),
  ])

  const kabarList = response.data

  // Featured = item pertama di halaman 1
  const featured = !searchParams.category && currentPage === 1 ? kabarList[0] : null
  const list = featured ? kabarList.slice(1) : kabarList

  return (
    <>
      <Navbar />
      <Marquee />
      <main className="max-w-6xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-medium text-gray-900 tracking-tight mb-2">Kabar Lentera</h1>
          <p className="text-gray-400 text-sm">
            Tulisan sederhana terkait keamanan siber dan sandi untuk memastikan kita semua selalu
            mempunyai kesadaran keamanan di dunia siber. Artikel ini juga disebarkan dengan mekanisme
            newsletter yang ringkas dan informatif. Gratis dan cocok untuk semua kalangan usia
            serta apapun profesi Anda. Security Without You Is Not Complete! #jagaRuangSiber
            #sayaNETizenCerdas!
          </p>
        </div>

        {/* Filter */}
        <div className="flex gap-2 flex-wrap mb-8">
          <Link
            href="/kabar"
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
              href={`/kabar?category=${encodeURIComponent(kat)}`}
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

        
{/* Banner langganan */}
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
        Jangan lewatkan Kabar Lentera terbaru !!
      </div>
      <div className="text-xs text-primary-600 leading-relaxed">
        Langganan newsletter Lentera Siber dan dapatkan informasi literasi siber langsung di inbox kamu.
      </div>
    </div>
  </div>
  
    <a href="https://newsletter.baliprov.go.id/subscription/form"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary-600 text-primary-50 rounded-lg text-xs hover:bg-primary-800 transition-colors shrink-0 whitespace-nowrap"
  >
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,12 2,6"/>
    </svg>
    Langganan sekarang
  </a>
</div>        

        {kabarList.length === 0 ? (
          <div className="text-center py-20 text-gray-400 text-sm">
            Belum ada kabar yang dipublikasikan.
          </div>
        ) : (
          <>
            {/* Featured artikel — halaman 1 tanpa filter */}
            {featured && (
              <Link
                href={`/kabar/${featured.id}`}
                className="block border border-gray-100 rounded-2xl p-6 mb-6 hover:border-primary-100 transition-colors group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getKategoriStyle(featured.category)}`}>
                    {featured.category}
                  </span>
                  <span className="text-xs text-gray-300">·</span>
                  <span className="text-xs text-gray-400">{formatTanggal(featured.published_date)}</span>
                </div>
                <h2 className="text-xl font-medium text-gray-900 leading-snug mb-2 group-hover:text-primary-600 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-1.5 mt-4 text-xs text-primary-600">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                  </svg>
                  Buka dokumen
                </div>
              </Link>
            )}

            {/* List artikel */}
            <div className="flex flex-col divide-y divide-gray-50">
              {list.map((item) => (
                <Link
                  key={item.id}
                  href={`/kabar/${item.id}`}
                  className="flex items-start gap-4 py-4 hover:bg-gray-50 rounded-xl px-3 -mx-3 transition-colors group"
                >
                  {/* PDF icon */}
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="9" y1="13" x2="15" y2="13"/>
                      <line x1="9" y1="17" x2="15" y2="17"/>
                    </svg>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      {item.category && (
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getKategoriStyle(item.category)}`}>
                          {item.category}
                        </span>
                      )}
                      <span className="text-xs text-gray-300">{formatTanggal(item.published_date)}</span>
                    </div>
                    <div className="text-sm font-medium text-gray-800 leading-snug mb-1 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {item.title}
                    </div>
                    <div className="text-xs text-gray-400 line-clamp-1">
                      {item.excerpt}
                    </div>
                  </div>

                  {/* Arrow */}
                  <svg className="w-4 h-4 text-gray-300 shrink-0 mt-1 group-hover:text-primary-400 transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </Link>
              ))}
            </div>
          </>
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