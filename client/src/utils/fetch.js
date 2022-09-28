import {useState, useEffect} from "react"

export const UseGetBoards = () => {
    const [boardData, setBoardData] = useState(null)
    useEffect(() => {
        fetch ("http://localhost:5000/api/boards/", 
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                cache: 'no-cache' ,
                body: JSON.stringify({username: "lewis"})
            }
        )
            .then(res => res.json())
            .then(data => setBoardData(data))

    }, [])

    return boardData
}
