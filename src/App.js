import React, { Component } from "react";

//関数コンポーネント
const App = () => <Counter></Counter>

class Counter extends Component {
  constructor(props){
    //super(props)：親クラスで初期化処理を行わせる
    super(props)
    this.state = {count: 0}
  }

  handlePlusButton = () => {
    this.setState({count: this.state.count +1})
  }

  handleMinusButton = () => {
    this.setState({count: this.state.count -1})
  }

  render(){
    return (
      <>
      <div>count: {this.state.count}</div>
      <button onClick={this.handlePlusButton}>+1</button>
      <button onClick={this.handleMinusButton}>-1</button>
      </>
    )
  }}

export default App;



//↑以前の内容
// // import React, {Component} from "react";
// // クラスコンポーネントがコメントアウト→Component誰も使ってないため消してよい
// import React from "react";
// import PropTypes from "prop-types";


// //関数コンポーネント
// const App = () => {
//   //map解説　→繰り返し処理で無駄を省く
//   const profiles = [
//     {name: "Taro", age: 10},
//     {name: "Hanako", age: 15},
//     {name: "NoName", age: 3}
//   ]
  
//   return (
//     <div>
//       {
//         profiles.map((profiles, index) => {
//           return <User name={profiles.name} age={profiles.age} />
//         })
//       }
//     </div>
//   )

//   //props解説
//   // return (
//   //   <div>
//   //     {/* Userというコンポーネントに対してnameという属性を与える.「nameという属性を与えてUserというコンポーネント呼び出す」 */}
//   //     <User name={"Taro"} age={10} />
//   //     {/* コンポーネントは再利用可能 */}
//   //     <User name={"Hanako"} age={5} />

//   //   </div>
//   // )
// }

// const User = (props) => {
//   return <div>Hi, I am {props.name} and {props.age} years old!</div>
// }


// // class App extends Component {
// //   //AppというクラスがComponentを継承している→Appはクラスコンポーネント
// //   render(){
// //     //6
// //     return (
// //       <>
// //         <label htmlFor="bar">bar</label>
// //         <input type="text" onChange={() => {console.log("I am clicked!")}}/>
// //       </>
// //     )

// //     //5
// //     // return <input type="text" onChange={() => {console.log("I am clicked!")}}/>
    
// //     //4
// //     const greeting = "Hi!!!!"
// //     const dom = <h1 className="foo">{greeting}</h1>
// //     return dom;
    
// //     //3
// //     // const greeting = "Hi!!!!"
// //     // const dom = <h1>{greeting}</h1>
// //     // return dom;

// //     //2
// //     // const dom = <h1>Hi!!</h1>
// //     // return dom;
    
// //     //1
// //     //   return <h1>Herllo, World!!!</h1>
// //   }
// // }

// //Userコンポーネントに対するprop-typesを定義する →prop-typesを用いた型チェックができる状態になっている
// //nameに文字列以外の型のモノをわたすとエラー、警告が出る
// User.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
//   //isRequired：ageという属性が必ず設定されていなければダメの意味
// }


// // //デフォルトprops
// // User.defaultProps = {
// //   age: 1
// // }

// export default App;
