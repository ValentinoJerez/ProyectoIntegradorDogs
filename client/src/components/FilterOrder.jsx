import { useSelector, useDispatch } from "react-redux"

// import { filterTemperaments, order, reset } from "../../Redux/Actions/actions";

function FilterOrder(){
    const dispatch = useDispatch();
    const orderList = useSelector(state => state.allDogs);

    function filterHandler(event){
        dispatch(filterTemperaments(event.target.value))
    }

    function orderHandler(event){
        dispatch(order(event.target.value))
    }

    function resetHandler(){
        dispatch(reset())
    }

    return(
        <div>
            <select onChange={filterHandler}>
                <option value="">Api</option>
                <option>Base de Datos</option>
            </select>
        </div>
    )
}

export default FilterOrder;