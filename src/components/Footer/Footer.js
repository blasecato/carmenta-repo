import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button, Spin, notification, Alert, Checkbox } from 'antd';
import { FacebookOutlined, InstagramOutlined, YoutubeOutlined, WhatsAppOutlined } from '@ant-design/icons';


export const Footer = () => {


	return (
		<div className="Footer">
			<div className="ftr-top">
				<div className="ftr-box-left">
					<div className="send-msg-ftr">
						<div className="message-ftr-title"> <h2>DEJANOS UN MENSAJE</h2>
						</div>
						<input type="email" placeholder="Email" />
						<input type="text" placeholder="Mensaje" />
						<Button type="primary" htmlType="submit" className="msg-form-button">
							ENVIAR
        				</Button>
					</div>
				</div>

				<div className="ftr-box-mid">
					<div className="social-media">
						<div className="social-media-title">
							<h2>SÍGUENOS</h2>
						</div>
						<div className="media-icons">
							<div className="icon">
								<FacebookOutlined />
							</div>
							<div className="icon">
								<InstagramOutlined />
							</div>
							<div className="icon">
								<YoutubeOutlined />
							</div>
							<div className="icon">
								<WhatsAppOutlined />
							</div>

						</div>

					</div>
				</div>

				<div className="ftr-box-right">
					<div className="contact-us-ftr">
						<div className="ct-us-title-ftr">
							<h2>CONTÁCTANOS</h2>
						</div>
						<div className="contact-item">
							<h3>+(057)318 615 5060</h3>
						</div>
						<div className="contact-item">
							<h3>contacto@rentautos.com.co</h3>
						</div>

					</div>

				</div>
			</div>

			<div className="ftr-bottom">
				<div className="copyright-section-l">
					<h3>All rights Reserved - Rentautos</h3>
				</div>
				<div className="copyright-section-r">
				<h3>Copyright - 2020</h3>
				</div>
			</div>




		</div>
	);
}
