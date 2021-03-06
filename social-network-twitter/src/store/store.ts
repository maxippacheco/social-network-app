import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from '../reducers/rootReducer';
import { useDispatch } from 'react-redux';



export const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware( thunk )
	)
	
)

// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// type for the reducers
export type RootState = ReturnType<typeof store.getState>;
// type for dispatch actions
export type AppDispatch = typeof store.dispatch;
