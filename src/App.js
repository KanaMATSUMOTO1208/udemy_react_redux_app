import React, {Component} from "react";

class App extends Component {
  render(){
    //6
    return (
      <>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am clicked!")}}/>;
      </>
    )

    //5
    // return <input type="text" onChange={() => {console.log("I am clicked!")}}/>;
    
    //4
    const greeting = "Hi!!!!"
    const dom = <h1 className="foo">{greeting}</h1>;
    return dom;
    
    //3
    // const greeting = "Hi!!!!"
    // const dom = <h1>{greeting}</h1>;
    // return dom;

    //2
    // const dom = <h1>Hi!!</h1>;
    // return dom;
    
    //1
    //   return <h1>Herllo, World!!!</h1>;
  }
}

export default App;
