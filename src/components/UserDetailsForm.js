import React, { useState } from "react";
import "../css/UserDetailsForm.css";

const UserDetailsForm = ({ userDetails, onSave }) => {
    const [editedDetails, setEditedDetails] = useState(userDetails);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedDetails({
            ...editedDetails,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        // Save the edited details and close the form
        onSave(editedDetails);
        alert("Data Updated");
        window.location.reload();
    };

    const handleCancel = () => {
        // Close the form without saving changes
        // onCancel();

        window.location.reload();
    };

    return (
        <div className="user-details-form">
            <h2>Edit User Details</h2>
            <form>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={editedDetails.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={editedDetails.email}
                        onChange={handleInputChange}
                    />
                </div>
                {/* <div>
                    <label>Other Details:</label>
                    <textarea
                        name="otherDetails"
                        value={editedDetails.otherDetails}
                        onChange={handleInputChange}
                    />
                </div> */}
                <div className="form-buttons">
                    <button type="button" onClick={handleSubmit}>
                        Save
                    </button>
                    <button type="button" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserDetailsForm;
