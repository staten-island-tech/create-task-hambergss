# 2024 AP Computer Science Principles Free-Response Questions: Set 1

## AP® Computer Science Principles Written Response Prompts

### Instructions:

- **Time:** 1 hour
- **Questions:** 2
- Read each question carefully and completely.
- Write your response in the space provided for each question in the Written Response booklet.
- You may plan your answers in this orange booklet, but no credit will be given for anything written in this booklet. You will only earn credit for what you write in the separate Written Response booklet.

---

### Pre-FRQ Practice

## Identify the Algorithm present in the JavaScript Files.

### Angelina:

```Javascript
function insertText(inputContent, type) { //function insertText is sequencing because of the multiple steps in order to display the output
  DOMSelect.results.insertAdjacentHTML("beforeend", `<br></br>`);
  const content = inputContent;
  if (type === "file") { // if else is selection
    content.forEach(function (item) {
      DOMSelect.results.insertAdjacentHTML(
        "beforeend",
        `<p class="text">${item}</p>`
      );
    });
  } else {
    content.forEach(function (item) { //forEach is iteration
      DOMSelect.results.insertAdjacentHTML(
        "beforeend",
        `<p class="text">${item.textContent}</p>`
      );
    });
    DOMSelect.input.innerHTML = "";
  }
  DOMSelect.inputbox.style.display = "none";
  DOMSelect.settings.style.display = "";
}
```
### Butter:

``` Javascript
function retrieveFeelingQuote(category) { //sequencing
  DOMSelectors.mainOutput.innerHTML = ""; //Gets rid of previous current quote
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/quotes?category=" + category,
    headers: { "X-Api-Key": "e83S07p6GaMOgL3Tbp4W7g==SzjBmXqoFLEGxuow" },
    contentType: "application/json",
    success: function (result) { //selection success and error
      console.log("Retrieved Quote:", result); //Check: Quote Retrieval
      const quoteObject = {
        author: result[0].author,
        quote: result[0].quote,
        category: category,
      };
      quoteHistory.push(quoteObject); //Quote added to long term storage (History)
      console.log("History of Quotes:", quoteHistory); //Check to see if in long term
      quoteCurrent.length = 0; //Empty quoteCurrent
      quoteCurrent.push(quoteObject); //Quote added to short term storage (Current Quote)
      // Display the quote on the page
      console.log("Current Quote:", quoteCurrent); //Check to see if current quote works
      for (let i = 0; i < quoteCurrent.length; i++) { //iteration for loop
        const quote = quoteCurrent[i];
        createQuoteCard(quote);
      }
    },
    error: function ajaxError(jqXHR) { //selection
      console.error("Error: ", jqXHR.responseText);
    },
  });
}
```

### Aspects of Algorithm

Sequencing
Selection
Iteration

### Question 1

Programs accept input to achieve their intended functionality. **Describe at least one valid input to your program and what your program does with that input.**

- Write your responses to this question only on the designated pages in the separate Written Response booklet.
- If there are multiple parts to this question, write the part letter with your response.

Answer for Angelina: Angelina takes 
---

### Question 2

Refer to your Personalized Project Reference when answering this question.

#### Part (a):

Consider the first iteration statement included in the Procedure section of your Personalized Project Reference. **Describe what is being accomplished by the code in the body of the iteration statement.**

#### Part (b):

Consider the procedure identified in part (i) of the Procedure section of your Personalized Project Reference.

- Write two calls to your procedure that each cause a different code segment in the procedure to execute.
- Describe the expected behavior of each call. If it is not possible for two calls to your procedure to cause different code segments to execute, explain why this is the case for your procedure.

#### Part (c):

Suppose another programmer provides you with a procedure called `checkValidity(value)` that:

- Returns `true` if a value passed as an argument is considered valid by the other programmer.
- Returns `false` otherwise.

Using the list identified in the List section of your Personalized Project Reference, **explain in detailed steps an algorithm that uses `checkValidity` to check whether all elements in your list are considered valid by the other programmer.** Your explanation must be detailed enough for someone else to write the program code for the algorithm that uses `checkValidity`.

- Write your responses to this question only on the designated pages in the separate Written Response booklet.
- If there are multiple parts to this question, write the part letter with your response.

---

### End of Exam
