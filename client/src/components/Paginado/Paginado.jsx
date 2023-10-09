import style from "../Paginado/Paginado.module.css"

function Paginado({nextPage, prevPage, currentPage, totalPages}){
    return(
        <div>
            <button className={style.prev} onClick={prevPage} disabled={currentPage === 0}>Prev</button>
            <button className={style.next} onClick={nextPage} disabled={currentPage === totalPages-1}>Next</button>
            <h3>Pagina {currentPage + 1} de {totalPages}</h3>
        </div>
    )
}

export default Paginado;