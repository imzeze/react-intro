import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from '../../atoms'

const Nav = () => {
  return (
    <Flex justify="start">
      <CustomNav exact to="/">
        홈
      </CustomNav>
      <CustomNav exact to="/list">
        게시판
      </CustomNav>
    </Flex>
  )
}

export default Nav

const CustomNav = styled(NavLink)`
  margin: 20px 20px 40px;
`
