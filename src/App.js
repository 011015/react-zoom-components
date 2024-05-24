import React from "react";

import { Drag, RowFold } from "@components";
import "./index.css";

function App() {
  return (
    <div className="container">
      <div className="title">
        <h1>react-zoom-components</h1>
        <h3>一款 React 缩放组件库</h3>
        <p>欢迎来到在线体验！</p>
      </div>
      <div className="main">
        <div className="drag">
          <p className="drag-title">体验Drag</p>
          <div style={{ height: 800 }}>
            <Drag
              children={[
                <div
                  style={{
                    height: 500,
                    backgroundColor: "pink",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Left
                </div>,
                <div
                  style={{
                    height: 500,
                    backgroundColor: "purple",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Right
                </div>,
              ]}
              width={["30%", "70%"]}
            />
          </div>
        </div>
        <div className="fold">
          <p className="fold-title">体验RowFold</p>
          <div style={{ height: 800 }}>
            <RowFold
              children={[
                <div style={{ height: 500, backgroundColor: "pink" }}>
                  content1
                </div>,
                <div style={{ height: 500, backgroundColor: "purple" }}>
                  content1
                </div>,
              ]}
              height={["30%", "70%"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
