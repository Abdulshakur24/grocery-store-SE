import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'

const showResults = 'Showing 01 - 12 of 30 Results'
import Data from '../products.json'
import ProductCards from './ProductCards'
import { Search } from './Search'

const Fruits = () => {
  const [gridList, setGridList] = useState(true);
  const fruitsProducts = Data.filter(product => product.category === 'Fruits');
  return (
    <div>
      <PageHeader title='Fruits' backgroundImage='src/assets/images/category/c-fruits.jpg' />
      <div className='shop-page padding-tb'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 col-12'>
              <article>
                {/* Layout & Title */}
                <div className='shop-title d-flex flex-wrap justify-content-between'>
                  <p>{showResults}</p>
                  <div className={`product-view-mode ${gridList ? 'gridActive' : 'listActive'}`}>
                    <a className='grid' onClick={() => setGridList(!gridList)}>
                      <i className='icofont-ghost'></i>
                    </a>
                    <a className='list' onClick={() => setGridList(!gridList)}>
                      <i className='icofont-listine-dots'></i>
                    </a>
                  </div>
                </div>
                {/* Product Cards */}
                <div>
                  <ProductCards gridList={gridList} fruitsProducts={fruitsProducts}/>
                </div>
              </article>
            </div>
            <div className='col-lg-4 col-12'>
              <aside>
                <Search fruitsProducts={fruitsProducts} gridList={gridList}/>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fruits