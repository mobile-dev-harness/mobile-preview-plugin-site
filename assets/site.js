(() => {
  "use strict";
  const channelCopy = {
    video: { label: "VIDEO PATH", description: "Android 在设备端采集并用 MediaCodec 编码；iOS Simulator 在 macOS 上读取 IOSurface，由 VideoToolbox 编码。H.264 经 MPP1 与 DSH 认证 streaming Fetch 到达客户端，由 WebCodecs 解码；媒体中继层只转发字节。" },
    input: { label: "INPUT PATH", description: "Canvas 上的单指触摸与按键，经 DSH 认证的有界批次与控制通道，交给 Android 输入后端或 iOS Simulator 的 DTUHID。iOS 仅提供单指触摸与 Home；输入与视频通道分开，旧租约和错误几何会被拒绝。" }
  };

  function setupTabs(list, activate) {
    const tabs = Array.from(list.querySelectorAll('[role="tab"]'));
    function select(tab, focus) {
      tabs.forEach(item => {
        const chosen = item === tab;
        item.setAttribute("aria-selected", String(chosen));
        item.tabIndex = chosen ? 0 : -1;
        item.classList.toggle("active", chosen);
      });
      activate(tab);
      if (focus) tab.focus();
    }
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => select(tab, false));
      tab.addEventListener("keydown", event => {
        let next;
        if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
        if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
        if (event.key === "Home") next = 0;
        if (event.key === "End") next = tabs.length - 1;
        if (next !== undefined) {
          event.preventDefault();
          select(tabs[next], true);
        }
      });
    });
  }

  setupTabs(document.querySelector(".channel-tabs"), tab => {
    const channel = tab.dataset.channel;
    const diagram = document.getElementById("architecture-diagram");
    diagram.dataset.channel = channel;
    diagram.setAttribute("aria-labelledby", tab.id);
    document.getElementById("channel-label").textContent = channelCopy[channel].label;
    document.getElementById("channel-description").textContent = channelCopy[channel].description;
  });
  setupTabs(document.querySelector(".install-tabs"), tab => {
    ["web-install", "desktop-install"].forEach(id => {
      document.getElementById(id).hidden = id !== tab.getAttribute("aria-controls");
    });
  });

  async function copyText(value) {
    if (navigator.clipboard && window.isSecureContext) {
      try { await navigator.clipboard.writeText(value); return true; } catch (_) { /* Try the local-page fallback. */ }
    }
    const input = document.createElement("textarea");
    input.value = value;
    input.setAttribute("readonly", "");
    input.style.cssText = "position:fixed;left:-9999px;top:0;";
    document.body.append(input);
    input.select();
    let success = false;
    try { success = document.execCommand("copy"); } catch (_) { success = false; }
    input.remove();
    return success;
  }
  document.querySelectorAll("[data-copy]").forEach(button => {
    let resetTimer;
    button.addEventListener("click", async () => {
      const success = await copyText(document.getElementById(button.dataset.copy).textContent);
      button.focus({ preventScroll: true });
      button.querySelector("span").textContent = success ? "已复制" : "请手动复制";
      document.getElementById("copy-status").textContent = success ? "命令已复制到剪贴板。" : "浏览器未允许复制，请选择命令并手动复制。";
      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => { button.querySelector("span").textContent = "复制"; }, 2600);
    });
  });

  const status = window.MPP_STATUS;
  if (status) {
    const labels = { passed: "目标通过", pending: "待验收", blocked: "环境阻塞" };
    const text = (tag, value, className) => {
      const element = document.createElement(tag);
      element.textContent = value;
      if (className) element.className = className;
      return element;
    };
    document.getElementById("qualification-note").textContent = status.note;
    const date = document.getElementById("status-date");
    date.dateTime = status.updated;
    date.textContent = status.updated.replaceAll("-", ".");
    const rows = status.android.map(row => {
      const tr = document.createElement("tr");
      const th = text("th", row.version + " ");
      th.scope = "row";
      th.append(text("span", "API " + row.api));
      tr.append(th);
      [row.native, row.web].forEach(value => {
        const safeState = Object.hasOwn(labels, value) ? value : "pending";
        const td = document.createElement("td");
        td.append(text("span", labels[safeState], "status-pill " + safeState));
        tr.append(td);
      });
      return tr;
    });
    document.getElementById("android-matrix").replaceChildren(...rows);
    document.getElementById("matrix-foot").textContent = status.matrixFoot;
    const surfaces = status.surfaces.map(surface => {
      const article = document.createElement("article");
      article.className = "surface-card" + (surface.state ? "" : " compact");
      const heading = document.createElement("div");
      heading.className = "surface-card-header";
      heading.append(text("h3", surface.title), text("span", surface.version, "surface-version"));
      article.append(heading, text("p", surface.description));
      if (surface.state) article.append(text("span", surface.state, "surface-state"));
      return article;
    });
    document.getElementById("surface-matrix").replaceChildren(...surfaces);
  }
})();
