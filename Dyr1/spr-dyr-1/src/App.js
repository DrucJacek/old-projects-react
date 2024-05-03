import React, { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function App() {
  const [like, setLike] = useState(false);
  const [count, SetCount] = useState(5);
  const [show, setShow] = useState(true);

  const [like1, setLike1] = useState(false);
  const [count1, SetCount1] = useState(5);
  const [show1, setShow1] = useState(true);

  const [like2, setLike2] = useState(false);
  const [count2, SetCount2] = useState(5);
  const [show2, setShow2] = useState(true);


  const handleLikes = () => {
    if (!like) {
      setLike(true);
      SetCount(count + 1);
    } else {
      setLike(false);
      SetCount(count - 1);
    }
  };

  const handleLikes1 = () => {
    if (!like1) {
      setLike1(true);
      SetCount1(count1 + 1);
    } else {
      setLike1(false);
      SetCount1(count1 - 1);
    }
  };

  const handleLikes2 = () => {
    if (!like2) {
      setLike2(true);
      SetCount2(count2 + 1);
    } else {
      setLike2(false);
      SetCount2(count2 - 1);
    }
  };



  const imageUrl = "img";

  return (
    <div className="main-container">  
      <div className="back">
        <div className="titles">
          <h1>First Title</h1>
          <h4>{count}</h4>
          <button type="button" onClick={() => {
            setShow(!show);
            handleLikes();
          }}>
            {show === true ? 'Like' : 'Dislike'}
          </button>
        </div>

        <div className="titles">
          <h1>Second Title</h1>
          <h4>{count1}</h4>
          <button type="button" onClick={() => {
            setShow1(!show1);
            handleLikes1();
          }}>
            {show1 === true ? 'Like' : 'Dislike'}
          </button>
        </div>
        
        <div className="titles">
          <h1>Third Title</h1>
          <h4>{count2}</h4>
          <button type="button" onClick={() => {
            setShow2(!show2);
            handleLikes2();
          }}>
            {show2 === true ? 'Like' : 'Dislike'}
          </button>
        </div>
      </div>

      
    

    </div>
  );
}

export default App;
