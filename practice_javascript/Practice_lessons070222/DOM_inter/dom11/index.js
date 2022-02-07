const getShortTextParagraphs = () => {
  let paragraphs = document.querySelectorAll("p");
  let paras = [...paragraphs].filter(
    (paragraph) => paragraph.textContent.length < 10
  );
  return paras.map((para) => para.textContent);
};

// Sample usage - do not modify
console.log(getShortTextParagraphs());
