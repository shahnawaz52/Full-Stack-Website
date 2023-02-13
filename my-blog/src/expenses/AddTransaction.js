import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { addTransaction } from "../redux/actions";

const AddTransaction = ({ id, addTransaction }) => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");
    const [transactionInfo, setTransactionInfo] = useState({expense: []});

    const addExpense = async () => {
        const response = await axios.post(`/api/expense`, {
            text: text,
            amount: amount,
        });
        const updatedExpense = response.data;
        setTransactionInfo(updatedExpense);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const newTransaction = {
            id: id,
            text,
            amount: +amount
        }
        dispatch(addTransaction(newTransaction))
        setTransactionInfo(newTransaction);
        setText('');
        setAmount('');
    }
    return (
        <>
            <h3>Add new Transaction</h3>    
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br/>
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn" onClick={addExpense}>Add Transaction</button>
            </form>
        </>

    )
}

export default AddTransaction;