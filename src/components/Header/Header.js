import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button} from 'antd';
import { useDispatch } from 'react-redux';
import { auth } from '../../services/Auth/AuthActions';
import logo from "../../assets/image/LogoRentautos.png";
import { useSelector } from 'react-redux';

export const Header = ({history}) => {
	const { authentication , user} = useSelector(state => state.auth)
	console.log(user)

	const dispatch = useDispatch()

	const handleLogout = () => {
		dispatch(auth.logout())
		history.push("/")
	}

	return (
		<div className="SingUp">
			<div className="header">
				<div className="navigation">
					<div className="logo">
						<Link>
							<div className="title-org">
								<h1>RENTA <span>Autos</span></h1>
							</div>
						</Link>
					</div>
					<div className="nav-bar">
						<Link>
							Inicio
						</Link>
						<Link>
							Servicios
						</Link>
						<Link>
							Autos
						</Link>
						<Link>
							Sobre nosotros
						</Link>
						<Link>
							Contáctenos
						</Link>
						{authentication ?
							<Button className="button" onClick={() => handleLogout()}>Cerrar sesión</Button>
						:
							<Link to="/login" className="login">
								Ingresar
							</Link>	
						}
						
					</div>
				</div>
			</div>


		</div>
	);
}
