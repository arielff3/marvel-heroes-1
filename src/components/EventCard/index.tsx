import React from 'react'
import { Event } from '../../contexts/HeroContext'

import { Card, Divider, EventDescription, EventTitle } from './style'

interface EventCardProps {
  event: Event
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <Card>
      <div>
        <img
          src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
          width={268}
          height={265}
        />
      </div>
      <Divider />

      <EventTitle>{event.title}</EventTitle>
      <EventDescription>{event.description}</EventDescription>
    </Card>
  )
}

export default EventCard
