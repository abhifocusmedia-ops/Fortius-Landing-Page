import "./registermodal.css";
import { useState } from "react";

function RegisterModal({ isOpen, onClose }) {
    if (!isOpen) return null;

const [formData, setFormData] = useState({
  parentName: "",
  childName: "",
  childAge: "",
  phone: "",
  activity: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

    return (
    <div className="modal-overlay">
        <div className="modal-box">

        <button className="close-btn" onClick={onClose}>
            ✕
        </button>

        <h2>Register For Summer Camp</h2>

        <form
  className="register-form"
  onSubmit={(e) => {
    e.preventDefault();

    if (
  !formData.parentName ||
  !formData.childName ||
  !formData.childAge ||
  !formData.phone ||
  !formData.activity
) {
  alert("Please fill all fields");
  return;
}
    if (formData.phone.length !== 10) {
  alert("Phone number must be 10 digits");
  return;
}

 if (formData.childAge < 4 || formData.childAge > 16) {
  alert("Age must be between 4 and 16");
  return;
}

   
console.log(formData);
alert("Registration Submitted Successfully!");
   setFormData({
  parentName: "",
  childName: "",
  childAge: "",
  phone: "",
  activity: "",
});

    onClose();
  }}
>
<input
  type="text"
  name="parentName"
  placeholder="Parent Name"
  value={formData.parentName}
  onChange={handleChange}
/>

        <input
  type="text"
  name="childName"
  placeholder="Child Name"
  value={formData.childName}
  onChange={handleChange}
/>
        <input
  type="number"
  name="childAge"
  placeholder="Child Age"
  value={formData.childAge}
  onChange={handleChange}
/>

        <input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={handleChange}
/>

       <select
  name="activity"
  value={formData.activity}
  onChange={handleChange}
>
  <option value="">Select Activity</option>
  <option>Football</option>
  <option>Badminton</option>
  <option>Yoga</option>
  <option>Dance</option>
</select>

        <button
            type="submit"
            className="submit-btn"
        >
            Submit Registration
        </button>

        </form>

    </div>
    </div>
);
}

export default RegisterModal;