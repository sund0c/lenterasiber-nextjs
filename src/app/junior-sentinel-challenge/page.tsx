import Shell from '@/components/layout/Shell'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Junior Sentinel Challenge (JSC)',
  description: 'Kompetisi literasi siber untuk pelajar — Junior Sentinel Challenge.',
}

const tahapanList = [
  { tahap: '01', judul: 'Pendaftaran',      periode: '1 — 31 Juli 2026',        desc: 'Pendaftaran dilakukan di sekolah masing-masing' },
  { tahap: '02', judul: 'Babak Penyisihan', periode: '15 s/d 30 Agustus 2026',  desc: 'CTFd di Kantor Dinas Kominfos Kota/Kabupaten se-Bali' },
  { tahap: '03', judul: 'Literasi Digital', periode: '15 s/d 30 Agustus 2026',  desc: 'Daring untuk seluruh sekolah' },
  { tahap: '04', judul: 'Final',            periode: '1 September 2026',         desc: '9 Pemenang Penyisihan per Kota/Kabupaten' },
]

const topikList = [
  { no: '01', judul: 'Ruang Siber Pemprov Bali',  desc: 'Ekosistem digital dan keamanan siber di lingkungan Pemprov Bali', bg: 'bg-primary-50',  border: 'border-primary-100', num: 'text-primary-600' },
  { no: '02', judul: 'Threat, Phising & Malware', desc: 'Mengenali dan menghadapi ancaman siber umum',                      bg: 'bg-red-50',      border: 'border-red-100',     num: 'text-red-500'     },
  { no: '03', judul: 'Networking & Recon',         desc: 'Dasar jaringan dan teknik pengintaian siber',                      bg: 'bg-blue-50',     border: 'border-blue-100',    num: 'text-blue-500'    },
  { no: '04', judul: 'Server Awareness',           desc: 'Kesadaran keamanan pada infrastruktur server',                    bg: 'bg-purple-50',   border: 'border-purple-100',  num: 'text-purple-500'  },
  { no: '05', judul: 'Log Awareness',              desc: 'Membaca dan menganalisis log sistem',                              bg: 'bg-amber-50',    border: 'border-amber-100',   num: 'text-amber-600'   },
  { no: '06', judul: 'Web Apps Awareness',         desc: 'Keamanan dasar aplikasi berbasis web',                            bg: 'bg-rose-50',     border: 'border-rose-100',    num: 'text-rose-500'    },
]

export default function JSCPage() {
  return (
    <Shell>
      <main className="max-w-6xl mx-auto px-6 py-10">

        {/* ── Hero ─────────────────────────────────────── */}
        <div className="bg-primary-800 rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

            {/* Kiri */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-400 text-amber-900 rounded-full text-xs font-medium mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600 inline-block animate-pulse" />
                Get Ready JSC 2026!
              </div>
              <h1 className="text-3xl font-medium text-white tracking-tight mb-3">
                Junior Sentinel Challenge
              </h1>
              <p className="text-primary-200 text-sm leading-relaxed mb-6 text-white">
                Literasi keamanan informasi dan kompetisi pengetahuan + skill cyber security tingkat SMK.
              </p>

              <div className="border-t border-white/10 mb-5" />

              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2.5 p-3 bg-amber-400/10 border border-amber-400/20 rounded-xl">
                  <span style={{ fontSize: 18 }}>🏆</span>
                  <div className="text-xs font-medium text-amber-300">Gelar Juara I, II & III</div>
                </div>
                <div className="flex items-center gap-2.5 p-3 bg-white/5 border border-white/10 rounded-xl">
                  <span style={{ fontSize: 18 }}>🎖️</span>
                  <div className="text-xs font-medium text-white">Trofi</div>
                </div>
                <div className="flex items-center gap-2.5 p-3 bg-white/5 border border-white/10 rounded-xl">
                  <span style={{ fontSize: 18 }}>💰</span>
                  <div className="text-xs font-medium text-white">Uang tunai</div>
                </div>
                <div className="flex items-center gap-2.5 p-3 bg-white/5 border border-white/10 rounded-xl">
                  <span style={{ fontSize: 18 }}>📜</span>
                  <div className="text-xs font-medium text-white">Piagam penghargaan</div>
                </div>
              </div>
            </div>

            {/* Kanan: YouTube */}
            <div className="aspect-video rounded-xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/SGxrrAD_I6I"
                title="Junior Sentinel Challenge"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

          </div>
        </div>

        {/* ── Topik bahasan ─────────────────────────────── */}
        <div className="mb-8">
          <h2 className="text-base font-medium text-gray-900 mb-4">Topik bahasan</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {topikList.map((t) => (
              <div key={t.no} className={`${t.bg} border ${t.border} rounded-xl p-4 hover:shadow-sm transition-all`}>
                <div className={`text-xs font-medium ${t.num} mb-2`}>{t.no}</div>
                <div className="text-xs font-medium text-gray-800 leading-snug mb-1">{t.judul}</div>
                <div className="text-xs text-gray-400 leading-relaxed">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Tahapan ───────────────────────────────────── */}
        <div className="mb-8">
          <h2 className="text-base font-medium text-gray-900 mb-4">Tahapan kompetisi</h2>
          <div className="flex flex-col gap-3">
            {tahapanList.map((t, i) => (
              <div key={t.tahap}
                className={`flex gap-5 p-5 border rounded-xl transition-colors ${
                  i === 0 ? 'border-primary-200 bg-primary-50/50' : 'border-gray-100 hover:border-primary-100'
                }`}>
                <div className={`text-2xl font-medium w-8 shrink-0 ${i === 0 ? 'text-primary-300' : 'text-gray-100'}`}>
                  {t.tahap}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-medium text-gray-900">{t.judul}</span>
                    <span className="text-xs text-gray-400">{t.periode}</span>
                    {i === 0 && (
                      <span className="text-xs px-2 py-0.5 bg-primary-100 text-primary-700 rounded-full">Dibuka</span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Syarat ────────────────────────────────────── */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
          <h2 className="text-base font-medium text-gray-900 mb-4">Syarat peserta</h2>
          <ul className="flex flex-col gap-2">
            {[
              'Pelajar SMK se-Provinsi Bali',
              '1 Kelompok (3 orang) per SMK',
              'Penyisihan per Kota/Kabupaten',
              'Bersedia hadir di Dinas Kominfos Provinsi Bali apabila lolos ke Final',
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