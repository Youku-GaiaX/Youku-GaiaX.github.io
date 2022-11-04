import React from "react"
import "./header.css"
import { Button } from "antd"
import icon from "../../static/gaiax-logo-small.webp"
import github from "../../static/github.webp"

export default () => (
  <div className="root">
    <div className="left">
      <img
        className="icon"
        src={icon}
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
        <img className="githubIcon" src={github}></img>
        <p className="githubtext">GitHub</p>
      </div>
    </div>
  </div>
)
