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



export const Home = () => {

	const dispatch = useDispatch()

	const handleLogout = () => {
		dispatch(auth.logout())
	}

	return (


		<div className="Home">
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
		</div>
	);
}
