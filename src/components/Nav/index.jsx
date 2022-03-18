import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {GiKnifeFork} from 'react-icons/gi'

const Nav = () => {
  return (
    <Wrapper>
      <Logo to={'/'}>
      <GiKnifeFork />
      Vegan Meal Ideas
      </Logo>
    </Wrapper>
  )
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;
`
const Wrapper = styled.nav`
  padding: 1rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg{
    font-size:2rem;
  }
`

export default Nav