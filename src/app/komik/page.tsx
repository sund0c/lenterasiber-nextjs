import Footer from '@/components/layout/Footer'
import Marquee from '@/components/layout/Marquee'
import Navbar from '@/components/layout/Navbar'
import Pagination from '@/components/ui/Pagination'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Komik',
  description: 'Cerita bergambar edukatif untuk semua usia.',
}

const PER_PAGE = 24

interface Komik {
  id: number
  title: string
  slug: string
  episode_number: string
  category: string
  excerpt: string
  cover_image: string | null
  external_url: string
  published_date: string
}

interface ApiResponse {
  data: Komik[]
  total: number
  last_page: number
  current_page: number
}

async function getKomik(page: number, category?: string): Promise<ApiResponse> {
  const params = new URLSearchParams({
    label: 'KOMIK',
    per_page: String(PER_PAGE),
    page: String(page),
  })
  if (category) params.append('category', category)

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/content?${params}`,
    { next: { revalidate: 60 } }
  )
  if (!res.ok) throw new Error('Gagal mengambil data komik')
  return res.json()
}

async function getKategori(): Promise<string[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/content?label=KOMIK&per_page=100`,
    { next: { revalidate: 300 } }
  )
  if (!res.ok) return []
  const data: ApiResponse = await res.json()
  const kategori = [...new Set(data.data.map((k) => k.category).filter(Boolean))]
  return kategori
}

export default async function KomikPage({
  searchParams,
}: {
  searchParams: { category?: string; page?: string }
}) {
  const currentPage = Number(searchParams.page) || 1

  const [response, kategoriList] = await Promise.all([
    getKomik(currentPage, searchParams.category),
    getKategori(),
  ])

  const komikList = response.data

  return (
    <>
      <Navbar />
      <Marquee />
      <main className="max-w-6xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-medium text-gray-900 tracking-tight mb-2">Komik Lentera</h1>
          <p className="text-gray-400 text-sm">
              Ilustrasi menarik dalam lanskap keamanan siber dan sandi untuk menyajikan isu-isu terkini,
            tips praktis dan kisah nyata menjadi visual yang mudah dicerna dan seru dibaca.
            Ilustrasi dibuat memanfaatkan berbagai tools AiGen. 
            Komik Lentera gratis dan cocok untuk semua kalangan usia serta apapun profesi Anda.
            Security Without You Is Not Complete! #jagaRuangSiber #sayaNETizenCerdas!
          </p>
        </div>

        {/* Filter kategori */}
        <div className="flex gap-2 flex-wrap mb-8">
          <Link
            href="/komik"
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
              href={`/komik?category=${encodeURIComponent(kat)}`}
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
        Ikuti terus Komik Lentera
      </div>
      <div className="text-xs text-primary-600 leading-relaxed">
        Baca Komik Lentera di Instagram. Jangan lupa follow dan share
      </div>
    </div>
  </div>
  
 <a href="https://www.instagram.com/lenterasiber"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white rounded-lg text-xs hover:opacity-90 transition-opacity shrink-0 whitespace-nowrap"
>
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12c0-3.2 0-3.6.1-4.8C2.4 3.9 4 2.3 7.2 2.3c1.2-.1 1.6-.1 4.8-.1zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1.0 8.3 0 8.7 0 12c0 3.3 0 3.7.1 4.9.2 4.4 2.6 6.8 7 7C8.3 24 8.7 24 12 24c3.3 0 3.7 0 4.9-.1 4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9 0-3.3 0-3.7-.1-4.9C23.7 2.7 21.3.3 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>
  </svg>
  Follow di Instagram
</a>
        </div>   
        

        {/* Grid */}
        {komikList.length === 0 ? (
          <div className="text-center py-20 text-gray-400 text-sm">
            Belum ada komik yang dipublikasikan.
          </div>
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