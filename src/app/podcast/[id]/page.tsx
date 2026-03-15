import Footer from '@/components/layout/Footer'
import Marquee from '@/components/layout/Marquee'
import Navbar from '@/components/layout/Navbar'
import ShareButton from '@/components/ui/ShareButton'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Podcast {
  id: number
  title: string
  slug: string
  episode_number: string
  category: string
  excerpt: string
  cover_image: string | null
  external_url: string
  duration_minutes: number | null
  published_date: string
  view_count: number
}

async function getPodcastDetail(id: string): Promise<Podcast | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/content/PODCAST/${id}`,
    { next: { revalidate: 60 } }
  )
  if (res.status === 404) return null
  if (!res.ok) throw new Error('Gagal mengambil data podcast')
  return res.json()
}

function formatTanggal(dateStr: string): string {
  const bulan = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Ags','Sep','Okt','Nov','Des']
  const d = new Date(dateStr)
  return `${String(d.getDate()).padStart(2,'0')} ${bulan[d.getMonth()]} ${d.getFullYear()}`
}

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const item = await getPodcastDetail(params.id)
  if (!item) return { title: 'Podcast tidak ditemukan' }
  return {
    title: item.title,
    description: item.excerpt,
  }
}

export default async function PodcastDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const item = await getPodcastDetail(params.id)
  if (!item) notFound()

  return (
    <>
      <Navbar />
      <Marquee />
      <main className="max-w-4xl mx-auto px-6 py-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/podcast" className="hover:text-primary-600">Podcast</Link>
          <span>/</span>
          <span className="text-gray-600 truncate max-w-xs">{item.title}</span>
        </div>

        {/* Layout: mobile = col, desktop = row */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-10">

          {/* Cover 1:1 */}
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
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83" />
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
              {item.content}
            </p>

            <div className="flex flex-col gap-2 text-xs mb-6">
              {item.episode_number && (
                <div className="flex gap-3">
                  <span className="text-gray-300 w-16 shrink-0">Episode</span>
                  <span className="text-gray-600">{item.episode_number}</span>
                </div>
              )}
              {item.duration_minutes && (
                <div className="flex gap-3">
                  <span className="text-gray-300 w-16 shrink-0">Durasi</span>
                  <span className="text-gray-600">{item.duration_minutes} menit</span>
                </div>
              )}
              <div className="flex gap-3">
                <span className="text-gray-300 w-16 shrink-0">Tanggal</span>
                <span className="text-gray-600">{formatTanggal(item.published_date)}</span>
              </div>
              <div className="flex gap-3">
                <span className="text-gray-300 w-16 shrink-0">Dilihat</span>
                <span className="text-gray-600">{item.view_count}x</span>
              </div>
            </div>

            {/* Tombol Spotify */}
            {item.external_url && (
              <a
                href={item.external_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1DB954] text-white rounded-lg text-xs hover:bg-[#1aa34a] transition-colors w-fit"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.5 17.3c-.2.3-.6.4-.9.2-2.6-1.6-5.8-1.9-9.6-1-.4.1-.7-.1-.8-.5-.1-.4.1-.7.5-.8 4.1-1 7.7-.6 10.6 1.2.3.2.4.6.2.9zm1.5-3.3c-.3.4-.8.5-1.1.2-2.9-1.8-7.4-2.3-10.8-1.3-.4.1-.9-.1-1-.6-.1-.4.1-.9.6-1 3.9-1.2 8.8-.6 12.1 1.5.3.3.4.8.2 1.2zm.1-3.4C15.6 8.7 9.9 8.5 6.5 9.5c-.5.2-1.1-.1-1.3-.6-.2-.5.1-1.1.6-1.3 3.9-1.2 10.4-1 14.4 1.4.5.3.6.9.4 1.4-.3.4-.9.6-1.5.2z"/>
                </svg>
                Dengarkan di Spotify
              </a>
            )}

<div className="flex items-center gap-2 mt-2 mb-8 pb-8 border-b border-gray-100">
  <span className="text-xs text-gray-400">Bagikan:</span>
  <ShareButton title={item.title} />
</div>


          </div>
        </div>

        {/* Back */}
        <div className="mt-4 pt-8 border-t border-gray-100">
          <Link href="/podcast" className="text-sm text-primary-600 hover:text-primary-800 transition-colors">
            ← Kembali ke Podcast
          </Link>
        </div>

      </main>
      <Footer />
    </>
  )
}