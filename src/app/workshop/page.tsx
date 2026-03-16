import Shell from '@/components/layout/Shell'
import ShareButton from '@/components/ui/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Workshop Lentera',
  description: 'Workshop dan literasi keamanan informasi untuk ASN Pemerintah Provinsi Bali',
}

const topik = [
  {
    id: 1,
    judul: 'Segitiga CIA',
    deskripsi:
    'Segitiga CIA merupakan unsur-unsur utama yang harus dijaga dalam konsep keamanan informasi. CIA merupakan singkatan dari confidentiality (kerahasiaan), integrity (integritas) dan availability (ketersediaan), yang merepresentasikan tiga karakteristik dari tujuan keamanan informasi.',
    pdf: 'https://s.id/MateriCIA',
  },
  {
    id: 2,
    judul: 'Manajemen Kata Sandi',
    deskripsi:
      'Password merupakan mekanisme keamanan dasar yang terdiri dari huruf, angka dan simbol atau kombinasi dari ketiganya yang digunakan untuk memverifikasi identitas pengguna pada suatu sistem. Password ini menjadi salah satu target yang sangat rentan terkena ancaman keamanan jika tidak di-manage dengan baik.',
    pdf: 'https://s.id/PasswordManagement',
  },
  {
    id: 3,
    judul: 'Phising',
    deskripsi:
    'Phising adalah upaya untuk mendapatkan informasi data seseorang dengan teknik pengelabuan. Data yang menjadi sasaran phising adalah data pribadi (nama, usia, alamat), data akun (username dan password), dan data finansial (informasi kartu kredit, rekening). Informasi data phising yang diperoleh bisa langsung dimanfaatkan untuk menipu korban. Atau, bisa juga dijual ke pihak lain untuk melakukan tindakan tidak bertanggung jawab seperti penyalahgunaan akun. ',
    pdf: 'https://s.id/Materi1Phising',
  },
  {
    id: 4,
    judul: 'Sertifikat Elektronik',
    deskripsi:
    'Sertifikat Elektronik adalah sertifikat yang bersifat elektronik yang memuat tanda tangan elektronik dan identitas yang menunjukkan status subyek hukum dalam transaksi elektronik. Sertifikat elektronik memiliki beberapa kegunaan, yaitu: Otentikasi, yaitu untuk memverifikasi identitas pengguna. Privasi, yaitu untuk memastikan informasi hanya dapat diakses oleh pengguna yang berwenang.',
    pdf: 'https://s.id/MateriSertifikatElektronik',
  },
   {
    id: 5,
    judul: 'Pedoman Keamanan Informasi',
     deskripsi:
      'Pemprov Bali telah menerbitkan Pedoman Keamanan Informasi untuk memastikan seluruh ASN Pemprov Bali dapat menggunakan berbagai teknologi IT dengan aman dan secara tidak langsung ikut menjaga keamanan ruang siber Pemprov Bali.',
    pdf: 'https://s.id/MateriBaliprovCSIRT',
  },
     {
    id: 6,
    judul: 'BALIPROV-CSIRT',
     deskripsi:
      'Dalam rangka menjaga keamanan ruang siber terutama percepatan mitigasi dari sebuah insiden siber, Pemprov Bali telah membentuk BALIPROV-CSIRT dengan tim penghubung di setiap Perangkat Daerah di Pemprov Bali. Tim penghubung ini yang akan berkomunikasi baik teknis maupun non teknis dengan Dinas Kominfos Provinsi Bali dalam hal penanganan insiden.',
    pdf: 'https://s.id/MateriBaliprovCSIRT',
  },
  {
    id: 7,
    judul: 'Pelindungan Data Pribadi',
    deskripsi:
    'Sertifikat Elektronik adalah sertifikat yang bersifat elektronik yang memuat tanda tangan elektronik dan identitas yang menunjukkan status subyek hukum dalam transaksi elektronik. Sertifikat elektronik memiliki beberapa kegunaan, yaitu: Otentikasi, yaitu untuk memverifikasi identitas pengguna. Privasi, yaitu untuk memastikan informasi hanya dapat diakses oleh pengguna yang berwenang.',
    pdf: 'https://s.id/MateriUUPDP',
  }, 
  {
    id: 8,
    judul: 'Keterbukaan Informasi',
    deskripsi:
    'Sertifikat Elektronik adalah sertifikat yang bersifat elektronik yang memuat tanda tangan elektronik dan identitas yang menunjukkan status subyek hukum dalam transaksi elektronik. Sertifikat elektronik memiliki beberapa kegunaan, yaitu: Otentikasi, yaitu untuk memverifikasi identitas pengguna. Privasi, yaitu untuk memastikan informasi hanya dapat diakses oleh pengguna yang berwenang.',
    pdf: 'https://s.id/MateriUUPDP',
  }, 
]

const foto = [
  { src: '/images/workshop-1.jpg', alt: 'Kegiatan workshop Lentera Siber' },
  { src: '/images/workshop-2.jpg', alt: 'Peserta workshop Lentera Siber' },
]

// Ganti dengan ID video YouTube yang sebenarnya
const youtubeId = 'qYsQFxMVeUI'

export default function WorkshopPage() {
  return (
    <Shell>
      <main>

   
{/* ── Hero: Deskripsi + Logo ─────────────────────── */}
<section className="max-w-6xl mx-auto px-6 pt-14 pb-12 border-b border-gray-100">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

    {/* Kiri: Deskripsi (2/3) */}
    <div className="md:col-span-2 order-1">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-50 text-primary-800 rounded-full text-xs font-medium mb-4">
        Program Lentera Siber
      </div>
      <h1 className="text-3xl font-medium text-gray-900 tracking-tight leading-tight mb-4">
        Workshop Lentera Siber
      </h1>
      <p className="text-gray-500 text-sm leading-relaxed">
       Workshop Lentera Siber ini bermaksud meningkatkan kesadaran ASN di lingkungan Pemprov Bali terkait pentingnya keamanan informasi di dunia siber demi mewujudkan keamanan informasi dalam menghadapi perkembangan teknologi informasi di era digital. Workshop Lentera Siber mempunyai tujuan akhir tersedianya ASN di Lingkungan Pemerintah Provinsi Bali yang mempunyai kompetensi digital safety yang baik, menjadi netizen yang cerdas dalam menggunakan internet dan teknologi yang selalu berkembang. Terdapat 6 materi pokok yang diulas dalam workshop ini yaitu Segitiga CIA, Manajemen Kata Sandi, Phising, TTE, BALIPROV-CSIRT dan UU PDP).
              </p>
                                {/* Share button */}
                                <div className="flex items-center gap-2 mb-8 pb-8 border-b border-gray-100">
                                  <span className="text-xs text-gray-400">Bagikan:</span>
                                    <ShareButton title="Workshop Keamanan Siber Lentera Siber" />
                                </div>

    </div>

    {/* Kanan: Logo (1/3) — mobile tampil di bawah */}
    <div className="order-2 flex items-center justify-center md:justify-end">
<div className="w-52 h-52 md:w-64 md:h-64 rounded-2xl border border-gray-100 bg-gray-50 flex items-center justify-center overflow-hidden">
        <img
          src="/logo_workshoplentera.png"
          alt="Lentera Siber"
    className="w-44 md:w-56 h-auto object-contain"
        />
      </div>
    </div>

  </div>
</section>

                {/* ── Video YouTube ─────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-14">
          {/* <h2 className="text-xl font-medium text-gray-900 mb-2">Dukungan Sekretaris Daerah Provinsi Bali</h2>
          <p className="text-sm text-gray-400 mb-8">
            Rekaman sesi workshop tersedia di YouTube Lentera Siber.
          </p> */}
          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-gray-100">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title="Workshop Lentera Siber"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </section>

        {/* ── Topik / Materi Ajar ───────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-14 border-b border-gray-100">
          <h2 className="text-xl font-medium text-gray-900 mb-2">Topik & Bahasan</h2>
          <p className="text-sm text-gray-400 mb-8">
            Berikut merupakan topik dan bahasan dalam workshop. Tidak menutup kemungkinan topik dapat berubah menyesuaikan kebutuhan. Materi berupa PDF dapat diunduh secara gratis. 
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {topik.map((t) => (
              <div
                key={t.id}
                className="border border-gray-100 rounded-2xl p-6 hover:border-primary-100 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                    <span className="text-xs font-medium text-primary-600">
                      {String(t.id).padStart(2, '0')}
                    </span>
                  </div>
                  <a
                    href={t.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 text-gray-500 rounded-lg text-xs hover:border-primary-400 hover:text-primary-600 transition-colors shrink-0"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="9" y1="13" x2="15" y2="13"/>
                      <line x1="9" y1="17" x2="15" y2="17"/>
                    </svg>
                    Unduh PDF
                  </a>
                </div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">{t.judul}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{t.deskripsi}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Paragraf highlight ───────────────────────── */}
<section className="max-w-6xl mx-auto px-6 py-14 border-b border-gray-100">
            <div className="bg-primary-600 rounded-2xl px-8 py-10">
    <p className="text-primary-50 text-sm leading-relaxed">
              Mulai Tahun 2023, Workshop Kesadaran Keamanan Informasi sudah diakui sebagai bagian dari
              Corporate University (CorpU) Pemprov Bali. Hal ini juga menjadikan Workshop Lentera Siber ini
              menjadi program CorpU yang pertama dari Perangkat Daerah. 
              Pelaksanaan workshop bertempat di kantor Dinas Kominfos Prov Bali dan
              pelaksanaannya kali pertama dilaksanakan selama 2 (dua) hari dan diakui sebanyak 10 JP.
    </p>
  </div>
</section>

        {/* ── Foto Kegiatan ─────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-14 border-b border-gray-100">
          {/* <h2 className="text-xl font-medium text-gray-900 mb-2">Dokumentasi kegiatan</h2>
          <p className="text-sm text-gray-400 mb-8">Momen workshop Lentera Siber di berbagai lokasi.</p> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {foto.map((f, i) => (
              <div key={i} className="aspect-video rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
                <img
                  src={f.src}
                  alt={f.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>



      </main>
    </Shell>
  )
}