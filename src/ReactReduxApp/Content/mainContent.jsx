import React, { Component } from "react";

class mainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: "",
    };
  }

  validateInputs = () => {
    const { name, age, phoneNumber } = this.props;
    if (name !== "" && age !== "" && phoneNumber !== "") {
      this.setState({
        error: "",
      });
      return true;
    }
    this.setState({
      error: "All fields are mandatory. Please fill",
    });
    return false;
  };
  setEmployee = () => {
    let valid = this.validateInputs();
    if (valid) {
      let emp = {
        id: this.props.id,
        name: this.props.name,
        age: this.props.age,
        phoneNumber: this.props.phoneNumber,
      };
      this.props.setEmployee(emp);
      this.props.resetDetails();
    }
  };
  getEmployeeList = () => {
    return this.props.employee.map((emp) => {
      return (
        <form>
          <div class="callout" data-closable>
            <button
              style={{ "margin-left": "300px" }}
              aria-label="Close alert"
              type="button"
              onClick={() => this.props.updateEmployee(emp.id)}
              data-close
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <label>
            Name:&nbsp;&nbsp;
            <text>{emp.name}</text>
          </label>
          <br />
          <label>
            Age:&nbsp;&nbsp;
            <text>{emp.age}</text>
          </label>
          <br />
          <label>
            Phone Number:&nbsp;&nbsp;
            <text>{emp.phoneNumber}</text>
          </label>
          <br />
        </form>
      );
    });
  };
  render() {
    const { name, age, phoneNumber, reset, setName } = this.props;

    return (
      <div className="App">
        <center>
          {this.state.error !== "" ? (
            <p style={{ color: "red" }}>{this.state.error}</p>
          ) : (
            <div />
          )}
          <form>
            <label>
              Name:&nbsp;&nbsp;
              <input
                onChange={(e) => this.props.setName(e.target.value)}
                value={name}
                type="text"
                id="name_input"
                required
              />
            </label>
            <br />
            <label>
              Age:&nbsp;&nbsp;
              <input
                onChange={(e) => this.props.setAge(e.target.value)}
                value={age}
                min="1"
                max="100"
                type="number"
                id="age_input"
                required
              />
            </label>
            <br />
            <label>
              Phone Number:&nbsp;&nbsp;
              <input
                onChange={(e) => this.props.setPhone(e.target.value)}
                value={phoneNumber}
                maxLength="10"
                type="text"
                id="phone_input"
                required
              />
            </label>
          </form>
          <br />
          <button
            type="button"
            onClick={() => {
              this.setEmployee();
            }}
          >
            Add
          </button>
          <br />
          <br />
          {this.props.employee &&
          Object.keys(this.props.employee).length > 0 ? (
            this.getEmployeeList()
          ) : (
            <div />
          )}
        </center>
      </div>
    );
  }
}
export default mainContent;
