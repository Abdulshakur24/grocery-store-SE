import React, { useState } from "react"
import blogList from '../../utilis/blogdata'
import { useParams } from 'react-router-dom'

const socialList = [
    {
    link: "#",
    iconName: "icofont-facebook",
    className: "facebook",
    },
    {
    link: "#",
    iconName: "icofont-linkedin",
    className: "linkedin",
    },
    {
    link: "#",
    iconName: "icofont-instagram",
    className: "instagram",
    },
    ];
    

const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList);
    const { id } = useParams()

    const result = blog.filter((b) => b.id === Number(id));
    return (
        <div>
            <div className="blog-section blog-single padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    {
                                                        result.map((item) => (
                                                            <div key={item.id}>
                                                                <div className="post-thumb">
                                                                    <img src={item.imgUrl} alt="" className="w-100" />
                                                                </div>
                                                                <div className="post-content">
                                                                    <h3>{item.title}</h3>
                                                                    <div className="meta-post">
                                                                        <ul className="lab-ul">
                                                                            {
                                                                            item.metaList.map((val, i) => (
                                                                                <li key={i}><i className={val.iconName}></i> {val.text}</li>
                                                                            ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                    <p>{item.info}</p>
                                                                    <blockquote>
                                                                        <p>{item.quote}</p>
                                                                        <cite>- {item.qauthor}</cite>
                                                                    </blockquote>
                                                                    <p>Have a look at this video to learn more.</p>
                                                                    <div className="video-thumb">
                                                                        <img src={item.imgUrl} alt="" />
                                                                        <a href={item.vidUrl} className="video-button popup">
                                                                            <i className="icofont-ui-play"></i>
                                                                        </a>
                                                                    </div>
                                                                    <div className="tags-section">
                                                                    <ul className="tags lab-ul">
                                                                            <li>
                                                                                <a href="#">Food</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Recipes</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Health</a>
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="lab-ul social-icons">
                                                                            {
                                                                                socialList.map((val, i) => (
                                                                                    <li key={i}>
                                                                                        <a href="" className={val.className}>
                                                                                            <i className={val.iconName}></i>
                                                                                        </a>
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="bg-white"><h6>Tags will be here - under construction</h6></div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog