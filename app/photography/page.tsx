import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Photography() {
  return (
    <>
      {/* Main section */}
      <div className="min-h-screen bg-[#24242c] pb-0 md:pb-[70px]">
        <Navbar dark={true} />

        <main className="mx-auto max-w-6xl px-4 py-8">
          {/* Header text */}
          <section className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-5">
              <div className="md:col-span-7 flex flex-col justify-center">
                <h1
                  className="
                    text-[55px] md:text-[65px]
                    font-bold
                    text-[#E6E8E6]
                    text-center md:text-left
                  "
                >
                  {`Photography`}
                </h1>
                <p
                  className="
                    pt-2 md:pt-[10px]
                    text-base md:text-lg
                    font-medium
                    text-[#E6E8E6]
                    text-center md:text-left
                  "
                >
                  {`Memories frozen in time, some tell stories, some solo me gustan...`}
                </p>
              </div>
            </div>
          </section>

          {/* Tabs */}
          <section>
            {/* <PhotoTabs t={t} /> */}
          </section>
        </main>
      </div>

      {/* Footer section */}
      <div className="bg-[#24242c] border-t border-[#9FB8AD] pb-20">
        <Footer />
      </div>
    </>
  )
}
