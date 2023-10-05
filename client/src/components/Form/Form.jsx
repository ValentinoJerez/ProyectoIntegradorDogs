import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createDog } from "../../Redux/Actions/actions";

import validar from "../../Helpers/validation";

function Form() {
  const dispatch = useDispatch();
  //Hacer use selector igual que en getdog, "estado local" con temperaments
  const allTemperaments = useSelector((state) => state?.temperaments); //Estado global
  console.log(allTemperaments);
  //Almaceno informacion
  const [dogData, setDogData] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    temperaments: [],
  });

  //Genero estado para los errores:
  const [errors, setErrors] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    temperaments: [],
  });

  //Recibe evento y modifica el estado
  function handleChange(event) {
    if (event.target.name === "HeightMin") {
      return setDogData({
        ...dogData,
        height: event.target.value.concat(dogData.height),
      });
    }
    if (event.target.name === "HeightMax") {
      return setDogData({
        ...dogData,
        height: dogData.height.concat(" - " + event.target.value),
      });
    }
    if (event.target.name === "WeightMin") {
      return setDogData({
        ...dogData,
        weight: event.target.value.concat(dogData.weight),
      });
    }
    if (event.target.name === "WeightMax") {
      return setDogData({
        ...dogData,
        weight: dogData.weight.concat(" - " + event.target.value),
      });
    }
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
    dispatch(createDog(dogData));
  }

  return (
    <div>
      <h2>Create your dog</h2>
      <form>
        <label>
          Name:
          <input name="name" value={dogData.name} onChange={handleChange} />
        </label>
        <span>{errors.name}</span>
        <label>
          Height:
          <label>
            Altura Min:
            <input name="HeightMin" onChange={handleChange} />
          </label>
          <span>{errors.height}</span>
          <label>
            Altura Max:
            <input name="HeightMax" onChange={handleChange} />
          </label>
        </label>
        <span>{errors.height}</span>
        <label>
          Weight:
          <label>
            Peso Min:
            <input name="WeightMin" onChange={handleChange} />
          </label>
          <span>{errors.weight}</span>
          <label>
            Peso Max:
            <input name="WeightMax" onChange={handleChange} />
          </label>
        </label>
        <span>{errors.weight}</span>
        <label>
          Life Span:
          <input
            name="life_span"
            value={dogData.life_span}
            onChange={handleChange}
          />
        </label>
        <span>{errors.life_span}</span>
        {/* Hacer select multiple para elegir varios temperamentos, 
                        traer el allTemperaments y guardar en estado global(temperaments),
                        una vez que tengo todo en estado local 
                        <select>{estado local(temperament).map(temperament => (<options>{temperament.name}<options>))}<select> */}
        <label>Temperaments:
          <select multiple>
            {allTemperaments.map((temperament) => (<option key={temperament.name} value={temperament.name}>{temperament.name}</option>
            ))}</select>
        </label>

        <button type="Submit" onClick={submitHandler}>Create</button>
      </form>
    </div>
  );
}

export default Form;
