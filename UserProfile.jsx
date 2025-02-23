

import PropTypes from "prop-types";

function UserProfile({ name, age, bio }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h2 style={{ color: "blue" }}>{name}</h2>
      <p>
        Age: <span style={{ fontWeight: "bold" }}>{age}</span>
      </p>
      <p>Bio: {bio}</p>
    </div>
  );
}


UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  bio: PropTypes.string.isRequired,
};

export default UserProfile;