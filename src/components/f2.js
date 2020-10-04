import React,{Component} from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './f2.css'  
import axios from 'axios';
const url="http://localhost:8500/"

class F2  extends Component{ 
    constructor()
    {
        super(); 
        
        this.state={
            cdata:'' ,
            name:'',
            course:'',
            date:'',
            signed:'',
             id :localStorage.getItem("id")
        }
       
    }  
    render(){  
        return(           
<div>              
<div class="panel panel-primary" id="content">
<div class="panel-heading"id="heading"><h3>Certificate of completion </h3></div>
<div class="panel-body">
    

<p class="about">This certifies that  <b>{this.state.name}</b> </p>
<p class="about">has successfully completed that course of <b> {this.state.course}</b></p>
<p class="about">Date:  <b>{this.state.date}</b></p><p class="about">Signed: <b> {this.state.signed}</b></p>
</div>
</div>
<button  id="b" class="button btn-primary" type="submit">Post-Details</button> 
</div>)
} 
componentDidMount()
{   
    let num=localStorage.getItem("id");
    //console.log(x);
    console.log(`${url}`)
    axios.get(`${url}`)
    .then((response) =>  {console.log(response.data);
        this.setState({cdata:response.data}) 
        let x=this.state.cdata.filter((details)=>{
            console.log(details.name)
        return details.name== num;
        })  
console.log(x[0].name);
        
        this.setState({name:x[0].name}) 
        this.setState({course:x[0].course})
        this.setState({date:x[0].date})
        this.setState({signed:x[0].signed}) 
           
    
    })
    
    
}
} 
export default F2;