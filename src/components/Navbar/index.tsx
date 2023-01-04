import React from 'react'
import { Container, UserCredentials, Wrapper } from './style'
import { ReactComponent as BusinessLogo } from '../../assets/logo.svg'

export function Navbar() {
  return (
    <Wrapper>
      <Container>
        <BusinessLogo />
        <UserCredentials>Credentials</UserCredentials>
      </Container>
    </Wrapper>
  )
}
