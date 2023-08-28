import React, { Component } from "react";

export default class FormUnControlled extends Component {
  constructor(props) {
    super(props);
    // khai báo tham chiếu userName
    this.userName=React.createRef();
    // khai báo tham chiếu dateOfBirth
    this.dateOfBirth=React.createRef();
    // khai báo tham chiếu email
    this.email=React.createRef();
    // khai báo tham chiếu password
    this.password=React.createRef();
   
  }

  //  hàm xử lý dữ liệu
  handleSubmit = (e) => {
    // ngăn chặn sự kiênh submit của form
    e.preventDefault();
    // đối tượng newUser
    // const newUser = {
    //   userName: this.state.userName,
    //   dateOfBirth: this.state.dateOfBirth,
    //   email: this.state.email,
    //   password: this.state.password,
    // };
    
  };

  render() {
    console.log("userName", this.state.userName);

    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              UserName
            </label>
            <input
              ref={this.userName}
              className="form-control"
              id="username"
              name="userName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dateOfBirth" className="form-label">
              DateOfBirth
            </label>
            <input
              ref={this.dateOfBirth}
              type="date"
              className="form-control"
              id="dateOfBirth"
              name="dateOfBirth"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              ref={this.email}
              type="text"
              className="form-control"
              id="email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              ref={this.password}
              type="password"
              className="form-control"
              id="password"
              name="password"
            />
</div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}