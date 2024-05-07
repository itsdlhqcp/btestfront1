

const ProfilePosts = () => {
  return (
    <div className="flex w-full mt-8 space-x-4">
       {/* left */}
       <div className="w-[35%] h-[200px] flex justify-center items-center">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwbnTZs4YLKIt3eAelwShiBMkZtyWELWz1Dg&usqp-CAU" alt="" className="object-cover w-full h-full"/>
       </div>
        {/* right */}
        <div className="flex flex-col w-[65%]">
        <h1 className="mb-1 text-xl font-bold md:mb-2 md:text-2xl">Uses of AI IN THE WORLD</h1>
        <div className="flex items-center justify-between mb-2 text-sm font-semibold text-gray-500 md:mb-4">
            <p>@DLHQ.DEV</p>
            <div className="flex space-x-2">
                <p>16/06/2023</p>
                <p>16:45</p>
            </div>
        </div>
        <p className="text-sm md:text-lg">Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.</p>
        </div>

    </div>
  )
}

export default ProfilePosts