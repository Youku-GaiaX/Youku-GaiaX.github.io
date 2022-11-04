import React from "react"
import "./rust.css"
import icon from "../../static/gaiax-logo.webp"

export default () => (
  <div className="root-node">
    <div className="node-card">
      <div className="node-top-div">
        <p className="node-top-title">动态化</p>
        <p className="node-top-title03">05</p>
      </div>
      <div className="node-mid-div">
        <img className="node-mid-img" src={icon}></img>
        <div className="node-mid-title-div">
          <p className="node-mid-title">动态发布你的模板</p>
          <p className="node-mid-sub">
            文字占位 Grid view shows people on your FaceTime call in the
            same-size tiles, so you can have better conversations with a large
            group. The speaker is automatically highlighted so you always know
            who’s talking.
          </p>
        </div>
      </div>
    </div>
  </div>
)
