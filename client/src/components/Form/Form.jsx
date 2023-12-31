import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

import { createDog } from "../../Redux/Actions/actions";

import validar from "../../Helpers/validation";

import style from "../Form/Form.module.css"

function Form() {
  const navigate = useNavigate();
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

  function selectedChange(event){
    //Temperaments tiene dentro event
    if(event.target.value === "temperaments"){
      return setDogData({
            ...dogData,
            temperaments: [...dogData.temperaments, event.target.value]
          })
    }
    setDogData({
      ...dogData,
      temperaments: [...dogData.temperaments, event.target.value]
    })
  }

/*Boton Create no aparece hasta que no hayan errores*/
  function disableHandler() {
    let disabled = false;
    for (let error in errors) {
      if (error === "") {
        disabled = false;
      } else {
        disabled = true;
        break;
      }
    }
    return disabled;
  }

  //Funcion submit
  async function submitHandler(event) {
    event.preventDefault();
    window.scrollTo(0,0)
    //Despacha a una action la data de los input
    await dispatch(createDog({
      ...dogData,
      height: { metric: `${dogData.heightMin} - ${dogData.heightMax}`},
      weight: { metric: `${dogData.weightMin} - ${dogData.weightMax}`}
    }));
    navigate("/Home")

  }

  return (
    <div className={style.containerForm}>
      <form>
        <div className={style.inputGroup}>
          <label className={style.label}><h3>Name:</h3></label>
            <input name="name" value={dogData.name} className={style.input} onChange={handleChange} />
                {errors.name && <span>{errors.name}</span>}
          
          <label className={style.label}><h3>Height:</h3></label>
          
          <label className={style.label}>Altura Min:</label>
            <input name="heightMin" value={dogData.heightMin} className={style.input} onChange={handleChange} />
                {errors.heightMin && <span>{errors.heightMin}</span>}
          
          <label className={style.label}>Altura Max:</label>
            <input name="heightMax" value={dogData.heightMax} className={style.input} onChange={handleChange} />
                {errors.heightMax && <span>{errors.heightMax}</span>}
        
          <label className={style.label}><h3>Weight:</h3></label>
          
          <label className={style.label}>Peso Min: </label>
            <input name="weightMin" value={dogData.weightMin} className={style.input} onChange={handleChange} />
        
                {errors.weightMin && <span>{errors.weightMin}</span>}
          
          <label className={style.label}>Peso Max: </label>
            <input name="weightMax" value={dogData.weightMax} className={style.input} onChange={handleChange} />
                {errors.weightMax && <span>{errors.weightMax}</span>}
          
          <label className={style.label}><h3>Life Span:</h3></label>
          <input name="life_span" value={dogData.life_span} className={style.input} onChange={handleChange}/>
                {errors.life_span && <span>{errors.life_span}</span>}   
          
          <label className={style.label}><h3>Temperaments:</h3></label>
            <select multiple name="temperaments" value={dogData.temperaments} onChange={selectedChange} >
                {allTemperaments.map((temperaments) => (<option key={temperaments.name} name={temperaments.name}>{temperaments.name}</option>))}</select>
          
            <button type="Submit" disabled={disableHandler()} className={style.create} onClick={submitHandler}>Create</button>
        </div>
        </form>
    </div>
  );
}

export default Form;

// 