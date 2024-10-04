import React, { useState } from 'react';
import { Faq } from '../types/faq';
import FAQ from './faq';
import Loading from './loading';

type FAQsProps = {
  faqs: Faq[];
  expanded: number | null;
  toggleExpanded: (index: number) => void;
}

export default function FAQs({ faqs }: FAQsProps): React.ReactElement {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  if (!faqs || !faqs.length) {
    return (<Loading />);
  }

  return (
    <div className="divide-y divide-gray-400/10">
      <dl className="mt-10 space-y-6 divide-y divide-gray-400/10">
        {faqs.map((faq: Faq) => (
          <FAQ key={faq.number} faq={faq} expanded={expanded} toggleExpanded={index => toggleExpanded(index)} />
        ))}
      </dl>
    </div>
  );
}