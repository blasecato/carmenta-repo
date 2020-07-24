import React, { useState, useEffect } from 'react';
import { Form, Icon, Input, Button, Spin, notification, Alert, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Banner from "../../../assets/image/banner-home.jpg";
import Picanto from "../../../assets/image/kia-picanto.jpg";
import Automovil from "../../../assets/image/bmw-cat.png";
import Camionetas from "../../../assets/image/lr-cat.png";
import Pasajeros from "../../../assets/image/van-cat.png";
import Camion from "../../../assets/image/camion-cat.png";
import Lujosos from "../../../assets/image/mustang-cat.png";

import { auth } from '../../../services/Auth/AuthActions';
import { Header } from '../../../components/Header/Header';
import { Footer } from '../../../components/Footer/Footer';



export const Home = ({ history }) => {

	const dispatch = useDispatch()

	const handleLogout = () => {
		dispatch(auth.logout())

	}

	return (


		<div className="Home">
			<Header history={history} />

			<div className="banner">

				<img className="img-banner" src={Banner} />

			</div>

			<div className="Container-cars">

				<div className="content-box">
					<h1>CONOCE NUESTROS VEHICULOS</h1>

					<div className="cars-grid">
						<div className="single-car">
							<Link className="box-car">
								<div className="content-top">
									<div className="content-top-left">
										<div className="model-car">
											<h3>Kia Picanto</h3>
										</div>

										<div className="price">
											<span>90.000/Dia</span>
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
											<span>90.000/Dia</span>
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
											<span>90.000/Dia</span>
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
											<span>90.000/Dia</span>
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
											<span>90.000/Dia</span>
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
											<span>90.000/Dia</span>
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
											<span>90.000/Dia</span>
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
											<span>90.000/Dia</span>
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
											<span>90.000/Dia</span>
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

					</div>

				</div>
			</div>

			<div className="categories-box">
				<div className="categories-title">
					<h2>CATEGORIAS</h2>
				</div>

				<div className="container-categories">

					<Link>
						<div className="item-cat">
							<div className="title-item-cat">
								<h3>Automóviles</h3>
							</div>
							<div className="item-cat-icon">
								<img className="img-item-cat" src={Automovil} />
							</div>
						</div>
					</Link>

					<Link>
						<div className="item-cat">
							<div className="title-item-cat">
								<h3>Camionetas</h3>
							</div>
							<div className="item-cat-icon">
								<img className="img-item-cat" src={Camionetas} />
							</div>
						</div>
					</Link>

					<Link>
						<div className="item-cat">
							<div className="title-item-cat">
								<h3>Vans - Pasajeros</h3>
							</div>
							<div className="item-cat-icon">
								<img className="img-item-cat" src={Pasajeros} />
							</div>
						</div>
					</Link>

					<Link>
						<div className="item-cat">
							<div className="title-item-cat">
								<h3>Camiones</h3>
							</div>
							<div className="item-cat-icon">
								<img className="img-item-cat" src={Camion} />
							</div>
						</div>
					</Link>

					<Link>
						<div className="item-cat">
							<div className="title-item-cat">
								<h3>Lujosos</h3>
							</div>
							<div className="item-cat-icon">
								<img className="img-item-cat" src={Lujosos} />
							</div>
						</div>
					</Link>
				</div>


			</div>



			<Footer />
		</div>
	);
}
