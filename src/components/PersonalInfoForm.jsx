import { useState } from "react";

function PersonalInfoForm() {
    const [data, setData] = useState({
        fullName: "",
        email: "",
        phone: "",
        profileURL: ""
    });
    const [isDisabled, setIsDisabled] = useState(false);

    function handleInputChange(e) {
        if(e.target.name === "fullName") {
            setData({...data, fullName: e.target.value});
        } else if (e.target.name === "email") {
            setData({...data, email: e.target.value});
        } else if (e.target.name === "phone") {
            setData({...data, phone: e.target.value});
        } else if (e.target.name === "profileURL") {
            setData({...data, profileURL: e.target.value});
        }
    }

    return (
      <>
        <h2>Personal Details</h2>
        <div className="container">
          <div>
            <label for="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={data.fullName}
              onChange={(e) => handleInputChange(e)}
              disabled={isDisabled}
            />
          </div>
          <div>
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={(e) => handleInputChange(e)}
              disabled={isDisabled}
            />
          </div>
          <div>
            <label for="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={data.phone}
              onChange={(e) => handleInputChange(e)}
              disabled={isDisabled}
            />
          </div>
          <div>
            <label for="profileURL">LinkedIn/Github URL</label>
            <input
              type="url"
              id="profileURL"
              name="profileURL"
              value={data.profileURL}
              onChange={(e) => handleInputChange(e)}
              disabled={isDisabled}
            />
          </div>
          <div>
            <button type="button" onClick={() => setIsDisabled(false)}>
              Edit
            </button>
            <button type="button" onClick={() => setIsDisabled(true)}>
              Save
            </button>
          </div>
        </div>
      </>
    );
}

export default PersonalInfoForm;