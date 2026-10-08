# Mobile Preview Plugin documentation site

An independent, Chinese-first static documentation and product site for MPP.
The page describes a development preview. It does not distribute a package or
imply that the private source repository is public.

## Files

- `index.html`: content, accessible semantic markup and initial status fallback.
- `assets/style.css`: responsive graphite theme, native diagram and reduced-motion support.
- `assets/site.js`: keyboard-accessible tabs, copy buttons and status rendering.
- `assets/status.js`: public qualification data, separate from presentation code.
- `assets/mark.svg`: original code-native product mark.

No build, dependencies, external fonts, CDN, analytics or remote scripts are
required. All asset paths are relative, so the site works beneath any GitHub Pages
repository subpath. GitHub Pages serves this repository's main branch from its root.

## Local preview

From this directory:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173/`. A local web server gives clipboard APIs a secure
localhost context. A legacy clipboard fallback is also included.

## Updating acceptance status

Edit `assets/status.js` only after checking the exact archive, device and surface
against the qualification record. For readability without JavaScript, mirror the
updated text into the corresponding fallback content in `index.html`:

- `#qualification-note`
- `#status-date`
- `#android-matrix`
- `#matrix-foot`
- `#surface-matrix`

The matrix keeps evidence origins separate: native API 30–37 and Web API 30–34
come from the local `preview.3` matrix archive; Web API 35–37 comes from the CI
archive. The CI archive has the same version but a different digest and must not
inherit the local archive's passes. It separately passed native API 37 on a 16 KiB
page target.

Current CI archive identity:

- Source: `9ec7afad96f486b8050f2f41e6ca8bade24c9b8c`
- SHA-256: `d6f6450826638bdb44cce5a2b8669965036f7de87ec8d79e2468d3b5d08f9b9c`

Never promote an implemented adapter range into a compatibility claim, or native
capture / CLI installation into GUI qualification. Keep pending or blocked targets
explicit. Public state is intentionally summarized; internal evidence, private CI
links, hostnames, local paths and screenshots must not be copied into this site.

For the exact CI archive, official Desktop first-frame, tap/drag, Home/Back,
Pause/Resume, pause preservation across panel reopening, OS window zoom, GUI
removal and cleanup, GUI reinstallation and restored preview have passed on the
recorded target. Web API 35–37 first-frame and input have passed; API 37 also passed
pause/reopen/resume and viewport switching. Web GUI removal while connected to
API 35 passed: the device connection entry and old renderer were removed, plugin
dependencies and bundles were cleared, and no helper or adb reverse mapping
remained. Web GUI reinstallation, enabling and reconnection restored Live preview
on API 35 and have passed.
These results do not imply broad vendor coverage, long-duration qualification or
public package availability.

## Manual checks

- At 1440 px, 768 px and 390 px viewport widths, check horizontal overflow and text.
- Use Tab, arrows, Home and End on both tab sets; the selected panel must follow.
- Switch video / input channels and confirm diagram emphasis and explanation.
- Copy both commands and check the clipboard and live status feedback.
- Open removal and technical details with the keyboard.
- Enable reduced motion; navigation must not animate.
- Serve beneath a nested path and verify assets and internal anchor navigation.
- Inspect external links: the header GitHub link opens the MPP source repository
  in a new tab; access follows that repository's visibility. Other external links
  point to official DeepSeek, the public GitHub organization and Apache licensing.

## License and status

MPP is licensed under Apache-2.0. Its package includes third-party license notices;
third-party components retain their own licenses. This documentation does not
represent official DeepSeek endorsement. Public installation packages have not
been released. This repository publishes the documentation website only; it does not publish MPP binaries.
