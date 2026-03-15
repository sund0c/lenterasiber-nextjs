import Footer from '@/components/layout/Footer'
import Marquee from '@/components/layout/Marquee'
import Navbar from '@/components/layout/Navbar'
import ShareButton from '@/components/ui/ShareButton'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Komik {
  id: number
  title: string
  ai: string
  slug: string
  episode_number: string
  category: string
  excerpt: string
  content: string | null
  cover_image: string | null
  external_url: string
  published_date: string
  view_count: number
}

async function getKomikDetail(id: string): Promise<Komik | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/content/KOMIK/${id}`,
    { next: { revalidate: 60 } }
  )
  if (res.status === 404) return null
  if (!res.ok) throw new Error('Gagal mengambil data komik')
  return res.json()
}

function formatTanggal(dateStr: string): string {
  const bulan = [
    'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun',
    'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des',
  ]
  const d = new Date(dateStr)
  const tgl = String(d.getDate()).padStart(2, '0')
  const bln = bulan[d.getMonth()]
  const thn = d.getFullYear()
  return `${tgl} ${bln} ${thn}`
}

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const item = await getKomikDetail(params.id)
  if (!item) return { title: 'Komik tidak ditemukan' }
  return {
    title: item.title,
    description: item.excerpt,
  }
}

export default async function KomikDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const item = await getKomikDetail(params.id)
  if (!item) notFound()

  return (
    <>
      <Navbar />
      <Marquee />
      <main className="max-w-4xl mx-auto px-6 py-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/komik" className="hover:text-primary-600">Komik</Link>
          <span>/</span>
          <span className="text-gray-600 truncate max-w-xs">{item.title}</span>
        </div>

        {/* Layout:
            Mobile  → gambar penuh di atas, meta di bawah (flex-col)
            Desktop → gambar 50% kiri, meta kanan (md:flex-row)
        */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-10">

          {/* Gambar 1:1 */}
          <div className="w-full md:w-1/2 shrink-0">
            <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
              {item.cover_image ? (
                <img
                  src={item.cover_image}
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-gray-200" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Meta */}
          <div className="flex-1 flex flex-col justify-center">
            {item.category && (
              <span className="text-xs text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full w-fit mb-3">
                {item.category}
              </span>
            )}
            <h1 className="text-xl md:text-2xl font-medium text-gray-900 tracking-tight leading-snug mb-3">
              {item.title}
            </h1>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              {item.excerpt}
            </p>

            <div className="flex flex-col gap-2 text-xs mb-6">
              {item.episode_number && (
                <div className="flex gap-3">
                  <span className="text-gray-300 w-14 shrink-0">Episode</span>
                  <span className="text-gray-600">{item.episode_number}</span>
                </div>
              )}
              <div className="flex gap-3">
                <span className="text-gray-300 w-14 shrink-0">Tanggal</span>
                <span className="text-gray-600">{formatTanggal(item.published_date)}</span>
              </div>
                            <div className="flex gap-3">
                <span className="text-gray-300 w-14 shrink-0">Gen Ai</span>
                <span className="text-gray-600">{item.ai}</span>
              </div>
              <div className="flex gap-3">
                <span className="text-gray-300 w-14 shrink-0">Dilihat</span>
                <span className="text-gray-600">{item.view_count}x</span>
              </div>
            </div>

            {/* Tombol Lihat di Instagram */}
            {item.external_url && (
              <a
                href={item.external_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 text-gray-600 rounded-lg text-xs hover:border-primary-400 hover:text-primary-600 transition-colors w-fit"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.9.1-3.2 0-3.6 0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12c0-3.2 0-3.6.1-4.8C2.4 3.9 4 2.3 7.2 2.3c1.2-.1 1.6-.1 4.8-.1zM12 0C8.7 0 8.3 0 7.1.1 2.7.3.3 2.7.1 7.1.0 8.3 0 8.7 0 12c0 3.3 0 3.7.1 4.9.2 4.4 2.6 6.8 7 7C8.3 24 8.7 24 12 24c3.3 0 3.7 0 4.9-.1 4.4-.2 6.8-2.6 7-7 .1-1.2.1-1.6.1-4.9 0-3.3 0-3.7-.1-4.9C23.7 2.7 21.3.3 16.9.1 15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>
                </svg>
                Lihat di Instagram
              </a>
            )}

            <div className="flex items-center gap-2 mt-2 mb-8 pb-8 border-b border-gray-100">
              <span className="text-xs text-gray-400">Bagikan:</span>
              <ShareButton title={item.title} />
            </div>

          </div>
        </div>

        {/* Ceritanya */}
        {item.content && (
          <div className="border-t border-gray-100 pt-8">
            <h2 className="text-base font-medium text-gray-800 mb-4">Ringkasan</h2>
            <div
              className="prose prose-sm max-w-none text-gray-500 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </div>
        )}

        {/* Back */}
        <div className="mt-10 pt-8 border-t border-gray-100">
          <Link href="/komik" className="text-sm text-primary-600 hover:text-primary-800 transition-colors">
            ← Kembali ke Komik
          </Link>
        </div>

      </main>
      <Footer />
    </>
  )
}