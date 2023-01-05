import React from 'react'
import { Character } from '../../contexts/HeroContext'
import { HeroEvents, HeroDescriptionContainer, HeroItem, HeroSeries, Wrapper } from './style'

interface CharacterProps {
  character: Character
}

const CharacterRow: React.FC<CharacterProps> = ({ character }) => {
  return (
    <Wrapper>
      <HeroItem>
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
          <span>
            {character.series.items
              .filter((_, index) => index < 3)
              .map((serie) => (
                <>
                  <small key={`serie_${JSON.stringify(serie)}`}>{serie.name}</small>
                  <br />
                </>
              ))}
          </span>
        </HeroSeries>

        <HeroEvents>
          {character.events.items.length > 0 ? (
            character.events.items
              .filter((_, index) => index < 3)
              .map((event) => <small key={`event_${JSON.stringify(event)}`}>{event.name}</small>)
          ) : (
            <small>Nenhum evento encontrado</small>
          )}
        </HeroEvents>
      </HeroItem>
    </Wrapper>
  )
}

export default CharacterRow
