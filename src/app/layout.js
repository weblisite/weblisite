import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Weblisite - Build Your MVP Site In 2 Weeks',
  description: 'Transform your idea into a fully functional MVP with our AI-powered dev agency. Launch in days, not months.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}