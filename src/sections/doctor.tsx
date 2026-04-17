"use client"

import { Award, CircleCheckBig } from "lucide-react"
import Rating from '@mui/material/Rating';

const doctorInfo = [
    {
        heading: "MBBS, MD (General Medicine)",
        desc: "Premier Medical College, Delhi",
    },
    {
        heading: "12+ Years Clinical Experience",
        desc: "Family Medicine & Preventive Care",
    },
    {
        heading: "Patient-First Care Philosophy",
        desc: "Personalized treatment plans for every patient",
    },
]

const Doctor = () => {
    return (
        <section id="doctor" className="px-4 sm:px-6 md:px-10 py-12 md:py-20 font-body bg-[#F8FAFC]">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="w-full">
                    <img
                        src="/images/doctor.jpg"
                        alt="Doctor consulting a family in clinic"
                        className="w-full h-[350px] sm:h-[450px] md:h-[550px] object-contain rounded-3xl"
                    />
                </div>

                <div className="flex flex-col gap-6 text-darkText ">
                    <div className="bg-[#E2F3F3] rounded-2xl text-[#16b8a8] px-4 py-2 flex gap-2 w-fit justify-center items-center">
                        <Award size={16} />
                        <p className="text-sm sm:text-base">Meet Your Doctor</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h1 className="text-5xl font-semibold text-darkText font-heading">
                            Dr. Priya Sharma
                        </h1>

                        <h2 className="text-lg text-lightText">
                            With over 12 years of dedicated medical practice, Dr. Priya Sharma brings expertise, compassion, and a patient-first approach to every consultation. Specializing in family medicine, she believes in building lasting relationships with her patients and their families.
                        </h2>
                    </div>

                    <div className="flex flex-col gap-4">
                        {doctorInfo.map((info, index) => {
                            return (
                                <div key={index} className="flex gap-4 items-center">
                                    <div className="text-secondary">
                                        <CircleCheckBig />
                                    </div>
                                    <div className="flex flex-col">
                                        <h1 className="text-darkText text-lg">{info.heading}</h1>
                                        <p className="text-lightText">{info.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-lightText/20 flex flex-col gap-4">
                        <div className="flex gap-2">
                            <Rating name="read-only" value={5} readOnly />
                            <h1 className="text-darkText">4.9/5 Patient Rating</h1>
                        </div>
                        <h1 className="text-lightText italic ">"Patients trust Dr. Sharma for her clear explanations, thorough examinations, and genuine care for their wellbeing."</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Doctor