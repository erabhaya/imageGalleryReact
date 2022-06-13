
import './App.css';
import Gallery from "./comp/Gallery";

function App(props) {
  return (
   <div>
      <Gallery
       img="./image/basketball.png"
       name="Gallery101"
       price='$150'/>
       <Gallery
       img="./image/football.png"
       name="Gallery102"
       price='$120'/>
       <Gallery
       img="./image/soccer.png"
       name="Gallery103"
       price='$90'/>
       <Gallery
       img="./image/table-tennis.png"
       name="Gallery104"
       price='$110'/>
       <Gallery
       img="./image/tennis.png"
       name="Gallery105"
       price='$80'/>
   </div>
  );
}

export default App;
