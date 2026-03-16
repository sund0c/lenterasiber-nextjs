import Shell from '@/components/layout/Shell'
import ContactForm from '@/components/ui/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tentang',
  description: 'Mengenal Lentera Siber — platform literasi digital untuk semua kalangan.',
}


const paragraf = [
  {
    judul: 'Pilar Lentera Siber MENYALA PERTAMA – 2021',
    isi: 'Melakukan literasi dengan cara ceramah 1 (satu) arah di kelas seringkali tidak efektif mencapai tujuan yang diinginkan. Untuk itu diperlukan cara-cara yang lebih menarik dan jika dimungkinkan dilakukan dengan cara out of the box. Akhirnya pada Tahun 2021, di bawah kepemimpinan Kepala Dinas Kominfos Prov Bali Gede Pramana, Diskominfos Prov Bali meluncurkan Lentera Siber, sebuah inovasi program literasi keamanan informasi. Inovasi Lentera Siber juga langsung ditetapkan dengan melalui SK Kadis Kominfos. Inovasi dilakukan pada media pembelajaran dan metode pembelajarannya. Calon Pegawai Negeri Sipil (CPNS) di Bidang Persandian Diskominfos Prov Bali an. Wayan Nonik Rahayu pada Tahun 2021 mengangkat Lentera Siber sebagai aktualisasi dalam kegiatan Pelatihan Dasar (latsar) CPNS Prov Bali Angkatan XVI Tahun 2021. Saat itu inovasi menyasar media literasi yang memanfaatkan kanal media sosial untuk melakukan penyebaran berbagai bentuk konten digital seperti banner, comic strip dan webinar . Saat itu sasaran yang diujicobakan adalah seluruh CPNS Pemprov Bali Angkatan XVI Tahun 2021.',
  },
  {
    judul: 'Lentera Siber GOES TO LATSAR – 2022',
    isi: 'Dalam Pelatihan Kepemimpinan Administrator (PKA) Angkatan I Tahun 2022 Pemprov Bali Kepala Bidang Persandian di Diskominfos Prov Bali an. I Putu Sundika, kembali mengangkat Lentera Siber sebagai aksi perubahan. Selain meneruskan media online banner, comic strip dan webinar, terdapat sebuah tambahan kegiatan literasi yaitu ikut berkolaborasi dengan BKPSDM Prov Bali untuk memberikan literasi Digital Safety kepada CPNS Prov Bali. Kegiatan yang bernama Goes To Latsar (GTL) ini memberikan waktu 90 menit kepada tim Lentera Siber untuk memberikan pembekalan langsung kepada CPNS Prov Bali yang sedang melakukan kegiatan Latsar. Dalam kegiatan GTL, peserta diberikan tips-tips praktis terkait pengamanan diri dalam hal menggunakan teknologi untuk menjalankan tugas sehari-hari di instansi masing-masing. Selain itu terdapat inovasi dalam metode pembelajarannya yaitu peserta diberikan contoh nyata insiden keamanan dengan cara melakukan simulasi serangan langsung kepada peserta yang bertujuan untuk lebih menyadarkan peserta bahwa serangan siber sifatnya nyata dan dapat menimpa siapa saja, kapan saja serta dilancarkan oleh siapa saja, kapan saja, dimana saja. Ada 3 (tiga) materi yang diberikan yaitu Password Management, Phising dan Sertifikat Elektronik. Pada Tahun 2022 juga sudah mulai diujicobakan kegiatan dalam bentuk workshop dengan mengujicobakan 9 (sembilan) materi yaitu CIA Triangle, Password Management, Multi Factor Authentication, Phising, Sertifikat Elektronik, BALIPROV-CSIRT, Hoax Buster, Keterbukaan Informasi Publik, UU ITE. Uji coba dilakukan pada 10 orang yang merupakan perwakilan dari 10 perangkat daerah.',
  },
  {
    judul: 'WORSKHOP & PODCAST LENTERA – 2023',
    isi: 'Pada Tahun 2023, setelah berkoordinasi dengan BKPSDM Provinsi Bali, workshop Kesadaran Keamanan Informasi Lentera Siber dapat diakui sebagai produk Corporate University (CorpU) dari Pemprov Bali dimana itu berarti workshop akan dijalankan dengan mekanisme Corpu. Setiap peserta yang telah mengikuti workshop Kesadaran Keamanan Informasi Lentera Siber akan diakui 10 JP. Terdapat 10 (sepuluh) angkatan yang direncanakan di Tahun 2023 dan Tahun 2024. Workshop selama 2 (dua) hari classical ini semakin menebalkan inovasi di metode pembelajaran yaitu simulasi serangan ke peserta dan setiap peserta merekam kondisi akun-akun digital sebelum dan setelah workshop. Podcast Lentera Siber sebenarnya sudah diujicobakan secara monolog di Tahun 2021 pada situs anchor. Tahun 2023 podcast mulai produksi paket dialog audio podcast di situs anchor spotify. Literasi menggunakan podcast adalah bentuk inovasi pada media pembelajaran. Ke depannya pasti akan ada lagi kemasan-kemasan inovatif dari Lentera Siber sehingga literasi Digital Safety semakin efektif untuk seluruh ASN Pemprov Bali dan masyarakat.',
  },
]



export default function TentangPage() {
  return (
    <Shell>
      <main>

        {/* ── Hero: Paragraf kiri, Logo kanan ───────────── */}
        <section className="max-w-6xl mx-auto px-6 pt-14 pb-12 border-b border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

            {/* Kiri: Deskripsi (2/3) */}
            <div className="md:col-span-2 order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-50 text-primary-800 rounded-full text-xs font-medium mb-4">
                Tentang Kami
              </div>
              <h1 className="text-3xl font-medium text-gray-900 tracking-tight leading-tight mb-4">
                Kami percaya literasi<br />
                <span className="text-primary-600">mengubah dunia</span>
              </h1>
              <p className="text-gray-500 text-sm leading-relaxed mb-3">
                Lentera Siber adalah program literasi keamanan informasi dari Pemerintah Provinsi Bali.
Lambangnya menampilkan siluet lentera di dalam bulatan hitam, dengan pangkal lentera berbentuk konektor USB. Bulatan hitam melambangkan dunia siber yang gelap dan penuh risiko—tanpa hati-hati, kita mudah terjatuh. Sinar lentera yang lembut dan menyinari ke segala arah (omnidirectional) merepresentasikan panduan yang menerangi langkah kita di tengah kegelapan digital. Sementara konektor USB mengingatkan bahwa perangkat digital adalah pintu utama kita menjelajahi dunia siber.
Harapannya, dengan Lentera Siber, setiap pengguna teknologi informasi dapat memetik manfaat positif sebanyak-banyaknya—tanpa mengorbankan privasi data pribadi, dan selalu terlindung dari jerat penipuan serta ancaman siber lainnya.
              </p>
              
            </div>

            {/* Kanan: Logo (1/3) */}
            <div className="order-2 flex items-center justify-center md:justify-end">
              <div className="w-52 h-52 md:w-64 md:h-64 rounded-2xl border border-gray-100 bg-gray-50 flex items-center justify-center overflow-hidden">
                <img
                  src="/logolenterasiber.png"
                  alt="Lentera Siber"
                  className="w-44 md:w-56 h-auto object-contain"
                />
              </div>
            </div>

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

{/* Kontak */}
<section id="kontak" className="max-w-6xl mx-auto px-6 py-10">
  <h2 className="text-lg font-medium text-gray-900 mb-2">Hubungi kami</h2>
  <p className="text-sm text-gray-400 mb-6">Ada pertanyaan atau ingin berkolaborasi? Kirim pesan ke kami.</p>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

    {/* Form */}
    <ContactForm />

    {/* Map */}
    <div className="border border-gray-100 rounded-2xl overflow-hidden h-full min-h-80">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.8!2d115.2306535!3d-8.6681696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2408b620773e3%3A0x1fb4a5d3f65e27cd!2sDinas%20Komunikasi%2C%20Informatika%20dan%20Statistik%20Provinsi%20Bali%20(Diskominfos)!5e0!3m2!1sen!2sid!4v1234567890"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '320px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokasi Dinas Kominfos Provinsi Bali"
        className="w-full h-full"
      />
    </div>

  </div>
</section>


      </main>
    </Shell>
  )
}