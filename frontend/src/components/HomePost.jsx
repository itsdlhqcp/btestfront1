/* eslint-disable react/prop-types */
// import { IF } from "../url"



// const HomePost = ({post}) => {
//   return (
//     <div className="flex w-full max-w-screen-xl mt-4 space-x-4 bg-gray-200 rounded-lg">
//        {/* left */}
//        <div className="w-[32%] h-auto flex justify-center items-center">
//        <img src={IF+post.photo} alt="" className="object-cover w-full h-full"/>
//        </div>
//         {/* right */}
//         <div className="flex flex-col w-[65%]">
//         <h1 className="mb-1 text-xl font-bold md:mb-2 md:text-2xl">{post.title}</h1>
//         <div className="flex items-center justify-between mb-2 text-sm font-semibold text-gray-500 md:mb-4">
//             <p>@{post.username}</p>
//             <div className="flex space-x-2">
//                 <p>{new Date(post.updatedAt).toString().slice(0,10)}</p>
//                 <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
//             </div>
//         </div>
//         <p className="text-sm md:text-lg">{post.desc.slice(0,200)+" ...Read more"}</p>
//         </div>

//     </div>
//   )
// }

// export default HomePost



// /* eslint-disable react/prop-types */
import {IF} from '../url'


const HomePosts = ({post}) => {
  return (
    <div className="flex w-full mt-8 space-x-4">
    {/* left */}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
    <img src={IF+post.photo} alt="" className="object-cover w-full h-full"/>
    </div>
    {/* right */}
    <div className="flex flex-col w-[65%]">
      <h1 className="mb-1 text-xl font-bold md:mb-2 md:text-2xl">
      {post.title}
      </h1>
      <div className="flex items-center justify-between mb-2 text-sm font-semibold text-gray-500 md:mb-4">
       <p>@{post.username}</p>
       <div className="flex space-x-2 text-sm">
       <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
       <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
       </div>
      </div>
      <p className="text-sm md:text-lg">{post.desc.slice(0,200)+" ...Read more"}</p>
    </div>

    </div>
  )
}

export default HomePosts