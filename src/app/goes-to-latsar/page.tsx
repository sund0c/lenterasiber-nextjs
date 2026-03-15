import Shell from '@/components/layout/Shell'
import ShareButton from '@/components/ui/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Goes To Latsar (GTL)',
  description: 'Program Lentera Siber Goes To Latsar — literasi siber untuk CPNS.',
}

const paragraf = [
  {
    judul: 'Pilar Literasi',
    isi: 'Kemkominfo/komdigi mengeluarkan 4 (empat) pilar literasi yaitu Digital Skills, Digital Culture , Digital Ethic dan Digital Safety. Digital Skills memastikan pengguna mempunyai kemampuan untuk menggunakan teknologi digital yang tentunya sangat diperlukan saat ini. Digital Culture akan membuat netizen dapat mengaktualisasi Pancasila dan UU 45 ke dalam kehidupannya di ruang digital. Sedangkan Digital Ethic akan menjaga bahwa seorang pengguna selalu dapat beretika ketika memainkan perannya di dunia internet. Terakhir yang tidak kalah pentingnya adalah Digital Safety yang akan membekali pengguna beberapa pengetahuan sehingga dapat tetap aman di internet.',
  },
  {
    judul: 'Ruang Siber Pemprov Bali',
    isi: 'Pemprov Bali seperti halnya semua pihak yang sudah menerapkan teknologi untuk melakukan efisiensi dan meningkatkan efektifikas kinerjanya, juga tidak tertinggal dalam hal peningkatan layanan publik dan administrasi perkantorannya. Tahun 2020, Pemprov Bali sudah merampungkan Roadmap SPBE dan terus melakukan pengembangan berbagai layanan digital baik untuk internal maupun publik. Pemprov Bali melalui dana BKK ke Kab/Kota se-Bali juga telah memasang Free Wifi Internet di seluruh Bali dengan harapan masyarakat tidak terkendala dalam hal akses internet sehingga baik layanan publik maupun ekonomi kreatif dapat diakses dan tumbuh lebih baik. Banyaknya layanan digital yang diimplementasikan oleh Pemprov Bali tentunya dapat dimanfaatkan oleh pihak-pihak yang tidak bertanggungjawab untuk mengekploitasi dan mengacaukan ruang siber Pemprov Bali. Untuk itu ruang siber Pemprov Bali perlu dijaga oleh seluruh stakeholder yang ada, khususnya seluruh ASN Pemprov Bali baik sebagai pengguna sistem, penerima manfaat maupun oleh instansi yang memang bertugas dalam hal tersebut.',
  },
  {
    judul: 'GTL, Pembekalan Sejak Dini',
    isi: 'Dinas Kominfos Prov Bali sampai saat ini sudah menangani banyak kasus serangan yang menargetkan aset-aset TIK Pemprov Bali. Dari sekian kejadian, kesimpulan penyebab insiden sudah bisa mengerucut bahwa selain sistem/aplikasi yang dibangun masih mempunyai kerentanan, sisi pengguna menjadi sisi yang paling banyak diperkirakan sebagai jalan masuk penyerang. Hal ini menjadi alasan utama kenapa kegiatan literasi khususnya Digital Safety perlu ditingkatkan. GTL akan membekali kesadaran keamanan siber sejak CPNS !',
  },
]

export default function GoesToLatsarPage() {
  return (
    <Shell>
      <main>

        {/* ── Paragraf pembuka ──────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 pt-14 pb-12 border-b border-gray-100">
          <div>
            <h1 className="text-3xl font-medium text-gray-900 tracking-tight leading-tight mb-4">
              Lentera Siber Goes To Latsar
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed">
              Dinas Kominfos Prov Bali bekerjasama dengan BKPSDM Prov Bali menambahkan pengayaan materi pada Smart ASN
              Latsar CPNS Pemerintah Provinsi Bali khususnya Digital Safety. Goes To Latsar (GTL) ini menjadi sangat penting mengingat CPNS ini akan menjadi bagian dari SPBE Provinsi Bali yang artinya juga dapat menjadi pintu masuk serangan dan sebaliknya juga dapat menjadi bagian garda terdepan dalam menjaga ruang siber Pemprov Bali. Materi-materi ini diberikan secara praktek dengan agak dalam mengingat baik kata sandi dan sertifikat elektronik adalah hal yang pasti akan digunakan selama bertugas.            </p>
                  {/* Share button */}
                  <div className="flex items-center gap-2 mb-8 pb-8 border-b border-gray-100">
                    <span className="text-xs text-gray-400">Bagikan:</span>
                      <ShareButton title="Lentera Siber Goes To Latsar" />
                  </div>
          </div>
        </section>

        {/* ── Video YouTube ─────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-14 border-b border-gray-100">
          {/* <h2 className="text-xl font-medium text-gray-900 mb-2">Lihat program GTL</h2>
          <p className="text-sm text-gray-400 mb-8">
            Dokumentasi kegiatan Lentera Siber Goes To Latsar.
          </p> */}
          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-gray-100">
            <iframe
              src="https://www.youtube.com/embed/Tg7lwotMkQg?start=5"
              title="Lentera Siber Goes To Latsar"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </section>

        {/* ── Paragraf konten ───────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-14">
          <div className="flex flex-col gap-8">
            {paragraf.map((p, i) => (
              p.highlight ? (
                <div key={i} className="bg-primary-600 rounded-2xl px-8 py-8">
                  <h3 className="text-base font-medium text-primary-50 mb-3">{p.judul}</h3>
                  <p className="text-primary-100 text-sm leading-relaxed">{p.isi}</p>
                </div>
              ) : (
                <div key={i}>
                  <h3 className="text-base font-medium text-gray-900 mb-2">{p.judul}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.isi}</p>
                </div>
              )
            ))}
          </div>
        </section>

      </main>
    </Shell>
  )
}