import React from "react"
import "./bottom.css"
import { Button } from "antd"

export default () => (
  <div className="root-bottom">
    <div className="bottom-div">
      <p className="bottom-title">开始获取免费开源的GaiaX</p>
      <div className="button-div">
        <Button
          className="bottom-button"
          type="primary"
          shape="round"
          onClick={() => {
            window.location.href = "https://github.com/alibaba/GaiaX"
          }}
        >
          GitHub Start
        </Button>
      </div>
      <p className="bottom-sub-info">Copyright©2022 优酷 youku.com 版权所有</p>
    </div>
  </div>
)
