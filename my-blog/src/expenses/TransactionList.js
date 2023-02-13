import Transaction from "./Transaction";
import { useSelector } from "react-redux";

const TransactionList = () => {
    const transactions = useSelector((state) => state.transactions)
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
            </ul>
        </>
    )
}

export default TransactionList;
