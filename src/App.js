// import React, {Component} from "react";
// クラスコンポーネントがコメントアウト→Component誰も使ってないため消してよい
import React from "react";

// class App extends Component {
//   //AppというクラスがComponentを継承している→Appはクラスコンポーネント
//   render(){
//     //6
//     return (
//       <>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I am clicked!")}}/>
//       </>
//     )

//     //5
//     // return <input type="text" onChange={() => {console.log("I am clicked!")}}/>
    
//     //4
//     const greeting = "Hi!!!!"
//     const dom = <h1 className="foo">{greeting}</h1>
//     return dom;
    
//     //3
//     // const greeting = "Hi!!!!"
//     // const dom = <h1>{greeting}</h1>
//     // return dom;

//     //2
//     // const dom = <h1>Hi!!</h1>
//     // return dom;
    
//     //1
//     //   return <h1>Herllo, World!!!</h1>
//   }
// }

//関数コンポーネント
const App = ()=>{
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
  
    </div>
  )
}

const Cat =()=>{
  return <div>Meow!</div>
}

export default App;
