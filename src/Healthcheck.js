import React from 'react';
import {Navbar,UncontrolledDropdown,DropdownToggle,DropdownItem,DropdownMenu } from 'reactstrap';
export default function Healthcheck(){
    return(
        <>
        <Navbar expand="sm">
        <UncontrolledDropdown setActiveFromChild>
        <DropdownToggle tag="a" className="nav-link" caret>Environment</DropdownToggle>
        <DropdownMenu >
          <DropdownItem >TSYS</DropdownItem>
          <DropdownItem >ASYS</DropdownItem>
         <DropdownItem>PERF</DropdownItem>
        <DropdownItem >MSTO</DropdownItem>
        </DropdownMenu>
           </UncontrolledDropdown>
           <UncontrolledDropdown setActiveFromChild>
        <DropdownToggle tag="a" className="nav-link" caret>TYPE</DropdownToggle>
        <DropdownMenu >
          <DropdownItem >SAP</DropdownItem>
          <DropdownItem >REST</DropdownItem>
         {/* <DropdownItem>React Native</DropdownItem>
        <DropdownItem >Angular</DropdownItem> */}
        </DropdownMenu>
           </UncontrolledDropdown>
           
           <UncontrolledDropdown setActiveFromChild>
        <DropdownToggle tag="a" className="nav-link" caret>SERVICE/API</DropdownToggle>
        <DropdownMenu >
          <DropdownItem >BankAccInfo</DropdownItem>
          <DropdownItem >BAnkCustAssist</DropdownItem>
         <DropdownItem>BankLoanAlignment</DropdownItem>
        <DropdownItem >BankDebitCard</DropdownItem>
        </DropdownMenu>
           </UncontrolledDropdown>
           
           </Navbar>
      </>
    );
}