import "./AddUserForm.css";

function AddUserForm() {
  return (
    <div className="add-user-container">

      <div className="add-user-box">

        <h2 className="add-user-title">Add New User</h2>

        <input
          type="text"
          placeholder="Username"
          className="add-user-input"
        />

        <input
          type="password"
          placeholder="Password"
          className="add-user-input"
        />

        <select className="add-user-select">
          <option>Select Role</option>
          <option>Admin</option>
          <option>Receptionist</option>
          <option>Housekeeping</option>
        </select>

        <button className="add-user-button">
          Create User
        </button>

      </div>

    </div>
  );
}

export default AddUserForm;