import React from 'react'
import { AppStoreProvider } from 'store/app/AppStore'
import Router from 'routing/Router'

function App() {
    return (
        <AppStoreProvider>
            <Router />
        </AppStoreProvider>
    )
}

export default App
