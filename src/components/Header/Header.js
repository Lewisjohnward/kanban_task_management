import styled from "styled-components"
import {BiDotsVerticalRounded} from "react-icons/bi"

const Container = styled.div`
    background: ${({theme}) => theme.lightgray};
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({theme}) => theme.whiteOpac};
`

const Board = styled.h1`
    font-size: 1.4rem;
`

const Flex = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
    > *{
        margin-right: 15px;
    }
`
const Button = styled.button`
    background: ${({theme}) => theme.purple};
    padding: 10px 18px;
    border-radius: 50px;
`

const DotsIco = styled(BiDotsVerticalRounded)`
    font-size: 1.2rem;
`


const Header = ({data}) => {
    return (
        <Container>
            <Board>
                {data.board}
            </Board>
            <Flex>
                <Button>+ Add new task</Button>
                <DotsIco />
            </Flex>
        </Container>
    )
}

export default Header
