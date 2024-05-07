
import axios from "axios"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import OttCard from "../components/OttCard"
import { URL } from "../url"
import { useEffect, useState } from "react"
// import Loader from "../components/Loader"

const Ott = () => {

  const [otts,setOtts]=useState([])
  // const [loader,setLoader]=useState(false)

 
     const fetchOtt=async()=>{
      // setLoader(true);
        try{
          const res=await axios.get(URL+"/api/otts/")
        //  console.log(res.data)
        setOtts(res.data);
        // setLoader(false);
        }catch(err){
          console.log(err)
          // setLoader(true);
        }

     }

     useEffect(()=>{
      fetchOtt()
     },[])

  
  return (
    <>
    <Navbar/>
    {/* <TriNav/> */}
     <div className="px-2 md:px-[200px]"> 
        <br/>
        <br/>
        <br/>
        
        <h1>Ott World</h1>
       {otts.map((post)=>(
          <OttCard key={post._id} post={post}/>
       ))}
     
     
      
    </div>
    <br/>
    <Footer/>
    
    </>
   
  )
}

export default Ott