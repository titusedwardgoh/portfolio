import Layout from "./Components/Layout.jsx"
import Home from "./pages/Home.jsx"
import PortfolioItem from "./pages/PortfolioItem.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout/>}>
          <Route index element = {<Home/>}/>
          <Route path = "mywork" element = {<Home/>}/>
          <Route path = "mywork/:id" element = {<PortfolioItem/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


