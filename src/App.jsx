import './App.css';
import { Component } from 'react';
import Profile from "./Profile.jsx"
import Profileimg from "./Profileimg.png"
import FunctionClick from "./Alert.jsx"

class App extends Component{
  render() {
    const imgStyle = {
      width: "100px",
      height: "100px"
    };
    return (
      <div>
      <Profile  name="Mahmoud Magdy" bio="There's not much to add in the bio" profession="Web Developer">
        <img style={imgStyle} src={Profileimg} />
        </Profile>
        <FunctionClick />
      </div>
    )
  }
}

export default App;
