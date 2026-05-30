import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const LoadingContainer = styled.div`
  display: flex;
  flex: 1;
  min-height: 90vh;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`

export const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #007bff;
  animation: ${spin} 1s linear infinite;
`

export const LoadingMessage = styled.h6`
  margin-top: 16px;
  font-size: 1.25rem;
  font-weight: 500;
  font-family: Arial, sans-serif;
  color: #333;
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;
`
