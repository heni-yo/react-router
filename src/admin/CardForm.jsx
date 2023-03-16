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
<<<<<<< HEAD

    reset,
  } = useForm();

=======
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
>>>>>>> 970abef1cb1a775a8eca0095bb49893627816082
  return (
    <div className="container">
      <h3 className="form__title">Add Plate</h3>
      <div className="form__wrapper">
<<<<<<< HEAD
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            dispatch(card(data));
            reset();
          })}
        >
=======
        <form onSubmit={handleSubmit((data) => submitData(data))}>
>>>>>>> 970abef1cb1a775a8eca0095bb49893627816082
          <div className="form__group">
            <input
              type="file"
              placeholder="img src"
<<<<<<< HEAD
=======
              name="img"
>>>>>>> 970abef1cb1a775a8eca0095bb49893627816082
              {...register("img", { required: true })}
            />
          </div>
          <div className="form__group">
            <input
              type="text"
              placeholder="plat title"
<<<<<<< HEAD
=======
              name="title"
>>>>>>> 970abef1cb1a775a8eca0095bb49893627816082
              {...register("title", { required: true })}
            />
          </div>
          <div className="form__group">
            <input
              type="text"
              placeholder="price"
<<<<<<< HEAD
=======
              name="price"
>>>>>>> 970abef1cb1a775a8eca0095bb49893627816082
              {...register("price", { required: true })}
            />
          </div>
          <div className="form__group">
            <input
              type="number"
              placeholder="src stars"
<<<<<<< HEAD
              {...register("stars", { required: true })}
            />
          </div>
          <div className="form__group">
            <select id="category" {...register("category")}>
=======
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
>>>>>>> 970abef1cb1a775a8eca0095bb49893627816082
              <option value="" disabled>
                Choose Category
              </option>
              {Object.keys(state).map((props, i) => {
                return (
                  <option key={i} value={props.category}>
                    {props.category}
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

