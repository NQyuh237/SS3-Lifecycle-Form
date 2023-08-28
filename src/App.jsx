import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Lifecycle_Class_Comp from "./components/Lifecycle_Comp";
import FormControlled from "./components/formControlled";
import FormControlled_C2 from "./components/FormControlled_C2";
import FormUnControlled from "./components/formControlled";
import Login2 from "./components/bt_session_2/bai2/Login2";


class App extends Component {
  // thao tác trên lớp
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     show: false,
  //     company: "Rikkei Academy",
  //     showForm: false,
  //   };
  // }
  // handleShow = (e) => {
  //   console.log("event", e); // event là 1 sự kiện mặc định khi có sự kiện từ người dùng
  //   this.setState({
  //     show: !this.state.show,
  //   });
  // };
  render() {
    return (
      // <>
      //   <button onClick={this.handleShow}>Show</button>
      //   <button
      //     onClick={() =>
      //       this.setState({
      //         company: "RikkeiSoft",
      //       })
      //     }
      //   >
      //     Change Props
      //   </button>
      //   <button
      //     onClick={() =>
      //       this.setState({
      //         showForm: !this.state.showForm,
      //       })
      //     }
      //   >
      //     Show Form
      //   </button>
      //   {this.state.show == true ? (
      //     <Lifecycle_Class_Comp company={this.state.company} />
      //   ) : (
      //     <></>
      //   )}

      //   {/* Hiển thị form */}
      //   {this.state.showForm ? <FormControlled_C2 /> : <></>}
      // </>
      <>
       <Login2/>
      </>
    );
  }
}

export default App;
