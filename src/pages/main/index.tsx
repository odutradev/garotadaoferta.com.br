import { useState } from 'react';

import { MainContainer, MainLogo, MainTitle, ChipsContainer, Chip, ButtonContainer, StyledButton } from './styles';
import logo from '@assets/imgs/logo.svg'

const Main = () => {
  
  const [count, setCount] = useState(0);
  const modules = ['React', 'TypeScript', 'Vite', 'Docker', 'Styled Components'];

  return (
    <MainContainer>
      <MainLogo 
        src={logo}
        alt="Zeck Logo" 
      />
      
      <MainTitle>
        Zeck React Typescript Boilerplate + Vite
      </MainTitle>
      
      <ChipsContainer>
        {modules.map((module) => (
          <Chip key={module} className="chip">
            {module}
          </Chip>
        ))}
      </ChipsContainer>
      
      <ButtonContainer>
        <StyledButton onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </StyledButton>
      </ButtonContainer>
    </MainContainer>
  );
};

export default Main;