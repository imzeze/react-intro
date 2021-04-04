import styled from 'styled-components'
import { Flex } from '../../atoms'
import { Nav } from '../../organisms'

const HomeTemplate = () => {
  return (
    <Layout direction="column">
      <Nav />
      <span>홈</span>
    </Layout>
  )
}

export default HomeTemplate

const Layout = styled(Flex)`
  padding: 20px;
`
