import React, { useState} from 'react'

const SelectWidget = ({ day, setDay}) => {
    
    const handleChange = (e) => {
        console.log(e.target.value)
        setDay(e.target.value)
    }

  return (
    <form>
        <select value={day} onChange={handleChange}>
                  <option value="7">Last 7 days</option>
                  <option value="15">Last 15 days</option>
                  <option value="30">Last 1 month</option>
            </select>
    </form>
  )
}

export default SelectWidget