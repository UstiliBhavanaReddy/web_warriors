import React from 'react';
import ReactDOM from 'react-dom'; 
import Routing from './components/Routing';
import Cert from './components/f1';


const App = () =>{
  return( 
    <div>   
  <Routing/>
  
    </div>
  )
}  

ReactDOM.render(<App/>,document.getElementById(`root`))


