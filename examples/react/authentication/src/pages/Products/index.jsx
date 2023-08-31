import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import './ProductList.css'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const pageSize = 10 // Esto se puede cambiar según la cantidad de productos que se quiera mostrar por página

  useEffect(() => {
    (async function fetchProducts() {
      try {
        const { data } = await axios.get(`http://localhost:8080/api/products?page=${currentPage}&pageSize=${pageSize}`)
        setProducts(data.response.products)
        setTotalPages(data.response.pageInfo.totalPages)
      } catch (error) {
        console.log(error) 
      }
    })()
  }, [currentPage])

  return (
    <div className='product-list'>
      <h2>Product Gallery</h2>
      <ul className='product-grid'>
        {products.map(product => (
          <li key={product.id} className='product-item'>
            <h3> { product.name } </h3>
            <p> { product.description } </p>
            <p> Price: { product.price } </p>
            <p> Stock: { product.stock } </p>
          </li>
        ))}
      </ul>
      <div className='pagination'>
        <button 
          className='prev-button'
          onClick={() => setCurrentPage(currentPage - 1)} 
          disabled={currentPage === 1}
        >Previous</button>
        <span className='page-number'>Page: {currentPage}</span>
        <button
          className='next-button'
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={totalPages <= currentPage} //true
        >Next</button>
      </div>
    </div>
  )
}

export default ProductList