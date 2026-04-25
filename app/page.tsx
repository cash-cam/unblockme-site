import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import ServiceArea from '@/components/ServiceArea'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <Header />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <ServiceArea />
      <Contact />
      <Footer />
    </main>
  )
}
