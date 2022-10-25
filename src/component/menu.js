import React, { useEffect } from 'react';
import './menu.css'
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
// import member from '../../../node_project/models/member';

function mapStateToProps(state) {
    return { member: state.member }
}

export default connect(mapStateToProps, null)(
    function Menu(props) {
        const { member } = props
        useEffect(() => {
            console.log(member);
        }, [])

        return (
            <>

                <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
               
                        <div className={"collapse navbar-collapse"} id="navbarNavDropdown">
                            <img
                                src="img\hospitalLogo3.jpg"
                                className="logo"
                                alt=" logo"
                            />
                            <ul class="navbar-nav">
                          
                                <li className={"nav-item me-auto " }>
                                    <Link to="/addMember" className={"nav-link"} id={"add"}>addMember</Link>
                                </li>
                            </ul>
                        
                    </div>
                </nav>






            </>


        )


    })


