import { HeaderWrapper, HeaderInner, Logo, LogoText, Nav, NavItemWrapper, NavIcon, NavLabel } from './styles'
import { navItems } from '../../../../landingConfig'
import Icon from '@components/icon'

const Header = () => (
  <HeaderWrapper>
    <HeaderInner>
      <Logo>
        <img src="/images/icon.svg" alt="Garota da Oferta" width={48} height={52} />
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