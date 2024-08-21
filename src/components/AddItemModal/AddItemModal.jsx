<<<<<<< HEAD
import React, { useState } from "react";

const AddItemModal = ({ onAddItem }) => {
  const initialFormValues = { name: "", description: "" };
=======
import React, { useState } from 'react';

const AddItemModal = ({ onAddItem }) => {
  const initialFormValues = { name: '', description: '' };
>>>>>>> f6022f653722bbe5faaad76f1f9530987d53f0c3
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const item = { name: formValues.name, description: formValues.description };

    onAddItem(item, () => {
<<<<<<< HEAD
      setFormValues(initialFormValues); // Clear the form inputs
=======
      setFormValues(initialFormValues);  // Clear the form inputs
>>>>>>> f6022f653722bbe5faaad76f1f9530987d53f0c3
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
<<<<<<< HEAD
      <input
        type="text"
        value={formValues.name}
        onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
        placeholder="Name"
      />
      <input
        type="text"
        value={formValues.description}
        onChange={(e) =>
          setFormValues({ ...formValues, description: e.target.value })
        }
=======
      <input 
        type="text" 
        value={formValues.name} 
        onChange={(e) => setFormValues({ ...formValues, name: e.target.value })} 
        placeholder="Name"
      />
      <input 
        type="text" 
        value={formValues.description} 
        onChange={(e) => setFormValues({ ...formValues, description: e.target.value })} 
>>>>>>> f6022f653722bbe5faaad76f1f9530987d53f0c3
        placeholder="Description"
      />
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemModal;

<<<<<<< HEAD
=======

>>>>>>> f6022f653722bbe5faaad76f1f9530987d53f0c3
// import React, { useState } from "react";
// import ModalWithForm from "../ModalWithForm/ModalWithForm";

// const AddItemModal = ({ handleCloseModal, onAddItem, isOpen }) => {
//   const [values, setValues] = useState({ name: "", imageUrl: "", weather: "" });

//   const handleChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddItem(values, () => {
//       setValues({ name: "", imageUrl: "", weather: "" });
//     });
//   };

//   return (
//     <ModalWithForm
//       title="new garment"
//       buttonText="Add garment"
//       isOpen={isOpen}
//       onClose={handleCloseModal}
//       onSubmit={handleSubmit}
//     >
//       <label htmlFor="name" className="modal__label">
//         Name{" "}
//         <input
//           placeholder="Name"
//           name="name"
//           value={values.name}
//           onChange={handleChange}
//           id="name"
//           type="text"
//           className="modal__input"
//           minLength="1"
//           maxLength="30"
//         />
//       </label>
//       <label htmlFor="imageUrl" className="modal__label">
//         Image{" "}
//         <input
//           placeholder="Image Url"
//           value={values.imageUrl}
//           name="imageUrl"
//           onChange={handleChange}
//           id="imageUrl"
//           type="url"
//           className="modal__input"
//           minLength="1"
//         />
//       </label>
//       <fieldset className="modal__radio-buttons">
//         <legend className="modal__legend">Select the weather type:</legend>
//         <label htmlFor="hot" className="modal__label_type_radio">
//           {" "}
//           <input
//             name="weather"
//             id="hot"
//             value="hot"
//             type="radio"
//             onChange={handleChange}
//             className="modal__radio-input"
//             checked={values.weather === "hot"}
//           />
//           Hot
//         </label>
//         <label htmlFor="warm" className="modal__label_type_radio">
//           <input
//             name="weather"
//             id="warm"
//             value="warm"
//             type="radio"
//             className="modal__radio-input"
//             checked={values.weather === "warm"}
//             onChange={handleChange}
//           />
//           Warm
//         </label>
//         <label htmlFor="cold" className="modal__label_type_radio">
//           <input
//             name="weather"
//             value="cold"
//             id="cold"
//             type="radio"
//             className="modal__radio-input"
//             checked={values.weather === "cold"}
//             onChange={handleChange}
//           />
//           Cold
//         </label>
//       </fieldset>{" "}
//     </ModalWithForm>
//   );
// };

// export default AddItemModal;
