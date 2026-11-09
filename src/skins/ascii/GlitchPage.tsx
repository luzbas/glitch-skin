// ASCII Glitch demo, schematic layout: just the player, plus a small link to the source.
import { VideoPlayer } from '@videojs/react/video';
import { HlsVideo } from '@videojs/react/media/hls-video';
import { SchematicVideoSkin } from './schematic/schematic-skin';
import { DEMO_CHAPTERS, DEMO_HLS, DEMO_POSTER, DEMO_TITLE } from '../../media';

export default function GlitchPage() {
  return (
    <div className="stage">
      <h1 className="visually-hidden">ASCII Glitch · Video.js skin</h1>
      <div className="stage__player">
        <VideoPlayer poster={DEMO_POSTER}>
          <SchematicVideoSkin title={DEMO_TITLE}>
            {/* crossOrigin lets WebGL read the frames for the glyph screen and the chapters track load. */}
            <HlsVideo src={DEMO_HLS} playsInline crossOrigin="anonymous">
              <track kind="chapters" label="English" srcLang="en" src={DEMO_CHAPTERS} default />
            </HlsVideo>
          </SchematicVideoSkin>
        </VideoPlayer>
      </div>
      <a className="source-link" href="https://github.com/luzbas/glitch-skin">
        GitHub
      </a>
    </div>
  );
}
