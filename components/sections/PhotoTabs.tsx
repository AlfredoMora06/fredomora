'use client'

import React from "react"

import { Photo, PhotoType } from "../../types/Photo"
import PhotoGrid from "../PhotoGrid"
import { photoArray } from "@/utils/PhotoArray"

type TabKey = "all" | "film" | "portrait"

export default function PhotoTabs() {
  const [active, setActive] = React.useState<TabKey>("all")

  const filteredPhotoArray = (type: PhotoType): Photo[] => {
    return photoArray().filter((photo) => photo.type === type)
  }

  const tabs: { key: TabKey; label: string }[] = [
    { key: "all", label: 'All' },
    { key: "film", label: 'Film' },
    { key: "portrait", label: 'Portrait' },
  ]

  return (
    <>
      {/* Tabs header */}
      <div className="border-b border-zinc-700/50">
        <div
          role="tablist"
          aria-label="photo tabs"
          className="flex items-center gap-6"
        >
          {tabs.map((tab) => {
            const isActive = active === tab.key
            return (
              <button
                key={tab.key}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls={`photo-tabpanel-${tab.key}`}
                id={`photo-tab-${tab.key}`}
                onClick={() => setActive(tab.key)}
                className={[
                  "relative py-3 text-sm font-medium transition-colors cursor-pointer",
                  "text-zinc-300 hover:text-white",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                  isActive ? "text-white" : "",
                ].join(" ")}
              >
                {tab.label}
                {/* indicator */}
                <span
                  className={[
                    "pointer-events-none absolute left-0 right-0 -bottom-px h-0.5 rounded-full transition-opacity",
                    "bg-[#C8432A]",
                    isActive ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                />
              </button>
            )
          })}
        </div>
      </div>

      {/* Panels */}
      <div
        role="tabpanel"
        id="photo-tabpanel-all"
        aria-labelledby="photo-tab-all"
        hidden={active !== "all"}
        className="py-6"
      >
        <PhotoGrid photos={photoArray()} />
      </div>

      <div
        role="tabpanel"
        id="photo-tabpanel-film"
        aria-labelledby="photo-tab-film"
        hidden={active !== "film"}
        className="py-6"
      >
        <PhotoGrid photos={filteredPhotoArray("film")} />
      </div>

      <div
        role="tabpanel"
        id="photo-tabpanel-portrait"
        aria-labelledby="photo-tab-portrait"
        hidden={active !== "portrait"}
        className="py-6"
      >
        <PhotoGrid photos={filteredPhotoArray("portrait")} />
      </div>
    </>
  )
}
