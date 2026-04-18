import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Delhi I Technologies | Innovating Your Digital Future' },
      { name: 'description', content: 'Delhi I Technologies — IT services company in Delhi offering software development, web design, Android apps, cloud support, FinOps, and IT training.' },
      { name: 'keywords', content: 'IT services Delhi, software development Delhi, cloud support, DevOps, FinOps, web development, Android app development, IT training, IT consultancy' },
      { property: 'og:title', content: 'Delhi I Technologies | Innovating Your Digital Future' },
      { property: 'og:description', content: 'Custom software, cloud solutions, and IT training services from Delhi I Technologies.' },
      { property: 'og:type', content: 'website' },
    ],
    links: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Navbar />
        <main className="pt-16">
          <Outlet />
        </main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
