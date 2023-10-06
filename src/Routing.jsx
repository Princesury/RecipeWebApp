import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import App from './App'
import Detail from './Components/detail'

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  )
}

export default Routing;