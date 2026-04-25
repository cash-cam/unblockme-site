import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import WhyChooseUs from '@/components/WhyChooseUs'
import ServiceArea from '@/components/ServiceArea'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
      <WhyChooseUs />
      <ServiceArea />
      <Footer />
    </main>
  )
}
