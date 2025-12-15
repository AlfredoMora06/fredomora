'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'

interface FooterProps {
  dark: boolean
}

export default function Footer({ dark }: FooterProps) {
  const textColor = dark ? 'text-gray-300' : 'text-slate-900'
  const linkColor = dark ? 'text-green-100' : 'text-[#E05437]'
  const linkHoverColor = dark ? 'hover:text-green-200' : 'hover:text-[#C8432A]'

  return (
    <footer className="mt-16 w-full border-t border-slate-700/30">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Name */}
          <div>
            <h2
              className={`font-mono text-lg font-bold tracking-[0.3em] ${textColor}`}
            >
              Alfredo Morales
            </h2>
          </div>

          {/* Contact */}
          <div>
            <h2
              className={`mb-2 font-mono text-lg font-bold tracking-[0.3em] ${textColor}`}
            >
              Contact
            </h2>
            <a
              href="mailto:agmmendez123@gmail.com"
              className={`font-mono font-bold ${linkColor} hover:underline`}
            >
              agmmendez123@gmail.com
            </a>
          </div>

          {/* Social */}
          <div>
            <h2
              className={`mb-4 font-mono text-lg font-bold tracking-[0.3em] ${textColor}`}
            >
              Social
            </h2>

            <div className="flex items-center space-x-6 pt-2">
              <FaGithub
                className={`cursor-pointer ${linkColor} transition ${linkHoverColor}`}
                size={32}
                onClick={() =>
                  window.open('https://github.com/AlfredoMora06', '_blank')
                }
              />

              <FaLinkedin
                className={`cursor-pointer ${linkColor} transition ${linkHoverColor}`}
                size={32}
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/alfredogmorales/',
                    '_blank'
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
