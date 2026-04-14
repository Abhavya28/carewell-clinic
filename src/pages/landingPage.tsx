import Navbar from "../components/navbar"
import Doctor from "../sections/doctor"
import Hero from "../sections/hero"
import Services from "../sections/services"
import WhyChooseUs from "../sections/whyChooseUs"

const LandingPage = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Services />
        <Doctor />
        <WhyChooseUs />
    </div>
  )
}

export default LandingPage