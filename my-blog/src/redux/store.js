import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { legacy_createStore as createStore} from 'redux'
 
import expenseTrackerReducer from './reducer'
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, expenseTrackerReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
