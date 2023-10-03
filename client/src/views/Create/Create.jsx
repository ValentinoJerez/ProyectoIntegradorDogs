import style from "../Create/CreateDog.module.css"


function Create(){

    return (
        <div className={style.container}>
            <h1>Create your dog: </h1>
            <form className={style.form}> 
                <label>Name: <input /></label>
                <label>Height: <label> Altura Min:<input /></label> <label>Altura Max:<input /></label> </label>
                <label>Weight: <label> Peso Min:<input /></label> <label>Peso Max:<input /></label></label>
                <label>Life Span: <input /></label>
                <label>Temperamentos: <input /></label>
                <button>Create</button>
            </form>
        </div>
    )
}

export default Create;