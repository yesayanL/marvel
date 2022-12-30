import React, { useMemo } from 'react';
import './styles.css'
import Loader from "../../components/loader";
import {Link} from "react-router-dom";
import CreateHeroForm from "../../components/create-hero-form";
import useHomePage from "./useHomePage";

export interface IFormData {
    name: string;
    description: string;
    image: string;
}


const HomePage = () => {
    const {loading,list, handleInputChange, handleSaveClick } = useHomePage();

    const renderingValue = useMemo(() => loading? <Loader/> : (
        <div className="home">
            {list.map(({image, name, id}) => (
                <Link key={id} to={`/character/${id}`}>
                <div  className="row">
                    <h1>{name}</h1>
                    <img className="hero-image-list" src={image} alt={`${name} image`}/>
                </div>
                </Link>
            ))}
        </div>), [loading, list]);


    return (
        <>
            {renderingValue}
            <CreateHeroForm handleInputChange={handleInputChange} handleSaveClick={handleSaveClick}/>
        </>
    )
};

export default HomePage;