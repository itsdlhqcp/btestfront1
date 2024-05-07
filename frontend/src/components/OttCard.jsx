// import { Link } from "react-router-dom"
// import { IF } from "../url"


// /* eslint-disable react/prop-types */
// const OttCard = ({post}) => {
//     return (
      
//         <div className="relative flex w-full p-2 mt-5 space-x-3 bg-black rounded-t-lg">
//         {/* Image Card */}
//         <div className="relative w-full overflow-hidden rounded-lg">
//           <img src={IF+post.photo} alt="" className="object-cover w-full h-full" />
//           {/* Transparent Widget */}
//           <div className="absolute bottom-0 left-0 right-0 p-2 text-white bg-black bg-opacity-50">
//            <h2 className="font-extrabold text-center">{post.title}</h2>
//             <p className="font-mono text-center"><p>Release Date: {new Date(post.date).toString().slice(3,10)}</p></p>
//             {/* <p className="text-center">HELLO-WORLD</p> */}
//             <div className="items-center mt-2 space-x-4 font-semibold text-centerflex ">
              
//                   <div className="flex items-center justify-center space-x-1">
//                   {post.categories?.map((c,i)=>(
//                     <>
//                     <div key={i} className="px-2 py-0.4 font-mono bg-gray-700 rounded-lg">{c}</div>
//                     </>
//                       ))}
      
//                   </div> 
//             </div>
      
//           </div>
                          
//         </div>
                 
//       </div>
//        {/* comment box */}
//        <Link to={user?`/posts/post/${post._id}`:"/login"}>
//        <div className="px-0.5 text-white bg-black rounded-b-lg mb-1 pb-2">
      
//             <p className="font-bold text-center ">Read Comments</p>
           
//       </div>
//       <Link/>
//     </>
//     )
//   }
  
//   export default OttCard
  

  






// import { Link} from "react-router-dom";
// import { IF } from "../url";
// import { useContext, useState } from "react";
// import { UserContext } from "../context/UserContext";

// /* eslint-disable react/prop-types */
// const OttCard = ({ post }) => {

//   const {user}=useContext(UserContext)

//   const [rating, setRating] = useState(0);

//   const handleCardClick = () => {
//     // Logic to set the rating based on user interaction
    
//       setRating(4.9);
//       // setRating(res.rat);
//     };


//     // IMPLEMENTING EMOJI ANIME ********************************************************
    

 
  
//   return (
//     <>
//       <div className="relative flex w-full p-2 mt-5 space-x-3 bg-black rounded-t-lg">
//         {/* Image Card */}
//         <div className="relative w-full overflow-hidden rounded-lg" onClick={handleCardClick}>
//           <img src={IF + post.photo} alt="" className="object-cover w-full h-full" />
//           {/* Transparent Widget */}
//           <div className="absolute bottom-0 left-0 right-0 p-2 text-white bg-black bg-opacity-50">
//             <h2 className="font-extrabold text-center">{post.title}</h2>
//             <p className="font-mono text-center"><p>Release Date: {new Date(post.date).toString().slice(3, 10)}</p></p>
//             {/* <p className="text-center">HELLO-WORLD</p> */}
//             <div className="items-center mt-2 space-x-4 font-semibold text-centerflex ">

//               <div className="flex items-center justify-center space-x-1">
//                 {post.categories?.map((c, i) => (
//                   <div key={i} className="px-2 py-0.4 font-mono bg-gray-700 rounded-lg">{c}</div>
//                 ))}
//               </div>
//             </div>
           
//           </div>
//         </div>

//         <div className="absolute top-0 left-0 right-0 p-2 text-white bg-black bg-opacity-0">
//   <div>
//     {/* Display star icons based on the current rating */}
//     {[...Array(5)].map((_, index) => {
//       const filledStars = Math.floor(rating);
//       const hasHalfStar = rating - filledStars >= 0.5 && index === filledStars;
//       const isYellow = index < filledStars || hasHalfStar;
//       // const isGreen = index === filledStars && hasHalfStar;

//       return (
//         <span key={index} onClick={() => setRating(index + 1)}>
//           {index < filledStars && (
//             <span style={{ color: isYellow ? 'yellow' : 'green' }}>★</span>
//           )}
//           {hasHalfStar && <span style={{ color: 'green' }}>★</span>}
//           {index >= filledStars && <span>☆</span>}
//         </span>
//       );
//     })}
//     {/* Display the rating value */}
//     <span style={{ color: 'red', fontWeight: '650', fontSize: 'small' }}>  {rating.toFixed(1)}</span>
//   </div>
// </div>
        
//       </div>
//       {/* comment box */}
//       <Link to={user ? `/ott/${post._id}` : "/login"}>
//         <div className="px-0.5 text-white bg-black rounded-b-lg mb-1 pb-2">
//           <p className="font-bold text-center ">Read Comments</p>
//         </div>
//       </Link>
//     </>
//   );
// };

// export default OttCard;




/// implement only overall rating diaplay component in above code block





// import { Link, useParams } from "react-router-dom";
// import { IF, URL } from "../url";
// import { useContext, useEffect, useState } from "react";
// import { UserContext } from "../context/UserContext";
// import axios from "axios";

// /* eslint-disable react/prop-types */
// const OttCard = ({ post }) => {

//   const { user } = useContext(UserContext);
//   // const postId=useParams().id
//   const [rating, setRating] = useState(0);
//   const [clickCount, setClickCount] = useState(0);
//   const [averageRating, setAverageRating] = useState(0);

//   const handleCardClick = () => {
//     // Increment the click count
//     const newClickCount = clickCount + 1;
//     setClickCount(newClickCount);

//     // Calculate the rating based on the click count
//     const newRating = newClickCount % 5 === 0 ? 5 : newClickCount % 5;
//     setRating(newRating);
//   };


// // Fetch the average rating for the card from the backend
// const fetchAverageRating = async () => {

//   try{
//     const res=await axios.get(URL+"/api/otts/")
//     // setAverageRating(res.data.averageRating);
//     // setAverageRating(res.data.averageRating);

//     console.log(res.data.averageRating)

//     // console.log(res.data)
   
    
//   }catch(err){
//     console.log(err)
//   }
// }
//     useEffect(() => {
//        fetchAverageRating();
//      }, []);

//   return (
//     <>
//       <div className="relative flex w-full p-2 mt-5 space-x-3 bg-black rounded-t-lg ">
//         {/* Image Card */}
//         <div className="relative w-full overflow-hidden rounded-lg" onClick={handleCardClick}>
//           <img src={IF + post.photo} alt="" className="object-cover w-full h-full" />
//           {/* Transparent Widget */}
//           <div className="absolute bottom-0 left-0 right-0 p-2 text-white bg-black bg-opacity-50 pointer-events-none">
            
//             <h2 className="font-extrabold text-center ">{post.averageRating}</h2>
           
           
//             <p className="font-mono text-center">Release Date: {new Date(post.date).toString().slice(3, 10)}</p>
//             {/* <p className="text-center">HELLO-WORLD</p> */}
//             <div className="items-center mt-2 space-x-4 font-semibold text-centerflex ">

//               <div className="flex items-center justify-center space-x-1">
//                 {post.categories?.map((c, i) => (
//                   <div key={i} className="px-2 py-0.4 font-mono bg-gray-700 rounded-lg">{c}</div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>

//         <div className="absolute top-0 left-0 right-0 p-2 text-white bg-black bg-opacity-0">
//           <div>
//             {/* Display star icons based on the current rating */}
//             {[...Array(5)].map((_, index) => {
//               const filledStars = Math.floor(rating);
//               const hasHalfStar = rating - filledStars >= 0.5 && index === filledStars;
//               const isYellow = index < filledStars || hasHalfStar;
//               // const isGreen = index === filledStars && hasHalfStar;

//               return (
//                 <span key={index} onClick={() => setRating(index + 1)}>
//                   {index < filledStars && (
//                     <span style={{ color: isYellow ? 'yellow' : 'green' }}>★</span>
//                   )}
//                   {hasHalfStar && <span style={{ color: 'green' }}>★</span>}
//                   {index >= filledStars && <span>☆</span>}
//                 </span>
//               );
//             })}
//             {/* Display the rating value */}
//             <span style={{ color: 'red', fontWeight: '650', fontSize: 'small' }}>  {rating.toFixed(1)}</span>
//           </div>
//         </div>

//       </div>
//       {/* comment box */}
//       <Link to={user ? `/ott/${post._id}` : "/login"}>
//         <div className="px-0.5 text-white bg-black rounded-b-lg mb-1 pb-2">
//           <p className="font-bold text-center ">Read Comments</p>
//         </div>
//       </Link>
//     </>
//   );
// };

// export default OttCard;






import { Link } from "react-router-dom";
import { IF } from "../url";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";


/* eslint-disable react/prop-types */
const OttCard = ({ post }) => {

  const { user } = useContext(UserContext);
  const [rating, setRating] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const handleCardClick = () => {
    // Increment the click count
    const newClickCount = clickCount + 1;
    setClickCount(newClickCount);

    // Calculate the rating based on the click count
    const newRating = newClickCount % 5 === 0 ? 5 : newClickCount % 5;
    setRating(newRating);
  };

  return (
    <>
      <div className="relative flex w-full p-2 mt-5 space-x-3 bg-black rounded-t-lg ">
        {/* Image Card */}
        <div className="relative h-[235px] w-full overflow-hidden rounded-lg" onClick={handleCardClick}>
          <img src={IF + post.photo} alt="" className="object-cover w-full h-full" />
          {/* Transparent Widget */}
          <div className="absolute bottom-0 left-0 right-0 p-2 text-white bg-black bg-opacity-50 pointer-events-none">
            
            <h2 className="font-extrabold text-center ">{post.title}</h2>
           
           
            <p className="font-mono text-center">Release Date: {new Date(post.date).toString().slice(3, 10)}</p>
            {/* <p className="text-center">HELLO-WORLD</p> */}
            <div className="items-center mt-2 space-x-4 font-semibold text-centerflex ">

              <div className="flex items-center justify-center space-x-1">
                {post.categories?.map((c, i) => (
                  <div key={i} className="px-2 py-0.4 font-mono bg-gray-700 rounded-lg">{c}</div>
                ))}
              </div>
            </div>

          </div>
        </div>

        <div className="absolute top-0 left-0 right-0 p-2 text-white bg-black bg-opacity-0">
          <div>
            {/* Display star icons based on the current rating */}
            {[...Array(5)].map((_, index) => {
              const filledStars = Math.floor(rating);
              const hasHalfStar = rating - filledStars >= 0.5 && index === filledStars;
              const isYellow = index < filledStars || hasHalfStar;
              // const isGreen = index === filledStars && hasHalfStar;

              return (
                <span key={index} onClick={() => setRating(index + 1)}>
                  {index < filledStars && (
                    <span style={{ color: isYellow ? 'yellow' : 'green' }}>★</span>
                  )}
                  {hasHalfStar && <span style={{ color: 'green' }}>★</span>}
                  {index >= filledStars && <span>☆</span>}
                </span>
              );
            })}
            {/* Display the rating value */}
            {clickCount > 0 ? (
              <span style={{ color: 'red', fontWeight: '650', fontSize: 'small' }}>  {rating.toFixed(1)}</span>
            ) : (
              <span style={{ color: 'red', fontWeight: '650', fontSize: 'small' }}>  {post.averageRating}/5</span>


            )}
          </div>
        </div>

      </div>
      {/* comment box */}
      <Link to={user ? `/ott/${post._id}` : "/login"}>
        <div className="px-0.5 text-white bg-black rounded-b-lg mb-1 pb-2">
          <p className="font-bold text-center ">Read Comments</p>
        </div>
      </Link>
    </>
  );
};

export default OttCard;







 