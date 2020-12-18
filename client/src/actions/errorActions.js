import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";

//Return Erros
export const returnErrors = (status, msg, id = null) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status, id },
  };
};

//Clear Errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
