import styled from 'styled-components'
import { BoardProps } from '../../../types/models'
import { Flex } from '../../atoms'
import { BoardListItem } from '../../molecules'

type BoardListDataType = {
  list: BoardProps[]
}

const BoardList = ({ list }: BoardListDataType) => {
  return (
    <View direction="column">
      {list.map((item) => {
        return <BoardListItem item={item} key={item.id} />
      })}
    </View>
  )
}

export default BoardList

const View = styled(Flex)`
  margin: 0 auto;
  width: 100%;
  background: #dedede;

  > div {
    cursor: pointer;
  }
`
