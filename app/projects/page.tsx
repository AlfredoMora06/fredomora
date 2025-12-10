import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Projects() {
  return (
    <>
      {/* Top header section */}
      <div className="bg-[#E6E8E6] pb-20">
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
                  {`A collection of programming work I've done. Enjoy!`}
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Projects list section */}
      <div className="bg-[#24242c] pt-12 pb-20">
        <div className="mx-auto max-w-6xl px-4"></div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#9FB8AD] bg-[#24242c] pb-20">
        <Footer />
      </div>
    </>
  )
}
