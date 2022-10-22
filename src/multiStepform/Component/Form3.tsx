import React from 'react'
import { onChangeEventInput1, onSubmitform } from '../../Types'

interface Props {
    contentFrom: {
        step: number,
        username: string,
        Password: string;
        Address: string;
        Email: string;
        district: string;
        ability: string
    },
    back: () => void,
    setContentForm: React.Dispatch<React.SetStateAction<{
        step: number;
        username: string;
        Password: string;
        Address: string;
        Email: string;
        district: string;
        ability: string;
    }>>

}


const Form3 = (props: Props) => {
    function handleSubmit(e: onSubmitform) {
        e.preventDefault()
    }
    function handleChange(e: onChangeEventInput1) {
        props.setContentForm({ ...props.contentFrom, [e.target.name]: e.target.value })
    }
    return (
        <>
            <h2>Form 3</h2>
            <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
                <input type="text" placeholder='District'
                    onChange={handleChange}
                    required name="district"
                    value={props.contentFrom.district} />
                <input type="text" placeholder='Ability'
                    onChange={handleChange}
                    required name="ability"
                    value={props.contentFrom.ability}
                />
                <div style={{ position: 'relative', left: '60%' }}>
                    <button type="button" onClick={props.back}>Back</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}

export default Form3
