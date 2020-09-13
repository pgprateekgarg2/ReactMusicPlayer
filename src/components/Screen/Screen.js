import React from "react";
import ReactPlayer from "react-player";
import "./Screen.css";

class Screen extends React.Component {
  state = {
    categories: ["coverflow", "music", "games", "settings"],
    selected: "",
  };

  // render's categories in menu on main screen
  renderCategory() {
    return this.state.categories.map((category, index) => {
      return (
        <React.Fragment key={index}>
          <li

            className={` item ${
              this.props.screen.toLowerCase() === category.toLowerCase()
                ? "active"
                : ""
            }`}
          >
            <p>{category} </p>
          </li>
        </React.Fragment>
      );
    });
  }

  render() {
    // props
    const { selectedCategory } = this.props;
    // conditional rendering on the basis of selected screen
    const renderSubCategories = () => {
      // coverflow
      if (selectedCategory === "coverflow") {
        return <div className="sub-main-screen">Coverflow</div>;
      }
      // music player
      else if (selectedCategory === "music") {
        return (
          <div className="sub-main-screen" style={{ backgroundColor: "black" }}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=AhaoGhCxuto"
              height="168px"
              width="300px"
            />
          </div>
        );
      }
      // Games
      else if (selectedCategory === "games") {
        return (
          <div className="sub-main-screen">
            <i class="fas fa-dice icon-color"></i>
            <p>Games</p>
          </div>
        );
      }
      // Settings
      else if (selectedCategory === "settings") {
        return (
          <div className="sub-main-screen">
            <i class="fas fa-cogs icon-color"></i>
            <p>Settings</p>
          </div>
        );
      } else {
        return (
          <div className="main-screen">
            <div className="menu">
              <div className="list-container">
                <ul className="list">{this.renderCategory()}</ul>
              </div>
            </div>
            <div className="empty">{this.state.selected}</div>
          </div>
        );
      }
    };

    return renderSubCategories();
  }
}

export default Screen;
