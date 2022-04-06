import React,{ useEffect, useState } from 'react'
import PropTypes from 'prop-types';


 export const AddCategories = ({setCategories}) => {

  const [inputvalue, Setinputvalue] = useState("Hola mundo");

 const handleInputChange = (e)=> {
        Setinputvalue(e.target.value)
 }

 const handleSubmit = (e)=> {
  e.preventDefault()

  if(inputvalue.trim().length > 2) {
    setCategories(cats =>[inputvalue,...cats]);
    Setinputvalue("");
  }
 }

 return <form onSubmit={ handleSubmit }>
 <input type="text"
        value={inputvalue}
        onChange= { handleInputChange } />
        
</form>

}
AddCategories.propTypes ={
  setCategories:PropTypes.func.isRequired
}


  




