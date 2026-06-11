import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // ★ .js を削除しました
import './index.css'

// ★ root の後ろに ! を追加してエラーを回避しました
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)