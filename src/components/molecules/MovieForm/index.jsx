import React, { useEffect, useState } from 'react';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import { INPUTS_ARRAY } from '../../../constants/inputsArray';
import * as Yup from 'yup';
import ContentLoading from '../ContentLoading';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { StyledMovieForm } from './style';

const formSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  uploadImage: Yup.mixed()
    .required('Image is required')
    .test('fileType', 'Unsupported file format', (value) =>
      value ? value : false
    ),
  imageAlt: Yup.string().required('Image alt is required'),
  genre: Yup.string().required('Genre is required'),
  rating: Yup.string().required('Rating is required'),
  year: Yup.string().required('Year is required'),
  description: Yup.string().required('Description is required'),
});

const MovieForm = ({ movie, onSubmit, isLoading }) => {
  const [imagePreview, setImagePreview] = useState('');
  const [fileName, setFileName] = useState('Upload The File');

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      title: '',
      uploadImage: '',
      imageAlt: '',
      genre: '',
      rating: '',
      year: '',
      description: '',
    },
  });

  useEffect(() => {
    if (movie) {
      reset(movie);
      setImagePreview(movie.uploadImage || '');
      setFileName(
        movie.uploadImage
          ? movie.uploadImage.split('/').pop()
          : 'Upload The File'
      );
    }
  }, [movie, reset]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      const fileExtension = file.name.split('.').pop(); // استخراج الامتداد
      setFileName(`${file.name} (${fileExtension})`);

      // تحديث قيمة الحقل في react-hook-form
      setValue('uploadImage', file, { shouldValidate: true });
    } else {
      setFileName('Upload The Image');
    }
  };

  const formSubmitHandler = (data) => {
    onSubmit(data);
  };

  return (
    <StyledMovieForm onSubmit={handleSubmit(formSubmitHandler)}>
      {INPUTS_ARRAY.map(({ id, label, name, type, placeholder }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          {id === 'uploadImage' ? (
            <>
              <div className="file_upload_wrapper">
                <span>{fileName}</span>
                <label htmlFor="uploadImage">
                  <i className="fas fa-paperclip"></i>
                </label>
                <input
                  id={id}
                  type="file"
                  accept="assets/*"
                  className="file_upload_input"
                  onChange={(e) => {
                    handleImageChange(e);
                  }}
                  {...register('uploadImage')}
                />
              </div>
              {errors['uploadImage'] && (
                <p className="error">{errors['uploadImage']?.message}</p>
              )}
            </>
          ) : (
            <>
              <Input
                inputType={type}
                inputId={id}
                inputName={name}
                placeholder={placeholder}
                {...register(name)}
              />
              {errors[name] && <p className="error">{errors[name]?.message}</p>}
            </>
          )}
        </div>
      ))}

      <Button typeOf="submit" disabled={isLoading}>
        {isLoading ? <ContentLoading size={24} /> : 'Submit'}
      </Button>
    </StyledMovieForm>
  );
};

export default MovieForm;

// const MovieForm = ({ movie, onSubmit, isLoading }) => {
//   const [formData, setFormData] = useState({
//     title: '',
//     uploadImage: '',
//     imageAlt: '',
//     genre: '',
//     rating: '',
//     year: '',
//     description: '',
//   });

//   const [imagePreview, setImagePreview] = useState('');
//   const [fileName, setFileName] = useState('Upload The File');
//   const [isFirstLoad, setIsFirstLoad] = useState(true);

//   useEffect(() => {
//     if (movie && isFirstLoad) {
//       setFormData({
//         title: movie.title,
//         uploadImage: movie.uploadImage || '',
//         imageAlt: movie.imageAlt || '',
//         genre: movie.genre,
//         rating: movie.rating,
//         year: movie.year,
//         description: movie.description,
//       });
//       setImagePreview(movie.uploadImage || '');
//       setIsFirstLoad(false);
//     }
//   }, [movie, isFirstLoad]);

//   const handleChangeInput = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

// const handleImageChange = (e) => {
//   const file = e.target.files[0];
//   if (file) {
//     setImagePreview(URL.createObjectURL(file));
//     setFileName(file.name);

//     setFormData((prevData) => ({
//       ...prevData,
//       uploadImage: URL.createObjectURL(file),
//     }));
//   } else {
//     setFileName('Upload The Image');
//   }
// };

// const handleFileChange = (e) => {
//   const file = e.target.files?.[0];
//   setFileName(file ? file.name : 'Upload The File');
// };

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isDirty },
//   } = useForm({
//     resolver: yupResolver(formSchema),
//   });

//   const onSubmit = (e) => {
//     e.preventDefault();
//     // handleSubmit(formData);
//     reset();
//   };

//   return (
//     <form className="movie__form" onSubmit={handleSubmit(onSubmit)}>
//       {INPUTS_ARRAY.map(({ id, label, name, type, placeholder }) => (
//         <div key={id}>
//           <label htmlFor={id}>{label}</label>
//           {id === 'uploadImage' ? (
//             <div className="file-upload-wrapper">
//               <span className="file-upload-text">{fileName}</span>
//               <label htmlFor="uploadImage" className="file-upload-label">
//                 <i className="fas fa-paperclip"></i>
//               </label>
//               <input
//                 id={id}
//                 name={name}
//                 type={type}
//                 accept="assets/*"
//                 className="file-upload-input"
//                 onChange={(e) => {
//                   handleImageChange(e);
//                   handleFileChange(e);
//                 }}
//                 {...register('uploadImage')}
//               />
//             </div>
//           ) : (
//             <>
//               <Input
//                 inputType={type}
//                 inputId={id}
//                 inputName={name}
//                 inputValue={formData[id]}
//                 handleChange={handleChangeInput}
//                 placeholder={placeholder}
//                 register={register}
//               />
//               {errors[name] && <p className="error">{errors[name]?.message}</p>}
//             </>
//           )}
//         </div>
//       ))}

//       <Button typeOf="submit">
//         {isLoading ? <ContentLoading size={24} /> : 'Submit'}
//       </Button>
//     </form>
//   );
// };

// export default MovieForm;
