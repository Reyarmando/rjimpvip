import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import Logo from "../public/rjimp.png"

const Tiket = (props) => {



    return (
        <>

            <Document>
                <Page size='A8'>
                    <View >
                        <Image
                            src={Logo}
                            alt="Logotipo"
                            width={20}
                            height={20} />

                        <Text>RJ.IMPERIUMVIP</Text>
                        <Text
                            style={{
                                fontStyle: "italic",
                                fontSize: "10px",
                            }}
                        >DNI:</Text>
                        <Text
                            style={{
                                fontStyle: "italic",
                                fontSize: "8px",
                            }}
                        >{props.values.dni}</Text>
                        <Text
                            style={{
                                fontStyle: "italic",
                                fontSize: "10px",
                            }}
                        >Nombres:</Text>
                        <Text
                            style={{
                                fontStyle: "italic",
                                fontSize: "8px",
                            }}
                        >{props.values.fullname}</Text>
                        <Text
                            style={{
                                fontStyle: "italic",
                                fontSize: "10px",
                            }}
                        >Telefono:</Text>
                        <Text
                            style={{
                                fontStyle: "italic",
                                fontSize: "8px",
                            }}
                        >{props.values.telefono}</Text>
                        <Text
                            style={{
                                fontStyle: "italic",
                                fontSize: "10px",
                            }}
                        >Direccion:</Text>
                        <Text
                            style={{
                                fontStyle: "italic",
                                fontSize: "8px",
                            }}
                        >{props.values.direccion}</Text>
                        <Text
                            style={{
                                fontStyle: "italic",
                                fontSize: "10px",
                            }}
                        >Descripcion:</Text>
                        <Text
                            style={{
                                fontStyle: "italic",
                                fontSize: "8px",
                            }}
                        >{props.values.descripcion}</Text>
                        <Text
                            style={{
                                fontStyle: "italic",
                                fontSize: "10px",
                            }}
                        >Monto:</Text>
                        <Text
                            style={{
                                fontStyle: "italic",
                                fontSize: "8px",
                            }}
                        >{props.values.monto}</Text>
                    </View>
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