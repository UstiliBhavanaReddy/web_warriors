import React from 'react' ; 
import { BrowserRouter, Route} from 'react-router-dom'; 

import Cert from './f1'; 
import F2  from './f2'
const Routing = () =>{
return(
    <BrowserRouter> 
    <div>  
    <Route exact path="/"  component={Cert}></Route>
    <Route path="/f2/:id" component={F2}></Route>
</div>
    </BrowserRouter>
);
} 
export default Routing; 



