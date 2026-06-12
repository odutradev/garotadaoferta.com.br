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
  applicationName: 'Garota da Oferta',
  title: {
    default: 'Garota da Oferta | Grupo VIP de Ofertas e Cupons para Mulheres no WhatsApp',
    template: '%s | Garota da Oferta',
  },
  description: 'Garota da Oferta: o grupo VIP feminino de ofertas no WhatsApp! Receba diariamente as melhores promoções, cupons de desconto e achadinhos exclusivos para mulheres. Grátis e sem spam!',
  keywords: [
    'garota da oferta',
    'garotas ofertas',
    'grupo vip de ofertas',
    'ofertas para mulheres',
    'grupo whatsapp ofertas',
    'cupons de desconto',
    'promoções femininas',
    'achadinhos femininos',
    'mulher econômica',
    'afiliados ofertas',
    'marketing de afiliados',
    'melhores ofertas do dia',
    'promoções imperdíveis',
    'descontos exclusivos',
    'cupom de desconto online',
    'compras com desconto',
    'economizar nas compras',
    'dicas de compras femininas',
    'ofertas amazon brasil',
    'promoções shopee',
    'achadinhos whatsapp',
    'grupo de ofertas grátis',
    'cupons grátis',
    'garota oferta whatsapp',
    'grupo vip whatsapp grátis',
    'promoção do dia',
    'desconto online',
    'ofertas exclusivas',
    'melhores cupons',
    'garotas descontos',
    'ofertas mulheres brasil',
    'cupons afiliados',
    'whatsapp grupo vip',
    'achadinhos do dia',
    'promoção online brasil',
  ],
  authors: [{ name: 'Garota da Oferta', url: 'https://garotadaoferta.com.br' }],
  creator: 'Garota da Oferta',
  publisher: 'Garota da Oferta',
  category: 'shopping',
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: '/images/icon.svg',
    shortcut: '/images/icon.svg',
    apple: '/images/icon.svg',
  },
  alternates: {
    canonical: 'https://garotadaoferta.com.br',
    languages: {
      'pt-BR': 'https://garotadaoferta.com.br',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://garotadaoferta.com.br',
    siteName: 'Garota da Oferta',
    title: 'Garota da Oferta | Melhores Ofertas e Cupons para Mulheres no WhatsApp',
    description: 'Grupo VIP feminino de ofertas no WhatsApp! Promoções, cupons de desconto e achadinhos exclusivos para mulheres todos os dias. Grátis e sem spam!',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Garota da Oferta - Grupo VIP de Ofertas e Cupons no WhatsApp para Mulheres',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garota da Oferta | Melhores Ofertas e Cupons no WhatsApp',
    description: 'Grupo VIP feminino de ofertas! Promoções, cupons e achadinhos exclusivos para mulheres. Grátis e sem spam!',
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
