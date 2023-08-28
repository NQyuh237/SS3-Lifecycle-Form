import { Component } from "react";

export default class Lifecycle_Class_Comp extends Component {
  constructor(props) {
    super(props);
    console.log("Component được khởi tạo");
    this.state = {
      className: "JV230630",
    };
  }
  componentWillMount() {
    console.log("Component will mount");
  }
  componentDidMount() {
    console.log("Component Did Mount");
  }
  componentWillReceiveProps(newProps) {
    console.log(
      "Component will receive props được chạy, lúc này props mới là: ",
      newProps
    );
  }
  shouldComponentUpdate() {
    return true; //Mặc định hàm là return true
  }
  componentWillUpdate() {
    console.log("component will update được chạy");
  }
  componentDidUpdate() {
    console.log("component did update được gọi");
  }
  componentWillUnmount(){
    console.log("component will unmount");// thường được sử dụng để clean sự kiện
  }
  render() {
    console.log("components được render");
    return (
      <>
        <h1>Tên cty ở Component cha {this.props.company}</h1>
        <h3>Tên lớp: {this.state.className}</h3>
        <button
          onClick={() =>
            this.setState({
              className: "HN/RA-JV-230630",
            })
          }
        >
          Change State
        </button>
      </>
    );
  }
}
