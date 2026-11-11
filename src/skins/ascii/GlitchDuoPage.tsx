// ASCII Glitch · Duo page — the ASCII skin's schematic board on the iPhone Duo, inside the same fold simulator as
// Papercut · Duo and Sketch · Duo. The Duo variant lives in ./duo and reuses ./skin's controls (edit the shared skin in
// skins-src/ascii, then `npm run sync-skin -- ascii`) and ./schematic's chapter index and settings groups. The phone,
// its poses and the simulated fullscreen come from the papercut Duo route.
import { DuoSimulation } from '../../duo-kit/duo-simulation';
import { DEMO_CHAPTERS, DEMO_HLS, DEMO_POSTER, DEMO_TITLE } from '../../media';
import { AsciiDuoSkin } from './duo/ascii-duo-skin';

export default function GlitchDuoPage() {
  return (
    <main className="duo-page">
      <header className="duo-page__header">
        <h1>ASCII Glitch · Duo</h1>
        <p>
          The terminal board on the iPhone Duo. Prop it up and the units lie on the bottom half under the picture; open
          it flat and they float over the video; close it and the keys line up on a rail beside the feed. Pause anywhere
          and the picture turns to glyphs.
        </p>
        <p className="duo-page__links">
          <a href="../">Player</a>
          <a href="https://github.com/luzbas/glitch-skin">GitHub</a>
        </p>
      </header>

      <DuoSimulation
        src={DEMO_HLS}
        poster={DEMO_POSTER}
        chapters={DEMO_CHAPTERS}
        renderSkin={(media) => <AsciiDuoSkin title={DEMO_TITLE}>{media}</AsciiDuoSkin>}
      />
    </main>
  );
}
