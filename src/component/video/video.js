import React from "react"
import "./video.css"
import helloworld from "../../static/video_helloworld.webp"
import fastview from "../../static/video_fastview.webp"
import view from "../../static/view.webp"

export default () => (
  <div className="root-video">
    <div className="v-div">
      <p className="v-title">GaiaX入门教学视频</p>
      <div className="video-container">
        <div
          className="video-div"
          onClick={() => {
            window.location.href =
              "https://v.youku.com/v_show/id_XNTg4ODM5ODYwMA==.html"
          }}
        >
          <img className="video-img" src={helloworld}></img>
          <p className="video-title">GaiaX - HelloWorld教学</p>
        </div>
        <div
          className="video-div"
          onClick={() => {
            window.location.href =
              "https://v.youku.com/v_show/id_XNTg4ODM5ODYwMA==.html"
          }}
        >
          <img className="video-img" src={fastview}></img>
          <p className="video-title">GaiaX - 模板搭建实时预览</p>
        </div>
        <div
          className="video-div"
          onClick={() => {
            window.location.href =
              "https://v.youku.com/v_show/id_XNTg4ODM5ODYwMA==.html"
          }}
        >
          <img className="video-img" src={view}></img>
          <p className="video-title">GaiaX - 组件能力介绍</p>
        </div>
      </div>
    </div>
  </div>
)
