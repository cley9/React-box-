import logo from './logo.svg';  
import './App.css';
import Header from './Header';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // se importa el router 
import Contacto from './Contacto';
import React from 'react';

// ------------------------------------------------> importar el hoook para las variables 

// function wel(props){
//   return <div> hola , cley</div>
//   }

//   function Welcome(props) {
// const {name}=props;

//     // return <h1>Hello, {props.name}</h1>;
//     return <h1>Hello, {name}</h1>;

//   }
 function Nombre(props){   //-----> esto es un componente
  console.log(props) 
  return ( 
   <div> hola 
     {props.mytext}
    <h4> {props.subtitle}</h4>
   </div> 
    );
 }

//  ----------------------------------------------------------------> una clase
class Nombred extends React.Component{
  state ={
    show:false
  }
    render() { //-----------> metodo render 
      if(this.state.show){
        return (
          <div> hola 
          {this.props.mytext}
         <h4> {this.props.subtitle}</h4>
        </div> 
        )
      }
      else{
        <div> there are not component's</div>
      }
    }

}
//  ----------------------------------------------------------------> una clase

//  class Templest extends React.Component{
//     render() {
//       return (
//         <div>
//            this is componente xd <Nombre> </Nombre>
//         </div>
//       )
//     }
//  }
function App() {
  return (
    <div className="App">
      
     <Header></Header>  

      <Router>
        <Switch>


          <Route path="/contacto">
                contacto hs
          </Route>
        <wel name="carlos" />
           

          {/* <Route path="/">
            <Home></Home>
          </Route> */}


        </Switch>
      </Router>



------> <Nombre mytext="---> carlos" subtitle="farzen is the dark"/> 
<Nombre mytext=" maria " />  
<Nombre mytext="jose"/> </div>
  );
}

export default App;


