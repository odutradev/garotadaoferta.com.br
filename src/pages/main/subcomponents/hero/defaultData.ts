import type { HeroConfig, TrustBadge } from './types'

export const heroConfig: HeroConfig = {
  youtubeVideoId: 'YOUR_YOUTUBE_VIDEO_ID',
  whatsappLink: 'https://wa.me/5511999999999',
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
