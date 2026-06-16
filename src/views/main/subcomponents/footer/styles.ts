import styled from 'styled-components'

import { colors, breakpoints, maxWidth } from '@styles/tokens'

export const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, ${colors.primaryLight} 0%, ${colors.heroGradientEnd} 100%);
  padding: 36px 24px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 28px 16px;
  }
`

export const FooterInner = styled.div`
  max-width: ${maxWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: ${breakpoints.mobile}) {
    gap: 20px;
  }
`

export const FooterBadgeItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${colors.textMuted};
  font-size: 14px;
  font-weight: 800;
`
