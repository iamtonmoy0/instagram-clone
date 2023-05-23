import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FirebaseContext } from './context/firebase.js'
import { FieldValue,firebase } from './lib/firebase.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{firebase,FieldValue}}>
      <App />
    </FirebaseContext.Provider>
    
  </React.StrictMode>,
)
