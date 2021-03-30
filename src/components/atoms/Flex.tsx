import styled from 'styled-components'

interface IFlex{
    direction?: string
    justify?: string
    align?: string
}

const Flex = styled.div<IFlex>`
    display: flex;
    flex-direction: ${({direction}) => direction ? direction : 'row'};
    justify-content: ${({justify}) => justify ? justify : 'center'};
    align-items: ${({align}) => align ? align : 'center'};
`

export default Flex