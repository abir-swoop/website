/**
 * WhySwoop section — Figma node 336:1901
 *
 * Three-column benefit cards:
 *  1. Transparent pricing breakdown
 *  2. Real-time order tracking steps
 *  3. Support chat UI
 */

import React from 'react';
import { useInView } from '../../hooks/useInView';
import { CheckIcon } from 'lucide-react';

export interface WhySwoopContent {
  /** Column 1 */
  pricingBoldText: string;
  pricingBodyText: string;
  /** Column 2 */
  trackingBoldText: string;
  trackingBodyText: string;
  /** Column 3 */
  supportBoldText: string;
  supportBodyText: string;
  /** Locale-specific currency symbol + amounts */
  currency: string;
  subtotal: string;
  deliveryFee: string;
  serviceFee: string;
  promoDiscount: string;
  total: string;
}

interface Props {
  content: WhySwoopContent;
}

const trackingSteps = [
  'Order Accepted',
  'Order is ready',
  'Rider is on the way',
  'Rider has arrived',
  'Order delivered',
];

export default function WhySwoop({ content }: Props) {
  const [ref, inView] = useInView();

  const visible = 'opacity-100 translate-y-0';
  const hidden = 'opacity-0 translate-y-8';
  const base = 'transition-all duration-700 ease-out';

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="w-full bg-white py-8 md:py-16 px-5"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

          {/* ── Column 1: Transparent Pricing ── */}
          <div className={`flex flex-col gap-8 ${base} ${inView ? visible : hidden}`} style={{ transitionDelay: '0ms' }}>
            {/* Card */}
            <div className="bg-[#f3f2ff] rounded-[32px] overflow-hidden flex items-center justify-center p-8 aspect-square">
              <div className="flex flex-col gap-3 w-full max-w-[341px]">
                {/* Pricing breakdown */}
                <div className="bg-white rounded-[12px] px-4 py-5 flex flex-col gap-2.5">
                  {[
                    { label: 'Subtotal',     amount: content.subtotal,      bold: false, green: false },
                    { label: 'Delivery fee', amount: content.deliveryFee,   bold: false, green: false },
                    { label: 'Service fee',  amount: content.serviceFee,    bold: false, green: false },
                    { label: 'Promo',        amount: content.promoDiscount, bold: false, green: true  },
                    { label: 'Total',        amount: content.total,         bold: true,  green: false },
                  ].map(({ label, amount, bold, green }) => (
                    <div
                      key={label}
                      className={`flex items-center justify-between text-[18px] ${
                        green ? 'text-[#269441]' : 'text-[#07003b]'
                      } ${bold ? 'font-bold' : ''}`}
                    >
                      <span className={bold ? 'font-bold' : 'font-medium text-[#1e1b3b]'}>{label}</span>
                      <span className={bold ? 'font-bold' : 'font-semibold'}>{amount}</span>
                    </div>
                  ))}
                </div>
                {/* CTA button */}
                <div className="bg-brand-primary rounded-[12px] h-[50px] flex items-center justify-center">
                  <span className="font-semibold text-white text-[18px]">
                    Pay {content.total}
                  </span>
                </div>
              </div>
            </div>
            {/* Caption */}
            <p className="text-[#595672] text-[20px] md:text-[24px] leading-snug">
              <span className="font-bold text-[#07003b]">No hidden fees</span>
              <span className="font-bold text-brand-primary">.</span>{' '}
              <span>Transparent fees everytime.</span>
            </p>
          </div>

          {/* ── Column 2: Real-time Tracking ── */}
          <div className={`flex flex-col gap-8 ${base} ${inView ? visible : hidden}`} style={{ transitionDelay: '100ms' }}>
            {/* Card */}
            <div className="bg-[#f3f2ff] rounded-[32px] overflow-hidden flex items-center aspect-square">
              <div className="relative pl-12 pr-6 py-8 flex flex-col gap-10">
                {/* Vertical connector line */}
                <div className="absolute left-[59px] top-[calc(2rem+23px)] h-[calc(100%-4rem-46px)] w-[2px] bg-[#e6e3ff]" />

                {trackingSteps.map((step, i) => {
                  const isLast = i === trackingSteps.length - 1;
                  return (
                    <div key={step} className="relative flex items-center gap-3 z-10">
                      {isLast ? (
                        // <img
                        //   src={checkDeliveredIcon}
                        //   alt="delivered"
                        //   className="w-6 h-6 shrink-0"
                        // />
                        <CheckIcon className="w-6 h-6 shrink-0 bg-[#0DA239] text-white rounded-full p-1" />
                      ) : (
                        <div className="bg-[#e6e3ff] border-2 border-[#f3f2ff] rounded-full w-6 h-6 shrink-0 flex items-center justify-center">
                          <div className="bg-brand-primary rounded-full w-2.5 h-2.5" />
                        </div>
                      )}
                      <span className="font-medium text-[#1e1b3b] text-[18px] whitespace-nowrap">
                        {step}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* Caption */}
            <p className="text-[#595672] text-[20px] md:text-[24px] leading-snug">
              <span className="font-bold text-[#07003b]">{content.trackingBoldText}</span>{' '}
              <span>{content.trackingBodyText}</span>
            </p>
          </div>

          {/* ── Column 3: Support Chat ── */}
          <div className={`flex flex-col gap-8 ${base} ${inView ? visible : hidden}`} style={{ transitionDelay: '200ms' }}>
            {/* Card */}
            <div className="bg-[#f3f2ff] rounded-[32px] overflow-hidden flex items-center justify-center aspect-square p-8">
              <div className="flex flex-col gap-12 w-full max-w-[365px]">
                {/* User message (right-aligned) */}
                <div className="flex justify-end">
                  <div className="bg-white rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] px-4 py-2.5 max-w-[240px]">
                    <p className="font-semibold text-[#1e1b3b] text-[16px] leading-snug">
                      Yay, Thank you so much for the help, my food is here!!
                    </p>
                  </div>
                </div>
                {/* Agent replies (left-aligned) */}
                <div className="flex flex-col gap-2">
                  {["You're welcome!", "Enjoy your meal, don't forget to order again :)"].map((msg) => (
                    <div key={msg} className="flex justify-start">
                      <div className="bg-brand-primary rounded-tl-[12px] rounded-tr-[32px] rounded-br-[32px] px-4 py-2.5">
                        <p className="font-semibold text-white text-[16px] whitespace-nowrap">
                          {msg}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Caption */}
            <p className="text-[#595672] text-[20px] md:text-[24px] leading-snug">
              <span className="font-bold text-[#07003b]">{content.supportBoldText}</span>{' '}
              <span>{content.supportBodyText}</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
