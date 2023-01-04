import React from 'react'
import { Navbar } from '../../components/Navbar'
import {
  Container,
  Description,
  HeroHeader,
  HeroHeaderTitle,
  HeroItem,
  SearchbarContainer,
  Title,
  Wrapper,
} from './style'

export function Home() {
  const characters = [
    {
      name: 'Spiderman',
    },
    { name: 'Batman' },
  ]

  return (
    <>
      <Navbar />
      <Wrapper>
        <SearchbarContainer>
          <Title>Busca de personagens</Title>
          <Description>Nome do personagem</Description>
          <input placeholder='Buscar' />
        </SearchbarContainer>
        <Container>
          <HeroHeader>
            <HeroHeaderTitle>Personagem</HeroHeaderTitle>
            <HeroHeaderTitle>Séries</HeroHeaderTitle>
            <HeroHeaderTitle>Eventos</HeroHeaderTitle>
          </HeroHeader>

          {characters.map((character, index) => (
            <HeroItem key={index}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={'https://placekitten.com/g/48/48'} style={{ borderRadius: '4px' }} />
                <span style={{ marginLeft: '16px' }}>{character.name}</span>
              </div>
            </HeroItem>
          ))}
        </Container>
      </Wrapper>
    </>
  )
}
