import Navbar from "../components/Navbar"
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { URL } from "../url"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const CreateRelease = () => {


    const [title,setTitle]=useState("")
    const [date,setDate]=useState("")
    const [file,setFile]=useState(null)
    const {user} = useContext(UserContext);
    const navigate=useNavigate()

    const handleCreate=async (e)=>{
        e.preventDefault()
        const post={
          title,
          date,
          username:user.username,
          userId:user._id
        }

        if(file){
          const data=new FormData()
          const filename=Date.now()+file.name
          data.append("img",filename)
          data.append("file",file)
          post.photo=filename
          // console.log(data)
          //img upload
          try{
            const imgUpload=await axios.post(URL+"/api/upload",data)
            console.log(imgUpload.data)
          }
          catch(err){
            console.log(err)
          }
        }

              //post upload
              console.log(post)
              try{
                const res=await axios.post(URL+"/api/releases/create",post,{withCredentials:true})
              //  navigate("/posts/post/"+res.data._id)
                navigate("/release")
                console.log(res.data)
      
              }
              catch(err){
                console.log(err)
              }
    }
  
  return (
    <div>
        <Navbar />
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="px-6 md:px-[200px] mt-8">
        <h1 className='mt-8 text-xl font-bold md:text-2xl'>Create an Release post</h1>
            <form className="flex flex-col w-full mt-4 space-y-4 md:space-y-8">
                <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Enter Release title' className='px-4 py-2 outline-none'/>
                <h5>Choose Release Image : </h5>
                <p className="text-green"># Image of 1200*800 will be best-fit @UI</p>
                <p className="text-green"># Try croping if square type img</p>
                <input onChange={(e)=>setFile(e.target.files[0])} type="file"  className='px-4'/>
                <textarea onChange={(e)=>setDate(e.target.value)} rows={1} cols={10} className="px-4 py-2 outline-none" placeholder='Enter Date in DD/MM/YYYY'/>
                <button onClick={handleCreate} className='bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>Create</button>
            </form>
        </div>
        <br/>
        
    </div>
  )
}

export default CreateRelease;