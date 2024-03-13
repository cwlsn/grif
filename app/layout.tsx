import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"
import { fontSans, fontSerif } from "@/lib/fonts"
import { cn } from "@/lib/utils"

const title = "Connor Wilson"
const description = "Personal website of Connor Wilson, Engineering Leader"
export const metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL,
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  keywords: ["Connor Wilson"],
  authors: [
    {
      name: "cwlsn",
      url: "https://github.com/cwlsn",
    },
  ],
  creator: "cwlsn",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title,
    description,
    siteName: title,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [`${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`],
    creator: "@_cwlsn",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontSerif.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="mx-auto max-w-3xl px-4 py-10">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
