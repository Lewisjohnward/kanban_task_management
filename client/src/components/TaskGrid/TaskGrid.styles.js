import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    color: white;
    height: 90%;
    margin-top: 10px;
    margin-left: 20px;

    > * {
        margin-right: 20px;
    }
`

export const AddNewColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0px 60px;

    background: ${({theme}) => theme.lightgray};
    border-radius: 5px;

    &:hover{
        cursor: pointer;
        outline: 1px solid ${({theme}) => theme.whiteOpac};
    }
`

export const Text = styled.div`
    font-weight: 600;
`
export const ColumnStyled = styled.div`
`

export const Dot = styled.div`
    width: 12px;
    height: 12px;
    border-radius: 8px;
    background: ${({color}) => color};
`

export const ColumnHeader = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;

    margin-bottom: 10px;

    > * {
        margin-right: 10px;
    }
`

export const ColumnName = styled.div`
    text-transform: uppercase;
    opacity: 0.6;
    letter-spacing: 5px;
`
export const TaskStyled = styled.div`
    background: ${({theme}) => theme.lightgray};
    padding: 8px 60px;
    border-radius: 10px;
    margin-bottom: 10px;

    &:hover{
        cursor: pointer;
        transform: scale(1.01);
    }
`

export const TaskName =  styled.h2`
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 5px;
`

export const Subtasks = styled.h4`
    font-size: 0.8rem;
    font-weight: 800;
    opacity: 0.3;
`


