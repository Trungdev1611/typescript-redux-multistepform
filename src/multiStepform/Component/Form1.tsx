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

const Form1 = (props: Props) => {
    function handleSubmit(e: onSubmitform) {
        e.preventDefault()
        props.next()
    }
    function handleChange(e: onChangeEventInput1) {
        props.setContentForm({ ...props.contentFrom, [e.target.name]: e.target.value })
    }
    return (
        <>
            <h2>Form 1</h2>
            <form onSubmit={handleSubmit} style={{ position: 'relative' }}>
                <input type="text" placeholder='UserName'
                    onChange={handleChange}
                    required name="username"
                    value={props.contentFrom.username}
                />
                <input type="password" placeholder='Password'
                    onChange={handleChange}
                    required name="Password"
                    value={props.contentFrom.Password}
                />
                <div style={{ position: 'relative', left: '80%' }}>
                    <button type="submit" >Next</button>
                </div>
            </form>
        </>

    )
}

export default Form1
