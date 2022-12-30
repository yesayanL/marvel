import React, {useEffect, useMemo, useState} from 'react';
import {useParams} from "react-router-dom";
import {singleHero} from "../../api/fakeApi";
import {characterListElementType} from "../../constants";
import Loader from "../../components/loader";
import './styles.css'

const Index = () => {
    const { id } = useParams();
    const [item, setItem] = useState<characterListElementType>({name: '', id: '', description: '', image: ''});
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true)
        singleHero.get(id!).then(val => {
            setItem(val);
            setLoading(false)
        })
    }, [])

    const {name, image, description} = item;


    const renderingValue = useMemo(() => loading? <Loader/> : (
        <div className='single-character-container'>
            <h1>{name}</h1>
            <img src={image} alt={`${name} image`} className='single-character-image'/>
            <h3>Description</h3>
            <p>{description}</p>
        </div>), [loading, item]);


    return renderingValue;
};

export default Index;