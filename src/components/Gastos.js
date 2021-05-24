import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import axios from 'axios';
import {Link} from 'react-router-dom';
import{Table, Button, Container, FormGroup} from 'react-bootstrap'

 
//URL DEL API
const url='http://localhost:8080/api/gastos/1/1';

var total=0;
class Gastos extends React.Component{

state={
    data:[]
}

//CARGANDO DATOS DEL API
peticionGet=()=>{
    axios.get(url).then(response=>{
        this.setState({data: response.data});
    })
}

componentDidMount(){
this.peticionGet();
}



    render(){

        return (
            
            <div>
            <Navbar></Navbar>
            <a href="/gastos" class="btn btn-primary" align="left">Buscar Informacion</a>
            <Container class="table-responsive">
            <br></br>
            <div class="row">
            <div class="col-sm-15">
            <div class="row">
                <div class="col-sm-6">
                    <label><b>Concepto&nbsp;</b></label>
                    <select id="concep" name="concept" type="text">
                   
                        <option value='1'>Fijo</option>
                        <option value='2'>Variable</option>
                       
                    </select>
                </div>
                <div class="col-sm-6">
                    <label><b>Fecha&nbsp;</b></label>
                    <select id="fecha" name="fecha" type="date" disabled>
                    {this.state.data.map((sel5)=>{
                            return(
                        <option value="">{sel5.fini+" hasta el "+sel5.ffin}</option>
                        )
                    })}
                    </select>
                </div>
                
                    
                
            </div>
            </div>
            </div>
            
                <p><b>Informacion del empleado:</b></p>
            <div class="row">
            <div class="col-sm-15">
            <div class="row">
                <div class="col-sm-6">
                    <label><b>Nombre&nbsp;</b></label>
                    <select id="nom" name="nom" type="text"> 
                    {this.state.data.map((sel)=>{
                            return(
                        <option value={sel.EmpleadoID}>{sel.Nombre+" "+sel.Apellido}</option>
                        )
                    })}
                    </select>
                </div>
                <div class="col-sm-6">
                    <label><b>Posición&nbsp;</b></label>
                    <select id="pos" name="pos" type="text"  disabled>
                    {this.state.data.map((sel2)=>{
                            return(
                        <option value=" ">{sel2.Posicion}</option>
                        )
                    })} 
                    </select>
                </div>
            </div>
            </div>
            </div>
                <br></br>
            <div class="row">
            <div class="col-sm-15">
            <div class="row">
                <div class="col-sm-6">
                    <label><b>Departamento&nbsp;</b></label>
                    <select id="dep" name="dep" type="text"  disabled>
                    {this.state.data.map((sel3)=>{
                            return(
                        <option value=" ">{sel3.departamento}</option>
                        )
                    })} 
                    </select>
                    </div>
                <div class="col-sm-6">
                    <label><b>Supervisor&nbsp;</b></label>
                    <select id="sup" name="sup" type="text"  disabled>
                    {this.state.data.map((sel4)=>{
                            return(
                        <option value=" ">{sel4.Supervisor}</option>
                        )
                    })} 
                    </select>
                </div>
            </div>
            </div>
            </div>
                <br></br>
                <Table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Fecha</th>
                            <th>Cuenta</th>
                            <th>Descripción</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                        {this.state.data.map((elemento)=>{
                            return(
                        <tr>
                            <td>{elemento.fecha}</td>
                            <td>{elemento.Cuenta}</td>
                            <td>{elemento.Descripcion}</td>
                            <td>$.{elemento.Total}</td>
                        </tr>
                            )
                        })}
                      <tr>
                            <td></td>
                            <td></td>
                            <td>Monto a cancelar al empleado</td>
                            {this.state.data.map((esum)=>{
                               total += esum.Total
                            return(
                                
                            <td hidden>
                                <strong>$.{total}</strong>
                             </td>
                            )
                        })}
                        <td><strong>$.{total}</strong></td>
                        </tr>  
                    <tbody>

                    </tbody>

                </Table>
                <br></br>
                    <label><b>Aprobado por&nbsp;</b></label>
                    <select id="resp" name="resp" type="text"  disabled>
                    {this.state.data.map((sel6)=>{
                            return(
                        <option value=" ">{sel6.Aprobado}</option>
                        )
                    })}
                    </select>
                <br></br>
                <p>Firma :____________________________________________</p>
            </Container>
                            
            
        
        
            </div>
            
           
        );
        
    }

}

export default Gastos;