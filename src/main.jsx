import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { HashRouter } from 'react-router-dom'

// import store from './components/store.js'

// import { Provider } from 'react-redux'

// // // Now i'm using provider in app.js on component level only 
// // // Because i'm ging to use two store.


ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>

    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}

  </HashRouter>
)


// // // By this way we can render two apps from one file.
// // But render div should be different , if you rendering two apps at same div then latest one going to apply.
// ReactDOM.createRoot(document.getElementById("root")).render(<h1>I'm Ashish , Checking</h1>)
