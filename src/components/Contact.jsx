import React from 'react'

export default function Contact() {

  const [formData, setFormData] = React.useState(
    {
        firstName: "", 
        lastName: "", 
        email: "", 
        subject: "",
        message: "" 
    }
)

function handleChange(event) {
    const {name, value, type} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: value
        }
    })
}

function handleSubmit(event) {
    event.preventDefault()
    // submitToApi(formData)
    console.log(formData)
}

  return (
    <div>
      {/* <!-- Store Info Section --> */}
  <section id="storeInfo" data-aos="fade-up">
    <div className="container">
      <div className="storeInfo__wrapper">
        <div className="storeInfo__item">
          <div className="storeInfo__icon">
            <img src="./images/wall-clock-icon.svg" alt="clock icon"/>
          </div>
          <h3 className="storeInfo__title">
            10 AM - 7 PM
          </h3>
          <p className="storeInfo__text">
            Opening Hour
          </p>
        </div>
        <div className="storeInfo__item">
          <div className="storeInfo__icon">
            <img src="./images/address-icon.svg" alt="clock icon"/>
          </div>
          <h3 className="storeInfo__title">
            GEC, Chittagong
          </h3>
          <p className="storeInfo__text">
            Address
          </p>
        </div>
        <div className="storeInfo__item">
          <div className="storeInfo__icon">
            <img src="./images/phone-icon.svg" alt="clock icon"/>
          </div>
          <h3 className="storeInfo__title">
            +880123443
          </h3>
          <p className="storeInfo__text">
            Call Now
          </p>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- End Store Info Section -->
  <!-- Contact Form Section --> */}
  <section id="form" data-aos="fade-down">
    <div className="container">
      <h3 className="form__title">
        Contact & Inquiry
      </h3>
      <div className="form__wrapper">
        <form onSubmit={handleSubmit}>
          <div className="form__group">
            <label htmlFor="first-Name">First Name</label>
            <input type="text" id="first-Name" name="firstName" value={formData.firstName} onChange={handleChange} required/>
          </div>
          <div className="form__group">
            <label htmlFor="last-Name">Last Name</label>
            <input type="text" id="last-Name" name="lastName" value={formData.lastName} onChange={handleChange} required/>
          </div>
          <div className="form__group">
            <label htmlFor="Email">Email</label>
            <input type="email" id="Email" name="email" value={formData.email} onChange={handleChange} required/>
          </div>
          <div className="form__group">
            <label htmlFor="Subject">Subject</label>
            <input type="text" id="Subject" name="subject" value={formData.subject} onChange={handleChange} required/>
          </div>
          <div className="form__group form__group__full">
            <label htmlFor="Message">Message</label>
            <textarea name="message" id="Message" value={formData.message} onChange={handleChange} cols="30" rows="10" required></textarea>
          </div>
          <button className="btn primary-btn">Send</button>
        </form>
      </div>
    </div>
  </section>
  {/* <!-- End Contact Form Section--> */}
    </div>
  )
}
