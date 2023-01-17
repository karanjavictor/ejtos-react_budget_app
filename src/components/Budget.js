import React, {useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = (props) => {
    const { budget ,dispatch } = useContext(AppContext);

    const alterBudget = () => {
        dispatch({
            type: 'SET_BUDGET',
            payload: props.budget,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget:£
            <input
                        required='required'
                        type='number'
                        id ="budget"
                        value={budget}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={alterBudget}
                        step="10">
                        </input>
            </span>
        </div>
    );
};

export default Budget;
