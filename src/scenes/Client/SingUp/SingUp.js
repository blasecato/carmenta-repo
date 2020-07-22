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
					{/* <h1>Registrate</h1> */}
					<Button type="primary" className="back" onClick={()=> history.push("/login")}>
						Iniciar Sesión
        	</Button>
				</div>
				<div className="container-form-register">
					<h1 className="title">Datos Personales.</h1>
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
							<label className="item--label">Nombres:</label>
							<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Nombre" />
						</Form.Item>
						<Form.Item
							className="item"
							name="apellidos"
							rules={[{ required: true, message: 'Por favor ingrese su Apellido.' }]}
						>
							<label className="item--label">Apellidos:</label>
							<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Apellido" />
						</Form.Item>
						<Form.Item
							className="item"
							name="email"
							rules={[{ required: true, message: 'Por favor ingrese su correo electronico.' }]}
						>
							<label className="item--label">Correo Electrónico:</label>
							<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Correo electrónico" />
						</Form.Item>
						<Form.Item
							className="item"
							name="password"
							rules={[{ required: true, message: 'Por favor ingrese su contraseña.' }]}
						>
							<label className="item--label">Contraseña:</label>
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
							<label className="item--label">Tipo de documento:</label>
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
							<label className="item--label">Numero de documento:</label>
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
							<label className="item--label">Telefono:</label>
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
							<label className="item--label">Direccion:</label>
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
							<label className="item--label">Fecha de nacimiento:</label>
							<DatePicker onChange={onChange} />
						</Form.Item>
						<Form.Item className="cont-btn">
							<Button type="primary" htmlType="submit" className="register-form-button">
								Registrar
        			</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		</div>
	);
}

