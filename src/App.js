// import React, {Component} from "react";
// クラスコンポーネントがコメントアウト→Component誰も使ってないため消してよい
import React from "react";


//関数コンポーネント
const App = () => {
  //map解説　→繰り返し処理で無駄を省く
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 15},
    {name: "NoName"}
  ]
  
  return (
    <div>
      {
        profiles.map((profiles, index) => {
          return <User name={profiles.name} age={profiles.age} />
        })
      }
    </div>
  )

  //props解説
  // return (
  //   <div>
  //     {/* Userというコンポーネントに対してnameという属性を与える.「nameという属性を与えてUserというコンポーネント呼び出す」 */}
  //     <User name={"Taro"} age={10} />
  //     {/* コンポーネントは再利用可能 */}
  //     <User name={"Hanako"} age={5} />

  //   </div>
  // )
}

const User = (props) => {
  return <div>Hi, I am {props.name} and {props.age} years old!</div>
}


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

//デフォルトprops
User.defaultProps = {
  age: 1
}

export default App;
