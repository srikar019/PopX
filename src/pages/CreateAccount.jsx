import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateAccount() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: 'Marry Doe',
    phone: 'Marry Doe',
    email: 'Marry Doe',
    password: 'Marry Doe',
    company: 'Marry Doe',
    isAgency: 'yes',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="page create-account-page" id="create-account-page">
      <h1>
        Create your
        <br />
        PopX account
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="reg-fullname">
            Full Name<span className="required">*</span>
          </label>
          <input
            id="reg-fullname"
            type="text"
            name="fullName"
            placeholder="Marry Doe"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="reg-phone">
            Phone number<span className="required">*</span>
          </label>
          <input
            id="reg-phone"
            type="tel"
            name="phone"
            placeholder="Marry Doe"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="reg-email">
            Email address<span className="required">*</span>
          </label>
          <input
            id="reg-email"
            type="text"
            name="email"
            placeholder="Marry Doe"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="reg-password">
            Password <span className="required">*</span>
          </label>
          <input
            id="reg-password"
            type="text"
            name="password"
            placeholder="Marry Doe"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="reg-company">Company name</label>
          <input
            id="reg-company"
            type="text"
            name="company"
            placeholder="Marry Doe"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="radio-group">
          <span className="radio-label">
            Are you an Agency?<span className="required">*</span>
          </span>
          <div className="radio-options">
            <label className="radio-option" id="agency-yes">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === 'yes'}
                onChange={handleChange}
              />
              <span>Yes</span>
            </label>
            <label className="radio-option" id="agency-no">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={formData.isAgency === 'no'}
                onChange={handleChange}
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <div className="btn-submit-container">
          <button id="btn-create-submit" type="submit" className="btn-submit">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateAccount;
