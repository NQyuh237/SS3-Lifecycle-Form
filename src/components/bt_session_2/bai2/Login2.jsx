import React, { Component } from "react";

export default class Login2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      textDanger: "",
      code: "",
      codeDanger: "",
      arr: [
        "vietanh@gmail.com",
        "thinhpink@gmail.com",
        "huydinh@gmail.com",
        "duccang@gmail.com",
      ],
      arr1: [],
    };
  }

  handleChange2 = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit2 = (e) => {
    e.preventDefault();

    const newUser = {
      code: this.state.code,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(newUser);
    const { email, code, arr, arr1 } = this.state;

    const index = arr.findIndex((e) => e == email);
  
    if (!email) {
      this.setState({
        textDanger: "Không được để trống !",
      });
     
    } else if (email == arr[index]) {
      this.setState({
        textDanger: "Đã có email !",
      });
      
    } else {
      this.setState({
        textDanger: "",
      });
    }

    if (!code) {
      this.setState({
        codeDanger: "Không được để trống !",
      });
    } else if (code[0] !== "N" && code[1] !== "V") {
      this.setState({
        codeDanger: "Không đúng định dạng !",
      });
    } else if (code.length < 8 || code.length > 16) {
      this.setState({
        codeDanger: "Không được ngắn hơn 8 kí tự và dài quá 16 kí tự",
      });
    } else {
      this.setState({
        codeDanger: "",
      });
    }
  };
  render() {
    return (
      <>
        <form onSubmit={(e) => this.handleSubmit2(e)}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Code
            </label>
            <input
              name="code"
              onChange={this.handleChange2}
              type="text"
              className="form-control"
            />
            <p className="text-danger">{this.state.codeDanger}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              name="email"
              onChange={this.handleChange2}
              type="email"
              className="form-control"
            />
            <p className="text-danger">{this.state.textDanger}</p>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              name="password"
              onChange={this.handleChange2}
              type="password"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </>
    );
  }
}
