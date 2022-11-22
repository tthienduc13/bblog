import Heading from "./components/Heading";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import RightSideBar from "./components/RightSideBar";
import Overlay from "./components/Overlay";
import AddPost from "./components/AddPost";
import Post from "./components/Post";
import { useState } from "react";
function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [postList, setPostList] = useState([]);
  return (
    <>
      <Heading></Heading>
      <div className=" w-full  top-[56px]  relative flex justify-center">
        <div className="w-[720px] mt-5 rounded-2xl absolute">
          {/* AddPost components */}
          <AddPost
            functionSetButtonPopup={(active) => setButtonPopup(active)}
          ></AddPost>
          {/* AddPost components */}
          <Post postList={postList} functionSetPostList={setPostList}></Post>
        </div>
      </div>
      <Overlay
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        setPost={(posts) => setPostList([...postList, posts])}
      ></Overlay>
    </>
  );
}

export default App;
