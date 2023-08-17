
import React, { useContext,useState } from 'react';
import { AppContext} from '../context/AppContext';


const Budget = () => {
    const [budget, setBudget] = useState(2000);
    const { dispatch ,expenses,currency} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudget = (e) => {
       
        if(e >20000) {
            alert("The value cannot exceed 20000");
            setBudget(totalExpenses);
            return;
        }
        if(totalExpenses>e){
              alert("you cannot set budget less than total expenses")
              setBudget(totalExpenses);
              return;
        }
        
        setBudget(e);
       dispatch({
            type: 'SET_BUDGET',
            payload: budget,
        });
    };
   
    return (
      <div className='alert alert-secondary'>
         <div style={{display:"flex"}}>
           <label htmlFor='Budget:'>Budget:{currency}</label>
            <input
                        required='required'
                        type='number'
                        id='cost'
                        value={budget}
                        step={10}
                        style={{ marginLeft: '1rem' , size: 10}}
                        onChange={(event) => handleBudget(event.target.value)}
                        >
            </input>
        </div>       
    </div>
     
    );
};
export default Budget;