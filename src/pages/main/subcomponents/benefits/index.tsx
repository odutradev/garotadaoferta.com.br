import Icon from '@components/icon'

import { benefitCards } from './defaultData'
import { BenefitsSection, BenefitsInner, SectionTitle, TitleDivider, BenefitsGrid, BenefitCardWrapper, BenefitIconCircle, BenefitTitle, BenefitDescription } from './styles'

const Benefits = () => (
  <BenefitsSection id="benefits">
    <BenefitsInner>
      <div>
        <SectionTitle>
          NO GRUPO <span>VIP</span> VOCÊ RECEBE:
        </SectionTitle>
        <TitleDivider />
      </div>
      <BenefitsGrid>
        {benefitCards.map(card => (
          <BenefitCardWrapper key={card.id}>
            <BenefitIconCircle>
              <Icon name={card.iconName} size={32} />
            </BenefitIconCircle>
            <BenefitTitle>{card.title}</BenefitTitle>
            <BenefitDescription>{card.description}</BenefitDescription>
          </BenefitCardWrapper>
        ))}
      </BenefitsGrid>
    </BenefitsInner>
  </BenefitsSection>
)

export default Benefits
