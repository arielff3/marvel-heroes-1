import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: content-box;
`

export const UserCredentials = styled.nav`
  display: flex;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Wrapper = styled.header`
  height: 4rem;
  display: flex;
  top: 0;
  background-color: #fff;
  border: 1px solid #ebebeb;
  z-index: 2;

  ${Container} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
