import React from "react"
import "./video.css"

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
          <img className="video-img" src={'https://gw.alicdn.com/imgextra/i2/O1CN01sZnmTN1I1YiTNRXm5_!!6000000000833-49-tps-3458-1588.webp'}></img>
          <p className="video-title">GaiaX - HelloWorld教学</p>
        </div>
        <div
          className="video-div"
          onClick={() => {
            window.location.href =
              "https://v.youku.com/v_show/id_XNTg4ODM5ODYwMA==.html"
          }}
        >
          <img className="video-img" src={'https://gw.alicdn.com/imgextra/i4/O1CN01x7UZlx1oSdq8YVXLx_!!6000000005224-49-tps-3376-1484.webp'}></img>
          <p className="video-title">GaiaX - 模板搭建实时预览</p>
        </div>
        <div
          className="video-div"
          onClick={() => {
            window.location.href =
              "https://v.youku.com/v_show/id_XNTg4ODM5ODYwMA==.html"
          }}
        >
          <img className="video-img" src={'https://gw.alicdn.com/imgextra/i2/O1CN01NBEj331r21fdFuFrO_!!6000000005572-49-tps-3194-1410.webp'}></img>
          <p className="video-title">GaiaX - 组件能力介绍</p>
        </div>
      </div>
    </div>
  </div>
)
