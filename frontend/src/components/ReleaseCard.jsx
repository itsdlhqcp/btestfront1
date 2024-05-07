import { IF } from "../url"

/* eslint-disable react/prop-types */
const ReleaseCard = ({post}) => {
    return (
       
  <div className="relative flex w-full p-2 mt-5 space-x-3 bg-gray-200 rounded-lg">
  {/* Image Card */}
  <div className="relative h-[235px] w-full overflow-hidden rounded-lg">
    <img src={IF+post.photo} alt="" className="object-cover w-full h-full" />
    {/* Transparent Widget */}
    <div className="absolute bottom-0 left-0 right-0 p-2 text-white bg-black bg-opacity-50">
    <h2 className="font-semibold text-center">{post.title}</h2>
    <h2 className="font-semibold text-center">Release Date: {new Date(post.date).toString().slice(3,10)}</h2>
    
     
    </div>
  </div>
</div>
    )
  }
  
  export default ReleaseCard


  