
import Navbar from "../components/Navbar"
import {ImCross} from 'react-icons/im'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { URL } from "../url"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const CreateOtt = () => {


    const [title,setTitle]=useState("")
    const [date,setDate]=useState("")
    const [file,setFile]=useState(null)
    const {user} = useContext(UserContext);
    const [cat,setCat]=useState("")
    const [cats,setCats]=useState([])
    const navigate=useNavigate()

     const deleteCategory=(i)=>{
        let updatedCats=[...cats]
         updatedCats.splice(i)
         setCats(updatedCats)
     }

     const addCategory=()=>{
        let updatedCats=[...cats]
        updatedCats.push(cat)
        setCat("")
        setCats(updatedCats)
        
     }

    const handleCreate=async (e)=>{
        e.preventDefault()
        const post={
          title,
          date,
          username:user.username,
          userId:user._id,
          categories:cats
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
                const res=await axios.post(URL+"/api/otts/create",post,{withCredentials:true})
              //  navigate("/posts/post/"+res.data._id)
                navigate("/otts")
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
        <h1 className='mt-8 text-xl font-bold md:text-2xl'>Create an OTT post</h1>
            <form className="flex flex-col w-full mt-4 space-y-4 md:space-y-8">
                <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Enter OTT title' className='px-4 py-2 outline-none'/>
                <h5>Choose OTT Image : </h5>
                <p className="text-green"># Image of 1200*800 will be best-fit @UI</p>
                <p className="text-green"># Try croping if square type img</p>
                <input onChange={(e)=>setFile(e.target.files[0])} type="file"  className='px-4'/>
                <div className="flex flex-col">
                <div className="flex flex-col items-center space-x-4 md:space-x-8">
                <input value={cat} onChange={(e)=>setCat(e.target.value)}  className='px-4 py-2 outline-none' placeholder='Enter release platforms' type="text"/>
                  <div onClick={addCategory} className='px-4 py-2 font-semibold text-white bg-black cursor-pointer'>Add</div>  
                </div>
                    {/* categories */}
                    
                <div className="flex px-4 mt-3">
                    {cats?.map((c,i)=>(
                         <div key={i} className="flex items-center justify-center px-2 py-1 mr-4 space-x-2 bg-gray-200 rounded-md">
                         <p>{c}</p>
                         <p onClick={()=>deleteCategory(i)} className="p-1 text-sm text-white bg-black rounded-full cursor-pointer"><ImCross/></p>
                     </div>
                    ))}
                </div>
                </div>   
                <textarea onChange={(e)=>setDate(e.target.value)} rows={1} cols={10} className="px-4 py-2 outline-none" placeholder='Enter Date in DD/MM/YYYY'/>
                <button onClick={handleCreate} className='bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>Create</button>
            </form>
        </div>
        <br/>
        
    </div>
  )
}

export default CreateOtt;