import type { Metadata } from 'next'

import Main from '../pages/main'

export const metadata: Metadata = {
  title: 'Grupo VIP de Ofertas para Mulheres | Cupons e Promoções no WhatsApp',
  description: 'Entre no grupo VIP da Garota da Oferta e receba as melhores ofertas, cupons de desconto e promoções exclusivas para mulheres todos os dias no WhatsApp. Grátis!',
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
      description: 'Canal de ofertas, cupons de desconto e promoções exclusivos para mulheres no WhatsApp.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://garotadaoferta.com.br/images/icon.svg',
        width: 512,
        height: 512,
      },
      sameAs: ['https://chat.whatsapp.com/BZBmnQs7Z3MGyQkoWLV82e'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://garotadaoferta.com.br/#website',
      url: 'https://garotadaoferta.com.br',
      name: 'Garota da Oferta',
      description: 'As melhores ofertas, cupons e promoções para mulheres no WhatsApp.',
      publisher: { '@id': 'https://garotadaoferta.com.br/#organization' },
      inLanguage: 'pt-BR',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://garotadaoferta.com.br/?s={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://garotadaoferta.com.br/#webpage',
      url: 'https://garotadaoferta.com.br',
      name: 'Garota da Oferta | Grupo VIP de Ofertas e Cupons para Mulheres no WhatsApp',
      description: 'Entre no grupo VIP da Garota da Oferta e receba as melhores promoções, cupons de desconto e achadinhos exclusivos para mulheres todos os dias no WhatsApp.',
      isPartOf: { '@id': 'https://garotadaoferta.com.br/#website' },
      about: { '@id': 'https://garotadaoferta.com.br/#organization' },
      inLanguage: 'pt-BR',
      dateModified: new Date().toISOString(),
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://garotadaoferta.com.br/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'O grupo da Garota da Oferta é gratuito?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sim! O grupo VIP da Garota da Oferta é 100% gratuito. Você entra sem pagar nada e começa a receber ofertas, cupons de desconto e promoções exclusivas imediatamente.',
          },
        },
        {
          '@type': 'Question',
          name: 'Que tipo de ofertas são compartilhadas no grupo?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'São compartilhadas ofertas de moda feminina, beleza, casa, eletrônicos, cupons de desconto de lojas como Amazon, Shopee e Mercado Livre, além de promoções e achadinhos exclusivos para mulheres.',
          },
        },
        {
          '@type': 'Question',
          name: 'Como entrar no grupo VIP da Garota da Oferta no WhatsApp?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Basta clicar no botão "Entrar no Grupo VIP" nesta página e você será redirecionada diretamente para o grupo no WhatsApp. O acesso é imediato, gratuito e sem spam.',
          },
        },
        {
          '@type': 'Question',
          name: 'O grupo da Garota da Oferta envia spam?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Não! O grupo da Garota da Oferta é curado com cuidado. Apenas ofertas reais, cupons válidos e promoções de valor são compartilhados. Zero spam, 100% conteúdo útil para mulheres.',
          },
        },
        {
          '@type': 'Question',
          name: 'As promoções compartilhadas são de afiliados?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sim, parte das ofertas são links de afiliados de programas como Amazon Afiliados e Shopee Afiliados, mas isso não afeta o preço para você. Todas as promoções são curadas e verificadas antes de serem compartilhadas.',
          },
        },
        {
          '@type': 'Question',
          name: 'Com que frequência chegam novas ofertas e promoções?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Novas ofertas, cupons de desconto e promoções são compartilhadas todos os dias. O grupo é atualizado diariamente com os melhores achadinhos e descontos disponíveis para mulheres.',
          },
        },
      ],
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
