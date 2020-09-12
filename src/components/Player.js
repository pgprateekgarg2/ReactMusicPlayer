import React from "react";
import Screen from "./Screen/Screen";
import Button from "./Button/Button";
import "./Player.css";

// PLayer component
class Player extends React.Component {
  state = {
    screen: "",
    selectedCategory: "",
  };

  // update the selected screen and set it to state to pass it to another component
  changeScreen = (screen) => {
    this.setState({ screen });
  };

  // select category
  selectCategory = (selectedCategory) => {
    this.setState({ selectedCategory });
  };

  render() {
    return (
      <div className="player-main">
        <div className="player">
          {/* screen */}
          <Screen
            screen={this.state.screen}
            selectedCategory={this.state.selectedCategory}
          />
          {/* button */}
          <Button
            changeScreen={this.changeScreen}
            selectCategory={this.selectCategory}
          />
        </div>
      </div>
    );
  }
}

export default Player;
