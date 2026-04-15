import Navbar from "../components/navbar"
import Book from "../sections/book"
import Doctor from "../sections/doctor"
import Hero from "../sections/hero"
import Services from "../sections/services"
import Testimonials from "../sections/testimonials"
import WhyChooseUs from "../sections/whyChooseUs"

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Services />
        <Doctor />
        <WhyChooseUs />
        <Testimonials />
        <Book />
    </div>
  )
}

export default LandingPage