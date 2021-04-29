import React from 'react';
import { Navbar,FormControl,Form,Button  } from 'react-bootstrap';


function NavBar() {
    return (
        <div >
          
            <Navbar >
    <Navbar.Brand href="#home">
     
      <h1 style={{marginLeft:'600px',color:'red',fontSize:'80px'}}>User List</h1>
      <Form inline>
    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
    <Button type="submit">Submit</Button>
  </Form>

    </Navbar.Brand>
  </Navbar>
        </div>
    )
}

export default NavBar
