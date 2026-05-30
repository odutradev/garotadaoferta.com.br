'use client'

import { useState, useEffect } from 'react'

import { LoadingContainer, LoadingSpinner, LoadingMessage } from './styles'
import type { LoadingProps } from './types'

const Loading = ({ showSpinner = true, message = 'Carregando' }: LoadingProps) => {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + '.' : ''))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <LoadingContainer>
      {showSpinner && <LoadingSpinner />}
      <LoadingMessage>{message}{dots}</LoadingMessage>
    </LoadingContainer>
  )
}

export default Loading
