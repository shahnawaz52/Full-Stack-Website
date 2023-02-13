import { useSelector } from 'react-redux'
import Header from '../expenses/Header'
import Balance from '../expenses/Balance'
import IncomeExpenses from '../expenses/IncomeExpenses'
import TransactionList from '../expenses/TransactionList'
import AddTransaction from '../expenses/AddTransaction'
import { addTransaction } from "../redux/actions";

const Main = () => {
    const transactions = useSelector((state) => state.transactions);
    return (
        <>
            <Header />
                <div className="container">
                    <Balance />                     
                    <IncomeExpenses />
                    <TransactionList />
                    <AddTransaction id={transactions[0] ? transactions[0].id + 1 : 1} addTransaction={(transaction) => addTransaction(transaction)} />
            </div>
        </>
    )
}

export default Main
