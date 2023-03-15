import { useDispatch } from "react-redux";
import { card } from "./admin";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

export default function CardForm() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.admin.test);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  // const intialise = {category:"", Content:[{img: "", title: "", price: "", stars: ""}]};
  // const intialise = { img: "", title: "", price: "", stars: "" };

  // function handleChange(event) {
  //   const { name, value, files } = event.target;
  //   if (files) {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(files[0]);
  //     reader.addEventListener("load", () => {
  //       localStorage.setItem("thumbnail", reader.result);
  //       setFormData((prev) => ({
  //         ...prev,
  //         [name]: reader.result,
  //       }));
  //     });
  //   }
  //   setFormData((prevFormData) => {
  //     return {
  //       ...prevFormData,
  //       [name]: value,
  //     };
  //   });
  // }
  // dispatch(card(formData));
  return (
    <div className="container">
      <h3 className="form__title">Add Plate</h3>
      <div className="form__wrapper">
      <form onSubmit={handleSubmit(data => {dispatch(card(data));reset()})}>
          <div className="form__group">
          <input
            type="file"
            placeholder="img src"
            name="img"
            {...register("img",{ required: true })}

          />
          </div>
          <div className="form__group">
            <input
              type="text"
              placeholder="plat title"
              name="title"
              {...register("title",{ required: true })}

            />
          </div>
          <div className="form__group">
            <input
              type="text"
              placeholder="price"
              name="price"
              {...register("price",{ required: true })}

            />
          </div>
          <div className="form__group">
            <input
              type="file"
              placeholder="src stars"
              name="stars"
              {...register("stars",{ required: true })}

            />
          </div>
          <div className="form__group">
            <select
              id="category"
              name="category"
              {...register("category",{ required: true })}

            >
              <option value="" disabled>
                Choose Category
              </option>
              {state.map((props, i) => {
                return (
                  <option key={i} value={props}>
                    {props}
                  </option>
                );
              })}
            </select>
          </div>
          <button className="btn primary-btn">Add plate</button>
        </form>
      </div>
    </div>
  );
}
