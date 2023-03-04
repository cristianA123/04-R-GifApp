import React, { useState } from 'react'

export const AddCategory = ({setCategories, onNewCategory}) => {

    const [inputValue, setInputValue] = useState('Goku')

    const changeInput = ({target}) => { 

        setInputValue(target.value)
     }

     const onSubmit = (event) => {
        event.preventDefault()
        console.log(inputValue);
        if (inputValue.trim().length <= 1) return; 
        // setCategories( (e) => [...e, inputValue])
        onNewCategory(inputValue.trim())
        setInputValue('')
     }


  return (
    <>
        <form onSubmit={onSubmit}>

            <input 
                type="text" 
                placeholder='Buscar ...' 
                value={inputValue}
                // onChange={()=>setInputValue(event.target.value)}
                // onChange={changeInput} ....1
                onChange={ (event) => changeInput(event) }  // ....2
                //* 1 y 2 son iguales
                />

        </form>
    </>
  )
}
