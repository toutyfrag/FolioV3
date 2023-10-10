// Trail effect that is used in Headers

import React from "react";
import { useTrail, a } from "@react-spring/web";
import "./trail.css";

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 190 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div style={{ width: "100%" }}>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className="trailsText heroText" style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default Trail;
