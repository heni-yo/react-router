import React from 'react'


export default function BookTable() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            tableType: "",
            guestNumber: "",
            placement: "",
            date: "",
            time: "",
            note: "" 
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
    <section id="form" data-aos="fade-up">
    <div className="container">
      <h3 className="form__title">Book Table</h3>
      <div className="form__wrapper">
        <form name="booking" onSubmit={handleSubmit}>
          <div className="form__group">
            <label htmlFor="first-Name">First Name</label>
            <input id="first-Name" type="text" placeholder="First Name" onChange={handleChange} name="firstName" value={formData.firstName} required/>
          </div>
          <div className="form__group">
            <label htmlFor="last-Name">Last Name</label>
            <input id="last-Name" type="text" placeholder="Last Name" onChange={handleChange} name="lastName" value={formData.lastName} required/>
          </div>
          <div className="form__group">
            <label htmlFor="Email">Email</label>
            <input id="Email" type="email" placeholder="Email" onChange={handleChange} name="email" value={formData.email} required/>

          </div>
          <div className="form__group">
            <label htmlFor="table-Type">Table Type</label>
            <select name="tableType" id="table-Type" value={formData.tableType} onChange={handleChange} required>
              <option value="" disabled>Choose</option>
              <option value="small">Small(2 persons)</option>
              <option value="medium">Small(4 persons)</option>
              <option value="large">large(6 persons)</option>
            </select>
          </div>
          <div className="form__group">
            <label htmlFor="guest-Number">Guest Number</label>
            <input type="number" id="guest-Number" name="guestNumber" onChange={handleChange} value={formData.guestNumber} min="1" max="10" required/>
          </div>
          <div className="form__group">
            <label htmlFor="Placement">Placement</label>
            <select name="placement" id="Placement" value={formData.placement} onChange={handleChange}>
              <option value="" disabled >Choose</option>
              <option value="">Outdoor</option>
              <option value="indoor">Indoor</option>
              <option value="rooftop">rooftop</option>
            </select>
          </div>
          <div className="form__group">
            <label htmlFor="Date">Date</label>
            <input type="date" id="Date" name="date" value={formData.date} onChange={handleChange} required/>
          </div>
          <div className="form__group">
            <label htmlFor="Time">time</label>
            <input type="time" id="Time" name="time" onChange={handleChange} value={formData.time} required/>
          </div>
          <div className="form__group form__group__full">
            <label htmlFor="Note">Note</label>
            <textarea value={formData.note} placeholder="Comments" onChange={handleChange} name="note" id="Note" rows="4"></textarea>
          </div>
          <button className="btn primary-btn">Book Table</button>
        </form>
      </div>
    </div>
  </section>
  )
}
