import Icon from '@components/icon'

import { navItems } from './defaultData'
import { HeaderWrapper, HeaderInner, Logo, LogoText, Nav, NavItemWrapper, NavIcon, NavLabel } from './styles'

const LogoIcon = () => (
  <svg viewBox="0 0 56 60" width="48" height="52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 18L18 10L24 15L28 8L32 15L38 10L42 18H14Z" fill="#FFD700"/>
    <path d="M6 24C6 24 8 52 10 54C10.8 56 13 58 16 58H40C43 58 45.2 56 46 54C48 52 50 24 50 24H6Z" fill="#E91E8C"/>
    <path d="M18 24C18 16 38 16 38 24" stroke="#C01573" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <path d="M28 46C28 46 18 40 18 33C18 29 22 27 28 32C34 27 38 29 38 33C38 40 28 46 28 46Z" fill="white" opacity="0.92"/>
  </svg>
)

const Header = () => (
  <HeaderWrapper>
    <HeaderInner>
      <Logo>
        <LogoIcon />
        <LogoText>
          <span>Garota</span>
          <span>da Oferta</span>
        </LogoText>
      </Logo>
      <Nav>
        {navItems.map(item => (
          <NavItemWrapper key={item.id}>
            <NavIcon>
              <Icon name={item.iconName} size={22} />
            </NavIcon>
            <NavLabel>{item.label}</NavLabel>
          </NavItemWrapper>
        ))}
      </Nav>
    </HeaderInner>
  </HeaderWrapper>
)

export default Header
