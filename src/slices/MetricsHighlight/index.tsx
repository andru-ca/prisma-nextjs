import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText, PrismicText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `MetricsHighlight`.
 */
export type MetricsHighlightProps =
  SliceComponentProps<Content.MetricsHighlightSlice>;

/**
 * Component for "MetricsHighlight" Slices.
 */
const MetricsHighlight: FC<MetricsHighlightProps> = ({ slice }) => {
  return (
    <section
      className="metrics-highlight"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="metrics-highlight__header text-center mb-8">
        {slice.primary.title && (
          <h2 className="text-3xl font-bold">
            <PrismicText field={slice.primary.title} />
          </h2>
        )}

        {slice.primary.description && (
          <div className="text-lg text-gray-600 mt-2">
            <PrismicRichText field={slice.primary.description} />
          </div>
        )}
      </div>

      {slice.primary.metrics && slice.primary.metrics.length > 0 && (
        <div className="metrics-highlight__grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {slice.primary.metrics.map((item, index) => (
            <div key={index} className="metrics-highlight__item flex flex-col items-center text-center p-4">
              {item.icon && (
                <div className="mb-4 w-16 h-16">
                  <PrismicNextImage field={item.icon} />
                </div>
              )}

              {item.metric_title && (
                <h3 className="text-xl font-semibold mb-2">
                  <PrismicText field={item.metric_title} />
                </h3>
              )}

              {item.metric_description && (
                <p className="text-gray-500">
                  <PrismicRichText field={item.metric_description} />
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MetricsHighlight;
