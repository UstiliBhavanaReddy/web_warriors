import React,{Component} from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './f1.css'
import axios from 'axios';

const url="http://localhost:8500/"
class Cert extends Component{
    constructor()
    {
        super();
        this.state ={
            cdata:''
        }
    } 
    getdetails(event){
        let id=document.getElementById("cid").value ; 
        localStorage.setItem("id",id);
        window.open("http://localhost:3000/f2/"+id,"_self");
    }
    render()
{
 return(
     <div class="a">
        <div>
        <h2 class="g"> Get Your Certificates</h2>
        <div  id="c" className="container">
        <div >
            <div className="panel panel-primary" id="h">
              <div className="panel-heading" id="h1"><b>CERTIFICATE TRACKER</b></div>
              <div className="panel-body" id="h2" >
              <div  class="h3">  <b> Certificate-Id: </b>
              <input type="text"  placeholder="Enter name" id="cid" /><br/>
              </div>
                 
                     
              </div>
            </div>
            </div>
            </div>
            <button  id="b" className="button btn-info" type="text" onClick={this.getdetails} >Get-Details</button>
                     
            

    </div>
     </div>

 )
}

componentDidMount()
{
    console.log(`${url}`)
    axios.get(`${url}`)
    .then((response) => {this.setState({cdata:response.data})})
    
}
}


export default Cert;