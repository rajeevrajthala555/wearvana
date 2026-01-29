import './globals.css'
import Navbar from '../components/Navbar'

export const metadata = {
  // ... existing metadata (shortened)
  title: 'Werevana | Authentic Sneakers in Nepal | Nike, Jordan, Adidas',
  description: 'Werevana is a premium sneaker marketplace in Nepal offering 100% authentic Nike, Jordan, Adidas & New Balance sneakers with 7–10 day delivery.',
  keywords: 'sneakers, streetwear, Nepal, authentic, Nike, Jordan, Adidas, New Balance, Kathmandu, premium sneakers',
  authors: [{ name: 'Werevana' }],
  creator: 'Werevana',
  publisher: 'Werevana',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Werevana | Authentic Sneakers in Nepal | Nike, Jordan, Adidas',
    description: 'Werevana is a premium sneaker marketplace in Nepal offering 100% authentic Nike, Jordan, Adidas & New Balance sneakers with 7–10 day delivery.',
    type: 'website',
    siteName: 'Werevana',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Werevana | Authentic Sneakers in Nepal | Nike, Jordan, Adidas',
    description: 'Werevana is a premium sneaker marketplace in Nepal offering 100% authentic Nike, Jordan, Adidas & New Balance sneakers with 7–10 day delivery.',
    creator: '@werevana',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://werevana.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans antialiased">
        {/* Safety guard for Web3/MetaMask injection errors from browser extensions */}
        <script dangerouslySetInnerHTML={{
          __html: `
            if (typeof window !== 'undefined' && !window.ethereum) {
              window.ethereum = { selectedAddress: undefined, isMetaMask: false };
            }
          `
        }} />

        {/* Responsive Navigation with Mobile Hamburger */}
        <Navbar />

        {/* Main Content */}
        <main className="pt-16">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-white border-t border-black/10 py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Social Links */}
              <div className="flex space-x-6">
                <a
                  href="https://instagram.com/werevana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-all duration-300 transform hover:scale-110"
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.253 14.894 3.762 13.743 3.762 12.446s.49-2.448 1.364-3.323c.875-.875 2.026-1.365 3.323-1.365s2.448.49 3.323 1.365c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-2.156c-.683 0-1.297-.272-1.775-.75-.478-.478-.75-1.092-.75-1.775s.272-1.297.75-1.775c.478-.478 1.092-.75 1.775-.75s1.297.272 1.775.75c.478.478.75 1.092.75 1.775s-.272 1.297-.75 1.775c-.478.478-1.092.75-1.775.75z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/977xxxxxxxxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-all duration-300 transform hover:scale-110"
                  aria-label="Contact us on WhatsApp"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.742.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </a>
              </div>

              {/* Footer Text */}
              <div className="text-gray-600 text-sm">
                Authentic sneakers • Delivery 7–10 days
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}