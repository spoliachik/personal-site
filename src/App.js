import './App.css';
import React, {useState} from 'react';
import HomeTile from "./homeTile";
import guitar from './guitar.jpg';
import surf from './surf.jpg';
import code from './code.jpg';
import guitarHover from './guitarHover.png';
import surfHover from './surfHover.png';
import codeHover from './codeHover.png';
import notebookHover from './notebookHover.png';
import notebook from './notebook.jpg';

function App() {
  // const [isShown, setIsShown] = useState(false);
  return (
    <div className="react-root">
      <div className="sidebar">
        <h1>Shelby Poliachik.</h1>
      </div>
      <div className="home-tiles">
        <HomeTile title="Music" image={guitar} hoverImage={guitarHover}/>
        <HomeTile title="Projects" image={code} hoverImage={codeHover}/>
        <HomeTile title="Writing" image={notebook} hoverImage={notebookHover}/>
        <HomeTile title="Hobbies" image={surf} hoverImage={surfHover}/>
      </div>
      {/* {isShown && (
        <p>
          Hovered
        </p>
      )} */}
    </div>
  );
}

export default App;
