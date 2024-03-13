import { DM_Sans as FontSans } from "next/font/google"
import { Gloock as FontSerif } from "next/font/google"

export const fontSans = FontSans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontSerif = FontSerif({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  variable: "--font-serif",
})
