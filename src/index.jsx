import React from 'react'
import { render } from 'react-dom'
import 'antd/dist/antd.less'
import App from './App'
import { dataAtom, dataMeanAtom } from './state'
import useCsv from './hooks/useCsv'

const Root = () => {
  useCsv('/data.csv', dataAtom)
  useCsv('/data-mean.csv', dataMeanAtom)

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

const rootElement = document.getElementById('root')
render(<Root />, rootElement)
