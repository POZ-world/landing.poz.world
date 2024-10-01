import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
import { Faq } from '../types/faq';
import { marked } from 'marked';

type FAQProps = {
    faq: Faq;
    key: number;
    expanded: number;
    toggleExpanded: (index: number) => void;
}

export default function FAQ({ faq, key, expanded, toggleExpanded }: FAQProps) {
    return (
        <Disclosure as="div" key={faq.number + '. ' + faq.question} className="pt-6" onClick={() => toggleExpanded(faq.number)}>
            {({ open = faq.number === expanded }) => (
                <>
                    <dt>
                        <DisclosureButton className="flex w-full items-start justify-between text-left">
                            <span className="text-lg font-bold leading-7">{faq.number + '. ' + faq.question}</span>
                            <span className="ml-6 flex h-7 items-center">
                                {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                            </span>
                        </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="mt-2 pr-12 markdown">
                        <p className="text-md leading-7 dark:text-white my-4" dangerouslySetInnerHTML={{ __html: marked(faq.answer) as string }} />
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
}