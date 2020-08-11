import * as React from "react";

import { Stage, Layer, Rect } from "react-konva";
// function rect(props) {
//   const { ctx, x, y, width, height } = props;
//   ctx.fillRect(x, y, width, height);
// }

class Canva extends React.Component {
  state = {
    isDragging: true,
    x: 50,
    y: 50,
  };
  constructor(props) {
    super(props);
    // this.state = {
    //   colorOne: "#A52A2A",
    //   colorTwo: "#00597d",
    // };
    // this.updateComponent = this.updateComponent.bind(this);
    // this.myRef = React.createRef();
  }

  componentDidMount() {
    // this.updateCanvas();
  }
  // Update the canvas on componentDidMount as the canvas is not present before mounting

  // Update the canvas on any changes to the React state.
  componentDidUpdate() {
    //this.updateCanvas();
  }
  // Set new values for the React state based on the option selected.

  // Update the canvas.

  render() {
    stage.getContainer().style.backgroundColor = "green";
    return (
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        backgroundColor="green"
      >
        <Layer>
          <Rect
            width={300}
            height={300}
            x={this.state.x}
            y={this.state.y}
            draggable
            fill={this.state.isDragging ? "green" : "black"}
          />
        </Layer>
      </Stage>
    );
  }
}
export default Canva;
