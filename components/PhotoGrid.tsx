
import { Photo } from "../types/Photo"

type PhotoGridProps = {
  photos: Photo[]
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  if (!photos || photos.length === 0) return <></>

  return (
    <>
      {/* Mobile: single column */}
      <div className="block md:hidden">
        {photos.map((photo) => {
          const { src } = photo
          return (
            <div
              key={src}
              className="w-full pb-2.5 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]"
            >
              <img
                src={`${src}?w=161&fit=crop&auto=format`}
                alt="missing"
                loading="lazy"
                width="100%"
                className="block w-full"
              />
            </div>
          )
        })}
      </div>

      {/* Desktop+: 3-col masonry */}
      <div className="hidden md:block">
        <div className="columns-3 gap-2 [column-fill:_balance]">
          {photos.map((photo) => {
            const { src } = photo
            return (
              <div
                key={src}
                className="break-inside-avoid mb-2 opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]"
              >
                <img
                  src={`${src}?w=161&fit=crop&auto=format`}
                  alt="missing"
                  loading="lazy"
                  className="w-full h-auto block"
                />
              </div>
            )
          })}
        </div>
      </div>

      {/* Tailwind keyframes (drop this in globals.css instead if you prefer) */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
