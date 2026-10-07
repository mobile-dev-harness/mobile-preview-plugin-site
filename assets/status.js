/* Public status only. Keep archive identities separate; never inherit GUI passes.
   Update this data after a concrete qualification record has been reviewed. */
window.MPP_STATUS = {
  updated: "2026-10-08",
  note: "原生与 GUI 分别验收；API 30–34 Web 为本地矩阵历史记录，API 35–37 Web 与当前 Desktop 结果来自独立 CI 归档。",
  android: [
    { version: "10", api: "29", native: "blocked", web: "pending" },
    { version: "11–14", api: "30–34", native: "passed", web: "passed" },
    { version: "15–17", api: "35–37", native: "passed", web: "passed" }
  ],
  matrixFoot: "原生列：本地 preview.3 的 API 30–37；Web 列：API 30–34 为本地矩阵包，API 35–37 为 CI 包。CI 原生另过 API 37 / 16 KiB 页目标。API 29 所测模拟器受 Codec2 surface 问题阻塞，未提供规避补丁。",
  surfaces: [
    { title: "官方 DSH Web", version: "0.2.1-alpha.1", description: "CI 包已在 API 35–37 通过首帧、滑动、点击与 Home / Back；API 37 另通过暂停恢复和视口切换。API 35 连接后的 GUI 卸载清理、重装启用与恢复预览已通过。", state: "所测 GUI 与卸载清理通过" },
    { title: "官方 DSH Desktop", version: "0.2.0-rc.2", description: "CI 包通过首帧、触摸 / 拖动、Home / Back、暂停恢复、重开保留暂停及系统窗口缩放；GUI 卸载后清理、重装并恢复预览也已通过。", state: "所测 GUI 与生命周期通过" },
    { title: "独立 CI 归档", version: "preview.3", description: "来源 9ec7afa，SHA-256 d6f64508…b5d08f9b9c。与同版本的本地矩阵包摘要不同；Desktop 与 API 35–37 Web 结果归属此包。", state: "" }
  ]
};
