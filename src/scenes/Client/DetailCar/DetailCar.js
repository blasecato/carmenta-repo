import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';
import { Header } from "../../../components/Header/Header";
import { user as userActions , user } from '../../../services/User/UserActions'

export const DetailCar = ({ history, match }) => {
    console.log(match)
    return(
        <div className="DetailCar">
            <Header/>
            {match &&
             <div>
                 has seleccionado obserbar el carro # {match.params.id}
             </div>

            }
        </div>
    );
}