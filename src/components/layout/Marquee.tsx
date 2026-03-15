import { cache } from 'react'

interface MarqueeItem {
  id: number
  title: string
}

const getMarqueeItems = cache(async (): Promise<MarqueeItem[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/marquee`,
      { next: { revalidate: 300 } }
    )
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
})

const fallback = [
  'Selamat datang di Lentera Siber',
  'Platform literasi keamanan informasi Pemerintah Provinsi Bali',
]

export default async function Marquee() {
  const data = await getMarqueeItems()
  const items = data.length > 0 ? data.map((d) => d.title) : fallback
  const doubled = [...items, ...items]

  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 80s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="bg-primary-800 overflow-hidden py-2.5">
        <div className="marquee-track flex gap-12 w-max">
          {doubled.map((text, i) => (
            <span
              key={i}
              className="text-primary-50 text-xs font-medium whitespace-nowrap flex items-center gap-2"
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}