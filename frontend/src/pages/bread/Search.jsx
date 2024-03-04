import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Search = ({fruitsProducts, gridList}) => {
    const [searchTerm, setSearchTerm] =useState('');
    const filteredProducts = fruitsProducts.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <div className='widget widget-search'>
        <form className='search-wrapper mb-3'>
            <input type='text' name='search' id='search' placeholder='Search...' defaultValue={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button type='button'>
                <i className='icofont-search-2'></i>
            </button>
        </form>
        {/* Search Result */}
        <div>
            {
                searchTerm && filteredProducts.map((product) => (
                    <Link key={product.id} to={`/bread/${product.id}`}>
                        <div className='d-flex gap-3 p-2'>
                            <div>
                                <div className='pro-thumb h-25'>
                                    <img src={product.img} alt='' width={70} className='flex-{grow|shrink}-0' />
                                </div>
                            </div>
                            <div className='product-content'>
                               <p> <Link to={`/bread/${product.id}`}>{product.name}</Link></p>
                               <h6>{product.price}</h6>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}
