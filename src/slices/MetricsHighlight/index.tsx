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
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-gray-200 to-green-400 overflow-hidden"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {slice.primary.title && (
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <PrismicText field={slice.primary.title} />
              </h2>
            )}

            {slice.primary.description && (
              <div className="text-lg text-gray-700 leading-relaxed max-w-lg">
                <PrismicRichText field={slice.primary.description} />
              </div>
            )}
          </div>

          {/* Right Metrics Grid */}
          {slice.primary.metrics && slice.primary.metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-8 lg:gap-12">
              {slice.primary.metrics.map((item, index) => (
                <div key={index} className="space-y-4">
                  {item.icon && (
                    <div className="w-16 h-16 mb-4">
                      <PrismicNextImage 
                        field={item.icon} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}

                  {item.metric_title && (
                    <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                      <PrismicText field={item.metric_title} />
                    </h3>
                  )}

                  {item.metric_description && (
                    <div className="text-sm text-gray-600 leading-relaxed">
                      <PrismicRichText field={item.metric_description} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MetricsHighlight;
