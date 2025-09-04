import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText} from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";


/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative min-h-screen overflow-hidden bg-neutral-950"
    >
      <div className="absolute inset-0">
      <PrismicNextImage field={slice.primary.image} alt="" priority fill  className="object-cover"/>
      </div>
      <div className="relative flex h-screen flex-col justify-center items-center">
        <div className="max-w-xl text-6xl leading-light text-neutral-50 md:text-7x1 lg:text-8x1">
         <PrismicRichText field={slice.primary.heading} />
        </div>
   
    <PrismicRichText field={slice.primary.body} />

    <PrismicNextLink
  field={slice.primary.button}
  className={slice.primary.button.variant}
/>
</div>


    </section>
  );
};

export default Hero;
