import React, { useState } from 'react';
import { FAQ } from '@/faqs/faq';
import FAQComponent from './faq';
import Loading from '@/components/loading';


type FAQsProps = Readonly<{
  faqs: FAQ[]
  expanded: boolean[];
  toggleExpanded: (index: number) => void;
}>

export default function FAQsComponent({ faqs, expanded, toggleExpanded }: FAQsProps): React.ReactElement {
  if (!faqs?.length) {
    return (<Loading />);
  }

  return (
    <div className="divide-y divide-gray-400/10">
      <dl className="mt-10 space-y-6 divide-y divide-gray-400/10">
        {faqs.map((faq) => (
          <FAQComponent key={faq.number} faq={faq} expanded={expanded} toggleExpanded={toggleExpanded} />
        ))}
      </dl>
    </div>
  );
}