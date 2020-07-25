import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button, Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { auth } from '../../services/Auth/AuthActions';
import logo from "../../assets/image/LogoRentautos.png";
import { SettingOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';





const { SubMenu } = Menu;

export const Header = ({ history }) => {

	
	  const [current,setCurrent]= useState("") 

	const handleClick = e => {
		console.log('click ', e);
		setCurrent(e.key);
	};

	




	const { authentication, user } = useSelector(state => state.auth)
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
								<h1>RENTAutos</h1>
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

						<Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">

							<SubMenu icon={<SettingOutlined />} title="Mi cuenta">
								<Menu.ItemGroup title="">
									<Menu.Item key="setting:1">Perfil</Menu.Item>
									<Menu.Item key="setting:2">Cerrar sesión</Menu.Item>
									<Menu.Item key="setting:3">Configuración</Menu.Item>
								</Menu.ItemGroup>

							</SubMenu>
						</Menu>


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
