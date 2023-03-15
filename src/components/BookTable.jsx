import React from "react";
import { useForm } from "react-hook-form";

export default function BookTable() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <section id="form" data-aos="fade-up">
      <div className="container">
        <h3 className="form__title">Book Table</h3>
        <div className="form__wrapper">
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
              reset();
            })}
          >
            <div className="form__group">
              <label htmlFor="first-Name">First Name</label>
              <input
                id="first-Name"
                type="text"
                placeholder="FirstName"
                {...register("FirstName")}
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="last-Name">Last Name</label>
              <input
                id="last-Name"
                type="text"
                placeholder="LastName"
                {...register("LastName")}
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="Email">Email</label>
              <input
                id="Email"
                type="email"
                placeholder="Email"
                {...register("Email")}
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="table-Type">Table Type</label>
              <select {...register("table-Type")} id="table-Type" required>
                <option value="" disabled>
                  Choose
                </option>
                <option value="small">Small(2 persons)</option>
                <option value="medium">Small(4 persons)</option>
                <option value="large">large(6 persons)</option>
              </select>
            </div>
            <div className="form__group">
              <label htmlFor="guest-Number">Guest Number</label>
              <input
                type="number"
                id="guest-Number"
                {...register("guest-Number")}
                min="1"
                max="10"
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="Placement">Placement</label>
              <select {...register("Placement")} id="Placement">
                <option value="" disabled>
                  Choose
                </option>
                <option value="">Outdoor</option>
                <option value="indoor">Indoor</option>
                <option value="rooftop">rooftop</option>
              </select>
            </div>
            <div className="form__group">
              <label htmlFor="Date">Date</label>
              <input type="date" id="Date" {...register("Date")} required />
            </div>
            <div className="form__group">
              <label htmlFor="Time">time</label>
              <input type="time" id="Time" {...register("Time")} required />
            </div>
            <div className="form__group form__group__full">
              <label htmlFor="Note">Note</label>
              <textarea
                placeholder="Comments"
                {...register("Note")}
                id="Note"
                rows="4"
              ></textarea>
            </div>
            <button className="btn primary-btn">Book Table</button>
          </form>
        </div>
      </div>
    </section>
  );
}
