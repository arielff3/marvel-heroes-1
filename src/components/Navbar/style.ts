import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: content-box;
`

export const UserCredentials = styled.div`
  display: flex;
  margin-left: 50px;
  align-items: center;
`

export const Avatar = styled.span`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: #6dc6f8;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin-top: 4px;
    font-weight: 600;
    font-size: 20px;
    color: #fff;
  }
`

export const Identification = styled.div`
  width: 140px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 10px;
  margin-right: 10px;

  span {
    font-weight: bold;
  }

  small {
    display: inline;
  }
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
