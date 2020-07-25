import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button, Menu, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../services/Auth/AuthActions';
import { user as userActions , user } from '../../services/User/UserActions'
import logo from "../../assets/image/LogoRentautos.png";
import { LoginOutlined, CaretDownOutlined, CarOutlined, SettingOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Search } = Input;

export const Header = ({ history }) => {

	const dispatch = useDispatch()
	const { authentication, user } = useSelector(state => state.auth)
	const { users } = useSelector(state => state.user)
	const [current, setCurrent] = useState("")
	const [email,setEmail] = useState(users.email)

	useEffect(() => {
		if(users){
			setEmail(users.email)
		}
	}, [])
		
	console.log(users,"sxfsdfsd")
	console.log(email,"sxfsdfsd")
	
	const handleClick = e => {
		setCurrent(e.key);
		if(e.key == "3"){
			dispatch(auth.logout())
			history.push("/")
		}
	};

	const handleLogout = () => {
		dispatch(auth.logout())
		history.push("/")
	}

	const handleSearch = (value) => {
		console.log(value)
	}

	return (

		<div className="Header">
			<div className="Header_content">
				<div className="navigation">
					<div className="logo">
						<Link to="/">
							<div className="title-org">
								<h1>RENT<span className="aa">A</span><span className="mobil">UTOS</span></h1>
							</div>
						</Link>
					</div>
					<div className="nav">
						<div className="nav_search">
							<Search
								placeholder="Buscar Autos por marcas, categorias y mas..."
								onSearch={handleSearch}
								className="search"
							/>
						</div>
						<div className="nav_menu-options">
							<Link to="" className="link">
								Categorías
							</Link>
							<Link to="" className="link">
								Autos
							</Link>
							<Link to="" className="link">
								Rentar
							</Link>
							<Link to="" className="link">
								Ayuda/Contáctenos
							</Link>
							<Link to="" className="link">
								Sobre nosotros.
							</Link>
						</div>
					</div>

					<div className="sign">
						<div className="sign--up">
							<CarOutlined className="icon"/> Disfruta tu viaje con la mejor comodidad.
						</div>
						<div className="sign--down">
							{authentication ?
								<>
									<Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
										<SubMenu title="Mi cuenta" icon={<CaretDownOutlined />} >
											<Menu.ItemGroup title="">
												<Menu.Item key="1"><UserOutlined />Perfil</Menu.Item>
												<Menu.Item key="2"><SettingOutlined />Configuración</Menu.Item>
												<Menu.Item key="3"><LoginOutlined />Cerrar sesión</Menu.Item>
											</Menu.ItemGroup>
										</SubMenu>
									</Menu>
									<Button className="btn-car"><ShoppingCartOutlined /></Button>
								</>
								:
								<>
									<Link to="/login" className="btn-prymary-ligth">
										Ingresar
									</Link>
									<Link to="/sing-up" className="btn-prymary-ligth">
										Registrarme
									</Link>
								</>
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
