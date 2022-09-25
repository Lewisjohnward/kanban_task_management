import {useState} from "react"
import styled from "styled-components"
import ReactDOM from "react-dom"

const modalPlaceholderElement = document.getElementById("modal-placeholder")

export const Modal = ({children}) => {
    return ReactDOM.createPortal(
        children
        , modalPlaceholderElement
    )
}
