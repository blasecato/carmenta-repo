import React, { useState, useEffect } from 'react';
import { Form, Icon, Input, Button, Spin, notification, Alert, Checkbox, Empty } from 'antd';
import { UserOutlined, LockOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import Banner from "../../../assets/image/banner-home.jpg";
import Picanto from "../../../assets/image/kia-picanto.jpg";

//CATEGORIES
import Automovil from "../../../assets/image/bmw-cat.png";
import Camionetas from "../../../assets/image/lr-cat.png";
import Pasajeros from "../../../assets/image/van-cat.png";
import Camion from "../../../assets/image/camion-cat.png";
import Lujosos from "../../../assets/image/mustang-cat.png";

//BRANDS CARS
import LogoAudi from "../../../assets/image/logo-audi.png";
import LogoBMW from "../../../assets/image/logo-bmw.png";
import LogoChevrolet from "../../../assets/image/logo-chevrolet.png";
import LogoFord from "../../../assets/image/logo-ford.png";
import LogoHyundai from "../../../assets/image/logo-hyundai.png";
import LogoKia from "../../../assets/image/logo-kia.png";
import LogoMazda from "../../../assets/image/logo-mazda.png";
import LogoMercedes from "../../../assets/image/logo-mercedes-benz.png";
import LogoNissan from "../../../assets/image/logo-nissan.png";
import LogoRenault from "../../../assets/image/logo-renault.png";
import LogoToyota from "../../../assets/image/logo-toyota.png";
import LogoVolkswagen from "../../../assets/image/logo-volkswagen.png";

import { auth } from '../../../services/Auth/AuthActions';
import { Header } from '../../../components/Header/Header';
import { Footer } from '../../../components/Footer/Footer';


export const Home = ({ history }) => {

	const dispatch = useDispatch()
	
	const dummyVehiculos = [
		{id: 1, name: "Kia Picanto", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "90.000", image: "url",}, 
		{id: 2, name: "ford", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "90.000", image: "url",}, 
		{id: 3, name: "Kia Rio", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "90.000", image: "url",}, 
		{id: 4, name: "hynday", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "90.000", image: "url",}, 
		{id: 5, name: "audi", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "90.000", image: "url",}, 
		{id: 6, name: "gipeta", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "90.000", image: "url",}, 
		{id: 7, name: "camioneta", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "90.000", image: "url",}, 
		{id: 8, name: "zorra", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "90.000", image: "url",}, 
		{id: 9, name: "aveo", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "90.000", image: "url",}, 
		{id: 10, name: "ferrary", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "90.000", image: "url",}, 
		{id: 11, name: "lambord", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "90.000", image: "url",}, 
		{id: 12, name: "carro", puestos: 5, automatico: "Aut", radio: "si", aire: "si", precio: "90.000", image: "url",}
	]

	const dummyMarcas = [
		{id: 1, brand: "Audi", image: LogoAudi,}, 
		{id: 2, brand: "BMW", image: LogoBMW,}, 
		{id: 3, brand: "Chevrolet", image: LogoChevrolet,}, 
		{id: 4, brand: "Ford", image: LogoFord,}, 
		{id: 5, brand: "KIA", image: LogoKia,}, 
		{id: 6, brand: "Mazda", image: LogoMazda,}, 
		{id: 7, brand: "Renault", image: LogoRenault,}, 
		{id: 8, brand: "Toyota", image: LogoToyota,}, 
		{id: 9, brand: "Volskwagen", image: LogoVolkswagen,}, 
		{id: 10, brand: "Hyundai", image: LogoHyundai,}, 
		{id: 11, brand: "Mercedes Benz", image: LogoMercedes,}, 
		{id: 12, brand: "Nissan", image: LogoNissan,}
	]


	return (


		<div className="Home">
			<Header history={history} />
			<div className="banner">
				<img className="img-banner" src={Banner} />
			</div>
			<div className="Container-cars">
				<div className="Container-cars_content-box">
					<h1>CONOCE NUESTROS VEHICULOS</h1>
					<div className="cars-grid">
						{dummyVehiculos && dummyVehiculos.length > 0 ?
							<>
								{dummyVehiculos.map((item, index) =>
									<div key={index} className="single-car">
										<div className="box-car">
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
										</div>
									</div>
								)}
							</>
							:
							<div className="content-bottom">
								<Empty />
							</div>
						}
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
			<div className="brands">
				<div className="brands_container-title">
					<h2>CONOCE NUESTRAS MARCAS</h2>
				</div>
				<div className="brands_content">
					{dummyMarcas && dummyMarcas.map((data, index) =>
						<div key={index} className="brands_container-logos">
							{/* Falta LINK */}
							<div className="logo-brand">
								<div className="logo-brand-img">
									<img className="image-brand" src={data.image} />
								</div>

								<div className="title-brand">
									<h3>{data.brand}</h3>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
}
