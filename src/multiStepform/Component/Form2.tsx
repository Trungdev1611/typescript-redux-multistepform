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
    next: () => void,
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
const Form2 = (props: Props) => {
    function handleSubmit(e: onSubmitform) {
        e.preventDefault()
    }
    function handleChange(e: onChangeEventInput1) {
        props.setContentForm({ ...props.contentFrom, [e.target.name]: e.target.value })
    }
    return (
        <>
            <h2>Form 2</h2>
            <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
                <input type="text" placeholder='Address'
                    onChange={handleChange} name="Address"
                    value={props.contentFrom.Address}
                    required />
                <input type="email" placeholder='Email'
                    onChange={handleChange} name="Email"
                    value={props.contentFrom.Email}
                    required />
                <div style={{ position: 'relative', left: '70%' }}>
                    <button type="button" onClick={props.back}>Back</button>
                    <button type="submit" onClick={props.next}>Next</button>
                </div>
            </form>
        </>
    )
}

export default Form2
