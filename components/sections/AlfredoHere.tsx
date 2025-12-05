'use client'

import React from 'react'
// import ContactMe from '../ContactMe'

type AlfredoHereProps = {
  firstParagraph: string
  secondParagraph: string
}

export default function AlfredoHere({
  firstParagraph,
  secondParagraph,
}: AlfredoHereProps){
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768) // md breakpoint-ish
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="mx-auto max-w-6xl px-4 pt-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* LEFT SIDE: Text + Contact + GIF */}
        <div className="flex flex-col space-y-6">
          {/* Text */}
          <div>
            <p className="text-lg md:text-xl leading-relaxed">{firstParagraph}</p>
            <br />
            <p className="text-lg md:text-xl leading-relaxed">{secondParagraph}</p>
          </div>

          {/* Contact + GIF row */}
          <div
            className={`mt-0 flex justify-between ${
              isMobile ? 'pt-5' : ''
            }`}
          >
            <div className="pt-10 w-1/3">
              {/* <ContactMe isMobile={isMobile} /> */}
            </div>

            <div className="pt-10 w-1/3">
              <div className="relative pb-[94.2%] overflow-hidden">
                <img
                  alt="end-of-road.gif"
                  src="https://images.squarespace-cdn.com/content/v1/60133069ccdf254ecbbd6f57/1612120505252-ZWZI596X7SLPJS78VL4E/end-of-road.gif"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-[106%] w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-t border-[#E05437]" />
        </div>

        {/* RIGHT SIDE: Photo grid */}
        <div className="flex flex-col space-y-4">
          {/* Top row */}
          <div className="flex flex-col md:flex-row md:space-x-2 space-y-4 md:space-y-0 pb-1">
            <div
              className={`w-full md:w-7/12 ${
                isMobile ? 'pb-3 pt-10' : ''
              }`}
            >
              <img
                src="https://res.cloudinary.com/dftye6vpx/image/upload/f_auto,q_auto/v1/fredo_mora/if2b7bxyesgscqfninta"
                alt="tezo"
                className="w-full rounded-md border border-[#24242c]/80 opacity-90"
              />
            </div>
            <div
              className={`w-full md:w-5/12 ${
                isMobile ? 'pb-3' : ''
              }`}
            >
              <img
                src="https://res.cloudinary.com/dftye6vpx/image/upload/f_auto,q_auto/v1/fredo_mora/bnkp44sgd0ylosfsn9sc"
                alt="brickwall"
                className="w-full rounded-md border border-[#24242c]/80 opacity-90"
              />
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row md:space-x-2 space-y-4 md:space-y-0">
            <div
              className={`w-full md:w-5/12 ${
                isMobile ? 'pb-4' : ''
              }`}
            >
              <img
                src="https://res.cloudinary.com/dftye6vpx/image/upload/f_auto,q_auto/v1/fredo_mora/ctonn8ujhudssrwkz1so"
                alt="bali"
                className="w-full rounded-md border border-[#24242c]/80 opacity-90"
              />
            </div>
            <div
              className={`w-full md:w-7/12 ${
                isMobile ? 'pb-4' : ''
              }`}
            >
              <img
                src="https://res.cloudinary.com/dftye6vpx/image/upload/f_auto,q_auto/v1/fredo_mora/ciwlml5d8aqltqtxhdno"
                alt="abril"
                className="w-full rounded-md border border-[#24242c]/80 opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
