import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  overflow: auto;
  flex: 1;
`

export const HeroItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  min-height: 76px;
  padding: 0 16px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #c9c9c9;
  border-radius: 5px;

  :hover {
    cursor: pointer;
    border: 1px solid #696969;
  }
`

export const HeroDescriptionContainer = styled.div`
  padding: 0 8px;
  display: inline-flex;
  align-items: center;

  width: 20%;

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

export const HeroSeries = styled.div`
  width: 20%;
  color: #565656;
`

export const HeroEvents = styled.div`
  width: 20%;
  color: #565656;
`
