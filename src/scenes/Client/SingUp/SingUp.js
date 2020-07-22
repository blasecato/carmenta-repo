import React, { useState, useEffect } from 'react';
import { Form, Icon, Input, Button, Spin, notification, Alert, Checkbox, Select, DatePicker } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { auth } from '../../../services/Auth/AuthActions'

const { Option } = Select;

export const SingUp = ({ form,history }) => {

	const { login } = auth;
	const dispatch = useDispatch()

	const onFinish = values => {
		dispatch(auth.signup(values))
		history.push("/login")
	};

	const handleChange = (value) => {
		
		console.log(`selected ${value}`);
	}

	const onChange = (date, dateString) => {
			console.log(date);
	}


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
							className="item"
							name="nombres"
							rules={[{ required: true, message: 'Por favor ingrese su Nombre.' }]}
						>
							<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Nombre" />
						</Form.Item>
						<Form.Item
							className="item"
							name="apellidos"
							rules={[{ required: true, message: 'Por favor ingrese su Apellido.' }]}
						>
							<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Apellido" />
						</Form.Item>
						<Form.Item
							className="item"
							name="email"
							rules={[{ required: true, message: 'Por favor ingrese su correo electronico.' }]}
						>
							<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Correo electrónico" />
						</Form.Item>
						<Form.Item
							className="item"
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
						className="item"
							name="typeDocumento"
							rules={[{ required: true, message: 'Por favor ingrese su tipo documento.' }]}
						>
							<Select defaultValue="Tipo de documento" onChange={handleChange}>
								<Option value="1">Cedula de Ciudadania</Option>
								<Option value="2">Cedula de Extranjeria</Option>
								<Option value="3">Pasaporte</Option>
							</Select>
						</Form.Item>
						<Form.Item
						className="item"
							name="cedula"
							rules={[{ required: true, message: 'Por favor ingrese su numero de documento' }]}
						>
							<Input
								prefix={<LockOutlined className="site-form-item-icon" />}
								type="number"
								placeholder="Numero de documento"
							/>
						</Form.Item>
						<Form.Item
						className="item"
							name="telefono"
							rules={[{ required: true, message: 'Por favor ingrese un numero de telefono.' }]}
						>
							<Input
								prefix={<LockOutlined className="site-form-item-icon" />}
								type="number"
								placeholder="Telefono"
							/>
						</Form.Item>
						<Form.Item
						className="item"
							name="direccion"
							rules={[{ required: true, message: 'Por favor ingrese su Dirección.' }]}
						>
							<Input
								prefix={<LockOutlined className="site-form-item-icon" />}
								type="text"
								placeholder="Dirección"
							/>
						</Form.Item>
						<Form.Item
						className="item"
							name="fechaNacimiento"
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

