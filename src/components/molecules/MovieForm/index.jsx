import React, { useEffect, useState } from "react";
import "./style.css";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";

const inputsArray = [
  {
    id: "title",
    name: "title",
    label: "Title",
    type: "text",
  },
  {
    id: "imageSrc",
    name: "imageSrc",
    label: "Image Source",
    type: "text",
  },
  {
    id: "imageAlt",
    name: "alt",
    label: "Image Alt",
    type: "text",
  },
  {
    id: "genre",
    name: "genre",
    label: "Genre",
    type: "text",
  },
  {
    id: "rating",
    name: "rating",
    label: "Rating",
    type: "text",
  },
  {
    id: "year",
    name: "year",
    label: "Year",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Description",
    type: "textarea",
  },
];

const MovieForm = ({ movie, handleSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    title: "",
    imageSrc: "",
    imageAlt: "",
    genre: "",
    rating: "",
    year: "",
    description: "",
  });

  const [imagePreview, setImagePreview] = useState(""); // للحفاظ على الصورة المعروضة
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (movie && isFirstLoad) {
      setFormData({
        title: movie.title,
        imageSrc: movie.imageSrc || "",
        imageAlt: movie.imageAlt || "",
        genre: movie.genre,
        rating: movie.rating,
        year: movie.year,
        description: movie.description,
      });
      setImagePreview(movie.imageSrc || ""); // عرض الصورة الحالية
      setIsFirstLoad(false);
    }
  }, [movie, isFirstLoad]);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));

      const filePath = URL.createObjectURL(file);
      setFormData((prevData) => ({
        ...prevData,
        imageSrc: filePath,
      }));
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };
  return (
    <form className="movie__form" onSubmit={handleOnSubmit}>
      {inputsArray.map((input) => (
        <div key={input.id}>
          <label htmlFor={input.id}>{input.label}</label>
          {input.type === "textarea" ? (
            <Input
              inputType={input.type}
              inputId={input.id}
              inputName={input.name}
              inputValue={formData[input.id]}
              handleChange={handleChangeInput}
              placeholder={`write movie ${input.name}`}
            />
          ) : input.id === "imageSrc" ? (
            <>
              <Input
                inputType="text"
                inputId={input.id}
                inputName={input.name}
                inputValue={formData[input.id]}
                handleChange={handleChangeInput}
                placeholder="Enter image URL"
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt={formData.imageAlt || "Movie Alt"}
                  width="100"
                />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </>
          ) : (
            <Input
              inputType={input.type}
              inputId={input.id}
              inputName={input.name}
              inputValue={formData[input.id]}
              handleChange={handleChangeInput}
              placeholder={`write movie ${input.name}`}
            />
          )}
        </div>
      ))}
      <Button typeOf="submit">{isLoading ? "Loading..." : "Submit"}</Button>
    </form>
  );
};

export default MovieForm;
