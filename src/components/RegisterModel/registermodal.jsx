import "./registermodal.css";
import { useState } from "react";

function RegisterModal({ isOpen, onClose }) {
    if (!isOpen) return null;

const [parentName, setParentName] = useState("");
const [childName, setChildName] = useState("");
const [childAge, setChildAge] = useState("");
const [phone, setPhone] = useState("");
const [activity, setActivity] = useState("");
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
      !parentName ||
      !childName ||
      !childAge ||
      !phone ||
      !activity
    ) {
      alert("Please fill all fields");
      return;
    }
    if (phone.length !== 10) {
  alert("Phone number must be 10 digits");
  return;
}

 if (childAge < 4 || childAge > 16) {
    alert("Age must be between 4 and 16");
    return;
  }

    console.log({
      parentName,
      childName,
      childAge,
      phone,
      activity,
    });

    onClose();
  }}
>

        <input type="text" placeholder="Parent Name" value={parentName}
            onChange={(e) => setParentName(e.target.value)}/>

        <input type="text" placeholder="Child Name" value={childName} onChange={(e) => setChildName(e.target.value)}
/>

        <input type="number" placeholder="Child Age" value={childAge}
                onChange={(e) => setChildAge(e.target.value)}
/>

        <input type="tel" placeholder="Phone Number" value={phone}
                onChange={(e) => setPhone(e.target.value)}
/>

        <select value={activity}
                onChange={(e) => setActivity(e.target.value)}
>
            <option>Select Activity</option>
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