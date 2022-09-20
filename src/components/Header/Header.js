import styled from "styled-components"

const Container = styled.div`
    background: ${({theme}) => theme.lightgray};
`


const Header = ({data}) => {
    return (
        <Container>{data.board}</Container>
    )
}

export default Header
