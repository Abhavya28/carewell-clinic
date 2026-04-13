import { Phone, Calendar } from "lucide-react"
import { Button } from "../components/ui/button"

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-lightText/10">
            <nav className="px-4 sm:px-6 md:px-20 py-4 flex items-center justify-between">

                {/* Logo + tagline */}
                <div className="flex flex-col">
                    <h1 className="text-xl sm:text-2xl font-bold font-heading text-primary">
                        CareWell Family Clinic
                    </h1>
                    <p className="text-xs sm:text-sm text-lightText">
                        Your Family's Health, Our Priority
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="hidden sm:flex items-center gap-3">
                    <Button variant="ghost" size="lg" className="text-primary text-md">
                        <Phone />
                        <p>Call Now</p>
                    </Button>

                    <Button className="text-white text-md" size="lg">
                        <Calendar />
                        <p>Book Appointment</p>
                    </Button>
                </div>

                {/* Mobile CTA */}
                <div className="sm:hidden">
                    <Button size="icon" className="rounded-full text-white p-4">
                        <Phone size={18} />
                    </Button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar