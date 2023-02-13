import { ADD_TRANSACTION } from "./actions"
import { DELETE_TRANSACTION } from "./actions"

const initialState = {
    transactions: []
}

const expenseTrackerReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}

export default expenseTrackerReducer
