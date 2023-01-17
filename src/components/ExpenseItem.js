import React, { useContext } from 'react';
import { TiDelete  } from 'react-icons/ti';
import { FaMinusCircle , FaPlusCircle} from 'react-icons/fa'
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }
    const style = { color : "red", fontSize: "1.5em"}
    const style2 = { color : "green", fontSize: "1.5em"}


    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td>< FaPlusCircle style = {style2} onClick={event=> increaseAllocation(props.name)}>+</FaPlusCircle></td>
        <td>< FaMinusCircle style = {style} onClick={event=> decreaseAllocation(props.name)}>-</FaMinusCircle></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
