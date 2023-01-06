import React from 'react'
import { Avatar, Container, Identification, UserCredentials, Wrapper } from './style'
import { ReactComponent as BusinessLogo } from '../../assets/logo.svg'

export function Navbar() {
  return (
    <Wrapper>
      <Container>
        <BusinessLogo />
        <UserCredentials>
          <Identification>
            <span>Usuário Teste</span>
            <small>Teste de Front-end</small>
          </Identification>
          <Avatar>
            <span>UT</span>
          </Avatar>
        </UserCredentials>
      </Container>
    </Wrapper>
  )
}
