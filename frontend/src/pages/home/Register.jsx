import React from 'react'

const subtitle = 'Sign Up For Our Newsletters';
const title = (
    <h2 className='title'>Be the first to know about our <b><span>Pocket Saving </span>promotions</b></h2>
)
const Register = () => {
  return (
    <section className='register-section pb-0'>
        <div className='container'>
            <div className='row g-4 row-cols-lg-2 row-cols-1 align-items-center'>
                <div className='col'>
                    <div className='section-header'>
                        <span className='subtitle'>{subtitle}</span>
                        {title}
                    </div>
                </div>
                <div className='col'>
                    <div className='section-wrapper'>
                        <h4>Register Now</h4>
                        <form className='register-form'>
                            <input type='text' name='name' placeholder='Name' className='reg-input'/>
                            <input type='email' name='email' placeholder='Email' className='reg-input'/>
                            <input type='text' name='number' placeholder='Phone' className='reg-input'/>
                            <button type='submit' className='lab-btn'>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Register