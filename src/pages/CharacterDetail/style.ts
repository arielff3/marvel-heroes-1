import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ThumbnailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 300px;
    max-height: 289px;
  }
`

export const DescriptionContainer = styled.div`
  font-size: 20px;
  padding-left: 20px;
  background: rgba(7, 7, 7, 0.85);
  height: 289px;
  clip-path: polygon(0px 0px, 100% 0px, 100% 80%, 0px 100%);
  color: #fff;

  h2 {
    font-size: 36px;
    font-weight: 600;
    text-align: center;
  }

  h5 {
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }
`

export const EventsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const EventTitle = styled.h4`
  padding: 0 1rem;
`
