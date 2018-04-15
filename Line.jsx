import React from "react";
import ReactDOM from "react-dom";
import {Map, MarkerGroup} from "react-d3-map";

const tokyo = [139.767052, 35.681167];

const data = {
  "type": "Feature",
  "properties": {
    "text": "そう、東京駅。"
  },
  "geometry": {
    "type": "Point",
    "coordinates": tokyo
  }
}

const width = 700;
const height = 700;
// set your zoom scale
const scale = 1200 * 90;
// min and max of your zoom scale
const scaleExtent = [1 << 12, 1 << 13]
// set your center point
const center = tokyo;
// set your popupContent
const popupContent = function(d) { return d.properties.text; }

class App extends React.Component {
  render() {
    return (
      <Map
        width={width}
        height={height}
        scale={scale}
        scaleExtent={scaleExtent}
        center={center}
      >
        <MarkerGroup
          key={"polygon-test"}
          data={data}
          popupContent={popupContent}
          markerClass={"your-marker-css-class"}
          onClick={e => {
            e.showPopup();
          }}
          onCloseClick={e => {
            e.hidePopup();
          }}
          // onMouseOver={e => {
          //   e.showPopup();
          // }}
          // onMouseOut={e => {
          //   e.hidePopup();
          // }}
        />
      </Map>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('blank-point'))