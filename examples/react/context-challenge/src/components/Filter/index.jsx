import React from 'react'
import './Filter.scss'

const Filter = () => {
  return (
    <div className='filter' >
      <h2>Filtrar informacion</h2>
      <form>
        <label>Tipo Total:</label>
        <select name="tipoTotal">
          <option value="porcentaje">Porcentaje</option>
          <option value="numerico">Numerico</option>
        </select>
        
        <label>Catdidato Opcion:</label>
        <select name="candidateOpcion">
          <option value="all">Todos</option>
          <option value="candidate1">Catdidato1</option>
          <option value="candidate2">Catdidato2</option>
          <option value="candidate3">Catdidato3</option>
          <option value="candidate4">Catdidato4</option>
        </select>
        

        <button type='submit'>Aplicar filtro</button>
      </form>
    </div>
  )
}

export default Filter