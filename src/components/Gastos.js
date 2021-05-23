import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import{Table, Button, Container, FormGroup} from 'react-bootstrap'


const data=[
{fecha: "23-02-1997", cuenta:"1233422", descripcion:"mouse", total:"$10.99"},
{fecha: "3-03-2020", cuenta:"12574772", descripcion:"monitor", total:"$120.99"},
{fecha: "13-09-2020", cuenta:"5634282", descripcion:"hojas blancas", total:"$2.99"},
{fecha: "1-02-2020", cuenta:"25435789", descripcion:"celular", total:"$350.99"}
];

class Gastos extends React.Component{
state={
    data:data
}

    render(){
        return (
            <div>
            <Navbar></Navbar>
            
            <Container class="table-responsive">
            <br></br>
            <div class="row">
            <div class="col-sm-15">
            <div class="row">
                <div class="col-sm-6">
                    <label><b>Concepto&nbsp;</b></label>
                    <input id="concep" name="concept" type="text" disabled></input>
                </div>
                <div class="col-sm-6">
                    <label><b>Fecha&nbsp;</b></label>
                    <input id="fecha" name="fecha" type="text" disabled></input>
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
                    <input id="nom" name="nom" type="text"  disabled></input>
                </div>
                <div class="col-sm-6">
                    <label><b>Posición&nbsp;</b></label>
                    <input id="pos" name="pos" type="text"  disabled></input>
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
                    <input id="dep" name="dep" type="text"  disabled></input>
                    </div>
                <div class="col-sm-6">
                    <label><b>Supervisor&nbsp;</b></label>
                    <input id="sup" name="sup" type="text"  disabled></input>
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
                        {this.state.data.map((elemento)=>(
                        <tr>
                            <td>{elemento.fecha}</td>
                            <td>{elemento.cuenta}</td>
                            <td>{elemento.descripcion}</td>
                            <td>{elemento.total}</td>
                        </tr>
                        ))}
                      <tr>
                            <td></td>
                            <td></td>
                            <td>Monto a cancelar al empleado</td>
                            <td>$0.00</td>
                        </tr>  
                    <tbody>

                    </tbody>

                </Table>
                <br></br>
                    <label><b>Aprobado por&nbsp;</b></label>
                    <input id="resp" name="resp" type="text"  disabled></input>
                <br></br>
                <p>Firma :____________________________________________</p>
            </Container>
                            
            
            <h1>Hola, mundosky</h1>
        
            </div>
            
            
        );
    }
}

export default Gastos;