import { createStore } from 'redux'
import rootReducer from '../reducers'
const dev = false;

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState)

    if (module.hot && dev) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}