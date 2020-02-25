import React from "react";
import {UncontrolledDropdown,DropdownToggle,DropdownItem,DropdownMenu } from 'reactstrap';
export default class Fetch extends React.Component{

    constructor(props) {
        super(props);
    }

     


    state = {
        loading : true,
        type : null
    };

    async componentDidMount(){

    const url = "http://localhost:8080/getType/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({type:data,loading:false});
    console.log(data.rest);
    console.log(data.soap);
    }

    render(){
        return(
            <div>
                
                {this.state.loading|| !this.state.type ? ( 
                    
                <div>loading...</div>
                ) :(
                <div>
                 <div>
                     {/* {this.state.type.rest} */}
                    
                 <UncontrolledDropdown setActiveFromChild>
             <DropdownToggle tag="a" className="nav-link" caret>Type</DropdownToggle>
             <DropdownMenu >
                <DropdownItem  name="rest">{this.state.type.rest}</DropdownItem>
               <DropdownItem  name="soap">{this.state.type.soap}</DropdownItem>
             </DropdownMenu>
                </UncontrolledDropdown>

                </div>
                </div>)}
            
            
         </div>
        );
    }
}