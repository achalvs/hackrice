export const questions = [
  {
    question: "This is a question. 1",
    answer: "This is an answer.",
  },
  {
    question: "This is a question. 2",
    answer: "This is an answer.",
  },
  {
    question: "This is a question. 3",
    answer: "This is an answer.",
  },
  {
    question: "This is a question. 4",
    answer: "This is an answer.",
  },
  {
    question: "This is a question. 5",
    answer: "This is an answer.",
  },
  {
    question: "This is a question. 6",
    answer: "This is an answer.",
  },
  {
    question: "This is a question. 7",
    answer: "This is an answer.",
  },
  {
    question: "This is a question. 8",
    answer: "This is an answer.",
  },
  {
    question: "This is a question. 9",
    answer: "This is an answer.",
  },
  {
    question: "This is a question. 10",
    answer: "This is an answer.",
  },
].map(item => {
  item.key = `faq-${item.question}`;
  return item;
});
