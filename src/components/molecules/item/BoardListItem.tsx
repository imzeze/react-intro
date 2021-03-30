import React from 'react'
import styled from 'styled-components'
import { BoardProps } from '../../../types/models'
import { Flex } from '../../atoms'

type BoardListItemDataType = {
    item: BoardProps
}

const BoardListItem = ({item}: BoardListItemDataType) => {
    return (
        <View direction='column' justify='start' align='start'>
            <span>{item.title}</span>
            <span>{item.contents}</span>
        </View>
    )
}

export default BoardListItem

const View = styled(Flex)`
    width: 90%;
    background: white;
    border: 1px solid #d4d4d4;
    padding: 10px;
    margin: 10px;
`