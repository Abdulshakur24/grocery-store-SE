import React from 'react'
import { Link } from 'react-router-dom';

const subTitle = "Take Your Pick";
const title = "Secure all your purchases with us";

const categoryList = [
    {
        imgUrl: 'src/assets/images/category/c-fruits.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-shopping-cart',
        title: 'Fruits',
        link: '/fruits',
    },
    {
        imgUrl: 'src/assets/images/category/c-veggies.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-shopping-cart',
        title: 'Vegetables',
        link: '/vegetables',
    },
    {
        imgUrl: 'src/assets/images/category/c-juices.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-shopping-cart',
        title: 'Juices',
        link: '/juices',
    },
    {
        imgUrl: 'src/assets/images/category/c-smoothie.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-shopping-cart',
        title: 'Smoothies',
        link: '/smoothies',
    },
    {
        imgUrl: 'src/assets/images/category/c-bread.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-shopping-cart',
        title: 'Bread',
        link: '/bread',
    },
    {
        imgUrl: 'src/assets/images/category/c-cheese.jpg',
        imgAlt: 'category rajibraj91 rajibraj',
        iconName: 'icofont-shopping-cart',
        title: 'Cheese',
        link: '/cheese',
    },
]

const HomeCategory = () => {
    return (
        <div className='category-section style-4 padding-tb'>
            <div className='container'>
                <div className='section-header text-center'>
                    <span className='subtitle'>{subTitle}</span>
                    <h2 className='title'>{title}</h2>
                </div>
                {/* Section card */}
                <div className='section-wrapper'>
                    <div className='row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1'>
                    {
                        categoryList.map((val, i) => (<div key={i} className='col'>
                            <Link to={val.link} className='category-item'>
                                <div className='category-inner'>
                                    {/* Image thumbnail */}
                                    <div className='category-thumb'>
                                        <img src={val.imgUrl} alt=''/>
                                    </div>
                                    {/*Content */}
                                    <div className='category-content'>
                                        <div className='cate-icon'>
                                            <i  className={val.iconName}></i>
                                        </div>
                                        <h6>{val.title}</h6>
                                    </div>
                                </div>
                            </Link>
                        </div>))
                    }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomeCategory