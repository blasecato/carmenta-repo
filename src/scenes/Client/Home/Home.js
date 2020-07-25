import React, { useState, useEffect } from 'react';
import { Form, Icon, Input, Button, Spin, notification, Alert, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Banner from "../../../assets/image/banner-home.jpg";
import Picanto from "../../../assets/image/kia-picanto.jpg";

import { auth } from '../../../services/Auth/AuthActions';
import { Header } from '../../../components/Header/Header';
import { Footer } from '../../../components/Footer/Footer';



export const Home = ({ history }) => {

	const dispatch = useDispatch()

	const handleLogout = () => {
		dispatch(auth.logout())

	}

	const dummyVehiculos = [
		{
			id: 1, name: "Kia Picanto", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "90.000", image: "url",
		},{
			id: 2, name: "ford", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "90.000", image: "url",
		},{
			id: 3, name: "Kia Rio", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "90.000", image: "url",
		},{
			id: 4, name: "hynday", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "90.000", image: "url",
		},{
			id: 5, name: "audi", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "90.000", image: "url",
		},{
			id: 6, name: "gipeta", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "90.000", image: "url",
		},{
			id: 7, name: "camioneta", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "90.000", image: "url",
		},{
			id: 8, name: "zorra", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "90.000", image: "url",
		},{
			id: 9, name: "aveo", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "90.000", image: "url",
		},{
			id: 10, name: "ferrary", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "90.000", image: "url",
		},{
			id: 11, name: "lambord", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "90.000", image: "url",
		},{
			id: 12, name: "carro", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "90.000", image: "url",
		}
		
	]
console.log(dummyVehiculos)
	return (


		<div className="Home">
			<Header history={history} />

			<div className="banner">

				<img className="img-banner" src={Banner} />

			</div>

			<div className="Container-cars">

				<div className="content-box">
					<h1>CONOCE NUESTRA FLOTA</h1>

					<div className="cars-grid">
						{dummyVehiculos && dummyVehiculos.length > 0 ?
							<>
								{dummyVehiculos.map((item, index) =>
									<div key={index} className="single-car">
										<Link className="box-car">
											<div className="content-top">
												<div className="content-top-left">
													<div className="model-car">
														<h3>{item.name}</h3>
													</div>
													<div className="price">
														<span>{item.precio}/Dia</span>
													</div>
												</div>
												<div className="content-top-right">
													<div className="car-features">
														<CheckCircleOutlined />
														<span>{item.puestos} Puestos</span>
													</div>
													<div className="car-features">
														<CheckCircleOutlined />
														<span>{item.automatico}.</span>
													</div>
													<div className="car-features">
														<CheckCircleOutlined />
														<span>{item.radio}</span>
													</div>
													<div className="car-features">
														<CheckCircleOutlined />
														<span>Aire: {item.aire} </span>
													</div>
												</div>
											</div>
											<div className="content-bottom">
												<img className="picanto" src={Picanto} />
											</div>
										</Link>
									</div>
								)}
							</>
							:
							<div className="content-bottom">
								no hay
							</div>
						}

						{/* <div className="single-car">
							<Link className="box-car">
								<div className="content-top">
									<div className="content-top-left">
										<div className="model-car">
											<h3>Kia Picanto</h3>
										</div>
										<div className="price">
											<span>"90.000"/Dia</span>
										</div>
									</div>
									<div className="content-top-right">
										<div className="car-features">
											<CheckCircleOutlined />
											<span>5 Puestos</span>
										</div>
										<div className="car-features">
											<CheckCircleOutlined />
											<span>Aut.</span>
										</div>
										<div className="car-features">
											<CheckCircleOutlined />
											<span>Radio USB</span>
										</div>
										<div className="car-features">
											<CheckCircleOutlined />
											<span>Aire:SI</span>
										</div>
									</div>
								</div>
								<div className="content-bottom">
									<img className="picanto" src={Picanto} />
								</div>
							</Link>
						</div> */}


						{/* <div className="single-car">
							<Link className="box-car">
								<div className="content-top">
									<div className="content-top-left">
										<div className="model-car">
											<h3>Kia Picanto</h3>
										</div>

										<div className="price">
											<span>"90.000"/Dia</span>
										</div>
									</div>

									<div className="content-top-right">
										<div className="car-features">
											<CheckCircleOutlined />
											<span>5 Puestos</span>
										</div>

										<div className="car-features">
											<CheckCircleOutlined />
											<span>Aut.</span>
										</div>

										<div className="car-features">
											<CheckCircleOutlined />
											<span>Radio USB</span>
										</div>

										<div className="car-features">
											<CheckCircleOutlined />
											<span>Aire:SI</span>
										</div>

									</div>

								</div>

								<div className="content-bottom">
								<img className="picanto" src={Picanto} />

								</div>

							</Link>

						</div>



						<div className="single-car">
							<Link className="box-car">
								<div className="content-top">
									<div className="content-top-left">
										<div className="model-car">
											<h3>Kia Picanto</h3>
										</div>

										<div className="price">
											<span>"90.000"/Dia</span>
										</div>
									</div>

									<div className="content-top-right">
										<div className="car-features">
											<CheckCircleOutlined />
											<span>5 Puestos</span>
										</div>

										<div className="car-features">
											<CheckCircleOutlined />
											<span>Aut.</span>
										</div>

										<div className="car-features">
											<CheckCircleOutlined />
											<span>Radio USB</span>
										</div>

										<div className="car-features">
											<CheckCircleOutlined />
											<span>Aire:SI</span>
										</div>

									</div>

								</div>

								<div className="content-bottom">
								<img className="picanto" src={Picanto} />

								</div>

							</Link>

						</div>



						<div className="single-car">
							<Link className="box-car">
								<div className="content-top">
									<div className="content-top-left">
										<div className="model-car">
											<h3>Kia Picanto</h3>
										</div>

										<div className="price">
											<span>"90.000"/Dia</span>
										</div>
									</div>

									<div className="content-top-right">
										<div className="car-features">
											<CheckCircleOutlined />
											<span>5 Puestos</span>
										</div>

										<div className="car-features">
											<CheckCircleOutlined />
											<span>Aut.</span>
										</div>

										<div className="car-features">
											<CheckCircleOutlined />
											<span>Radio USB</span>
										</div>

										<div className="car-features">
											<CheckCircleOutlined />
											<span>Aire:SI</span>
										</div>

									</div>

								</div>

								<div className="content-bottom">
								<img className="picanto" src={Picanto} />

								</div>

							</Link>

						</div>


						<div className="single-car">
							<Link className="box-car">
								<div className="content-top">
									<div className="content-top-left">
										<div className="model-car">
											<h3>Kia Picanto</h3>
										</div>

										<div className="price">
											<span>"90.000"/Dia</span>
										</div>
									</div>

									<div className="content-top-right">
										<div className="car-features">
											<CheckCircleOutlined />
											<span>5 Puestos</span>
										</div>

										<div className="car-features">
											<CheckCircleOutlined />
											<span>Aut.</span>
										</div>

										<div className="car-features">
											<CheckCircleOutlined />
											<span>Radio USB</span>
										</div>

										<div className="car-features">
											<CheckCircleOutlined />
											<span>Aire:SI</span>
										</div>

									</div>

								</div>

								<div className="content-bottom">
								<img className="picanto" src={Picanto} />

								</div>

							</Link>

						</div>

						<div className="single-car">
							<Link className="box-car">
								<div className="content-top">
									<div className="content-top-left">
										<div className="model-car">
											<h3>Kia Picanto</h3>
										</div>

										<div className="price">
											<span>"90.000"/Dia</span>
										</div>
									</div>

									<div className="content-top-right">
										<div className="car-features">
											<CheckCircleOutlined />
											<span>5 Puestos</span>
										</div>

										<div className="car-features">
											<CheckCircleOutlined />
											<span>Aut.</span>
										</div>

										<div className="car-features">
											<CheckCircleOutlined />
											<span>Radio USB</span>
										</div>

										<div className="car-features">
											<CheckCircleOutlined />
											<span>Aire:SI</span>
										</div>

									</div>

								</div>

								<div className="content-bottom">
								<img className="picanto" src={Picanto} />

								</div>

							</Link>

						</div>


						<div className="single-car">
							<Link className="box-car">
								<div className="content-top">
									<div className="content-top-left">
										<div className="model-car">
											<h3>Kia Picanto</h3>
										</div>

										<div className="price">
											<span>"90.000"/Dia</span>
										</div>
									</div>

									<div className="content-top-right">
										<div className="car-features">
											<CheckCircleOutlined />
											<span>5 Puestos</span>
										</div>

										<div className="car-features">
											<CheckCircleOutlined />
											<span>Aut.</span>
										</div>

										<div className="car-features">
											<CheckCircleOutlined />
											<span>Radio USB</span>
										</div>

										<div className="car-features">
											<CheckCircleOutlined />
											<span>Aire:SI</span>
										</div>

									</div>

								</div>

								<div className="content-bottom">
								<img className="picanto" src={Picanto} />

								</div>

							</Link>

						</div>
						

						<div className="single-car">
							<Link className="box-car">
								<div className="content-top">
									<div className="content-top-left">
										<div className="model-car">
											<h3>Kia Picanto</h3>
										</div>

										<div className="price">
											<span>"90.000"/Dia</span>
										</div>
									</div>

									<div className="content-top-right">
										<div className="car-features">
											<CheckCircleOutlined />
											<span>5 Puestos</span>
										</div>

										<div className="car-features">
											<CheckCircleOutlined />
											<span>Aut.</span>
										</div>

										<div className="car-features">
											<CheckCircleOutlined />
											<span>Radio USB</span>
										</div>

										<div className="car-features">
											<CheckCircleOutlined />
											<span>Aire:SI</span>
										</div>

									</div>

								</div>

								<div className="content-bottom">
								<img className="picanto" src={Picanto} />

								</div>

							</Link>

						</div> */}


						{/* 
						<div className="single-car">
							<Link className="box-car">
								<div className="content-top">
									<div className="content-top-left">
										<div className="model-car">
											<h3>Kia Picanto</h3>
										</div>

										<div className="price">
											<span>"90.000"/Dia</span>
										</div>
									</div>

									<div className="content-top-right">
										<div className="car-features">
											<CheckCircleOutlined />
											<span>5 Puestos</span>
										</div>

										<div className="car-features">
											<CheckCircleOutlined />
											<span>Aut.</span>
										</div>

										<div className="car-features">
											<CheckCircleOutlined />
											<span>Radio USB</span>
										</div>

										<div className="car-features">
											<CheckCircleOutlined />
											<span>Aire:SI</span>
										</div>

									</div>

								</div>

								<div className="content-bottom">
								<img className="picanto" src={Picanto} />

								</div>

							</Link>

						</div> */}

					</div>
				</div>
			</div>
		</div>
	);
}
