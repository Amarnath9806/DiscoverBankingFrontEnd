import React from 'react';
import {Navbar,UncontrolledDropdown,DropdownToggle,DropdownItem,DropdownMenu } from 'reactstrap';
export default function Token(){
    return(
        <div>
            <UncontrolledDropdown setActiveFromChild>
        <DropdownToggle tag="a" className="nav-link" caret>SERVICE/API</DropdownToggle>
        <DropdownMenu >
          <DropdownItem >BankAccInfo</DropdownItem>
          <DropdownItem >BAnkCustAssist</DropdownItem>
         <DropdownItem>BankLoanAlignment</DropdownItem>
        <DropdownItem >BankDebitCard</DropdownItem>
        </DropdownMenu>
           </UncontrolledDropdown>
           <button>Submit</button>
        </div>
    );
}