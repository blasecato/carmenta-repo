import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/image/LogoRentautos.png";
import { useSelector } from 'react-redux';

export const Header = () => {
	const { authentication , user} = useSelector(state => state.auth)
	console.log(user)

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
						<Link className="login">
							Cuenta
						</Link>
					</div>
				</div>
			</div>


		</div>
	);
}
