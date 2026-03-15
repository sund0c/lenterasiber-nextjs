import Shell from '@/components/layout/Shell'
import ShareButton from '@/components/ui/ShareButton'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Roadshow',
  description: 'Roadshow literasi siber Lentera Siber ke berbagai daerah di Bali.',
}

export default function RoadshowPage() {
  return (
    <Shell>
      <main>

        {/* ── Paragraf pembuka ──────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 pt-14 pb-12 border-b border-gray-100">
          <div>
            <h1 className="text-3xl font-medium text-gray-900 tracking-tight leading-tight mb-4">
              Roadshow Lentera Siber
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
             Lentera Siber juga mengadakan roadshow ke Perangkat Daerah di Pemprov Bali dan tempat-tempat lainnya yang menginginkan adanya literasi kemanan informasi seprti di sekolah, masyarakat dan tempat lainnya.  Setiap sesi roadshow dirancang sesuai kebutuhan audiens dengan bahasa yang mudah dipahami, diselingi kuis interaktif dan simulasi kasus nyata ancaman siber.

            </p>

            {/* Share */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">Bagikan:</span>
              <ShareButton title="Roadshow Lentera Siber" />
            </div>
          </div>
        </section>

        {/* ── Video + CTA ─────────────────────────────── */}
<section className="max-w-6xl mx-auto px-6 py-14">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

    {/* Video */}
    <div className="flex flex-col gap-3">
        <div className="flex-1 rounded-2xl overflow-hidden border border-gray-100 min-h-64">
        <iframe
          src="https://www.youtube.com/embed/videoseries?list=PLok58Pbnci1rrbeIvJjpygX0uW8t0jIvh"
          title="Roadshow Lentera Siber Playlist"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full min-h-64"
        />
      </div>
    </div>

    {/* CTA */}
            <div className="bg-primary-100 rounded-2xl px-8 py-10 flex flex-col justify-between gap-8">
            
      <div>
                <h2 className="text-lg font-medium text-primary-800 mb-3">
          Ingin Roadshow hadir di tempat Anda?
        </h2>
        <p className="text-primary-600 text-sm leading-relaxed">
          Kami terbuka untuk berkolaborasi dengan sekolah, instansi pemerintah,
          komunitas, dan organisasi masyarakat yang ingin menghadirkan edukasi
          literasi siber bagi anggotanya. Hubungi kami dan kami akan siapkan
          sesi yang sesuai kebutuhan kamu.
        </p>
      </div>
      <Link
        href="/tentang#kontak"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary-700 rounded-lg text-sm font-medium hover:bg-primary-50 transition-colors w-fit"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,12 2,6"/>
        </svg>
        Hubungi kami
      </Link>
    </div>

  </div>
</section>

       

      </main>
    </Shell>
  )
}