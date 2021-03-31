import styled from 'styled-components'
import { Flex } from '../../atoms'

const Nav = () => {
  return (
    <CustomNav justify="start">
      <div>홈</div>
      <div>게시판</div>
    </CustomNav>
  )
}

export default Nav

const CustomNav = styled(Flex)`
  width: 100%;
  margin: 20px;

  > div {
    padding: 20px;
  }
`