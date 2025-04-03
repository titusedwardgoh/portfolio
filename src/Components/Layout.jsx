import {Outlet} from "react-router-dom"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import useToggle from "../hooks/useToggle"

export default function Layout() {

    const [on, toggle] = useToggle(false)

    return (
        <>
        <Header on = {on} toggle = {toggle}/>
        <Outlet/>
        <Footer/>
        </>
    )
}