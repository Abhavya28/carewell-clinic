"use client"

import Title from "../components/title"
import {
    UserRound,
    CalendarDays,
    Wallet,
    ShieldCheck,
    Stethoscope,
    Users,
} from "lucide-react"
import { motion } from "framer-motion"

export const features = [
    {
        icon: UserRound,
        title: "Experienced Doctor",
        desc: "12+ years of expert medical practice with proven results",
    },
    {
        icon: CalendarDays,
        title: "Same Day Appointments",
        desc: "Flexible scheduling with minimal waiting time",
    },
    {
        icon: Wallet,
        title: "Affordable Care",
        desc: "Quality healthcare at transparent, reasonable prices",
    },
    {
        icon: ShieldCheck,
        title: "Hygienic Clinic",
        desc: "Modern, clean facility with strict safety protocols",
    },
    {
        icon: Stethoscope,
        title: "Modern Equipment",
        desc: "Latest diagnostic tools for accurate assessments",
    },
    {
        icon: Users,
        title: "Friendly Staff",
        desc: "Warm, caring team dedicated to your comfort",
    },
]

const WhyChooseUs = () => {
    return (
        <section className="px-4 sm:px-6 md:px-10 py-12 md:py-20 font-body">
            <div className="grid lg:grid-cols-2 gap-12 items-center">

                {/* Left image */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <img
                        src="/images/whychooseus.jpg"
                        alt="Modern clinic interior"
                        className="w-full h-[350px] sm:h-[450px] object-cover rounded-3xl shadow-xl"
                    />
                </motion.div>

                {/* Right content */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <Title
                        headline="Why Choose CareWell?"
                        desc="We're committed to providing the best healthcare experience"
                    />

                    <div className="flex flex-col gap-2 mt-10">
                        {features.map((feature, index) => {
                            const Icon = feature.icon

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex gap-4 items-start border-b border-lightText/10 pb-5 hover:translate-x-2 transition-all duration-300"
                                >
                                    <div className="bg-primary/10 flex justify-center items-center h-12 w-12 rounded-lg shrink-0">
                                        <Icon size={22} className="text-primary" />
                                    </div>

                                    <div>
                                        <h3 className="text-darkText font-semibold text-lg">
                                            {feature.title}
                                        </h3>
                                        <p className="text-lightText mt-1">
                                            {feature.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default WhyChooseUs