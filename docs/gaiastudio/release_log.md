# 发布日志

## Gaia Studio 0.3.2

更新日志：
- 重构底层存储数据结构，重构数据流，提升流畅度和稳定性
- 增加对支持Apple芯片的支持，充分使用Apple芯片的性能，如果你正在使用M1/M2芯片，请下载Apple芯片版本的Gaia Studio
- 支持撤销（Cmd+Z）/重做（Cmd+Shift+Z）
- 重构扫码模块（基于目前的GaiaXSDK请使用Gaia Studio的扫码兼容模式，后续GaiaX DevTools发布后请使用多合一模式的扫码）
- 支持GaiaXJS编辑（index.js文件，后续端上GaiaXJSSDK会开源）
- 其他问题修复

升级建议：
- 升级前请做好模板的备份，先将所有本地模板导出到本机
- 如果你正在使用Apple芯片的MacBook，建议安装支持Apple芯片的版本，速度会大大提升