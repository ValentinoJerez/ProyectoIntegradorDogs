

function Paginado({nextPage, prevPage, currentPage}){

    return(
        <div>
            <h3>Pagina: {currentPage}</h3>
            <button onClick={prevPage}>Prev</button>
            <button onClick={nextPage}>Next</button>
            <h2>Cards</h2>
            <ul>
                <li>Cards</li>
            </ul>
        </div>
    )
}

export default Paginado;