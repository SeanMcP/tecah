import React from 'react'
import { AppStoreProvider } from './store/app/AppStore'

function App() {
    return (
        <AppStoreProvider>
            <div className="App">Hello world</div>
        </AppStoreProvider>
    )
}

export default App
