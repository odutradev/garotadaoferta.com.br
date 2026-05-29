import type { HeroConfig, TrustBadge } from '@pages/main/subcomponents/hero/types'
import type { Testimonial } from '@pages/main/subcomponents/testimonials/types'
import type { BenefitCard } from '@pages/main/subcomponents/benefits/types'
import type { FooterBadge } from '@pages/main/subcomponents/footer/types'
import type { NavItem } from '@pages/main/subcomponents/header/types'

export const heroConfig: HeroConfig = {
  youtubeVideoId: 'YOUR_YOUTUBE_VIDEO_ID',
  whatsappLink: 'https://chat.whatsapp.com/BZBmnQs7Z3MGyQkoWLV82e',
  eyebrow: 'CHEGA DE PAGAR CARO! 💗',
  headlineLine1: 'AS MELHORES OFERTAS',
  headlineLine2: 'ESTÃO AQUI!',
  description: 'Entre agora no grupo VIP da Garota da Oferta e receba ofertas imperdíveis, cupons de desconto e novidades todos os dias direto no seu WhatsApp!',
  ctaLabel: 'QUERO ENTRAR NO GRUPO VIP AGORA!',
  ctaSubtext: 'É rápido, gratuito e pode mudar seu bolso! 💗',
}

export const trustBadges: TrustBadge[] = [
  { id: 'access', iconName: 'lock', label: 'Acesso imediato' },
  { id: 'safe', iconName: 'shield', label: '100% Seguro' },
  { id: 'spam', iconName: 'check', label: 'Sem spam' },
]

export const benefitCards: BenefitCard[] = [
  {
    id: 'offers',
    iconName: 'tag',
    title: 'OFERTAS EXCLUSIVAS',
    description: 'Promoções que você não encontra em outro lugar.',
  },
  {
    id: 'coupons',
    iconName: 'coupon',
    title: 'CUPONS DE DESCONTO',
    description: 'Cupons reais que funcionam de verdade!',
  },
  {
    id: 'news',
    iconName: 'gift',
    title: 'NOVIDADES TODO DIA',
    description: 'Ofertas novas todos os dias para você aproveitar sempre.',
  },
  {
    id: 'safe',
    iconName: 'shield',
    title: 'GRUPO 100% SEGURO',
    description: 'Ambiente seguro, sem spam e com conteúdo de valor.',
  },
]

export const testimonials: Testimonial[] = [
  {
    id: 'fernanda',
    name: 'Fernanda A.',
    text: 'As ofertas são incríveis! Já economizei muito com os cupons que recebo todos os dias.',
    rating: 5,
    initials: 'FA',
    avatarColor: '#F06292',
  },
  {
    id: 'juliana',
    name: 'Juliana Martins',
    text: 'Nunca vi promoções tão boas! O grupo mudou minha forma de comprar.',
    rating: 5,
    initials: 'JM',
    avatarColor: '#E91E8C',
  },
  {
    id: 'carla',
    name: 'Carla Souza',
    text: 'Ofertas todos os dias, cupons reais e um grupo super organizado. Indico demais!',
    rating: 5,
    initials: 'CS',
    avatarColor: '#C01573',
  },
]

export const navItems: NavItem[] = [
  { id: 'offers', label: 'Ofertas\nExclusivas', iconName: 'tag' },
  { id: 'coupons', label: 'Cupons de\nDesconto', iconName: 'coupon' },
  { id: 'news', label: 'Novidades\nTodos os dias', iconName: 'gift' },
  { id: 'safe', label: 'Grupo 100%\nSeguro', iconName: 'shield' },
]

export const footerBadges: FooterBadge[] = [
  { id: 'access', iconName: 'lightning', label: 'Acesso Imediato' },
  { id: 'safe', iconName: 'shield', label: '100% Seguro' },
  { id: 'spam', iconName: 'check', label: 'Sem Spam' },
  { id: 'value', iconName: 'star', label: 'Conteúdo de Valor' },
]