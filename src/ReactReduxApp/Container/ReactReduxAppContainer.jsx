import {
  setAge,
  setEmployee,
  updateEmployee,
  setName,
  setPhone,
  resetDetails,
} from "../Store/Actions";
import { connect } from "react-redux";
import mainContent from "../Content/mainContent";

export const mapStateToProps = (state) => {
  return {
    id: state.mainreducer.id,
    name: state.mainreducer.name,
    age: state.mainreducer.age,
    phoneNumber: state.mainreducer.phoneNumber,
    employee: state.mainreducer.employee,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    setAge: (data) => dispatch(setAge(data)),
    setName: (data) => dispatch(setName(data)),
    setPhone: (data) => dispatch(setPhone(data)),
    setEmployee: (data) => dispatch(setEmployee(data)),
    updateEmployee: (data) => dispatch(updateEmployee(data)),
    resetDetails: () => dispatch(resetDetails()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(mainContent);
