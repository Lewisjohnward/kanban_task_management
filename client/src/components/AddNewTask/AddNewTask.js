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
    width: 350px;
    background: ${({theme}) => theme.lightgray};
    display: flex;
    flex-direction: column;
    border-radius: 5px;

    padding: 20px 50px;

    > * {
        margin-bottom: 10px;
    }
`
const Title = styled.h1`
    font-size: 1.3em;
`


const InputContainer = styled.div`
    display: flex;
    flex-direction: column;

    > * {
        margin-bottom: 2px;
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
    font-weight: 600;

    &:hover{
        cursor: pointer;
    }
    &:active{
        transform: scale(1.04);
    }
`

const WhiteButton = styled(Button)`
    background: white;
    color: ${({theme}) => theme.lightergray};
`

const TextArea = styled.textarea`
    padding: 5px 10px;
    height: 100px;
    white-space: normal;
    resize: none;
    border-radius: 5px;
    color: ${({theme, userInput}) => userInput ? "white" : theme.lightergray};
    border: 1px solid ${({theme}) => theme.lightergray};
    font-weight: 600;
`

export const AddNewTask = ({setAddNewTask}) => {
    const [task, setTask] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("")


    return (
        <Wrapper>
            <Container>
                <XIco onClick={() => setAddNewTask(false)}/>
                <Title>
                    Add New Task!
                </Title>

                <InputContainer>
                    <InputLabel>
                        Task
                    </InputLabel>
                    <Input 
                        value={task}
                        placeholder={"e.g. Take coffee break"} 
                        onChange={(e) => setTask(e.target.value)}
                    />
                </InputContainer>

                <InputContainer>
                    <InputLabel>
                        Description
                    </InputLabel>
                    <TextArea 
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder={"e.g. It's always good to take a break. This 15 minute break will recharge the batteries a little"} 
                    />
                    {description}
                </InputContainer>

                <InputContainer>
                    <InputLabel>
                        Subtasks
                    </InputLabel>
                    <Input placeholder={"e.g. Make a coffee"} />
                    <WhiteButton>
                        + Add New Subtask
                    </WhiteButton>
                </InputContainer>

                <InputContainer>
                    <InputLabel>
                        Status
                    </InputLabel>
                    <select onChange={(e) => setStatus(e.target.value)}>
                        <option value="fruit">Fruit</option>
                        <option value="vegetable">Vegetable</option>
                    </select>
                </InputContainer>

                <Button>
                    Create Task
                </Button>
            </Container>
        </Wrapper>
    )
}

//const StyledInput = ({placeholder}) => {
//    const [input, setInput] = useState("")
//    const [userInput, setUserInput] = useState(false)
//
//    const handleChange = (e) => {
//        setUserInput(true)
//        setInput(e.target.value)
//    }
//
//    return (
//        <Input 
//            userInput={userInput}
//            placeholder={placeholder}
//            value={input}
//            onChange={(e) => handleChange(e)}
//        />
//    )
//}
