const initialState = {
  id: 0,
  name: "",
  age: "",
  phoneNumber: "",
  employee: [],
};

const appstate = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "SET_AGE":
      return {
        ...state,
        age: action.payload,
      };
    case "SET_PHONE":
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case "SET_EMPLOYEE":
      let emp = [...state.employee];
      emp.push(action.payload);
      return {
        ...state,
        employee: emp,
        id: state.id + 1,
      };
    case "UPDATE_EMPLOYEE":
      let index = action.payload;
      let updateEmp = state.employee.filter((emp) => emp.id !== index);
      return {
        ...state,
        employee: updateEmp,
      };
    case "RESET_DETAILS":
      return {
        ...state,
        name: "",
        age: "",
        phoneNumber: "",
      };
    default:
      return initialState;
  }
};
export default appstate;
