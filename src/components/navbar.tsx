import { Phone, Calendar } from "lucide-react"
import { Button } from "../components/ui/button"
import Link from "next/link"

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-lightText/10">
            <nav className="px-4 sm:px-6 md:px-20 py-4 flex items-center justify-between">

                <div className="flex flex-col">
                    <h1 className="text-xl sm:text-2xl font-bold font-heading text-primary">
                        CareWell Family Clinic
                    </h1>
                    <p className="text-xs sm:text-sm text-lightText">
                        Your Family's Health, Our Priority
                    </p>
                </div>

                <div className="hidden sm:flex items-center gap-3">
                    <Button variant="ghost" size="lg" className="text-primary text-md">
                        <Link href="#visit" className="flex gap-2 items-center">
                            <Phone />
                            <p>Call Now</p>
                        </Link>
                    </Button>

                    <Button className="text-white text-md" size="lg">
                        <Link href="#visit" className="flex gap-2 items-center">
                            <Calendar />
                            <p>Book Appointment</p>
                        </Link>
                    </Button>
                </div>

                {/* Mobile */}
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