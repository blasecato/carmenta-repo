import React, { useState, useEffect } from 'react';
import { Form, Icon, Input, Button, Spin, notification, Alert, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Banner from "../../../assets/image/banner-home.jpg";
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

			<div className="Container-cars">

				<div className="content-box">
					<h1>CONOCE NUESTRA FLOTA</h1>

					<div className="cars-grid">
						<div className="single-car">
							<Link className="box-car">
								<div className="content-top">
									<div className="content-top-left">

									</div>

									<div className="content-top-right">

									</div>

								</div>

								<div className="content-bottom">

								</div>

							</Link>

						</div>


					</div>
				</div>
			</div>

			<Button className="button" onClick={() => handleLogout()}>Cerrar sesión</Button>

		</div>
	);
}
