// List of questions (statement + answer)
const questions = [
  {
  statement: "2+2?",
  answer: "2+2 = 4"
  },
  {
  statement: "In which year did Christopher Columbus discover America?",
  answer: "1492"
  },
  {
  statement:
  "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
  answer: "The E letter"
  }
  ];

  const contentDiv = document.getElementById('content');

  questions.forEach((question, index) => {
      // Create a container for each question and answer
      const questionDiv = document.createElement('div');
      const questionText = document.createElement('p');
      questionText.innerHTML = `<strong>Question ${index + 1}:</strong> ${question.statement}`;
      questionDiv.appendChild(questionText);

      // Create the button
      const button = document.createElement('button');
      button.textContent = 'Show answer';
      button.addEventListener('click', () => {
          // Remove the button
          button.remove();

          // Show the answer
          const answerText = document.createElement('p');
          answerText.textContent = question.answer;
          questionDiv.appendChild(answerText);
      });

      // Add button to the questionDiv
      questionDiv.appendChild(button);
      // Append the questionDiv to the contentDiv
      contentDiv.appendChild(questionDiv);
  });