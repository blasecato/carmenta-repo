import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';
import { Header } from "../../../components/Header/Header";
import { user as userActions, user } from '../../../services/User/UserActions'
import Picanto from "../../../assets/image/kia-picanto.jpg";
import AliceCarousel from 'react-alice-carousel';




export const DetailCar = ({ history, match }) => {

    const handleOnDragStart = (e) => e.preventDefault()

    
    const [currentIndex,setCurrentIndex]=useState(0)
    const [items,setItems]=useState([1, 2, 3, 4, 5])
    
    const slideTo = (i) =>{setCurrentIndex(i)}

    const onSlideChanged = (e) =>{setCurrentIndex(e.item)}

    const slideNext = () => {setCurrentIndex(currentIndex + 1)}

    const slidePrev = () => {setCurrentIndex(currentIndex - 1)}

    const renderThumbs = () =>
        <ul>{items.map((item, i) =>
            <li key={i} onClick={() => slideTo(i)}>Thumb {item}</li>)}
        </ul>;

    const renderGallery=()=> {
        
        return (<AliceCarousel
            dotsDisabled={true}
            buttonsDisabled={true}
            slideToIndex={currentIndex}
            onSlideChanged={onSlideChanged}
        >
            {items.map((item, i) => <div key={i} className="yours-custom-class"><h2>{item}</h2></div>)}
        </AliceCarousel>);
    }

    return (
        <div className="DetailCar">
            <Header />

            <div>
                <h3>Navigation</h3>
                {renderThumbs()}
                <button onClick={() => slidePrev()}>Prev button</button>
                <button onClick={() => slideNext()}>Next button</button>
                <h3>React Alice Carousel</h3>
                {renderGallery()}
            </div>

            {match &&
                <div>
                    <div>
                        has seleccionado obserbar el carro # {match.params.id}
                    </div>

                    <div className="container-vehicle">

                        <div className="container-vehicle_wrapper">

                            <div className="carousel-imgs">
                                <img className="img-carousel" src={Picanto} />
                            </div>

                            <div className="imgs-mini">
                                <img className="img-mini" src={Picanto} />
                                <img className="img-mini" src={Picanto} />
                                <img className="img-mini" src={Picanto} />
                                <img className="img-mini" src={Picanto} />
                                <img className="img-mini" src={Picanto} />
                            </div>

                        </div>

                        <div className="container-description">
                            <div className="container-description-title">

                            </div>

                        </div>
                    </div>
                </div>

            }
        </div>
    );
}