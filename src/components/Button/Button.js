import React from "react";
import ZingTouch from "zingtouch";
import "./Button.css";

// button component
class Button extends React.Component {
  constructor(props) {
    super(props);
    // state
    this.state = {
      angle: null,
      categories: ["coverflow", "music", "games", "settings"],
      current: "",
    };
    // reference to wheel
    this.wheel = React.createRef();
    this.overlay = React.createRef();
  }

  componentDidMount() {
    this.rotate();
  }

  // rotate function to handle categories on update
  rotate = () => {
    let zt = new ZingTouch.Region(this.wheel.current);
    let currentAngle = 0;
    // handling drag
    const setMe = (newAngle) => {
      this.overlay.current.style.transform = "rotate(" + newAngle + "deg)";
    };

    // selecting category on drag
    const selectCategory = (index) => {
      if (index > this.state.categories.length - 1) {
        index = 0;
        current = 0;
      }
      // console.log(this.state.categories[index]);
      this.props.changeScreen(this.state.categories[index]);
      this.setState({ current: this.state.categories[index] });
    };
    let current = 0;

    // zingtouch event which return data related to drag
    zt.bind(
      this.wheel.current,
      "rotate",
      function (e) {
        if (Math.round(e.detail.angle) % 50 === 0) {
          selectCategory(current);
          current++;
        }
        currentAngle += e.detail.distanceFromLast;
        setMe(currentAngle);
      },
      false
    );
  };
  render() {
    return (
      <div ref={this.wheel} id="button-main" className="button-main">
        <div ref={this.overlay} className="overlay"></div>
        <div id="button-main" className="button-main">
          <button
            className="btn"
            onClick={() => {
              this.props.selectCategory("");
            }}
          >
            Menu
          </button>
          <div className="center-btn">
            <button className="btn">
              <i className="fas fa-fast-backward"></i>
            </button>
            <div
              className="ok-btn"
              onClick={() => {
                this.props.selectCategory(this.state.current);
              }}
            ></div>
            <button className="btn">
              <i className="fas fa-fast-forward"></i>
            </button>
          </div>
          <button className="btn">
            <i className="fas fa-play"></i> <i className="fas fa-pause"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Button;
