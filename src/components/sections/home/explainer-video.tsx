import { YouTubeEmbed } from "@/components/shared/youtube-embed";
import { Reveal } from "@/components/shared/reveal";
import { comparison as data } from "@/content/home";

/**
 * Full-width (edge-to-edge) explainer video section with a small label
 * overlaid on the video. Capped in height for very wide screens.
 */
export function ExplainerVideo() {
  return (
    <section id="explainer" className="pb-6 sm:pb-8">
      <Reveal className="relative mx-auto max-h-[85vh] w-full overflow-hidden">
        <YouTubeEmbed
          id={data.video.youtubeId}
          title={data.video.caption}
          bleed
          poster="/images/vitaly-gariev-wLEJmm4wj_U-unsplash.jpg"
        />
        {/* Small label overlaid on the video */}
        <span className="pointer-events-none absolute left-5 top-5 z-10 rounded-full bg-black/40 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-sm sm:left-8 sm:top-8">
          See Genii in action
        </span>
      </Reveal>
    </section>
  );
}
