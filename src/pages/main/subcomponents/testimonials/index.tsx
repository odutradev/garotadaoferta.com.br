import Icon from '@components/icon'

import { testimonials } from './defaultData'
import { TestimonialsSection, TestimonialsInner, SectionTitle, TitleDivider, TestimonialsGrid, TestimonialCard, TestimonialHeader, Avatar, TestimonialName, TestimonialText, StarRow } from './styles'

const StarRating = ({ count }: { count: number }) => (
  <StarRow>
    {Array.from({ length: count }).map((_, i) => (
      <Icon key={i} name="star" size={16} color="#FFB800" />
    ))}
  </StarRow>
)

const Testimonials = () => (
  <TestimonialsSection id="testimonials">
    <TestimonialsInner>
      <div>
        <SectionTitle>QUEM ESTÁ NO GRUPO, APROVA! 💗</SectionTitle>
        <TitleDivider />
      </div>
      <TestimonialsGrid>
        {testimonials.map(item => (
          <TestimonialCard key={item.id}>
            <TestimonialHeader>
              <Avatar $color={item.avatarColor}>{item.initials}</Avatar>
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

export default Testimonials
