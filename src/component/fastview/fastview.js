import React from "react"
import { Image } from "antd"
import "./fastview.css"
import fast from "../../static/gif_fastview.gif"

export default () => (
  <div className="root-fastview">
    <div className="fastview-card">
      <div className="fastview-top-div">
        <p className="fastview-top-title">实时预览</p>
        <p className="fastview-top-title03">04</p>
      </div>
      <div className="fastview-mid-div">
        <div className="fastview-mid-title-div">
          <p className="fastview-mid-title">
            模拟器&真机实时反馈模板构建效果 - 实时预览
          </p>
          <p className="fastview-mid-sub">
            GaiaX结合GaiaX Studio构建了完善的实时预览技术体系。开发者可在GaiaX
            Studio中通过模拟器对模板UI实现所见即所得的UI效果预览。在模板构建进入尾声，需要在真机进行真实数据效果的走查验收阶段，开发者通过GaiaX提供的FastPreview能力，与Studio建立双向实时数据通道，在真机上实现亚秒级的UI效果热更新&预览。
          </p>
        </div>
        <Image className="fastview-mid-img" src={fast}></Image>
      </div>
    </div>
  </div>
)
