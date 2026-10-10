# Mobile Preview Plugin documentation site

An independent, Chinese-first static documentation and product site for MPP.
The [source repository](https://github.com/mobile-dev-harness/mobile-preview-plugin)
is public. MPP is an unofficial, experimental DeepSeek Harness plugin.

The first public preview, `0.1.0-preview.5`, is available as a GitHub prerelease.
The website binds current acceptance results to the exact published CI archive and
keeps the earlier Android matrix separate as historical evidence.

## Release scope

- Existing Android device and AVD support, plus iOS Simulator.
- Apple Silicon macOS host package; no Linux or Windows package.
- iOS Simulator archive qualification covers Apple Silicon macOS 26.7,
  Xcode 26.4 / iOS 26.4 and iPhone 17 in upright portrait: live video,
  single-pointer input, Home and bottom-edge Home swipes.
- The optional conversation-scoped `open_mobile_preview` agent tool only opens or
  selects the platform panel; it does not provide model vision or operate devices.
- Back and basic navigation keys apply to Android only.
- No physical iPhone/iPad support. Audio, recording, multitouch, arbitrary text /
  IME, and clipboard integration are not included.
- Simulator input uses private Xcode APIs. Display geometry changes end capture;
  reconnect after restoring a supported configuration. Releasing a contact during
  cancel/reset can complete a tap; it is not a verified UIKit cancel primitive.

## Published release

- Tag: `v0.1.0-preview.5`
- Release page: <https://github.com/mobile-dev-harness/mobile-preview-plugin/releases/tag/v0.1.0-preview.5>
- Archive: `mobile-dev-harness-dsh-mobile-preview-0.1.0-preview.5-darwin-arm64.tgz`
- Archive URL: <https://github.com/mobile-dev-harness/mobile-preview-plugin/releases/download/v0.1.0-preview.5/mobile-dev-harness-dsh-mobile-preview-0.1.0-preview.5-darwin-arm64.tgz>
- SHA-256: `04cd7427bdb45bb00d823d789a2573969711a93cee1da837132520703f59f2af`
- Checksum file: <https://github.com/mobile-dev-harness/mobile-preview-plugin/releases/download/v0.1.0-preview.5/mobile-dev-harness-dsh-mobile-preview-0.1.0-preview.5-darwin-arm64.tgz.sha256>
- Qualification record: <https://github.com/mobile-dev-harness/mobile-preview-plugin/releases/download/v0.1.0-preview.5/qualification-0.1.0-preview.5.json>
- Source commit: `31a2bdb1c4d96345c7735377d6d861fe52ce12a4`

Downloads must point to this exact project release, not a moving `latest` URL.
This repository hosts the documentation site, not the MPP binary archive. Checksums
provide integrity/provenance evidence; they are not code-signing signatures.

## Exact-archive acceptance

The published record covers official DSH Web `0.2.1-alpha.1` and official Desktop
`0.2.0-rc.2` on the environment above. Both passed first frame, tap/drag, Home,
bottom-edge Home swipe and Pause/Resume. Web also passed accurate input at an
800 × 900 viewport, explicit boot of a stopped Simulator, stale-connection rejection
and reconnection after reboot, and GUI removal/reinstallation with Live restored.
Desktop passed disconnect and verified installed native hashes.

Native stop, stdin EOF, SIGTERM and Simulator-reboot cleanup passed. The same
archive completed a 5-second Android API 35 / arm64 video-and-cleanup smoke test;
**no Android input was requested in that smoke test**. This does not requalify the
historical Android matrix below.

A timed native App Switcher gesture was observed through Web. Manual Desktop App
Switcher gestures, rotation, other Xcode/runtime combinations, physical iOS,
long-duration GUI runs and full performance measurement remain unqualified.

## Files

- `index.html`: content, accessible semantic markup and initial status fallback.
- `assets/style.css`: responsive deep-blue theme, native diagram and reduced-motion support.
- `assets/site.js`: keyboard-accessible tabs, copy buttons and status rendering.
- `assets/status.js`: public qualification data, separate from presentation code.
- `assets/mark.svg`: original code-native product mark.
- `assets/screenshots/dsh-ios-workflow.jpg` and
  `assets/screenshots/dsh-android-workflow.jpg`: reviewed 1000 × 586 public DSH Web
  captures for the screenshot gallery. Both show real chat replies, live system
  Settings previews and device controls, cropped to omit local host identifiers.
  The chats request an existing emulator or Simulator and its preview panel. The
  agent selects the platform; the user chooses and connects the device. The
  captures use MPP `0.1.0-preview.5` with DSH Web `0.2.1-alpha.1`: iPhone 17 /
  iOS 26.4 / Xcode 26.4 and Android 15 / API 35 / arm64. The conversation is an
  emulator setup request; it does not show an implemented app or extend qualification.

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

Also update `#release-package-note`, `#release-sha256`, the installation command
and download links when verified release metadata changes. Source
validation is not packaged-binary acceptance, and Android results do not establish
iOS Simulator results.

## Historical Android qualification

The Android matrix records `preview.3` history. Native API 30–37 and Web API 30–34
come from a local matrix archive. Web API 35–37 and the Desktop results come from a
separate CI archive with the same version but a different digest. Neither archive's
results may be inherited by `preview.5`.

Historical CI archive identity:

- Source: `9ec7afad96f486b8050f2f41e6ca8bade24c9b8c`
- SHA-256: `d6f6450826638bdb44cce5a2b8669965036f7de87ec8d79e2468d3b5d08f9b9c`

That CI archive separately passed native API 37 on a 16 KiB page target. Its
recorded official DSH Desktop target passed first frame, tap/drag, Home/Back,
Pause/Resume, preservation of pause across panel reopening, system window zoom,
GUI removal/cleanup, and GUI reinstallation with restored preview. Web API 35–37
passed first frame and input; API 37 also passed pause/reopen/resume and viewport
switching. Web GUI removal while connected to API 35 cleared the connection entry,
old renderer, plugin dependencies/bundles, helper and adb reverse mappings;
reinstallation, enabling and reconnecting restored Live preview.

API 29's tested emulator was blocked by a Codec2 surface problem. An implemented
adapter range is not a compatibility promise. Native capture or CLI installation
is not GUI qualification. More vendors, long-duration runs and complete performance
measurement remain outside these records.

Public state is intentionally summarized. Only reviewed public screenshots may be
included. Exclude secrets, private CI links, hostnames, local paths and other local
identifiers from every capture; keep internal evidence private. Screenshot captions
must identify the demonstrated environment without extending qualification claims.

## Manual checks

- At 1440 px, 768 px and 390 px viewport widths, check horizontal overflow and text.
- Use Tab, arrows, Home and End on both tab sets; the selected panel must follow.
- Switch video / input channels and confirm diagram emphasis and explanation.
- Copy both commands and check the clipboard and live status feedback.
- Open removal and technical details with the keyboard.
- Enable reduced motion; navigation must not animate.
- Serve beneath a nested path and verify assets and internal anchor navigation.
- Check that the source and release links target the public project repository.
- Check both screenshot cards, full-size links, captions and image loading at each
  viewport width; confirm public captures contain no secrets or local identifiers.
- Before publication, check the exact release asset and SHA-256, remove stale
  pending text, and bind acceptance statements to that archive.

## License and status

MPP is licensed under Apache-2.0. Its package includes third-party license notices;
third-party components retain their own licenses. This documentation does not
represent official DeepSeek endorsement. The public prerelease is experimental and
its recorded acceptance scope is not a promise of universal compatibility.
