import {
  GET_PROFILE_DETAILS_FAILURE,
  GET_PROFILE_DETAILS_REQUEST,
  GET_PROFILE_DETAILS_SUCCESS,
} from "./actionTypes";

const initialState = {
  profileData: [],
  isLoading: false,
  isError: false,
};

const reducer = (oldState = initialState, { type, payload }) => {
  switch (type) {
    case GET_PROFILE_DETAILS_REQUEST:
      return {
        ...oldState,
        isLoading: true,
        isError: false,
      };
    case GET_PROFILE_DETAILS_SUCCESS:
      return {
        ...oldState,
        profileData: payload,
        isLoading: false,
        isError: false,
      };
    case GET_PROFILE_DETAILS_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
    default:
      return oldState;
  }
};

export { reducer };
