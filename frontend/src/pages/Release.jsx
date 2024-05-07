import { useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ReleaseCard from "../components/ReleaseCard"
import axios from "axios"
import { URL } from "../url"
// import TriNav from "../components/TriNav"

const Release = () => {

  const [releases, setReleases]=useState([])

    const fetchRelase=async()=>{
      try{
        const res=await axios.get(URL+"/api/releases/")
        // console.log(res.data)
        setReleases(res.data)

      }catch(err){
        console.log(err)
      }
    }

    useEffect(()=>{
      fetchRelase()
    },[])

  return (
    <>
    <Navbar/>
    {/* <TriNav/> */}
     <div className="px-2 md:px-[200px]"> 
        <br/>
        <br/>
        <br/>
        <br/>
        {releases.map((post)=>(
          <ReleaseCard key={post._id} post={post}/>
        ))}
        {/* <ReleaseCard/>
        <ReleaseCard/>
        <ReleaseCard/>
        <ReleaseCard/>     */}
    </div>
    <Footer/>
    
    </>
   
  )
}

export default Release