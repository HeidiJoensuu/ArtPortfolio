import { Image, Sticky } from "semantic-ui-react"
import headline from "./assets/headline.png"
import PictureLibrary from "./pictureLibrary";
import { createRef } from "react";


const App = () => {

  return (
    <div className="App">
      <header className="App-header">
          <Image src={headline} style={{width: "100%", maxHeight: "150px", marginBottom: "50px"}} centered fixed={'top'}/>
      </header>
      <PictureLibrary />
    </div>
  );
}

export default App;
