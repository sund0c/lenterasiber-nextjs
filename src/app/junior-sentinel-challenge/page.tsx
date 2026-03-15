import Shell from '@/components/layout/Shell'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Junior Sentinel Challenge (JSC)',
  description: 'Kompetisi literasi siber untuk pelajar — Junior Sentinel Challenge.',
}

const tahapanList = [
  { tahap: '01', judul: 'Pendaftaran',      periode: '1 — 31 Juli 2024',      desc: 'Daftar secara online, terbuka untuk pelajar SMP dan SMA seluruh Indonesia.' },
  { tahap: '02', judul: 'Seleksi Berkas',   periode: '1 — 7 Agustus 2024',    desc: 'Verifikasi data peserta dan konfirmasi keikutsertaan via email.' },
  { tahap: '03', judul: 'Babak Penyisihan', periode: '15 Agustus 2024',        desc: 'Ujian online berbasis soal literasi siber dan keamanan digital.' },
  { tahap: '04', judul: 'Babak Semi Final', periode: '1 September 2024',       desc: '100 peserta terbaik lanjut ke babak semi final secara daring.' },
  { tahap: '05', judul: 'Grand Final',      periode: '20 September 2024',      desc: 'Top 20 peserta berlomba langsung di Jakarta untuk memperebutkan gelar Junior Sentinel.' },
]

const hadiahList = [
  { posisi: 'Juara I',    hadiah: 'Rp 10.000.000 + Trofi + Beasiswa',  bg: 'bg-amber-50',   border: 'border-amber-200',  text: 'text-amber-800'  },
  { posisi: 'Juara II',   hadiah: 'Rp 7.000.000 + Trofi + Sertifikat', bg: 'bg-gray-50',    border: 'border-gray-200',   text: 'text-gray-600'   },
  { posisi: 'Juara III',  hadiah: 'Rp 5.000.000 + Trofi + Sertifikat', bg: 'bg-rose-50',    border: 'border-rose-200',   text: 'text-rose-700'   },
  { posisi: 'Harapan I',  hadiah: 'Rp 2.000.000 + Sertifikat',         bg: 'bg-primary-50', border: 'border-primary-100',text: 'text-primary-700'},
  { posisi: 'Harapan II', hadiah: 'Rp 1.000.000 + Sertifikat',         bg: 'bg-primary-50', border: 'border-primary-100',text: 'text-primary-700'},
]

export default function JSCPage() {
  return (
       <Shell>
      <main className="max-w-6xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full text-xs font-medium mb-4">
            JSC 2024
          </div>
          <h1 className="text-3xl font-medium text-gray-900 tracking-tight mb-3">
            Junior Sentinel Challenge
          </h1>
          <p className="text-gray-400 text-sm max-w-xl leading-relaxed">
            Kompetisi literasi dan keamanan siber bergengsi untuk pelajar SMP dan SMA
            seluruh Indonesia. Uji kemampuanmu, raih prestasi, dan jadilah
            penjaga siber generasi berikutnya.
          </p>
          <button className="mt-6 px-6 py-2.5 bg-primary-600 text-primary-50 rounded-lg text-sm hover:bg-primary-800 transition-colors">
            Daftar sekarang
          </button>
        </div>

        {/* Hadiah */}
        <h2 className="text-base font-medium text-gray-900 mb-4">Hadiah & penghargaan</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
          {hadiahList.map((h) => (
            <div key={h.posisi} className={`border ${h.border} ${h.bg} rounded-xl p-4 text-center`}>
              <div className={`text-xs font-medium ${h.text} mb-2`}>{h.posisi}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{h.hadiah}</div>
            </div>
          ))}
        </div>

        {/* Tahapan */}
        <h2 className="text-base font-medium text-gray-900 mb-4">Tahapan kompetisi</h2>
        <div className="flex flex-col gap-3">
          {tahapanList.map((t) => (
            <div key={t.tahap}
              className="flex gap-5 p-5 border border-gray-100 rounded-xl hover:border-primary-100 transition-colors">
              <div className="text-2xl font-medium text-gray-100 w-8 shrink-0">{t.tahap}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-sm font-medium text-gray-900">{t.judul}</span>
                  <span className="text-xs text-gray-400">{t.periode}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Syarat */}
        <div className="mt-10 border border-gray-100 rounded-2xl p-6">
          <h2 className="text-base font-medium text-gray-900 mb-4">Syarat peserta</h2>
          <ul className="flex flex-col gap-2">
            {[
              'Pelajar aktif SMP atau SMA/sederajat di seluruh Indonesia',
              'Usia maksimal 18 tahun pada saat pendaftaran',
              'Memiliki akses internet dan perangkat untuk mengikuti babak online',
              'Bersedia hadir di Jakarta apabila lolos ke Grand Final',
              'Belum pernah menjadi juara JSC pada tahun-tahun sebelumnya',
            ].map((s) => (
              <li key={s} className="flex items-start gap-3 text-sm text-gray-500">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0 mt-2" />
                {s}
              </li>
            ))}
          </ul>
        </div>

      </main>
    </Shell>
  )
}