import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from "./components/ThemeProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
			<body className="bg-transparent dark:bg-gray-400">
				<App />
			</body>
		</ThemeProvider>
  </React.StrictMode>
)
