import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const PaginationWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;

  ul {
    text-align: center;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (min-width: 800px) {
      width: 30%;
    }
  }

  li:before {
    content: '';
    height: 100%;
  }
  li {
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;

    .page-link {
      display: block;
      width: 100%;
    }
  }

  .disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  .active {
    background: #247dd0 0% 0% no-repeat padding-box;
    color: #fff;
  }

  .previous,
  .next {
    background-color: transparent;
    border: none;
    font-weight: bold;
  }

  .break-me {
    display: none;
  }
`
