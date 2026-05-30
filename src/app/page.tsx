import type { Metadata } from 'next'

import Main from '@pages/main'

export const metadata: Metadata = {
  title: 'Grupo VIP de Ofertas e Cupons no WhatsApp',
  description: 'Entre agora no grupo VIP da Garota da Oferta e receba ofertas imperdíveis, cupons de desconto e novidades todos os dias direto no seu WhatsApp!',
  alternates: {
    canonical: 'https://garotadaoferta.com.br',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://garotadaoferta.com.br/#organization',
      name: 'Garota da Oferta',
      url: 'https://garotadaoferta.com.br',
      logo: {
        '@type': 'ImageObject',
        url: 'https://garotadaoferta.com.br/images/icon.svg',
      },
      sameAs: ['https://chat.whatsapp.com/BZBmnQs7Z3MGyQkoWLV82e'],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://garotadaoferta.com.br/#webpage',
      url: 'https://garotadaoferta.com.br',
      name: 'Garota da Oferta | Grupo VIP de Ofertas no WhatsApp',
      description: 'Entre agora no grupo VIP da Garota da Oferta e receba ofertas imperdíveis, cupons de desconto e novidades todos os dias direto no seu WhatsApp!',
      isPartOf: { '@id': 'https://garotadaoferta.com.br/#organization' },
      inLanguage: 'pt-BR',
    },
  ],
}

const HomePage = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <Main />
  </>
)

export default HomePage
