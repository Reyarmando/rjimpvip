import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import Logo from "../public/rjimp.png"

const Tiket = (props) => {



    return (
        <>

            <Document>
                <Page size='A8'>
                    <View >
                        <Text style={{
                            fontStyle: "italic",
                            fontSize: "10px",
                            textAlign: "center"
                        }}>******************************</Text>
                        <Text style={{
                            fontStyle: "italic",
                            fontSize: "10px",
                            textAlign: "center"
                        }}>***RJ.IMPERIUMVIP***</Text>
                        <Text
                            style={{
                                fontStyle: "italic",
                                fontSize: "8px",
                                textAlign: "center"
                            }}> BBVA: CUENTA INDEPENDENCIA BBVA
                             Número de cuenta: 0011-0229-0200845728
                        </Text>
                        <Text
                            style={{
                                fontStyle: "italic",
                                fontSize: "8px",
                                textAlign: "center"
                            }}> CCI: 011-229-000200845728-21.</Text>
                        <Text style={{
                            fontStyle: "italic",
                            fontSize: "15px",
                            textAlign: "center"
                        }}>------------------------</Text>
                        <Text
                            style={{
                                fontStyle: "italic",
                                fontSize: "7px",
                                textAlign: "center"
                            }}
                        >-DATOS DEL CLIENTE-</Text>
                        <Text
                            style={{
                                fontStyle: "italic",
                                fontSize: "8px",
                            }}
                        >DNI           : {props.values.dni}</Text>
                        <Text
                            style={{
                                fontStyle: "italic",
                                fontSize: "8px",
                            }}
                        >Nombres    : {props.values.fullname}</Text>
                        <Text
                            style={{
                                fontStyle: "italic",
                                fontSize: "8px",
                            }}
                        >Telefono    : {props.values.telefono}</Text>
                        <Text
                            style={{
                                fontStyle: "italic",
                                fontSize: "8px",
                            }}
                        >Direccion   : {props.values.direccion}</Text>
                        <Text
                            style={{
                                fontStyle: "italic",
                                fontSize: "8px",
                            }}
                        >Descripcion: {props.values.descripcion}</Text>
                        <Text
                            style={{
                                fontStyle: "italic",
                                fontSize: "8px",
                            }}
                        >Monto        : S/. {props.values.monto}</Text>
                    </View>
                    <Text style={{
                            fontStyle: "italic",
                            fontSize: "15px",
                            textAlign: "center"
                        }}>------------------------</Text>
                    <Text
                        style={{
                            fontStyle: "italic",
                            fontSize: "8px",
                            textAlign: "center"
                        }}>CONTACTO</Text>
                    <Text
                        style={{
                            fontStyle: "italic",
                            fontSize: "8px",
                            textAlign: "center"
                        }}>944516860 - 977408966</Text>
                    <Text style={{
                        fontStyle: "italic",
                        fontSize: "10px",
                        textAlign: "center"
                    }}>******************************</Text>
                </Page>
            </Document>
        </>
    );
}
export default Tiket;

{/*import React from 'react'

function tiket(props) {
    return (
        <div>
            <img
                src="https://yt3.ggpht.com/-3BKTe8YFlbA/AAAAAAAAAAI/AAAAAAAAAAA/ad0jqQ4IkGE/s900-c-k-no-mo-rj-c0xffffff/photo.jpg"
                alt="Logotipo"
                width={171}
                height={180} />

            <table>
                <thead>
                    <tr>
                        <th >R.J.</th>
                        <th >IMPERIUM</th>
                        <th >VIP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td >Nombres:</td>
                        <td ></td>
                        <td >$8.50</td>
                    </tr>
                    <tr>
                        <td >Descripcion:</td>
                        <td >KINDER DELICE</td>
                        <td >$10.00</td>
                    </tr>
                    <tr>
                        <td >DNI</td>
                        <td >TOTAL</td>
                        <td >$28.50</td>
                    </tr>
                    <tr>
                        <td >Telefono:</td>
                        <td >TOTAL</td>
                        <td >$28.50</td>
                    </tr>
                    <tr>
                        <td >Monto</td>
                        <td >COCA COLA 600 ML</td>
                        <td >$10.00</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default tiket*/}