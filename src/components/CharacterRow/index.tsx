import React from 'react'
import { Character } from '../../contexts/HeroContext'
import { HeroEvents, HeroDescriptionContainer, HeroItem, HeroSeries, Wrapper } from './style'

import { useNavigate } from 'react-router-dom'

interface CharacterProps {
  character: Character
}

const CharacterRow: React.FC<CharacterProps> = ({ character }) => {
  const navigate = useNavigate()

  const goToDetails = () => {
    navigate(`/details/${character.id}`, {
      state: {
        characterId: character.id,
        characterThumbnail: character.thumbnail,
        characterName: character.name,
        characterDescription: character.description,
      },
    })
  }

  return (
    <Wrapper>
      <HeroItem onClick={goToDetails}>
        <HeroDescriptionContainer>
          <img
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            width={48}
            height={48}
          />
          <span>{character.name}</span>
        </HeroDescriptionContainer>

        <HeroSeries>
          {character.series.items.length > 0 ? (
            character.series.items
              .filter((_, index) => index < 3)
              .map((serie) => (
                <>
                  <small key={`series-${JSON.stringify(serie)}`}>{serie.name}</small>
                  <br />
                </>
              ))
          ) : (
            <small>Nenhuma série encontrada</small>
          )}
        </HeroSeries>

        <HeroEvents>
          {character.events.items.length > 0 ? (
            character.events.items
              .filter((_, index) => index < 3)
              .map((event) => (
                <>
                  <small key={`events-${JSON.stringify(event)}`}>{event.name}</small>
                  <br />
                </>
              ))
          ) : (
            <small>Nenhum evento encontrado</small>
          )}
        </HeroEvents>
      </HeroItem>
    </Wrapper>
  )
}

export default CharacterRow
