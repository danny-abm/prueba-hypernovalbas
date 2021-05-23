import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/images/hyper.png';

class Navbar extends React.Component{

    render(){
        return (
            <div>
                <nav class="navbar navbar-light bg-dark">
                    <a class="navbar-brand">
                        <img src={logo}  width="70" height="40" class="d-inline-block align-top" alt=""/>

                        <b  class="text-white">&nbsp;&nbsp;Reporte de Gastos</b>
                    </a>
                    
                </nav>
            </div>
        );
    }
}

export default Navbar;