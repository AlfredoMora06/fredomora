import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PhotoTabs from '@/components/sections/PhotoTabs'

export default function Photography() {
  return (
    <>
      {/* Main section */}
      <div className="min-h-screen bg-[#24242c] pb-0 md:pb-[70px]">
        <Navbar dark={true} />

        <main className="mx-auto max-w-6xl px-4 py-8">
          {/* Header text */}
          <section>
            <div className="grid grid-cols-1 gap-6 pb-5 md:grid-cols-12">
              <div className="flex flex-col justify-center md:col-span-7">
                <h1 className="text-center text-[55px] font-bold text-[#E6E8E6] md:text-left md:text-[65px]">
                  {`Photography`}
                </h1>
                <p className="pt-2 text-center text-base font-medium text-[#E6E8E6] md:pt-[10px] md:text-left md:text-lg">
                  {`Memories frozen in time, some tell stories, some solo me gustan...`}
                </p>
              </div>
            </div>
          </section>

          {/* Tabs */}
          <section>
            <PhotoTabs />
          </section>
        </main>
      </div>

      {/* Footer section */}
      <div className="border-t border-[#9FB8AD] bg-[#24242c] pb-20">
        <Footer dark />
      </div>
    </>
  )
}
