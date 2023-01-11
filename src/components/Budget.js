import React, {useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, setBudget } = useContext(AppContext);


    return (
        <div className='alert alert-secondary'>
            <span>Budget:£
            <input
                        required='required'
                        type='number'
                        id ="budget"
                        value={budget}
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={e => setBudget(e.target.value)}>
                        </input>
            </span>
        </div>
    );
};

export default Budget;
