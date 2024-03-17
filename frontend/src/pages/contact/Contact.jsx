import React from 'react'
import GoogleMap from './GoogleMap';

const subTitle = "Get in touch with us";
const title = "We're Always Eager To Hear From You!";
const conSubTitle = "Contact us";
const conTitle = "Fill The Form Below So We Can Get To Know You And Your Needs Better.";

const contactList =
    [
        { imgUrl: "/src/assets/images/icon/01.png", imgAlt: "contact icon", title: "Address", desc: "Haile Selassie Avenue", },
        { imgUrl: "/src/assets/images/icon/02.png", imgAlt: "contact icon", title: "Phone number", desc: "+254 700 000 000", },
        { imgUrl: "/src/assets/images/icon/03.png", imgAlt: "contact icon", title: "Email", desc: "admin@grocerystore.com", },
    ];
const Contact = () => {
    return (
        <div>
            <div className='map-address-section padding-tb section-bg'>
                <div className="container">
                    <div className="section-header text-center">
                        <span className="subtitle">{subTitle}</span>
                        <h2 className="title">{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row flex-row-reverse">
                            <div className="col-xl-4 col-lg-5 col-12">
                                <div className="contact-wrapper">
                                    {
                                        contactList.map((val, i) => (
                                            <div key={i} className="contact-item">
                                                <div className="contact-thumb">
                                                    <img src={val.imgUrl} alt="" />
                                                </div>
                                                <div className="contact-content">
                                                    <h6>{val.title}</h6>
                                                    <p>{val.desc}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* Map */}
                            <div className="col-xl-8 col-lg-7 col-12">
                                <GoogleMap />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-section padding-tb">
                <div className="container">
                    <div className="section-header text-center">
                        <span className='subtitle'>{conSubTitle}</span>
                        <h2>{conTitle}</h2>
                    </div>
                    <div className="section-wrapper">
                        <form className="contact-form">
                            <div className="form-group">
                                <input type="text" name="name" id="name" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" id="email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="phone" id="phone" placeholder="Phone Number" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="subject" id="subject" placeholder="Subject" />
                            </div>
                            <div className="form-group w-100">
                                <textarea name="message" id="message" rows="8" placeholder='Your Message'></textarea>
                            </div>
                            <div className="form-group w-100 text-center">
                                <button className="py-2 px-36 font-medium text-xl bg-green-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                                    SUBMIT
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact