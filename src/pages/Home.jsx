import Introduction from "../Components/Introduction"
import MyServices from "../Components/MyServices"
import AboutMe from "../Components/AboutMe"
import MyWork from "../Components/MyWork"
import { useLocation } from "react-router-dom"
import React from "react"


export default function Home() {

  const myWorkRef = React.useRef(null) 
  const location = useLocation()

  React.useEffect(() => {
    if (location.pathname === "/mywork" && myWorkRef.current) {
      myWorkRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location])


  return (
    <>
    <Introduction 
      name = "Jane Smith"
      title = "front-end dev"
      />
    <MyServices/>
    <AboutMe/>
    <MyWork ref={myWorkRef}/>
    </>
  )
}


