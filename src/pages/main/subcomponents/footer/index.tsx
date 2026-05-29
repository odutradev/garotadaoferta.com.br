import { FooterWrapper, FooterInner, FooterBadgeItem } from './styles'
import { footerBadges } from '../../../../landingConfig'
import Icon from '@components/icon'

const Footer = () => (
  <FooterWrapper>
    <FooterInner>
      {footerBadges.map(badge => (
        <FooterBadgeItem key={badge.id}>
          <Icon name={badge.iconName} size={18} color="#E91E8C" />
          {badge.label}
        </FooterBadgeItem>
      ))}
    </FooterInner>
  </FooterWrapper>
)

export default Footer