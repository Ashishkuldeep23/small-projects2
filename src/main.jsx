import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)


// // // By this way we can render two apps from one file.
// // But render div should be different , if you rendering two apps at same div then latest one going to apply.
// ReactDOM.createRoot(document.getElementById("root")).render(<h1>I'm Ashish , Checking</h1>)
