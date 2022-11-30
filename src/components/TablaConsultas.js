import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Figure from 'react-bootstrap/Figure';
import image from "../public/rjimp.png";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//firebase//
import { db } from "../firebase"
import { collection, addDoc, onSnapshot, deleteDoc, doc, updateDoc, orderBy, query } from "firebase/firestore"

function TablaConsultas() {

    const [buscar, setBuscar] = useState("")

    const consultasCollections = collection(db, "consultas")
    const [consultas, setConsultas] = useState()

    const getConsultas = async () => {
        onSnapshot(consultasCollections, (querySnapshot) => {
            const docs = [];
            querySnapshot.forEach(doc => {
                docs.push({ ...doc.data(), id: doc.id })
            });
            setConsultas(docs)
        })
    }

    const buscador = (e) => {
        setBuscar(e.target.value)
    }

    /*let resultados = []
    if (!buscar) {
        resultados = consultas
    } else {
        resultados = consultas.filter((dato) =>
            dato.fullname.toLowerCase().includes(buscar.toLocaleLowerCase()))
    }*/

    const resultados = !buscar ? consultas : consultas.filter((dato) => dato.fullname.toLowerCase().includes(buscar.toLocaleLowerCase()))

    useEffect(() => {
        getConsultas()
    }, [])


    return (
        <Container>
            <Container>
                <Nav className="justify-content-center" defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={image}
                            />
                        </Figure>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <div className='col-auto p-5 m-3 align-items-center justify-content-center'>
                            <a href='/consultas'>
                                <Button variant='dark'>Ver consultas</Button>
                            </a>
                        </div>

                    </Nav.Item>
                </Nav>
            </Container>
            <Form.Control value={buscar} onChange={buscador} size="lg" type="text" placeholder="Inserte Nombre" />
            <br />
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>DNI</th>
                        <th>Nombre</th>
                        <th>Direccion</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {resultados && resultados.map(consulta => (
                        <tr key={consulta.id}>
                            <td>{consulta.dni}</td>
                            <td>{consulta.fullname}</td>
                            <td>{consulta.direccion}</td>
                            <td>{consulta.descripcion}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </Container>
    )
}

export default TablaConsultas