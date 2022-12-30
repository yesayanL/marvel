import React, {ChangeEvent, FC, memo} from 'react';

interface ICreateHeroFormProps {
    handleInputChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, fieldName: string) => void;
    handleSaveClick: () => void
}

const CreateHeroForm: FC<ICreateHeroFormProps> = ({ handleSaveClick, handleInputChange}) => {
    return (
        <>
            <input type="text" placeholder="Name" onChange={e => {handleInputChange(e, 'name')}}/>
            <textarea placeholder="Description" onChange={e => {handleInputChange(e, 'description')}}/>
            {/*Image upload may not work, because browser can hide path to file and make it fakepath, unfortunately we dont have backend endpoint for image upload))*/}
            <input type="file" placeholder="hero-image" onChange={e => {handleInputChange(e, 'image')}}/>
            <button onClick={() => handleSaveClick()}>Save</button>
        </>
    );
};

export default memo(CreateHeroForm);