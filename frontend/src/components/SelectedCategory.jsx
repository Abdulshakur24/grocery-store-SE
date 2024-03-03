import React from 'react'

const SelectedCategory = (select) => {
  return (
    <select>
        <option value="all">All Categories</option>
<option value="fruits">Fruits</option>
<option value="vegetables">Vegetables</option>
<option value="juices">Juices</option>
<option value="smoothies">Smoothies</option>
<option value="bread">Bread</option>
<option value="cheese">Cheese</option>
    </select>
  )
}

export default SelectedCategory