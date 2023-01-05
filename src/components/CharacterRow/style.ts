import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 16px;
  padding: 0 16px;
  background: #ffffff 0% 0% no-repeat padding-box;
  height: 76px;
  border: 1px solid #c9c9c9;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 8px;
  border-radius: 5px;
`

export const HeroItem = styled.div`
  display: flex;
  justify-content: space-between;
`

export const HeroDescriptionContainer = styled.div`
  padding: 0 8px;
  display: inline-flex;
  align-items: center;

  width: 33.333%;

  img {
    border-radius: 4px;
    max-width: 48px;
    max-height: 48px;
    height: 100%;
  }

  span {
    margin-left: 16px;
    font-size: 16px;
    color: #404040;
  }
`

export const HeroSeries = styled.div``

export const HeroEvents = styled.div``
