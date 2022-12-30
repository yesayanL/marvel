import {ChangeEvent, useCallback, useEffect, useState} from "react";
import {characterListElementType, characterListType} from "../../constants";
import {heroesList} from "../../api/fakeApi";

const useHomePage = () => {
    const [list, setList] = useState<characterListType>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState<characterListElementType>({name: '', description: '', image: ''});

    const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldName: string):void => {
        setFormData(prev => ({...prev, [fieldName]: event.target.value}))
    }, [])

    const handleSaveClick = useCallback( async () => {
        if(Object.values(formData).every(value => !!value)){
            setLoading(true)
            await heroesList.post(formData).then(val => {
                setList(val);
                setLoading(false)
            })
        }
        else {
            alert ('All fields are required!!!')
        }

    }, [formData])

    useEffect(() => {
        setLoading(true);
        heroesList.get().then(val => {
            setList(val);
            setLoading(false);
        })
    }, []);

    return {loading,list, handleInputChange, handleSaveClick }

}

export default useHomePage;