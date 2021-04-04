import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from '../../atoms'

const Nav = () => {
  return (
    <Flex justify="start">
      <div>홈</div>
      <div>게시판</div>
    </Flex>
  )
}

export default Nav
