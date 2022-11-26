import React from "react";
import ReactDOM from "react-dom";
import Seassion from "./Seassion";

class App extends React.Component {
  state={lat:null,errorMessage:''};
  


  componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
          position=>this.setState({lat:position.coords.latitude}),
          err=> this.setState({errorMessage:err.message})
        )
  }

  // React says we have to define render!!
  render() {
        
    // lat>err==show lat
     //&& all are working at oppsosite
     if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
  
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <Seassion lat={this.state.lat}/>
   
    }


    return <div>Loading!</div>;

  }
}

ReactDOM.render(<App />, document.querySelector("#root"));







//funtional component

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     Position=>console.log(Position),
//     err=>console.log(err)
    
//   );

//   return <div>Latchide</div>;

// };



//class component