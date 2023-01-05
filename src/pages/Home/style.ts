import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 2rem;
`

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f7f7f7 0% 0% no-repeat padding-box;
`

export const HeroHeaderTitle = styled.div`
  font-size: 20px;
`

export const HeroHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  margin-top: 32px;
`

export const Title = styled.div`
  margin-top: 32px;
  color: black;
  font-size: 28px;
  font-weight: 500;
`

export const Description = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  color: black;
  font-size: 20px;
`

export const SearchbarContainer = styled.div`
  padding: 0 2rem;
  input {
    border: 1px solid #d7d7d7;
    border-radius: 4px;
    height: 50px;
    width: 377px;

    ::placeholder {
      padding: 8px;
    }
  }
`
