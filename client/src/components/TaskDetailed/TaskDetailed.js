import {useState} from "react"
import styled from "styled-components"
import {XIco} from "../../globalstyles/styles"

const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);

    z-index: 99;
`

const Container = styled.div`
    position: relative;
    height: 200px;
    width: 350px;
    background: ${({theme}) => theme.lightgray};
    display: flex;
    flex-direction: column;
    border-radius: 5px;

    padding: 20px 50px;

    > * {
        margin-bottom: 15px;
    }
`
const Title = styled.h1`
    font-size: 1.3em;
`


const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    > * {
        margin-bottom: 8px;
    }
`

const InputLabel = styled.div`
    font-weight: 400;
`

const Input = styled.input`
    padding: 5px 10px;
    border-radius: 5px;
    color: ${({theme, userInput}) => userInput ? "white" : theme.lightergray};
    border: 1px solid ${({theme}) => theme.lightergray};
    font-weight: 600;

    &:focus{
        color: white;
    }
`

const Button = styled.button`
    background: ${({theme}) => theme.purple};
    padding: 5px 10px;
    border-radius: 10px;

    &:hover{
        cursor: pointer;
    }
    &:active{
        transform: scale(1.04);
    }
`

export const TaskDetailed = ({setTaskDetailed}) => {
    const [placeHolder, setPlaceHolder] = useState("e.g. Roadmap")
    return (
        <Wrapper>
            <Container>
                <XIco onClick={() => setTaskDetailed(false)}/>
                <Title>
                    Task Detailed
                </Title>
                <InputContainer>
                    <InputLabel>
                        Board name
                    </InputLabel>
                    <StyledInput placeholder={"e.g. Roadmap"} />
                </InputContainer>
                <Button>
                    Create Board
                </Button>
            </Container>
        </Wrapper>
    )
}

const StyledInput = ({placeholder}) => {
    const [input, setInput] = useState("")
    const [userInput, setUserInput] = useState(false)

    const handleChange = (e) => {
        setUserInput(true)
        setInput(e.target.value)
    }

    return (
        <Input 
            userInput={userInput}
            placeholder={placeholder}
            value={input}
            onChange={(e) => handleChange(e)}
        />
    )
}
