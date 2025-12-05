'use client'

import {
  FaBriefcase,
  FaGraduationCap,
  FaHandsHelping,
  FaLinkedin,
} from 'react-icons/fa'

type Experience = {
  workTitle: string
  position: string
  date: string
  image?: string
}

type WorkCardProps = {
  workSectionTitle: string
  educationSectionTitle: string
  volunteerSectionTitle: string
  resumeLabel: string
  resumeUrl: string
  linkedInUrl: string
  workExperiences: Experience[]
  educationExperiences: Experience[]
  volunteerExperiences: Experience[]
}

export default function WorkCard({
  workSectionTitle,
  educationSectionTitle,
  volunteerSectionTitle,
  resumeLabel,
  resumeUrl,
  linkedInUrl,
  workExperiences,
  educationExperiences,
  volunteerExperiences,
}: WorkCardProps) {
  return (
    <div className="w-full max-w-md rounded-xl border border-white/40 bg-[#24242c] shadow-[0_5px_0_rgba(230,232,230,0.1)] p-4 md:p-6">
      {/* Header: Work + Resume + LinkedIn */}
      <div className="flex items-center justify-between gap-4 pb-2">
        <div className="flex items-center gap-3">
          <FaBriefcase className="text-[#E6E8E6]" />
          <span className="text-sm font-medium text-[#E6E8E6]">
            {workSectionTitle}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-white hover:text-[#E05437] transition-colors"
          >
            {resumeLabel}
          </a>

          <button
            type="button"
            aria-label="Open LinkedIn"
            onClick={() => window.open(linkedInUrl, '_blank')}
            className="text-white hover:text-[#E05437] transition-colors"
          >
            <FaLinkedin size={18} />
          </button>
        </div>
      </div>

      {/* Work Experiences */}
      <ExperienceSection experiences={workExperiences} />

      {/* Divider */}
      <div className="flex justify-center pt-5">
        <div className="h-px w-4/5 bg-[#E6E8E6]/40" />
      </div>

      {/* Education */}
      <div className="mt-4 flex items-center gap-3">
        <FaGraduationCap className="text-[#E6E8E6]" />
        <span className="text-sm font-medium text-[#E6E8E6]">
          {educationSectionTitle}
        </span>
      </div>

      <ExperienceSection experiences={educationExperiences} />

      {/* Divider */}
      <div className="flex justify-center pt-5">
        <div className="h-px w-4/5 bg-[#E6E8E6]/40" />
      </div>

      {/* Volunteer */}
      <div className="mt-4 flex items-center gap-3">
        <FaHandsHelping className="text-[#E6E8E6]" />
        <span className="text-sm font-medium text-[#E6E8E6]">
          {volunteerSectionTitle}
        </span>
      </div>

      <ExperienceSection experiences={volunteerExperiences} />
    </div>
  )
}

type ExperienceSectionProps = {
  experiences: Experience[]
}

function ExperienceSection({ experiences }: ExperienceSectionProps) {
  if (!experiences?.length) return null

  return (
    <div className="mt-3 space-y-4">
      {experiences.map(({ workTitle, position, date, image }) => (
        <div
          key={`${workTitle}-${position}-${date}`}
          className="flex flex-col gap-3 md:flex-row"
        >
          {/* Logo / Image */}
          <div className="md:w-1/5 flex items-start">
            {image ? (
              <img
                src={image}
                alt={workTitle}
                loading="lazy"
                className="h-[45px] w-[45px] rounded-full border-[3px] border-[#9FB8AD] shadow-[5px_5px_rgba(159,184,173,0.3)] object-cover"
              />
            ) : null}
          </div>

          {/* Text */}
          <div className="md:w-4/5">
            <div className="text-sm font-medium text-[#E6E8E6]">
              {workTitle}
            </div>
            <div className="mt-1 flex flex-col text-xs text-[#9FB8AD] md:flex-row md:items-center md:justify-between">
              <span>{position}</span>
              <span className="mt-1 md:mt-0 md:text-right">{date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
