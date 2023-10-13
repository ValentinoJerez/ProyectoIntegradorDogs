import style from "../Paginado/Paginado.module.css"

function Paginado({nextPage, prevPage, currentPage, totalPages}){
    return(
        <div>
            <button className={style.prev} onClick={prevPage} disabled={currentPage === 0}>Prev</button>
            <span className={style.text}>Pagina {currentPage + 1} de {totalPages}</span>
            <button className={style.next} onClick={nextPage} disabled={currentPage === totalPages-1}>Next</button>
        </div>
    )
}

export default Paginado;