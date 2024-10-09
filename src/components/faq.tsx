import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/solid';
import { Faq } from '../types/faq';
import { marked } from 'marked';
import React from "react";

type FAQProps = {
    faq: Faq;
    expanded: number | null;
    toggleExpanded: (index: number) => void;
}

export default function FAQ({ faq, expanded, toggleExpanded }: FAQProps) {
    const isOpen = faq.number === expanded;

    return (
        <Disclosure as="div" key={faq.number + '. ' + faq.question} className="pt-6" defaultOpen={isOpen}>
            {({ open }) => (
                <>
                    <dt>
                        <DisclosureButton className="flex w-full items-start justify-between text-left" onClick={() => toggleExpanded(faq.number)}>
                            <span className="text-lg font-bold leading-7">{faq.number + '. ' + faq.question}</span>
                            <span className="ml-6 flex h-7 items-center">
                                {isOpen ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                )}
                            </span>
                        </DisclosureButton>
                    </dt>
                    <Transition
                        show={open}
                        enter="transition-opacity duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <DisclosurePanel as="dd" className="mt-2 pr-12 markdown">
                            <p className="text-md leading-7 dark:text-white my-4" dangerouslySetInnerHTML={{ __html: marked(faq.answer) as string }} />
                        </DisclosurePanel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
}