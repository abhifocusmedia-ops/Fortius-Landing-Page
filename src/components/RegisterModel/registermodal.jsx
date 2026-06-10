import "./registermodal.css";

function RegisterModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
    <div className="modal-overlay">
        <div className="modal-box">

        <button className="close-btn" onClick={onClose}>
            ✕
        </button>

        <h2>Register For Summer Camp</h2>

        <form className="register-form">

        <input
            type="text"
            placeholder="Parent Name"
        />

        <input
            type="text"
            placeholder="Child Name"
        />

        <input
            type="number"
            placeholder="Child Age"
        />

        <input
            type="tel"
            placeholder="Phone Number"
        />

        <select>
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