import styled, { keyframes } from 'styled-components'

import { colors, breakpoints, maxWidth } from '@styles/tokens'

const pulse = keyframes`
  0%, 100% { transform: scale(1); box-shadow: 0 8px 32px ${colors.shadowLg}; }
  50% { transform: scale(1.025); box-shadow: 0 12px 40px ${colors.shadowLg}; }
`

export const HeroSection = styled.section`
  background: linear-gradient(160deg, ${colors.heroGradientStart} 0%, ${colors.heroGradientEnd} 55%, ${colors.heroGradientStart} 100%);
  padding: 56px 24px 64px;
  position: relative;
  overflow: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 36px 16px 48px;
  }
`

export const HeroInner = styled.div`
  max-width: ${maxWidth};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 40px;
  align-items: start;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 300px;
    gap: 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Eyebrow = styled.p`
  font-size: 14px;
  font-weight: 800;
  color: ${colors.primary};
  text-transform: uppercase;
  letter-spacing: 1px;
`

export const HeroHeadline = styled.h1`
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 900;
  line-height: 1.05;
  color: ${colors.dark};

  span {
    color: ${colors.primary};
  }
`

export const HeroDescription = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: ${colors.textMuted};
  line-height: 1.6;
  max-width: 520px;

  strong {
    color: ${colors.primary};
  }
`

export const VideoContainer = styled.div`
  position: relative;
  padding-top: 56.25%;
  border-radius: 18px;
  overflow: hidden;
  background: ${colors.dark};
  box-shadow: 0 16px 40px ${colors.shadowLg};

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`

export const CharacterWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  img {
    width: 100%;
    max-width: 380px;
    height: auto;
    filter: drop-shadow(0 16px 32px ${colors.shadow});
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`

export const CtaArea = styled.div`
  max-width: ${maxWidth};
  margin: 40px auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 28px;
  }
`

export const CtaButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 100%;
  max-width: 620px;
  padding: 20px 36px;
  background: linear-gradient(90deg, ${colors.primary} 0%, ${colors.primaryDark} 100%);
  color: ${colors.white};
  font-size: clamp(16px, 2.5vw, 20px);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 60px;
  animation: ${pulse} 2.4s ease-in-out infinite;
  transition: background 0.2s;

  &:hover {
    background: linear-gradient(90deg, ${colors.primaryHover} 0%, ${colors.primaryDark} 100%);
  }
`

export const CtaIconCircle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(255, 255, 255, 0.22);
  border-radius: 50%;
  flex-shrink: 0;
`

export const CtaSubtext = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.textMuted};
`

export const TrustRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 20px;
  }
`

export const TrustBadgeItem = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  color: ${colors.textMuted};
  font-size: 13px;
  font-weight: 700;
`
