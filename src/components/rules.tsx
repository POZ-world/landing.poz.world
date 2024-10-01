import React from 'react';
import { Rule } from "../types/rule";
import Loading from "./loading";
import './accordion.css';

interface RulesProps {
  rules: Rule[];
  expanded: number;
  toggleExpanded: (index: number) => void;
}

export default function Rules({ rules, expanded, toggleExpanded }: RulesProps): React.ReactElement {
  if (!rules || !rules.length) {
    return <Loading />;
  }

  return (
    <div className="my-24">
      <ul className="grid gap-x-8 gap-y-12 my-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {rules.map((rule: Rule, index: number) => (
          <li key={index} className="text-md mb-4">
            <span
              className="block text-2xl mb-4 cursor-pointer"
              onClick={() => toggleExpanded(index)}
            >
              Rule #{index + 1}
            </span>
            <span className="block text-lg dark:text-white tracking-widest leading-8" dangerouslySetInnerHTML={{ __html: rule.text }} />
            {expanded === index && (
              <div className="accordion-content expanded">
                <span
                  className="block text-md dark:text-gray-400 pt-2"
                  dangerouslySetInnerHTML={{ __html: rule.hint }}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}