import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import {ModalProvider} from "./context/ModalContext.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ModalProvider>
            <App/>
        </ModalProvider>
    </React.StrictMode>,
)
