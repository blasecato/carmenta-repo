import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';
import { Header } from "../../../components/Header/Header";

export const Store = ({ history }) => {
    return(
        <div className="Store">
            <Header/>
        </div>
    );
}