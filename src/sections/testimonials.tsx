"use client"

import { Rating } from '@mui/material'
import Title from '../components/title'
import { motion } from "framer-motion"

const testimonialsList = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    review: "Doctor explained everything very clearly and treatment worked fast. My family has been visiting for 3 years now.",
  },
  {
    name: "Anita Verma",
    rating: 4,
    review: "Very caring and professional. The clinic is clean and staff is friendly. Best family doctor in Gurgaon!",
  },
  {
    name: "Suresh Patel",
    rating: 5,
    review: "Same day appointment saved us during emergency. Dr. Sharma was patient and thorough with my daughter's checkup.",
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials' className="px-4 sm:px-6 md:px-10 py-12 md:py-20 font-body bg-[#F8FAFC]">
      <Title headline="What Our Patients Say" desc="Real experiences from families we've been privileged to serve" />

      <div className="grid md:grid-cols-3 gap-6">
        {testimonialsList.map((t, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.6 }}
              viewport={{ once: true }}
              className="bg-white flex flex-col gap-4 p-6 rounded-xl shadow-lg"
            >
              <Rating name="read-only" value={t.rating} readOnly />
              <p className="italic text-darkText">"{t.review}"</p>
              <div className="flex gap-4">
                <div className="rounded-full w-10 h-10 bg-primary flex items-center justify-center text-white font-semibold">
                  {t.name[0].toUpperCase()}
                </div>
                <div className="flex flex-col">
                  <p className="text-darkText text-md">{t.name}</p>
                  <p className="text-lightText">Verified Patient</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default Testimonials