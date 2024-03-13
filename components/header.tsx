"use client"

import { useState } from "react"
import Link from "next/link"
import { MenuIcon } from "lucide-react"

import { ThemeSwitcher } from "./theme-switcher"
import { fontSerif } from "@/lib/fonts"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen)

  return (
    <nav className="mb-12">
      <div className="mx-auto">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none dark:text-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-1 justify-end sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Link
                href="/"
                className={cn(
                  fontSerif.className,
                  "text-3xl font-normal leading-none"
                )}
              >
                {process.env.NEXT_PUBLIC_SITE_NAME}
                <span className="text-blue-400">.</span>
              </Link>
            </div>
            <div className="hidden gap-4 sm:ml-8 sm:flex sm:items-end">
              <div className="text-md space-x-6 pb-[2px] font-bold leading-none text-gray-700 dark:text-gray-300">
                <Link href="/about">About</Link>
              </div>
              <div className="text-md space-x-6 pb-[2px] font-bold leading-none text-gray-700 dark:text-gray-300">
                <Link href="/about">Posts</Link>
              </div>
            </div>
          </div>
          <ThemeSwitcher />
        </div>
      </div>

      <div
        className={`space-y-4 px-2 sm:hidden ${
          isMobileOpen ? "block" : "hidden"
        }`}
        id="mobile-menu"
      >
        <div>
          <Link href="/about" onClick={toggleMobileMenu}>
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}
