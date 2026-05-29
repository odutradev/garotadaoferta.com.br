import styled from 'styled-components'

import { colors, breakpoints, maxWidth } from '@styles/tokens'

export const TestimonialsSection = styled.section`
  background: linear-gradient(180deg, ${colors.primaryBg} 0%, ${colors.white} 100%);
  padding: 72px 24px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 48px 16px;
  }
`

export const TestimonialsInner = styled.div`
  max-width: ${maxWidth};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
`

export const SectionTitle = styled.h2`
  font-size: clamp(22px, 3.5vw, 30px);
  font-weight: 900;
  color: ${colors.dark};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

export const TitleDivider = styled.span`
  display: block;
  width: 48px;
  height: 4px;
  background: linear-gradient(90deg, ${colors.primary}, ${colors.primaryDark});
  border-radius: 2px;
  margin: 8px auto 0;
`

export const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    max-width: 400px;
  }
`

export const TestimonialCard = styled.article`
  background: ${colors.white};
  border: 1.5px solid ${colors.cardBorder};
  border-radius: 20px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 4px 20px ${colors.shadow};
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`

export const TestimonialHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const AvatarImage = styled.img`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`

export const Avatar = styled.div<{ $color: string }>`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${p => p.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 900;
  color: ${colors.white};
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`

export const TestimonialName = styled.strong`
  font-size: 15px;
  font-weight: 800;
  color: ${colors.dark};
  display: block;
`

export const TestimonialText = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: ${colors.textMuted};
  line-height: 1.6;
  flex: 1;
`

export const StarRow = styled.div`
  display: flex;
  gap: 3px;
`