import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap"
import { getListaContactos, postListaContactos } from "./listaComponentesApi";
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router";


export const CrearContacto = () => {
    const [lista, setLista] = useState([]);
    const navegate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [direccion, setDireccion] = useState('');

    const añadirContacto = () => {
        postListaContactos(nombre, email, telefono, direccion).then(listaApi => {
                setLista(listaApi)
            })
            setNombre('');
            setEmail('');
            setTelefono('');
            setDireccion('');
    }

    useEffect(() => {
        getListaContactos().then(listaApi => {
            setLista(listaApi)
        })
    }, []);

    return (
        <>
            <Container fluid>
                <Row>
                    <Col className="p-3" lg={12}>
                        <h1 className="d-flex justify-content-center">Crear Contacto</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="form.ControlNombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control onChange={e => setNombre(e.target.value)} value={nombre} type="text" placeholder="Nombre" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="form.ControlEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="form.ControlTelefono">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control onChange={e => setTelefono(e.target.value)} value={telefono} type="text" placeholder="Teléfono" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="form.ControlDireccion">
                                <Form.Label>Dirección</Form.Label>
                                <Form.Control onChange={e => setDireccion(e.target.value)} value={direccion} type="text" placeholder="Dirección" />
                            </Form.Group>
                            <Button className="w-100" onClick={() => añadirContacto()}>Guardar</Button>
                        </Form>
                        <a href="#" onClick={() => navegate('/')}>Ver lista</a>
                    </Col>
                </Row>
            </Container>
        </>
    );
};