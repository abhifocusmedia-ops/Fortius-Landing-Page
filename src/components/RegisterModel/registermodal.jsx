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
const [errors, setErrors] = useState({
        phone: "",
        childAge: "",
});

const handleChange = (e) => {
const { name, value } = e.target;

    setFormData({...formData,
        [name]: value,
        });

    if (name === "phone") {
        if (value.length > 0 && value.length !== 10) {
            setErrors((prev) => ({...prev,
            phone: "Phone number must be 10 digits",
            }));
        } 
        else {
            setErrors((prev) => ({...prev,
            phone: "",
            }));
        }
}

    if (name === "childAge") {
        if (value && (value < 4 || value > 16)) {
        setErrors((prev) => ({...prev,
            childAge: "Age must be between 4 and 16",
        }));
        } 
        else {
            setErrors((prev) => ({...prev,
                childAge: "",
            }));
        }
    }
};

const handleSubmit = (e) => {
        e.preventDefault();

    if (
        !formData.parentName ||
        !formData.childName ||
        !formData.childAge ||
        !formData.phone ||
        !formData.activity
    )
    {
    alert("Please fill all fields");
    return;
    }

    if (errors.phone || errors.childAge) {
    return;
    }

   fetch(
  "https://script.google.com/macros/s/AKfycbxwbT5b96FJFo-cNoTj69gPKSmKlumtrIKlDIf3Ic1A1Kbb1ZUIgHWg4pycCLICS_zn/exec",
  {
    method: "POST",
    body: JSON.stringify({
      formType: "registration",
      ...formData,
    }),
  }
)
.then((res) => res.json())
.then((data) => {
  alert("Registration Submitted Successfully!");

  setFormData({
    parentName: "",
    childName: "",
    childAge: "",
    phone: "",
    activity: "",
  });

  onClose();
})
.catch((err) => {
  console.error(err);
});

    setFormData({
        parentName: "",
        childName: "",
        childAge: "",
        phone: "",
        activity: "",
    });

    onClose();
};

    return (
    <div className="modal-overlay">
        <div className="modal-box">

        <button className="close-btn" onClick={onClose}>
            ✕
        </button>

        <h2>Register For Summer Camp</h2>

        <form className="register-form"
        onSubmit={handleSubmit}>
            <input type="text"
            name="parentName"
            placeholder="Parent Name"
            value={formData.parentName}
            onChange={handleChange}/>

            <input type="text"
            name="childName"
            placeholder="Child Name"
            value={formData.childName}
            onChange={handleChange}/>
            <input type="number"
            name="childAge"
            placeholder="Child Age"
            value={formData.childAge}
            onChange={handleChange}/>
            {
            errors.childAge && (
            <p className="error-text">{errors.childAge}</p>
            )}

            <input type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}/>

            {errors.phone && (
            <p className="error-text">{errors.phone}</p>
            )}

<select name="activity"
    value={formData.activity}
    onChange={handleChange}>
    <option value="">Select Activity</option>
    <option>Pickel Ball</option>
    <option>Badminton</option>
    <option>Yoga</option>
    <option>Dance</option>
    <option>Fun & Fitness</option>
</select>

    <button type="submit" className="submit-btn" disabled={
    !formData.parentName ||
    !formData.childName ||
    !formData.childAge ||
    formData.childAge < 4 ||
    formData.childAge > 16 ||
    !formData.phone ||
    formData.phone.length !== 10 ||
    !formData.activity
    }>
    Submit Registration
    </button>

</form>

    </div>
    </div>
);
}

export default RegisterModal;