import React, { useEffect } from "react";
import { store } from "../Redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  getProfileFailure,
  getProfileRequest,
  getProfileSuccess,
} from "../Redux/action";
import axios from "axios";
import ProfileDataRow from "../Components/ProfileDataRow";

const Homepage = () => {
  const profileData = useSelector((store) => store.profileData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileRequest());
    axios
      .get("http://localhost:8080/profile")
      .then(({ data }) => dispatch(getProfileSuccess(data)))
      .catch((err) => dispatch(getProfileFailure()));
  }, []);
  console.log(profileData);
  return (
    <div>
      <table>
        <thead style={{ fontWeight: "700" }}>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody data-cy="profile-wrapper">
          {/* Map through the profileData received from the json-server on mounting the component to show it in a table format */}
          {profileData.map((item) => (
            <ProfileDataRow key={item.id} profile={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
