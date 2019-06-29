import React from 'react'
import { initialState, reducer } from './AppReducer'

const AppStore = React.createContext()

export function AppStoreProvider({ children }) {
    const store = React.useReducer(reducer, initialState)
    return <AppStore.Provider value={store}>{children}</AppStore.Provider>
}

export function useAppStore() {
    const store = React.useContext(AppStore)
    if (!store) {
        throw Error('Calling `useAppStore()` outside of `AppStoreProvider`')
    }
    return store
}
