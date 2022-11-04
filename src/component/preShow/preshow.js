import React from "react"
import { Button } from "antd"
import "./preshow.css"

export default () => (
  <div className="root-pre">
    <div className="root">
      <p className="bigX">X</p>
    </div>
    <div className="mid">
      <div className="GaiaX">
        <p className="Gaia">Gaia</p>
        <p className="X">X</p>
      </div>
      <p className="mid-mid-text"> 跨平台 高性能 动态化</p>
      <Button
        className="mid-mid-button"
        type="primary"
        shape="round"
        onClick={() => {
          window.location.href = "https://github.com/alibaba/GaiaX"
        }}
      >
        GitHub Start
      </Button>
    </div>
  </div>
)
