/*II. Using React to select an image – and also create different buttons , and do the following
A. Add a like or Dislike Button on the above Program, click on that button it will
increase the count.*/

import { useState } from "react";

function App() {
  return (
    <div>
       <Operation />
    </div>  
  );
}

function Operation(){

  let[counterForLike, setCounterForLike] = useState(100);
  let[counterForDislike, setCounterForDislike] = useState(100);

  let like = () => {
    counterForLike = counterForLike + 1;
    setCounterForLike(counterForLike);
  };

  let disLike = () => {
    counterForDislike = counterForDislike + 1;
    setCounterForDislike(counterForDislike);
  };

  return (
    <div className="App d-flex flex-column align-items-center m-4">
       <div className="m-4">
        <h1>Image Gallery</h1>
       </div>
       <div>
        <img src="https://picsum.photos/id/267/300/300"></img>
       </div>
       <div className="m-2">
        <div className="d-flex flex-raw">
          <h2 className="mx-2">{counterForLike}</h2>
          <h2 className="mx-4">{counterForDislike}</h2>  
        </div>
        
       <button className="m-2 btn btn-success" onClick={like}>like</button>
       <button className="m-2 btn btn-danger" onClick={disLike}>dislike</button>
       </div>
    </div>  
  );
}

export default App;
