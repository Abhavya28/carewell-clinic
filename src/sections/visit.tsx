"use client"

import { Clock, Mail, MapPin, MessageSquare, Phone } from "lucide-react"
import Title from "../components/title"
import { Button } from "../components/ui/button"
import { motion } from "framer-motion"

export const contactDetails = [
    { label: "Location", desc: "Sector 14, Gurgaon, Haryana", icon: MapPin },
    { label: "Phone", desc: "+91 98XXXXXX21", icon: Phone },
    { label: "Email", desc: "hello@carewellclinic.com", icon: Mail },
    { label: "Working Hours", desc: "Mon - Sat: 9:00 AM - 8:00 PM", icon: Clock },
]

const Visit = () => {
    return (
        <section className="px-12 sm:px-14 md:px-18 py-12 md:py-20 font-body">

            <Title
                headline="Visit Our Clinic"
                desc="We're here to help you and your family"
            />

            <div className="grid md:grid-cols-2 gap-10 mt-10 items-start">

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6 rounded-2xl bg-[#F8FAFC] p-4 sm:p-6 transition-all duration-300"
                >
                    <h1 className="text-darkText text-xl sm:text-2xl font-semibold">
                        Get In Touch
                    </h1>

                    <div className="flex flex-col gap-6">
                        {contactDetails.map((details, index) => {
                            const Icon = details.icon
                            const isEven = index % 2 === 0

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.15 }}
                                    viewport={{ once: true }}
                                    className="flex gap-4 items-start"
                                >
                                    <div
                                        className={`rounded-lg p-3 flex items-center justify-center ${isEven ? "bg-secondary/20" : "bg-primary/20"
                                            }`}
                                    >
                                        <Icon
                                            size={22}
                                            className={isEven ? "text-secondary" : "text-primary"}
                                        />
                                    </div>

                                    <div>
                                        <p className="text-darkText font-medium">
                                            {details.label}
                                        </p>
                                        <p className="text-lightText text-sm">
                                            {details.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <Button
                            className="w-full sm:w-fit px-20 py-5 bg-green-600 text-white hover:bg-green-700"
                            size="lg"
                        >
                            <MessageSquare size={18} />
                            <span className="font-semibold">Chat on WhatsApp</span>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden"
                    >
                        <iframe
                            src="https://www.google.com/maps?q=Sector+14+Gurgaon+Haryana&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                        ></iframe>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6 rounded-2xl bg-[#F8FAFC] p-4 sm:p-6 transition-all duration-300"
                >
                    <h1 className="text-darkText text-xl sm:text-2xl font-semibold">
                        Send us a Message
                    </h1>

                    <form className="flex flex-col gap-6">

                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                            <label className="text-darkText font-semibold text-sm">Full Name</label>
                            <input className="w-full border border-lightText/20 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all" placeholder="Enter your name" />
                        </motion.div>

                            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                                <label className="text-darkText font-semibold text-sm">Phone</label>
                                <input className="w-full border border-lightText/20 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all" placeholder="Enter phone" />
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                                <label className="text-darkText font-semibold text-sm">Email</label>
                                <input className="w-full border border-lightText/20 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all" placeholder="Enter email" />
                            </motion.div>

                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                            <label className="text-darkText font-semibold text-sm">Message</label>
                            <textarea rows={4} className="w-full border border-lightText/20 rounded-lg p-3 mt-1 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none" placeholder="Tell us how we can help" />
                        </motion.div>

                        <motion.button
                            type="submit"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 }}
                            className="bg-primary text-white rounded-lg py-3 font-semibold hover:bg-primary/90 transition-all shadow-md"
                        >
                            Send Message
                        </motion.button>

                    </form>
                </motion.div>

            </div>
        </section>
    )
}

export default Visit