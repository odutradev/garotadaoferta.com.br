import styled from 'styled-components'

import { colors, breakpoints, maxWidth } from '@styles/tokens'

export const BenefitsSection = styled.section`
  background-color: ${colors.white};
  padding: 72px 24px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 48px 16px;
  }
`

export const BenefitsInner = styled.div`
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

  span {
    color: ${colors.primary};
  }
`

export const TitleDivider = styled.span`
  display: block;
  width: 48px;
  height: 4px;
  background: linear-gradient(90deg, ${colors.primary}, ${colors.primaryDark});
  border-radius: 2px;
  margin: 8px auto 0;
`

export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`

export const BenefitCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 32px 20px;
  background: ${colors.cardBg};
  border: 1.5px solid ${colors.cardBorder};
  border-radius: 20px;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px ${colors.shadow};
  }
`

export const BenefitIconCircle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  background: linear-gradient(135deg, ${colors.primaryLight} 0%, ${colors.heroGradientEnd} 100%);
  border-radius: 50%;
  color: ${colors.primary};
  flex-shrink: 0;
`

export const BenefitTitle = styled.h3`
  font-size: 13px;
  font-weight: 900;
  color: ${colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.4px;
  line-height: 1.3;
`

export const BenefitDescription = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: ${colors.textMuted};
  line-height: 1.5;
`
