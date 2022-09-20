import styled from "styled-components"
import Header from "../components/Header/Header"
import NavBar from "../components/NavBar/NavBar"


const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;


`

const Main = styled.div`
    width: 100%;
`

const Box = styled.div`
    background: ${({theme}) => theme.darkgray};
`
 
const Home = () => {
    return (
        <Container>
            <NavBar />
            <Main>
                <Header />
            </Main>
        </Container>

    )
}

export default Home
