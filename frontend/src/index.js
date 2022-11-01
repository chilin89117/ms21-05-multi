import {createRoot} from 'react-dom/client'

import './index.css'
import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'))   // old version of React

const root = createRoot(document.getElementById('root'))   // new in React 18
root.render(<App />)
