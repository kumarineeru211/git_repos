
import './App.css'
import React , {useState} from 'react'
import Select from 'react-select'

function App() {
  const[value , setValue] = useState(null)
   const options = [
    {value:"Chocolate" , label: "Chocolate"},
    {value:"Candy" , label: "Candy"},
    {value:"Ice-creame" , label: "Ice-creame"},
    {value:"Burger" , label: "Burger"},
    {value:"Papacy" , label: "Papacy"},
   ]

  return (
    <div  style={{margin:'10px' , width:'200px'}}>
      <Select options={options}
        defaultValue={value}
        isSearchable
        placeholder="Search your items"
        onChange={setValue}
        isMulti
        noOptionsMessage={()=>"No option found"}
        styles={{
          placeholder:(baseStyles , state)=>({
            ...baseStyles , 
            color:'red'
          }),
          dropdownIndicator:()=>({
            color:'red'
          }),
          control:(baseStyles)=>({
            ...baseStyles,
            borderColor:'red'
          }),
          multiValueRemove : (baseStyles,state)=>({
            ...baseStyles ,
            color:'green',
            backgroundColor:state.isFocused? "black":"green"
          })
        }}
      />
    </div>
  )
}

export default App
