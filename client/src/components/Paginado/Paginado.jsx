

function Paginado({nextPage, prevPage, currentPage, cardDogs, totalPages}){
    return(
        <div>
            <button onClick={prevPage} disabled={currentPage === 0}>Prev</button>
            <button onClick={nextPage} disabled={currentPage === totalPages-1}>Next</button>
            <h3>Pagina {currentPage + 1} de {totalPages}</h3>
        </div>
    )
}

export default Paginado;