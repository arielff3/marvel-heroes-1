import React from 'react'
import { useLocation } from 'react-router-dom'
import { EventCard } from '../../components/EventCard'
import { Navbar } from '../../components/Navbar'
import { useSearch } from '../../contexts/HeroContext'
import { DescriptionContainer, EventsContainer, ThumbnailContainer, Wrapper } from './style'

export function CharacterDetail() {
  const { characterDetails, getDetails } = useSearch()

  const { state } = useLocation()

  React.useEffect(() => {
    if (state.characterId) {
      getDetails(state.characterId)
    }
  }, [])

  return (
    <>
      <Navbar />

      <Wrapper>
        <ThumbnailContainer>
          <img
            src={`${state.characterThumbnail.path}.${state.characterThumbnail.extension}`}
            alt={state.characterName}
          />
        </ThumbnailContainer>

        <DescriptionContainer>
          <h2>{state.characterName}</h2>
          <h5>{state.characterDescription}</h5>
        </DescriptionContainer>
      </Wrapper>

      <h4>Eventos</h4>

      <EventsContainer>
        {characterDetails?.map((item) => (
          <EventCard key={item.id} />
        ))}
      </EventsContainer>
    </>
  )
}
