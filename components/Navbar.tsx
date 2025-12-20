'use client'
import * as React from 'react'
import Link from 'next/link'

type NavbarProps = {
  dark: boolean
  showLanguage?: boolean
  onLanguageChange?: (language: string) => void
}

export default function Navbar({
  dark,
  showLanguage = true,
  onLanguageChange,
}: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [languageMenuOpen, setLanguageMenuOpen] = React.useState(false)

  const textColor = dark ? 'text-gray-100' : 'text-slate-900'
  const hoverTextColor = dark ? 'hover:text-green-100' : 'hover:text-[#E05437]'
  const borderColor = dark ? 'border-gray-300' : 'border-slate-900'
  const iconColor = dark ? 'text-gray-100' : 'text-slate-800'

  const pages = [
    { title: 'About', link: '/about' },
    { title: 'Projects', link: '/projects' },
    { title: 'Photography', link: '/photography' },
  ]

  const pagesMobile = [{ title: 'Home', link: '/' }, ...pages]

  const handleLanguageChange = (language: string) => {
    setLanguageMenuOpen(false)
    onLanguageChange?.(language)
  }

  return (
    <header className={`w-full border-b ${borderColor} bg-transparent`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Logo / Name (desktop) */}
        <div className="hidden md:flex">
          <Link
            href="/"
            className={`mr-2 font-mono text-xl font-bold tracking-[0.3em] ${textColor} no-underline`}
            onClick={() => window.scrollTo(0, 0)}
          >
            Alfredo&nbsp;Morales
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex flex-1 items-center justify-start md:hidden">
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={drawerOpen}
            className={`inline-flex items-center justify-center rounded-md p-2 focus:ring-2 focus:ring-offset-2 focus:outline-none ${iconColor}`}
            onClick={() => setDrawerOpen(true)}
          >
            {/* Simple hamburger icon (stacked with gap for consistent spacing) */}
            <div className="flex flex-col gap-1">
              <span className="block h-0.5 w-6 rounded-sm bg-current" />
              <span className="block h-0.5 w-6 rounded-sm bg-current" />
              <span className="block h-0.5 w-6 rounded-sm bg-current" />
            </div>
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center justify-center md:flex">
          <div className="flex gap-6">
            {pages.map((page) => {
              // const active = location.pathname === page.link
              return (
                <Link
                  href={page.link}
                  key={page.link}
                  className={`pb-1 text-base transition-all ${textColor} ${hoverTextColor}`}
                >
                  {page.title}
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Language button (desktop + mobile) */}
        {showLanguage && (
          <div className="relative ml-4">
            <button
              type="button"
              className={`${textColor} text-base ${hoverTextColor} cursor-pointer`}
              onClick={() => setLanguageMenuOpen((prev) => !prev)}
            >
              Language
            </button>

            {languageMenuOpen && (
              <div className="absolute right-0 mt-2 w-28 rounded-md border border-slate-200 bg-white py-1 text-sm shadow-lg dark:border-slate-700">
                <button
                  type="button"
                  className="flex w-full items-center px-2 py-1 hover:cursor-pointer hover:bg-slate-100 hover:text-white dark:hover:bg-slate-700"
                  onClick={() => handleLanguageChange('en')}
                >
                  <img
                    alt="United States"
                    src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
                    className="h-4 w-6"
                  />
                  <span className="ml-2">En</span>
                </button>
                <button
                  type="button"
                  className="flex w-full items-center px-2 py-1 hover:cursor-pointer hover:bg-slate-100 hover:text-white dark:hover:bg-slate-700"
                  onClick={() => handleLanguageChange('es')}
                >
                  <img
                    alt="Mexico"
                    src="http://purecatamphetamine.github.io/country-flag-icons/3x2/MX.svg"
                    className="h-4 w-6"
                  />
                  <span className="ml-2">Es</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Backdrop */}
          <div
            className="flex-1 bg-black/40"
            onClick={() => setDrawerOpen(false)}
          />
          {/* Drawer panel */}
          <div
            className={`flex h-full w-1/2 max-w-xs flex-col p-4 shadow-lg transition-transform dark:bg-[#24242c] ${
              dark ? 'text-gray-100' : 'text-slate-900'
            }`}
          >
            <button
              type="button"
              className={`mb-4 self-end text-2xl leading-none text-gray-100`}
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
            <nav>
              <ul className="space-y-5">
                {pagesMobile.map((page) => (
                  <li key={page.link}>
                    <Link
                      href={page.link}
                      className={`w-full text-left text-base font-medium text-gray-100`}
                    >
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
