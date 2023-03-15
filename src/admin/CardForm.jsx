import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { card } from "./admin";
import { useSelector } from "react-redux";


export default function CardForm() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.admin.test);

  // const intialise = {category:"", Content:[{img: "", title: "", price: "", stars: ""}]};
  const intialise = {img: "", title: "", price: "", stars: ""};
  const [formData, setFormData] = useState(intialise);
  function handleChange(event) {
    const { name, value, files } = event.target;
    if (files) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.addEventListener("load", () => {
        localStorage.setItem("thumbnail", reader.result);
        setFormData((prev) => ({
          ...prev,
          [name]: reader.result,
        }));
      });
    }
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(card(formData));
    setFormData(intialise);
  }
  return (
    <form onSubmit={handleSubmit}>
      {formData.img && <img src={formData.img} alt="" />}
      {formData.stars && <img src={formData.stars} alt="" />}
      <input
        type="file"
        placeholder="img src"
        onChange={handleChange}
        name="img"
      />
      <input
        type="text"
        placeholder="plat title"
        onChange={handleChange}
        name="title"
        value={formData.title}
      />
      <input
        type="text"
        placeholder="price"
        onChange={handleChange}
        name="price"
        value={formData.price}
      />
      <input
        type="file"
        placeholder="src stars"
        onChange={handleChange}
        name="stars"
      />
      <select
        id="category"
        onChange={handleChange}
        name="category"
        value={formData.category}
      >
        <option value="" disabled >Choose Category</option>
        {state.map((props, i) => {
        return <option key={i} value={props}> {props}</option>;
      })}

      </select>
      <button>Add plate</button>
    </form>
  );
}
