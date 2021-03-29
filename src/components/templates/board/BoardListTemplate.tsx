import React from 'react'
import { BoardList } from '../../organisms'

const BoardListTemplate = () => {
  return (
    <div>
      <div>게시판</div>
      <div>
        <BoardList list={boardList} />
      </div>
    </div>
  )
}

export default BoardListTemplate

const boardList = [
  {
    id: '1',
    title: '제목1',
    contents: '내용1',
  },
  {
    id: '2',
    title: '제목2',
    contents: '내용2',
  },
  {
    id: '3',
    title: '제목3',
    contents: '내용3',
  },
  {
    id: '4',
    title: '제목4',
    contents: '내용4',
  },
  {
    id: '5',
    title: '제목5',
    contents: '내용5',
  },
  {
    id: '6',
    title: '제목6',
    contents: '내용6',
  },
  {
    id: '7',
    title: '제목7',
    contents: '내용7',
  },
  {
    id: '8',
    title: '제목8',
    contents: '내용8',
  },
  {
    id: '9',
    title: '제목9',
    contents: '내용9',
  },
  {
    id: '10',
    title: '제목10',
    contents: '내용10',
  },
]
