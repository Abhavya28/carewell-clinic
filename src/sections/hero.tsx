import { Calendar, Phone, Sparkles } from "lucide-react"
import { Button } from "../components/ui/button"

const Hero = () => {
    return (
        <section className="px-4 sm:px-6 md:px-10 py-12 md:py-20 font-body">
            <div className="grid md:grid-cols-2 gap-10 items-center">

                <div className="flex flex-col gap-6 text-darkText">

                    <div className="bg-[#E2F3F3] rounded-2xl text-[#16b8a8] px-4 py-2 flex gap-2 w-fit justify-center items-center">
                        <Sparkles size={16} />
                        <p className="text-sm sm:text-base">Trusted by 5000+ families</p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl font-heading leading-tight">
                            Trusted Healthcare for Your Entire Family
                        </h1>

                        <p className="text-lightText sm:text-lg">
                            Experience compassionate, expert medical care in a modern clinic.
                            From routine checkups to specialized treatments, we're here for
                            every stage of your family's health journey.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="text-white text-md" size="lg">
                            <Calendar />
                            <p>Book Appointment</p>
                        </Button>

                        <Button variant="outline" size="lg" className="text-primary text-md">
                            <Phone />
                            <p>Call Now</p>
                        </Button>
                    </div>

                    <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
                        <div>
                            <h1 className="text-primary text-2xl sm:text-3xl font-semibold">5000+</h1>
                            <p className="text-sm sm:text-base">Patients Served</p>
                        </div>
                        <div>
                            <h1 className="text-primary text-2xl sm:text-3xl font-semibold">12+</h1>
                            <p className="text-sm sm:text-base">Years Experience</p>
                        </div>
                        <div>
                            <h1 className="text-primary text-2xl sm:text-3xl font-semibold">4.9</h1>
                            <p className="text-sm sm:text-base">Rating</p>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <img
                        src="/images/hero.jpg"
                        alt="Doctor consulting a family in clinic"
                        className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-3xl shadow-xl"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero