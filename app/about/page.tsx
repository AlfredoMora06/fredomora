import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import WorkCard from '@/components/WorkCard'
import wildfireLogo from '@/public/images/work/wildfire_systems_inc_logo.jpeg'
import tracfloLogo from '@/public/images/work/tracflo_logo.jpeg'
import in_the_lab_pm_logo from '@/public/images/work/in_the_lab_pm_logo.jpeg'
import cuny_tech_prep_logo from '@/public/images/work/cuny_tech_prep_logo.jpeg'
import hunter_college_logo from '@/public/images/work/hunter_college_logo.jpeg'
import tealsk12_logo from '@/public/images/work/tealsk12_logo.jpeg'

type AboutProps = {
  heading: string
  subheading?: string
  showSubheading?: boolean
  firstParagraph: string
  secondParagraph: string
  thirdParagraph: string
  fourthParagraph: string
  childhoodImageUrl: string
}

export default function About({
  heading,
  subheading,
  showSubheading = true,
  firstParagraph,
  secondParagraph,
  thirdParagraph,
  fourthParagraph,
  childhoodImageUrl,
}: AboutProps) {
  return (
    <>
      {/* Top section */}
      <div className="bg-[#24242c]">
        <Navbar dark />

        <main className="mx-auto max-w-6xl px-4 py-8">
          {/* Hero row */}
          <section className="grid grid-cols-1 gap-8 pb-10 md:grid-cols-12">
            {/* Heading + quote */}
            <div className="flex items-center md:col-span-7">
              <div>
                <h1 className="text-center text-4xl leading-tight font-bold text-[#E6E8E6] md:text-left md:text-5xl">
                  {heading}
                </h1>

                {showSubheading && subheading && (
                  <p className="mt-4 text-center text-lg text-[#9FB8AD] italic md:text-left">
                    {subheading}
                  </p>
                )}
              </div>
            </div>

            {/* Spacer (was xs=1) */}
            <div className="hidden md:col-span-1 md:block" />

            {/* Childhood image */}
            <div className="flex items-center justify-center md:col-span-4">
              <img
                loading="lazy"
                src={childhoodImageUrl}
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
                {firstParagraph}
              </p>
              <p className="text-base text-[#E6E8E6] md:text-lg">
                {secondParagraph}
              </p>
              <p className="text-base text-[#E6E8E6] md:text-lg">
                {thirdParagraph}
              </p>
              <p className="text-base text-[#E6E8E6] md:text-lg">
                {fourthParagraph}
              </p>
            </div>

            {/* WorkCard column */}
            <div className="flex justify-center">
              <WorkCard
                workSectionTitle="Work"
                educationSectionTitle="Education"
                volunteerSectionTitle="Volunteer"
                resumeLabel="Resume"
                resumeUrl="https://www.linkedin.com/in/alfredogmorales/"
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
        <Footer />
      </div>
    </>
  )
}
