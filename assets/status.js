/* Public status only. Archive-specific passes never transfer to another package. */
window.MPP_STATUS = {
  "updated": "2026-10-10",
  "note": "首个公共预览 0.1.0-preview.5 已发布。以下 iOS Simulator 与 Android API 35 冒烟结果绑定本次 CI 归档；左侧 Android 矩阵保留 preview.3 历史记录，不能继承为本次验收。",
  "android": [
    {
      "version": "10",
      "api": "29",
      "native": "blocked",
      "web": "pending"
    },
    {
      "version": "11–14",
      "api": "30–34",
      "native": "passed",
      "web": "passed"
    },
    {
      "version": "15–17",
      "api": "35–37",
      "native": "passed",
      "web": "passed"
    }
  ],
  "matrixFoot": "历史 preview.3：原生列为本地 API 30–37 矩阵；Web API 30–34 来自本地包，API 35–37 来自另一份 CI 归档。该 CI 包另过 API 37 / 16 KiB 页目标。API 29 所测模拟器受 Codec2 surface 问题阻塞。这些结果不能继承为 preview.5 安装包验收。",
  "surfaces": [
    {
      "title": "iOS Simulator · Web",
      "version": "0.2.1-alpha.1",
      "description": "本次归档通过首帧、点击 / 拖动、Home、底边上滑回桌面、暂停恢复与 800 × 900 视口坐标准确性。显式启动已停止的模拟器、重启后拒绝旧连接并重连、GUI 卸载 / 重装恢复 Live 均通过。",
      "state": "官方 DSH Web · preview.5"
    },
    {
      "title": "iOS Simulator · Desktop",
      "version": "0.2.0-rc.2",
      "description": "本次归档通过首帧、点击 / 拖动、Home、底边上滑回桌面、暂停恢复与断开。环境为 Apple Silicon macOS 26.7、Xcode 26.4、iOS 26.4 的 iPhone 17；手动 App Switcher 和旋转未验收。",
      "state": "官方 DSH Desktop · preview.5"
    },
    {
      "title": "本次归档与原生清理",
      "version": "31a2bdb",
      "description": "iOS 原生停止、输入 EOF、SIGTERM 与模拟器重启后的清理通过。Android API 35 / arm64 完成 5 秒视频与清理冒烟，未执行输入测试；完整 Android 矩阵仍属旧版历史。",
      "state": "精确归档 SHA-256 见下载区"
    }
  ]
};
