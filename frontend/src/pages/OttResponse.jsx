// import Comment from "../components/Comment"

import axios from "axios"
import { URL } from "../url"
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext"
import Response from "../components/Responses"
import Loader from "../components/Loader"
import Navbar from "../components/Navbar"


const OttResponse = () => {


    const ottId=useParams().id
    const {user}=useContext(UserContext)
    const [comments,setComments]=useState([])
    const [comment,setComment]=useState("")
     const [loader,setLoader]=useState(false)

    console.log(ottId)
    // const navigate=useNavigate()

    const fetchPostComments=async()=>{
        setLoader(true)
        try{
          const res=await axios.get(URL+"/api/responses/ott/"+ottId,{withCredentials:true})
          setComments(res.data)
          setLoader(false)
    
        }
        catch(err){
          setLoader(true)
          console.log(err)
        }
      }
    
      useEffect(()=>{
        fetchPostComments()
    
      },[ottId])
    
      const postComment=async(e)=>{
        e.preventDefault()
        try{
          const res=await axios.post(URL+"/api/responses/create",
          {response:comment,author:user.username,ottId:ottId,userId:user._id},
          {withCredentials:true})
          console.log(res.data)
          fetchPostComments()
           setComment("")
           window.location.reload(true)
    
        }
        catch(err){
             console.log(err)
        }
    
      }
    
  return (
    <>
    <Navbar/>
    {loader ? (
      <div className="h-[80vh] flex justify-center items-center w-full">
        <Loader />
      </div>
    ) : (
      <div className=" md:px-[200px] mt-12">
        <div className="p-4 bg-black">
          <div className="flex flex-col mt-4">
            <h3 className="mt-6 mb-4 font-bold text-white">Comments:</h3>
            {/* comment */}
            {comments?.map((c) => (
              <Response key={c._id} c={c} />
            ))}
            {/* <Comment/> */}
          </div>
          {/* write a comment */}
          <div className="flex flex-col mt-4 rounded-md md:flex-row">
            <input
              onChange={(e) => setComment(e.target.value)}
              type="text"
              placeholder="write a comment"
              className="md:w-[90%] outline-none px-4 mt-4 md:mt-0"
            />
            <button
              onClick={postComment}
              className="bg-blue-500 text-sm text-white px-2 py-2 md:w-[20%] mt-4 md:mt-0 rounded-sm"
            >
              Add Comment
            </button>
            <br/>
          </div>
        </div>
      </div>
    )}
  </>
  )
}

export default OttResponse