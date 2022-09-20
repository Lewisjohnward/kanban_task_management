import styled from "styled-components"

const Container = styled.div`
    background: ${({theme}) => theme.lightgray};
`


const Header = () => {
    return (
        <Container>Platform Launch</Container>
    )
}

export default Header
