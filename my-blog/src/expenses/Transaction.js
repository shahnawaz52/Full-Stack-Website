import { useDispatch } from "react-redux";
import { deleteTransaction } from "../redux/actions";


const Transaction = ({ transaction }) => {
    const dispatch = useDispatch()
    
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick={() => dispatch(deleteTransaction(transaction.id))} className="delete-btn">X</button>
        </li>
    )
}

export default Transaction;
