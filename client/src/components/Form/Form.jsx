import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createDog, getTemperaments } from "../../Redux/Actions/actions";

import validar from "../../Helpers/validation";

function Form() {
  const dispatch = useDispatch();
  const allTemperaments = useSelector((state) => state?.temperaments); //Estado global
  //Almaceno informacion
  const [dogData, setDogData] = useState({
    name: "",
    height: "",
    heightMin: "",
    heightMax: "",
    weight: "",
    weightMin: "",
    weightMax: "",
    life_span: "",
    temperaments: [],
  });

  //Genero estado para los errores:
  const [errors, setErrors] = useState({
    name: "",
    heightMin: "",
    heightMax: "",
    weightMin: "",
    weightMax: "",
    life_span: "",
    temperaments: [],
  });

  //Al iniciar trae los temperamentos
  useEffect(()=>{
    dispatch(getTemperaments())
  }, [])

  //Recibe evento y modifica el estado
  function handleChange(event) {
    setDogData({
      ...dogData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validar({
        ...dogData,
        [event.target.name]: event.target.value,
      })
    );
  }

  function disableHandler() {
    let disabled = false;
    for (let error in errors) {
      if (errors[error] === "") {
        disabled = false;
      } else {
        disabled = true;
        break;
      }
    }
    return disabled;
  }

  //Funcion submit
  //despachar a una action la data de los input
  function submitHandler(event) {
    event.preventDefault();
    dispatch(createDog({
      ...dogData,
      height: { metric: `${dogData.heightMin} - ${dogData.heightMax}`},
      weight: { metric: `${dogData.weightMin} - ${dogData.weightMax}`}
    }));
  }

  return (
    <div>
      {/* <h2>Create your dog</h2> */}
      <form>
        <label>Name: <input name="name" value={dogData.name} onChange={handleChange} /></label>
                {errors.name && <span>{errors.name}</span>}
        <label>Height:</label>
          <label>Altura Min: </label>
            <input name="heightMin" value={dogData.heightMin} onChange={handleChange} />
                {errors.heightMin && <span>{errors.heightMin}</span>}
          
          <label>Altura Max: </label>
            <input name="heightMax" value={dogData.heightMax} onChange={handleChange} />
                {errors.heightMax && <span>{errors.heightMax}</span>}
        
        <label>Weight: </label>
          <label>Peso Min: </label>
            <input name="weightMin" value={dogData.weightMin} onChange={handleChange} />
                {errors.weightMin && <span>{errors.weightMin}</span>}
          
          <label>Peso Max: </label>
            <input name="weightMax" value={dogData.weightMax} onChange={handleChange} />
                {errors.weightMax && <span>{errors.weightMax}</span>}
          <label>Life Span: </label>
          <input name="life_span" value={dogData.life_span} onChange={handleChange}/>
                {errors.life_span && <span>{errors.life_span}</span>}
          <label>Temperaments: 
            <select multiple name="temperaments">
                {allTemperaments.map((temperament) => (<option key={temperament.name} name={temperament.name}>{temperament.name}</option>))}</select>
        </label>
        <button type="Submit" disabled={disableHandler()} onClick={submitHandler}>Create</button>
      </form>
    </div>
  );
}

export default Form;