import { useState } from "react"

const InputTodo = ({  onClick }) => {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }
  const handleOnClick = () => {
    onClick(inputValue)
    setInputValue('')
  }
  return <>
    <input type="text" placeholder="masukan todo" onChange={handleInputChange} value={inputValue}/>
    <button style={btnStyle} onClick={handleOnClick}>tambah</button>
  </>
}
const btnStyle = {
    paddingInline : '5px',
    paddingBlock : '3px',
}

export default InputTodo;