import Form from "../../components/Form/Form"

import style from "../Create/CreateDog.module.css"

function Create(){

    return (
        <div className={style.container}>
            <h1>Create your dog: </h1>
            <div className={style.form}>
                <Form/>
            </div>
        </div>
    )
}

export default Create;