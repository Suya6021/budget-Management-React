import React, { useContext } from 'react';

import { AppContext } from '../context/AppContext';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);

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

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><AddCircleRoundedIcon onClick={event=> increaseAllocation(props.name)}>+</AddCircleRoundedIcon></td>
        <td><RemoveCircleRoundedIcon onClick={event=> decreaseAllocation(props.name)}>-</RemoveCircleRoundedIcon></td>
        <td><Button variant="outlined" startIcon={<DeleteIcon />} onClick={handleDeleteExpense}>
  Delete
</Button></td>
        </tr>
    );
};

export default ExpenseItem;
