import styled from 'styled-components'

import { colors, breakpoints, maxWidth } from '@styles/tokens'

export const HeaderWrapper = styled.header`
  background-color: ${colors.white};
  box-shadow: 0 2px 16px ${colors.shadow};
  position: sticky;
  top: 0;
  z-index: 100;
`

export const HeaderInner = styled.div`
  max-width: ${maxWidth};
  margin: 0 auto;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 12px 16px;
  }
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.1;

  span:first-child {
    font-size: 20px;
    font-weight: 900;
    color: ${colors.dark};
  }

  span:last-child {
    font-size: 14px;
    font-weight: 700;
    color: ${colors.primary};
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`

export const NavItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: default;
`

export const NavIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.primary};
`

export const NavLabel = styled.span`
  font-size: 11px;
  font-weight: 700;
  color: ${colors.textMuted};
  text-align: center;
  white-space: pre-line;
  line-height: 1.25;
  text-transform: uppercase;
  letter-spacing: 0.3px;
`
