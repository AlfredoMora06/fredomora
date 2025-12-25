import Image from 'next/image'
import Link from 'next/link'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { projectInfo } from '@/utils/ProjectsInfo'
import { Project } from '@/types/Project'

export default function Projects() {
  return (
    <>
      {/* Top header section */}
      <div className="bg-[#E6E8E6] pb-10">
        <Navbar dark={false} />
        <main className="mx-auto max-w-6xl px-4 pt-16 pb-16">
          <div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
              <div className="md:col-span-9">
                <h1 className="text-center text-[55px] font-bold md:text-left md:text-[65px]">
                  {`These Are My Projects!`}
                </h1>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-12">
              <div className="md:col-span-9">
                <p className="text-center text-xl md:text-left">
                  {`A collection of programming work I've done from newb to experienced newb. Please enjoy!`}
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Projects list section */}
      <div className="bg-[#24242c] pt-12 pb-20">
        <div className="mx-auto max-w-6xl px-4">
          {projectInfo().map((project: Project, index: number) => {
            const { title } = project

            return (
              <div key={title}>
                <div
                  className={`mt-[50px] flex w-full ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  {/* Image */}
                  <Link
                    href={`/projects/${project.params}`}
                    className="group flex w-3/4 items-center justify-center md:col-span-6"
                  >
                    <div className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-[20px]">
                      <Image
                        src={project.image}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-all duration-200 group-hover:scale-110 group-hover:opacity-30 group-hover:outline group-hover:outline-[3px] group-hover:outline-gray-300"
                        loading="lazy"
                      />

                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <h5 className="text-2xl font-bold text-gray-300">
                          {title}
                        </h5>
                      </div>
                    </div>
                  </Link>

                  {/* Text */}
                  <div className="w-1/2">
                    <h4
                      className={`text-2xl font-medium text-[lightGray] ${
                        index % 2 === 0 ? 'pl-3 text-right' : 'pr-3 text-left'
                      }`}
                    >
                      {title}
                    </h4>

                    <div
                      className={`mt-4 rounded-[20px] p-4 ${
                        index % 2 === 0 ? 'ml-5' : 'mr-5'
                      }`}
                      style={{ background: 'rgba(159, 184, 173, 0.2)' }}
                    >
                      <p
                        className={`p-5 text-lg font-normal text-[lightGray] ${
                          index % 2 === 0 ? 'text-right' : 'text-left'
                        }`}
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="mx-auto mt-20 w-4/5 text-[honeyDew] opacity-20" />
              </div>
            )
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#9FB8AD] bg-[#24242c] pb-20">
        <Footer dark />
      </div>
    </>
  )
}
