import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/image/LogoRentautos.png";


export const Header = () => {


	return (
		<div className="SingUp">

			<div className="header">

				<div className="navigation">
					<div className="logo">
						<Link>
							<img src={logo} />
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
							Ingresar
						</Link>


					</div>
				</div>
			</div>


		</div>
	);
}
