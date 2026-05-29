import { useState, useEffect } from 'react'

import { TestimonialsSection, TestimonialsInner, SectionTitle, TitleDivider, TestimonialsGrid, TestimonialCard, TestimonialHeader, Avatar, AvatarImage, TestimonialName, TestimonialText, StarRow } from './styles'
import { testimonials } from './data'
import Icon from '@components/icon'

const StarRating = ({ count }: { count: number }) => (
  <StarRow>
    {Array.from({ length: count }).map((_, i) => (
      <Icon key={i} name="star" size={16} color="#FFB800" />
    ))}
  </StarRow>
)

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setCurrentIndex(prev => (prev + 1) % testimonials.length), 4000)
    return () => clearInterval(timer)
  }, [])

  const visibleTestimonials = Array.from({ length: 3 }).map((_, i) => testimonials[(currentIndex + i) % testimonials.length])

  return (
    <TestimonialsSection id="testimonials">
      <TestimonialsInner>
        <div>
          <SectionTitle>QUEM ESTÁ NO GRUPO, APROVA! 💗</SectionTitle>
          <TitleDivider />
        </div>
        <TestimonialsGrid>
          {visibleTestimonials.map((item, index) => (
            <TestimonialCard key={`${item.id}-${index}`}>
              <TestimonialHeader>
                {item.avatarUrl ? (
                  <AvatarImage src={item.avatarUrl} alt={item.name} />
                ) : (
                  <Avatar $color={item.avatarColor}>{item.initials}</Avatar>
                )}
                <TestimonialName>{item.name}</TestimonialName>
              </TestimonialHeader>
              <TestimonialText>{item.text}</TestimonialText>
              <StarRating count={item.rating} />
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </TestimonialsInner>
    </TestimonialsSection>
  )
}

export default Testimonials