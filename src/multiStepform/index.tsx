import React, { useState } from 'react'
import Form1 from './Component/Form1'
import Form2 from './Component/Form2'
import Form3 from './Component/Form3'

const IndexMulti = () => {
    const [contentFrom, setContentForm] = useState({
        step: 1,
        username: "",
        Password: "",
        Address: "",
        Email: "",
        district: "",
        ability: ""

    })
    console.table(contentFrom)
    function next() {
        if (contentFrom.step < 3) {
            contentFrom.step = contentFrom.step + 1
            setContentForm({ ...contentFrom })
        }
    }
    function back() {
        if (contentFrom.step > 1) {
            contentFrom.step = contentFrom.step - 1
            setContentForm({ ...contentFrom })

        }
    }
    return (
        <div>
            {contentFrom.step === 1 && <Form1 contentFrom={contentFrom}
                next={next} setContentForm={setContentForm} />

            }
            {contentFrom.step === 2 && <Form2 contentFrom={contentFrom}
                back={back}
                next={next} setContentForm={setContentForm} />

            }
            {contentFrom.step === 3 && <Form3
                contentFrom={contentFrom}
                back={back}
                setContentForm={setContentForm} />}
        </div>
    )
}

export default IndexMulti
