import React, { useState, useEffect } from 'react';
import { Form, Icon, Input, Button, Spin, notification, Alert, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Banner from "../../../assets/image/register-bmw.jpg";
import { auth } from '../../../services/Auth/AuthActions';
import { Header } from '../../../components/Header/Header'


export const Home = () => {

	const dispatch = useDispatch()

	const handleLogout = () => {
		dispatch(auth.logout())
	}

	return (


		<div className="SingUp">
			<Header />

			<div className="banner">
				
					<img className="img-banner" src={Banner} />

			</div>

			<Button className="button" onClick={() => handleLogout()}>Cerrar sesión</Button>

		</div>
	);
}
