import { Calendar } from "lucide-react"
import { Button } from "../components/ui/button"
import Link from "next/link"

const Book = () => {
  return (
    <section className="font-body shadow-2xl my-10">
      <div className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/90 shadow-2xl px-6 sm:px-10 md:px-16 py-12 md:py-16">
        
        {/* Decorative glow */}
        <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-secondary/20 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center text-center gap-6">
          <div className="max-w-3xl flex flex-col gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-white">
              Book your consultation today and get expert care without long waiting times
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/80">
              Same-day appointments available • Walk-ins welcome
            </p>
          </div>

          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 rounded-xl px-6 py-6 text-base font-semibold shadow-lg"
          >
            <Link href="#visit" className="flex gap-2 items-center">
            <Calendar size={18} />
            <p>Schedule Visit Now</p>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Book