import avatar2 from '@assets/avatars/avatar2.svg'
import avatar1 from '@assets/avatars/avatar1.svg'

import type { Testimonial } from './types'

export const testimonials: Testimonial[] = [
  {
    id: 'fernanda',
    name: 'Fernanda A.',
    text: 'As ofertas são incríveis! Já economizei muito com os cupons que recebo todos os dias.',
    rating: 5,
    initials: 'FA',
    avatarColor: '#F06292',
    avatarUrl: avatar1
  },
  {
    id: 'juliana',
    name: 'Juliana Martins',
    text: 'Nunca vi promoções tão boas! O grupo mudou minha forma de comprar.',
    rating: 5,
    initials: 'JM',
    avatarColor: '#E91E8C',
    avatarUrl: avatar2
  },
  {
    id: 'carla',
    name: 'Carla Souza',
    text: 'Ofertas todos os dias, cupons reais e um grupo super organizado. Indico demais!',
    rating: 5,
    initials: 'CS',
    avatarColor: '#C01573'
  },
  {
    id: 'marcos',
    name: 'Marcos Silva',
    text: 'Consegui comprar meu celular com um desconto absurdo graças ao grupo. Vale cada segundo!',
    rating: 5,
    initials: 'MS',
    avatarColor: '#9C27B0'
  },
  {
    id: 'patricia',
    name: 'Patrícia Lima',
    text: 'Estava pagando muito caro antes. As ofertas aqui são selecionadas a dedo, simplesmente amei!',
    rating: 5,
    initials: 'PL',
    avatarColor: '#D81B60',
    avatarUrl: avatar1
  }
]