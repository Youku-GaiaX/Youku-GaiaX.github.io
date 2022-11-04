import React from "react"
import "./native.css"
import icon from "../../static/native.webp"

export default () => (
  <div className="root-native">
    <div className="native-card-mid">
      <div className="native-title-top">
        <div className="native-title-div">
          <p className="native-title">创建Native卡片</p>
          <p className="native-title-eng">for iOS and Android</p>
        </div>
        <p className="native-title01">01</p>
      </div>
      <div className="native-card">
        <img className="native-mid-img" src={icon}></img>
        <div className="native-mid-title-div">
          <p className="native-mid-font-title">创建双端适配的Native卡片</p>
          <p className="native-mid-font-title2">
            GaiaX是一套轻量级的纯原生动态化卡片跨端解决方案，可实现一套模板、多端渲染。通过虚拟节点、视图层级拍平等技术手段，来保证极致的渲染效率和逼近原生的性能体验。
            <br />
            GaiaX
            技术方案的设计初衷是在保证客户端最佳的性能体验同时，通过一码多端的技术能力帮助研发端实现提效。
          </p>
        </div>
      </div>
      <div className="native-bottom">
        <p className="native-title2">GaiaX Studio</p>
        <p className="native-title02">02</p>
      </div>
    </div>
  </div>
)
