import React from "react"
import "./header.css"
import { Button } from "antd"

export default () => (
  <div className="root">
    <div className="left">
      <img
        className="icon"
        src={'https://gw.alicdn.com/imgextra/i3/O1CN01XEj7q21JttJjLvhbP_!!6000000001087-49-tps-96-96.webp'}
        onClick={() => {
          window.location.href = "https://youku-gaiax.github.io/"
        }}
      ></img>
      <p
        className="gaiaX"
        onClick={() => {
          window.location.href = "https://youku-gaiax.github.io/"
        }}
      >
        GaiaX
      </p>
    </div>
    <div className="right">
      <Button
        className="button"
        type="text"
        onClick={() => {
          window.location.href = "https://www.yuque.com/biezhihua/gaiax"
        }}
      >
        Document
      </Button>
      <Button
        className="button"
        type="text"
        onClick={() => {
          window.location.href = "https://www.yuque.com/biezhihua/gaiax/psxgyh"
        }}
      >
        API
      </Button>
      <Button
        className="button"
        type="text"
        onClick={() => {
          window.location.href = "https://github.com/alibaba/GaiaX/releases"
        }}
      >
        Download
      </Button>
      <div
        className="github"
        onClick={() => {
          window.location.href = "https://github.com/alibaba/GaiaX"
        }}
      >
        <img className="githubIcon" src={'https://gw.alicdn.com/imgextra/i3/O1CN01GAbWVK1OyzoCfGSew_!!6000000001775-49-tps-90-87.webp'}></img>
        <p className="githubtext">GitHub</p>
      </div>
    </div>
  </div>
)
