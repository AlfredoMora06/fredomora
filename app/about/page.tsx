import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import WorkCard from '@/components/WorkCard'

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
            <div className="md:col-span-7 flex items-center">
              <div>
                <h1 className="text-center md:text-left text-4xl md:text-5xl font-bold text-[#E6E8E6] leading-tight">
                  {heading}
                </h1>

                {showSubheading && subheading && (
                  <p className="mt-4 text-center md:text-left text-lg italic text-[#9FB8AD]">
                    {subheading}
                  </p>
                )}
              </div>
            </div>

            {/* Spacer (was xs=1) */}
            <div className="hidden md:block md:col-span-1" />

            {/* Childhood image */}
            <div className="md:col-span-4 flex items-center justify-center">
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
              <p className="text-base md:text-lg text-[#E6E8E6]">
                {firstParagraph}
              </p>
              <p className="text-base md:text-lg text-[#E6E8E6]">
                {secondParagraph}
              </p>
              <p className="text-base md:text-lg text-[#E6E8E6]">
                {thirdParagraph}
              </p>
              <p className="text-base md:text-lg text-[#E6E8E6]">
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
                workExperiences={[]}
                educationExperiences={[]}
                volunteerExperiences={[]}
              />
            </div>
          </section>
        </main>
      </div>

      {/* Footer wrapper */}
      <div className="bg-[#24242c] border-t border-[#9FB8AD] pb-20">
        <Footer />
      </div>
    </>
  )
}
