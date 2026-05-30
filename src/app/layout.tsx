import { Nunito, Outfit } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'

import GlobalStylesProvider from '@lib/globalStylesProvider'
import StyledComponentsRegistry from '@lib/registry'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-nunito',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#E91E8C',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://garotadaoferta.com.br'),
  title: {
    default: 'Garota da Oferta | Grupo VIP de Ofertas',
    template: '%s | Garota da Oferta',
  },
  description: 'Entre agora no grupo VIP da Garota da Oferta e receba ofertas imperdíveis, cupons de desconto e novidades todos os dias direto no seu WhatsApp!',
  keywords: ['ofertas', 'cupons de desconto', 'promoções', 'WhatsApp', 'grupo VIP', 'Garota da Oferta', 'achadinhos', 'descontos'],
  authors: [{ name: 'Garota da Oferta', url: 'https://garotadaoferta.com.br' }],
  creator: 'Garota da Oferta',
  publisher: 'Garota da Oferta',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://garotadaoferta.com.br',
    siteName: 'Garota da Oferta',
    title: 'Garota da Oferta | Grupo VIP de Ofertas no WhatsApp',
    description: 'Entre agora no grupo VIP da Garota da Oferta e receba ofertas imperdíveis, cupons de desconto e novidades todos os dias direto no seu WhatsApp!',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Garota da Oferta - Grupo VIP de Ofertas no WhatsApp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garota da Oferta | Grupo VIP de Ofertas no WhatsApp',
    description: 'Entre agora no grupo VIP da Garota da Oferta e receba ofertas imperdíveis, cupons de desconto e novidades no WhatsApp!',
    images: ['/images/og-image.jpg'],
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
}

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="pt-BR" className={`${nunito.variable} ${outfit.variable}`}>
    <body>
      <StyledComponentsRegistry>
        <GlobalStylesProvider />
        {children}
      </StyledComponentsRegistry>
    </body>
  </html>
)

export default RootLayout
