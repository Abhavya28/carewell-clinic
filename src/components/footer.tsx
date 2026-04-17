import { Mail, MapPin, Phone } from "lucide-react"

export const quickLinks = [
    { label: "About Us", href: "#hero" },
    { label: "Our Doctor", href: "#doctor" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#visit" },
]

export const servicesLinks = [
    { label: "General Checkup", href: "#services" },
    { label: "Child Care", href: "#services" },
    { label: "Women Health", href: "#services" },
    { label: "Lab Tests", href: "#services" },
]

// bg-[#0F172A]
const Footer = () => {
    return (
        <footer className="bg-primary text-white px-4 sm:px-6 md:px-10 pt-12 pb-6 font-body">

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">

                <div className="flex flex-col gap-4">
                    <h1 className="text-3xl font-bold">
                        CareWell Family Clinic
                    </h1>
                    <p className="text-white/70 text-sm">
                        Your Family's Health, Our Priority
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-semibold">Quick Links</h2>
                    <ul className="flex flex-col gap-2 text-sm">
                        {quickLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-white/70 hover:text-white transition-all"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-semibold">Services</h2>
                    <ul className="flex flex-col gap-2 text-sm">
                        {servicesLinks.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.href}
                                    className="text-white/70 hover:text-white transition-all"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-semibold">Contact</h2>

                    <div className="flex items-start gap-3 text-white/70 text-sm">
                        <MapPin size={18} />
                        <p>Sector 14, Gurgaon</p>
                    </div>

                    <div className="flex items-center gap-3 text-white/70 text-sm">
                        <Phone size={18} />
                        <a href="tel:+9198XXXXXX21" className="hover:text-white">
                            +91 98XXXXXX21
                        </a>
                    </div>

                    <div className="flex items-center gap-3 text-white/70 text-sm">
                        <Mail size={18} />
                        <a href="mailto:hello@carewellclinic.com" className="hover:text-white">
                            hello@carewellclinic.com
                        </a>
                    </div>
                </div>

            </div>

            <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/60 text-sm">
                © 2026 CareWell Family Clinic. All rights reserved.
            </div>

        </footer>
    )
}

export default Footer