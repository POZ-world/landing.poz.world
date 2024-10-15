import { FAQ, FAQs, ApiFAQJson } from "./faq";
import { marked } from "marked";

describe("FAQ", () => {
  it("should create an FAQ object with the correct properties", () => {
    const faqData: ApiFAQJson = {
      number: 1,
      id: 123,
      question: "What is POZ?",
      answer: "POZ is a social network.",
    };

    const faq = FAQ(faqData);

    expect(faq.number).toBe(1);
    expect(faq.id).toBe(123);
    expect(faq.question).toBe("What is POZ?");
    expect(faq.answer).toBe("POZ is a social network.");
    expect(faq.answerHtml).toBe(marked(faqData.answer));
    expect(faq.uri).toBe("/api/v1/instance/faqs/123");
  });
});

describe("FAQs", () => {
  it("should create an FAQs object with the correct properties and methods", () => {
    const faqData1: ApiFAQJson = {
      number: 1,
      id: 123,
      question: "What is POZ?",
      answer: "POZ is a social network.",
    };

    const faqData2: ApiFAQJson = {
      number: 2,
      id: 456,
      question: "How do I join POZ?",
      answer: "You can join POZ by signing up on the website.",
    };

    const faqs = FAQs(FAQ(faqData1), FAQ(faqData2));

    expect(faqs.length).toBe(2);
    expect(faqs[0].id).toBe(123);
    expect(faqs[1].id).toBe(456);
    expect(faqs.uri).toBe("/api/v1/instance/faqs");
  });
});
