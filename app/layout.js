import './globals.css'

export const metadata = {
  title: 'Soham Kulkarni',
  description: 'My Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className = "w-full h-full">
        {children}
      </body>
    </html>
  )
}
