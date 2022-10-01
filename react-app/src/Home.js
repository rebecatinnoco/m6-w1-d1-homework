import React, {Component} from "react";
import AppNavbar from "./Navbar"
import { Button, Container } from "reactstrap";
import { link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

class Home extends Components {
    render() {
        return (
            <div>
<AppNavbar />
<Container fluid>
    <Button className="m-5 nav bg-light">
        <Link
        to="/inventories"
        className="nav-link"
        >Manage Inventory List
        </Link>
    </Button>
</Container>
</div>
        )
    }
}

export default Home;