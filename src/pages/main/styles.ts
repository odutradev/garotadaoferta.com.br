import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #f8f9fa;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
  text-align: center;
  gap: 24px;
`;

export const MainLogo = styled.img`
  height: 10rem;
  max-width: 90%;
`;

export const MainTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const ChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

export const Chip = styled.span`
  background-color: #e8f7fe;
  color: #0c5a81;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const ButtonContainer = styled.div`
  margin-top: 16px;
`;

export const StyledButton = styled.button`
  font-size: 1rem;
  font-weight: 500;
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid transparent;
  background-color: #17B3F6;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #56E0A0;
    outline: none;
  }
`;