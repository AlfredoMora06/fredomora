import Image from 'next/image'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import WorkCard from '@/components/WorkCard'
import wildfireLogo from '@/public/images/work/wildfire_systems_inc_logo.jpeg'
import tracfloLogo from '@/public/images/work/tracflo_logo.jpeg'
import in_the_lab_pm_logo from '@/public/images/work/in_the_lab_pm_logo.jpeg'
import cuny_tech_prep_logo from '@/public/images/work/cuny_tech_prep_logo.jpeg'
import hunter_college_logo from '@/public/images/work/hunter_college_logo.jpeg'
import tealsk12_logo from '@/public/images/work/tealsk12_logo.jpeg'
import family from '@/public/images/family.webp'

export default function About() {
  return (
    <>
      {/* Top section */}
      <div className="bg-[#24242c]">
        <Navbar dark />

        <main className="mx-auto max-w-6xl px-4 py-8">
          <section className="grid grid-cols-1 gap-8 pb-10 md:grid-cols-12">
            <div className="flex items-center md:col-span-7">
              <div>
                <h1 className="text-center text-4xl leading-tight font-bold text-[#E6E8E6] md:text-left md:text-5xl">
                  ¡Una vida sin explorar no merece ser vivida!
                </h1>

                <p className="mt-4 text-center text-lg text-[#9FB8AD] italic md:text-left">
                  An unexplored life is not worth living!
                </p>
              </div>
            </div>

            {/* Childhood image */}
            <div className="flex items-center justify-center md:col-span-4">
              <Image
                loading="lazy"
                src={family}
                alt="family"
                className="w-full max-w-md rounded-[40px] border-2 border-[#9FB8AD] opacity-75"
              />
            </div>
          </section>

          {/* Content + WorkCard */}
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Text column */}
            <div className="space-y-4">
              <p className="text-base text-[#E6E8E6] md:text-lg">
                I am the son of Mexican immigrants. I grew up in Astoria, NY
                until 2010. After that, I moved to Mexico with my family where I
                spent the next 6 years living in Oaxaca - going to school and
                experiencing everyday life there. At the age of 16 in 2015 - I
                decided to make the jump and achieve the American Dream and move
                to NYC. I finished high school there and in 2021 - midst
                pandemic - I graduated from Hunter College with a B.S. in
                Computer Science.
              </p>
              <p className="text-base text-[#E6E8E6] md:text-lg">
                In 2021, I began my internship with TracFlo a construction-tech
                company looking to revolutinize one of the least digitized
                spaces in the world. After 6 months of working with them and
                being part of their incredible journey, we decided to make the
                transition into full-time. I began working with TracFlo as a
                Software Engineer in the beginning of 2022.
              </p>
              <p className="text-base text-[#E6E8E6] md:text-lg">
                Since March 2024, I have been working at Wildfire Systems Inc.,
                expanding my software engineering skills to include creating and
                maintaining browser extensions. My role involves developing new
                tools and processes as I go.
              </p>
              <p className="text-base text-[#E6E8E6] md:text-lg">
                My dream is to better my software engineering skills a bit each
                day and help out my community in the U.S and in Mexico, in any
                way I can. In my spare time, you can find me playing soccer,
                trying new food around Queens, or backpacking across Western
                Europe.
              </p>
            </div>

            {/* WorkCard column */}
            <div className="flex justify-center">
              <WorkCard
                workSectionTitle="Work"
                educationSectionTitle="Education"
                volunteerSectionTitle="Volunteer"
                resumeLabel="Resume"
                linkedInUrl="https://www.linkedin.com/in/alfredogmorales/"
                workExperiences={[
                  {
                    workTitle: 'Wildfire Systems, Inc.',
                    position: 'Software Engineer',
                    date: 'March 2024 - Present',
                    image: wildfireLogo,
                  },
                  {
                    workTitle: 'TracFlo',
                    position: 'Software Engineer',
                    date: 'Jan 2022 - Feb 2024',
                    image: tracfloLogo,
                  },
                  {
                    workTitle: 'TracFlo',
                    position: 'Software Engineer Intern',
                    date: 'July 2021 - Dec 2021',
                    image: tracfloLogo,
                  },
                ]}
                educationExperiences={[
                  {
                    workTitle: 'InTheLab',
                    image: in_the_lab_pm_logo,
                    position: 'Project Management Course',
                    date: 'Sep 2023 - Jan 2024',
                  },
                  {
                    workTitle: 'CUNY Tech Prep',
                    image: cuny_tech_prep_logo,
                    position: 'Apprenticeship',
                    date: 'Aug 2020 - May 2021',
                  },
                  {
                    workTitle: 'Hunter College',
                    image: hunter_college_logo,
                    position: 'B.A. Computer Science',
                    date: 'Aug 2017 - May 2021',
                  },
                ]}
                volunteerExperiences={[
                  {
                    workTitle: 'CUNY Tech Prep',
                    image: cuny_tech_prep_logo,
                    position: 'Mock Interviewer',
                    date: 'Jan 2024 - Present',
                  },
                  {
                    workTitle: 'Microsoft TEALS',
                    image: tealsk12_logo,
                    position: 'Computer Lab Assistant',
                    date: 'May 2019 - Jun 2021',
                  },
                ]}
              />
            </div>
          </section>
        </main>
      </div>

      {/* Footer wrapper */}
      <div className="border-t border-[#9FB8AD] bg-[#24242c] pb-20">
        <Footer dark />
      </div>
    </>
  )
}
