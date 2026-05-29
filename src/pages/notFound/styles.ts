import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  padding: 16px;
  background-color: #f8f9fa;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
`;

export const Title = styled.h1`
  font-size: 8rem;
  font-weight: bold;
  color: #007bff;
  margin: 0;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 6rem;
  }
`;

export const Message = styled.p`
  font-size: 1.5rem;
  color: #555;
  margin: 0;
  max-width: 400px;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const ButtonLink = styled.a`
  margin-top: 24px;
  padding: 10px 24px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover,
  &:focus {
    background-color: #0056b3;
  }
`;