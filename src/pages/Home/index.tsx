import React from 'react'
import CharacterRow from '../../components/CharacterRow'
import Footer from '../../components/Footer'
import { Navbar } from '../../components/Navbar'
import { useSearch } from '../../contexts/HeroContext'
import debounce from '../../utils/debounce'
import {
  Container,
  Description,
  HeroHeader,
  HeroHeaderTitle,
  SearchbarContainer,
  Title,
  Wrapper,
} from './style'

export function Home() {
  const { characters, onSearch } = useSearch()

  React.useEffect(() => {
    onSearch('')
  }, [onSearch])

  const debounceOnChange = React.useCallback(debounce(onSearch, 500), [onSearch])

  return (
    <>
      <Navbar />
      <Wrapper>
        <SearchbarContainer>
          <Title>Busca de personagens</Title>
          <Description>Nome do personagem</Description>
          <input placeholder='Buscar' onChange={(e) => debounceOnChange(e.target.value)} />
        </SearchbarContainer>

        <Container>
          <HeroHeader>
            <HeroHeaderTitle>Personagem</HeroHeaderTitle>
            <HeroHeaderTitle>Séries</HeroHeaderTitle>
            <HeroHeaderTitle>Eventos</HeroHeaderTitle>
          </HeroHeader>

          {characters.map((character) => (
            <CharacterRow key={`character-${character.id}`} character={character} />
          ))}
        </Container>
        <Footer />
      </Wrapper>
    </>
  )
}
