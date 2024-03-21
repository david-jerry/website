import type { Metadata, Viewport } from "next";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import localFont from 'next/font/local'

const mont = localFont({
  src: "../../public/fonts/Montserrat-VariableFont_wght.ttf",
  display: "swap"
})

const bfo = localFont({
  src: "../../public/fonts/BagelFatOne-Regular.ttf",
  display: 'swap',
  variable: '--font-bfo'
})

const cs = localFont({
  src: '../../public/fonts/ClickerScript-Regular.ttf',
  display: 'swap',
  variable: '--font-cs'
})


export const metadata: Metadata = {
  title: { default: "Senior Fullstack Developer", template: "%s | Veteran Developer" },
  description: "Full-stack dev: Python/Django backends, React/Flutter UIs. Builds fintech, crypto, & enterprise apps.",
  keywords: [
    "Full-stack developer",
    "Python",
    "Django",
    "React",
    "Flutter",
    "Fintech",
    "Cryptocurrency",
    "Enterprise applications",
    "Web development",
    "Web applications",
    "User interface (UI)",
    "Backend development",
    "Scalable applications",
    "Complex challenges",
    "Python Django developer for hire",
    "React developer for fintech apps",
    "Build a crypto exchange with Next.js",
    "Enterprise application development services",
  ],
  category: "Information Technology",
  creator: "Jeremiah David",
  publisher: "Jeremiah David",
  alternates: {
    canonical: '/',
  },
  authors: [
    {
      name: "Bytestream Innovators Limited",
      url: "https://bytestreaminnovators.ltd/"
    },
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    images: 'https://jeremiahedavid.online/me.png',
    title: 'Jeremiah David',
    description: "Full-stack dev: Python/Django backends, React/Flutter UIs. Builds fintech, crypto, & enterprise apps.",
    url: 'https://jeremiahedavid.online',
    siteName: 'Fullstack Software Developer',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeremiah David',
    description: "Full-stack dev: Python/Django backends, React/Flutter UIs. Builds fintech, crypto, & enterprise apps.",
    creator: '@jeremiahedavid',
    images: ['https://jeremiahedavid.online/me.png'], // Must be an absolute URL
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
  },
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#040876" }],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  interactiveWidget: 'resizes-visual',
  colorScheme: 'light',
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" className="dark">
      <body className={`${mont.className} ${bfo.variable} ${cs.variable}`}>
        <Layout>
          {
            children
          }
        </Layout>
      </body>
    </html>
  );
}
