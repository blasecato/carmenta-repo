import React, { useState, useEffect } from 'react';
import { Form, Icon, Input, Button, Spin, notification, Alert, Checkbox, Select, DatePicker } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { auth } from '../../../services/Auth/AuthActions'


const { Option } = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

function onChange(date, dateString) {
    console.log(date, dateString);
}


export const SingUp = ({ form }) => {

    const { SingUp } = auth;
    const dispatch = useDispatch()

    const onFinish = values => {
        console.log('Received values of form: ', values);
        if (values) {

            console.log(values.email)
            dispatch(SingUp(values.email, values.password))
        }


    };


    return (
        <div className="SingUp">

            <div className="circle-top">
                <div className="circle-dow"></div>
            </div>

            <div className="circle-bottom">
                <div className="circle-dow2"></div>
            </div>



            <div className="container-register">


                <div className="box-img-form">

                    <div className="img-car">

                    </div>

                    <h1>Registrate</h1>

                </div>

                <div className="container-form-register">
                    <Form
                        name="register"
                        className="register-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >


                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Por favor ingrese su nombre.' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="text"
                                placeholder="Nombre"
                            />
                        </Form.Item>


                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Por favor ingrese sus apellidos.' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="text"
                                placeholder="Apellidos"
                            />
                        </Form.Item>


                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Por favor ingrese su correo electronico.' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Correo electrónico" />
                        </Form.Item>


                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Por favor ingrese su contraseña.' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Contraseña"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Por favor ingrese su tipo documento.' }]}
                        >
                            <Select defaultValue="Tipo de documento" style={{ width: 200 }} onChange={handleChange}>
                                <Option value="cc">Cedula de Ciudadania</Option>
                                <Option value="Ce">Cedula de Extranjeria</Option>
                                <Option value="Pasaporte">Pasaporte</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Por favor ingrese su numero de documento' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="number"
                                placeholder="Numero de documento"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Por favor ingrese un numero de telefono.' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="number"
                                placeholder="Telefono"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Por favor ingrese su Dirección.' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="text"
                                placeholder="Dirección"
                            />
                        </Form.Item>


                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Por favor ingrese su fecha de nacimiento.' }]}
                        >
                            <DatePicker onChange={onChange} />

                        </Form.Item>


                        <Form.Item className="cont-btn">
                            <Button type="primary" htmlType="submit" className="register-form-button">
                                Aceptar
        			</Button>
                        </Form.Item>
                    </Form>

                </div>



            </div>

        </div>
    );
}

