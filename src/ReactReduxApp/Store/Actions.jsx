export function setName(data) {
  return {
    type: "SET_NAME",
    payload: data,
  };
}
export function setAge(data) {
  return {
    type: "SET_AGE",
    payload: data,
  };
}
export function setPhone(data) {
  return {
    type: "SET_PHONE",
    payload: data,
  };
}
export function setEmployee(data) {
  return {
    type: "SET_EMPLOYEE",
    payload: data,
  };
}
export function updateEmployee(data) {
  return {
    type: "UPDATE_EMPLOYEE",
    payload: data,
  };
}
export function resetDetails() {
  return { type: "RESET_DETAILS" };
}
