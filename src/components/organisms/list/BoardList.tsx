import React from 'react'
import { BoardProps } from '../../../types/models'

type BoardListDataType = {
  list: BoardProps[]
}

const BoardList = ({ list }: BoardListDataType) => {
  return (
    <div>
      {list.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.title}</div>
            <div>{item.contents}</div>
          </div>
        )
      })}
    </div>
  )
}

export default BoardList
