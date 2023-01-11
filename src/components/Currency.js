import { useState } from "react";
import React  from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
const [ setName ]= useState('');
    return(
<select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(`Currency(${event.target.value})`)}>
<option defaultvalue="Currency" name="Currency">Currency()</option>
<option value="Dollar" name="Dollar">$ Dollar</option>
<option value="Pound" name="Pound">£ Pound</option>
<option value="Euro" name="Euro">€ Euro</option>
<option value="Ruppee" name="Ruppee">₹ Ruppee</option>
</select>
    )
}

export default  Currency;