# ASCII Glitch · Video.js skin

An ASCII-glitch skin for [Video.js v10](https://videojs.org), in its schematic layout. There's no control bar: the video is the central node of a circuit board and every control is a labelled unit wired into it, in warm ochre and terracotta. Pause and the picture is redrawn as coloured monospace glyphs with an RGB split, shimmer and torn rows. On a narrow screen the units stack above and below the feed.

Made for the Video.js Skins Design Challenge.

## Live demo

https://luzbas.github.io/glitch-skin/

## Use the skin

The skin is React + CSS on top of `@videojs/react`, with a WebGL canvas for the glyph screen. Copy `src/skins/ascii` into your project (the schematic layout uses the controls in `skin/`), install `@videojs/react`, `@videojs/core` and `cn`, then:

```tsx
import { VideoPlayer } from '@videojs/react/video';
import { HlsVideo } from '@videojs/react/media/hls-video';
import { SchematicVideoSkin } from './skins/ascii/schematic/schematic-skin';

<VideoPlayer poster="https://example.com/poster.jpg">
  <SchematicVideoSkin title="My video">
    <HlsVideo src="https://example.com/video.m3u8" playsInline crossOrigin="anonymous" />
  </SchematicVideoSkin>
</VideoPlayer>
```

`crossOrigin` is needed so WebGL can read the video frames; the video host must allow it (CORS). A plain `<Video src="…mp4" crossOrigin="anonymous" />` works in place of `HlsVideo` too. Add a chapters track and the board lists the chapters.

The font, JetBrains Mono, loads from Google Fonts.

## Run locally

```bash
npm install
npm run dev
```

The demo site deploys to GitHub Pages on every push to `main` (`.github/workflows/deploy.yml`).

## License

Apache License 2.0, same as Video.js. See [LICENSE](LICENSE).
