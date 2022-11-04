import React from "react"
import { Helmet } from "react-helmet"
import Header from "../component/header/header"
import Preshow from "../component/preShow/preshow"
import Native from "../component/native/native"
import Studio from "../component/studio/studio"
import Fastview from "../component/fastview/fastview"
import Expression from "../component/expression/expression"
import Video from "../component/video/video"
import Bottom from "../component/bottom/bottom"

export default function Home() {
  return (
    <div className="page_root">
      <Helmet title="GaiaX" defer={false} />
      <Header />
      <Preshow />
      <Native />
      <Studio />
      <Expression />
      <Fastview />
      <Video />
      <Bottom />
    </div>
  )
}
