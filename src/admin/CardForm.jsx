import { useDispatch } from "react-redux";
import { card } from "./admin";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

export default function CardForm() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.admin.value);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
  const submitData = (data) => {
    const file = data.img[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = (event) => {
      data = { ...data, img: event.target.result };
      dispatch(card(data));
      reset();
    };
  };
  return (
    <div className="container">
      <h3 className="form__title">Add Plate</h3>
      <div className="form__wrapper">
        <form onSubmit={handleSubmit((data) => submitData(data))}>
          <div className="form__group">
            <input
              type="file"
              placeholder="img src"
              name="img"
              {...register("img", { required: true })}
            />
          </div>
          <div className="form__group">
            <input
              type="text"
              placeholder="plat title"
              name="title"
              {...register("title", { required: true })}
            />
          </div>
          <div className="form__group">
            <input
              type="text"
              placeholder="price"
              name="price"
              {...register("price", { required: true })}
            />
          </div>
          <div className="form__group">
            <input
              type="number"
              placeholder="src stars"
              name="stars"
              {...register("stars", { valueAsNumber: true })}
            />
          </div>
          <div className="form__group">
            <select
              id="category"
              name="category"
              defaultValue=""
              {...register("category", { required: true })}
            >
              <option value="" disabled>
                Choose Category
              </option>
              {Object.keys(state).map((props, i) => {
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
