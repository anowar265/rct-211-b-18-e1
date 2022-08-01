// Write the action object creators in this file

import {
  GET_PROFILE_DETAILS_FAILURE,
  GET_PROFILE_DETAILS_REQUEST,
  GET_PROFILE_DETAILS_SUCCESS,
} from "./actionTypes";

export const getProfileRequest = () => ({
  type: GET_PROFILE_DETAILS_REQUEST,
});

export const getProfileSuccess = (payload) => ({
  type: GET_PROFILE_DETAILS_SUCCESS,
  payload,
});

export const getProfileFailure = () => ({
  type: GET_PROFILE_DETAILS_FAILURE,
});
