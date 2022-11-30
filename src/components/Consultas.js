import { useState, useEffect } from 'react';
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Figure from 'react-bootstrap/Figure';
import image from "../public/rjimp.png"
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import Tiket from './tiket';
import { PDFViewer } from "@react-pdf/renderer";

function Consultas() {
    const dataInitial = {
        nombres: '',
        apellidoPaterno: '',
        apellidoMaterno: ''
    }

    const initialValues = {
        doc: 'DNI',
        numero: 0,
        fullname: '',
        direccion: '',
        departamento: '',
        provincia: '',
        distrito: '',
        telefono: '',
        correo: '',
        descripcion: '',
        monto: 0
    }

    const [show2, steShow2] = useState(false)

    const handleShow2 = () => steShow2(true)
    const handleClose2 = () => steShow2(false)

    const consultasCollection = collection(db, "consultas")

    const addProduct = async (objetProvider) => {
        await addDoc(consultasCollection, (objetProvider))
    }

    const [values, setValues] = useState(initialValues)
    const [ruc, setRuc] = useState()
    const [dni, setDni] = useState()
    const [data, setData] = useState(dataInitial)

    const fetchApi = async () => {
        const url = 'https://dniruc.apisperu.com/api/v1/dni/' + dni + '?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InJlZHJpdGhhekBnbWFpbC5jb20ifQ.a7kCa2M2mzSy3UYe8sA6roXnswpbI3Qu9_tR91YqbIE'
        const response = await fetch(url)
        console.log(response.status)
        const responseJSON = response.json()
        await Promise.resolve(responseJSON).then(responseJSON => setData(responseJSON))

    }

    const getName = () => {
        setValues({ ...values, fullname: data.nombres + ', ' + data.apellidoPaterno + ' ' + data.apellidoMaterno })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value, fullname: data.nombres + ', ' + data.apellidoPaterno + ' ' + data.apellidoMaterno })
    }


    const handleInputDni = (e) => {
        setDni(e.target.value)
        setValues({ ...values, dni: e.target.value })
    }

    const handleBuscar = async () => {
        fetchApi()
        setValues({ ...values, fullname: data.nombres + ', ' + data.apellidoPaterno + ' ' + data.apellidoMaterno })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        addProduct(values)
        handleShow2()
        console.log('successful')
        console.log(values)
    }

    const handleReload = () => {
        window.location.reload()
    }

    useEffect(() => {
        getName()
    }, [])

    return (
        <>
            <Form className='px-4' onSubmit={handleSubmit}>
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
                                    <a href='/tablaConsultas'>
                                        <Button variant='dark'>Ver consultas</Button>
                                    </a>
                                </div>

                            </Nav.Item>
                        </Nav>
                    </Container>


                    <Form.Select size="lg" className="mb-3">
                        <option>DNI</option>
                        <option>RUC</option>
                    </Form.Select>
                    <Row>
                        <Col sm={9}>
                            <FloatingLabel
                                controlId="Numero"
                                label="Número"
                                className="mb-3"
                            >
                                <Form.Control type="number" placeholder="75454521" onChange={handleInputDni} name="numero" />
                            </FloatingLabel>
                        </Col>
                        <Col sm={3}>
                            <Button variant="dark" size="lg" onClick={handleBuscar}>Buscar</Button>
                        </Col>
                    </Row>
                    <FloatingLabel controlId="Nombre" label="Nombre" className="mb-3">
                        <Form.Control type="string" placeholder="Nombre" onChange={handleChange} name="nombre" value={(data.nombres + ', ' + data.apellidoPaterno + ' ' + data.apellidoMaterno)} />
                    </FloatingLabel>
                    <FloatingLabel controlId="Direccion" label="Direccion" className="mb-3">
                        <Form.Control type="string" placeholder="Direccion" onChange={handleChange} name="direccion" />
                    </FloatingLabel>

                    <Row>
                        <Col>
                            <FloatingLabel controlId="Departamento" label="Departamento" className="mb-3">
                                <Form.Control type="string" placeholder="Departamento" onChange={handleChange} name="departamento" />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="Provincia" label="Provincia" className="mb-3">
                                <Form.Control type="string" placeholder="Provincia" onChange={handleChange} name="provincia" />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="Distrito" label="Distrito" className="mb-3">
                                <Form.Control type="string" placeholder="Distrito" onChange={handleChange} name="distrito" />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <FloatingLabel controlId="Telefono" label="Telefono" className="mb-3">
                        <Form.Control type="string" placeholder="Telefono" onChange={handleChange} name="telefono" />
                    </FloatingLabel>
                    <FloatingLabel controlId="Correo" label="Correo" className="mb-3">
                        <Form.Control type="string" placeholder="Correo" onChange={handleChange} name="correo" />
                    </FloatingLabel>
                    <FloatingLabel controlId="Descripcion" label="Descripcion" className="mb-3">
                        <Form.Control type="string" placeholder="Descripcion" onChange={handleChange} name="descripcion" />
                    </FloatingLabel>
                    <FloatingLabel controlId="Monto" label="Monto" className="mb-3">
                        <Form.Control type="number" placeholder="Monto" onChange={handleChange} name="monto" />
                    </FloatingLabel>
                    <Button type='submit' variant="dark" size="lg">generar tiket</Button>
                </Container>
            </Form>

            <Modal show={show2} size="lg" style={{ minHight: "100vh" }}>
                <Modal.Header >
                    <Modal.Title>
                        Tiket
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PDFViewer style={{ width: "100%", height: "90vh" }}>
                        <Tiket {...{ values }} />
                    </PDFViewer>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleReload} >
                        cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Consultas