import { useContext , useState} from "react";
import React  from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
const { dispatch , currency } = useContext(AppContext)
const myValue = {
    currency : currency
}

const style = {border : " 1px solid #90EE90", borderradius : "5px", backgroundColor: "#90EE90",
                padding: "10px", color : "white"}
const style2 ={ color : "black"}
    return(
<select className="custom-select" id="inputGroupSelect01" style = {style} onChange ={() => dispatch({type: 'CHG_CURRENCY', payload: myValue})}>
<option value="Dollar" style = {style2} name="Dollar">$ Dollar</option>
<option value="Pound" style = {style2} name="Pound">£ Pound</option>
<option value="Euro" style = {style2} name="Euro">€ Euro</option>
<option value="Ruppee" style = {style2} name="Ruppee">₹ Ruppee</option>
</select>
    )
}

export default  Currency;