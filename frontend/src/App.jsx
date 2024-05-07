import { Route, Routes } from "react-router-dom"
// import Footer from "./components/Footer"
// import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PostDetails from "./pages/PostDetails"
import CreatePost from "./pages/CreatePost"
import EditPost from "./pages/EditPost"
import Profile from "./pages/Profile"

import Ott from "./pages/Ott"
import Release from "./pages/Release"
import { UserContextProvider } from "./context/UserContext"
import ProfilePosts from "./pages/ProfilePosts"
import CreateOtt from "./pages/CreateOtt"
import CreateRelease from "./pages/CreateRelease"
import OttResponse from "./pages/OttResponse"

// import Page2 from "./pages/page2"
// import Page3 from "./pages/page3"



const App = () => {
  return (
   

      <UserContextProvider>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/otts" element={<Ott/>}/>
        <Route exact path="/ott/:id" element={<OttResponse/>}/>
        <Route exact path="/release" element={<Release/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/write" element={<CreatePost/>}/>
        <Route exact path="/ottwrite" element={<CreateOtt/>}/>
        <Route exact path="/ottrelease" element={<CreateRelease/>}/>
        <Route exact path="/edit/:id" element={<EditPost/>}/>
        <Route exact path="/posts/post/:id" element={<PostDetails/>}/>
        <Route exact path="/profile/:id" element={<Profile/>}/>
        <Route exact path="/myblogs/:id" element={<ProfilePosts/>}/>  
        </Routes>
      </UserContextProvider>

       
      
  )
}

export default App


