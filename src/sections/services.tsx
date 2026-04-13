import Title from "../components/title"
import {
    Stethoscope,
    Baby,
    HeartPulse,
    Activity,
    Syringe,
    TestTube
} from "lucide-react"

export const services = [
    {
        icon: Stethoscope,
        title: "General Checkup",
        desc: "Complete health assessments and routine medical examinations",
    },
    {
        icon: Baby,
        title: "Child Care",
        desc: "Pediatric consultations and child development monitoring",
    },
    {
        icon: HeartPulse,
        title: "Women Health",
        desc: "Comprehensive wellness and preventive care for women",
    },
    {
        icon: Activity,
        title: "Diabetes Care",
        desc: "Blood sugar monitoring and chronic disease management",
    },
    {
        icon: Syringe,
        title: "Vaccination",
        desc: "Complete immunization services for all age groups",
    },
    {
        icon: TestTube,
        title: "Lab Tests",
        desc: "On-site diagnostic testing with quick results",
    },
]

const Services = () => {
    return (
        <section className="px-4 sm:px-6 md:px-10 py-12 md:py-20 font-body">
            <Title headline="Our Services" desc="Comprehensive healthcare services tailored to your family's needs" />

            <div className="grid md:grid-cols-3 gap-6">
                {services.map((service, index) => {
                    const Icon = service.icon
                    return (
                        <div key={index} className="flex flex-col gap-4 border-1 border-lightText/20 p-6 rounded-xl hover:border-primary hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-2 transition-all duration-300">
                            <div className="bg-secondary/20 flex justify-center items-center p-4 h-14 w-14 rounded-xl">
                               <Icon size={24} className="text-primary" /> 
                            </div>
                            <div className="flex flex-col gap-2">
                            <h3 className="text-darkText font-semibold text-xl">{service.title}</h3>
                            <p className="text-lightText">{service.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default Services