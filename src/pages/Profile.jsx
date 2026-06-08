function AccountSettings() {
  return (
    <div className="page account-settings-page" id="account-settings-page">
      <div className="settings-header">Account Settings</div>

      <div className="profile-section">
        <div className="profile-card">
          <div className="avatar-wrapper">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Marry Doe"
            />
            <div className="avatar-badge">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4z" />
                <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
              </svg>
            </div>
          </div>
          <div className="profile-info">
            <h2>Marry Doe</h2>
            <p>Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="profile-bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>
      </div>

      <div className="settings-divider"></div>
    </div>
  );
}

export default AccountSettings;
