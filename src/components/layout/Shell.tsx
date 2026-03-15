import Footer from './Footer'
import Marquee from './Marquee'
import Navbar from './Navbar'

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Marquee />
      {children}
      <Footer />
    </>
  )
}