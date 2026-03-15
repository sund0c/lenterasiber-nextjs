import Footer from '@/components/layout/Footer'
import Marquee from '@/components/layout/Marquee'
import Navbar from '@/components/layout/Navbar'
import ShareButton from '@/components/ui/ShareButton'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface Kabar {
  id: number
  title: string
  slug: string
  category: string
  excerpt: string
  content: string | null
  cover_image: string | null
  external_url: string | null
  published_date: string
  view_count: number
}

async function getKabarDetail(id: string): Promise<Kabar | null> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/content/KABAR/${id}`,
    { next: { revalidate: 60 } }
  )
  if (res.status === 404) return null
  if (!res.ok) throw new Error('Gagal mengambil data kabar')
  return res.json()
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

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const item = await getKabarDetail(params.id)
  if (!item) return { title: 'Kabar tidak ditemukan' }
  return {
    title: item.title,
    description: item.excerpt,
  }
}

export default async function KabarDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const item = await getKabarDetail(params.id)
  if (!item) notFound()

  const pdfUrl = item.external_url

  return (
    <>
      <Navbar />
      <Marquee />
      <main className="max-w-3xl mx-auto px-6 py-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/kabar" className="hover:text-primary-600">Kabar</Link>
          <span>/</span>
          <span className="text-gray-600 truncate max-w-xs">{item.title}</span>
        </div>

        {/* Kategori & meta */}
        <div className="flex items-center gap-2 mb-4">
          {item.category && (
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getKategoriStyle(item.category)}`}>
              {item.category}
            </span>
          )}
          <span className="text-xs text-gray-300">·</span>
          <span className="text-xs text-gray-400">{formatTanggal(item.published_date)}</span>
          <span className="text-xs text-gray-300">·</span>
          <span className="text-xs text-gray-400">{item.view_count}x dilihat</span>
        </div>

        {/* Judul */}
        <h1 className="text-2xl md:text-3xl font-medium text-gray-900 tracking-tight leading-snug mb-4">
          {item.title}
        </h1>

        {/* Excerpt */}
        <p className="text-sm text-gray-400 leading-relaxed mb-6">
          {item.excerpt}
        </p>

        {/* Share button */}
        <div className="flex items-center gap-2 mb-8 pb-8 border-b border-gray-100">
          <span className="text-xs text-gray-400">Bagikan:</span>
          <ShareButton title={item.title} />
        </div>

        {/* PDF box */}
        {pdfUrl ? (
          <div className="border border-gray-100 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="9" y1="13" x2="15" y2="13"/>
                <line x1="9" y1="17" x2="15" y2="17"/>
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-800 mb-1 line-clamp-2">{item.title}</div>
              <div className="text-xs text-gray-400">Dokumen PDF · {formatTanggal(item.published_date)}</div>
            </div>
            <div className="flex gap-2 shrink-0">
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary-600 text-primary-50 rounded-lg text-xs hover:bg-primary-800 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Buka PDF
              </a>
              <a
                href={pdfUrl}
                download
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-gray-200 text-gray-600 rounded-lg text-xs hover:border-primary-400 hover:text-primary-600 transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Unduh
              </a>
            </div>
          </div>
        ) : (
          <div className="border border-gray-100 rounded-2xl p-6 text-center text-sm text-gray-400 mb-8">
            Dokumen belum tersedia.
          </div>
        )}

        {/* Konten artikel jika ada */}
        {item.content && (
          <div className="mb-10">
            <div
              className="prose prose-sm max-w-none text-gray-500 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </div>
        )}

        {/* Banner langganan newsletter */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 bg-primary-50 border border-primary-100 rounded-2xl mb-10">
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
                Langganan newsletter dan dapatkan informasi literasi siber langsung di inbox kamu.
              </div>
            </div>
          </div>
          <a
            href="https://newsletter.baliprov.go.id/subscription/form"
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

        {/* Back */}
        <div className="pt-6 border-t border-gray-100">
          <Link href="/kabar" className="text-sm text-primary-600 hover:text-primary-800 transition-colors">
            ← Kembali ke Kabar
          </Link>
        </div>

      </main>
      <Footer />
    </>
  )
}