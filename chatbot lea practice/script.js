// List of GCSE History questions and answers
const historyQuestions = [
    {
        question: "Who was the first President of the United States?",
        answer: "George Washington"
    },
    {
        question: "In what year did World War II end?",
        answer: "1945"
    },
    {
        question: "What event triggered the start of World War I?",
        answer: "The assassination of Archduke Franz Ferdinand"
    },
    {
        question: "Who was the leader of the Soviet Union during the Cuban Missile Crisis?",
        answer: "Nikita Khrushchev"
    },
    {
        question: "What was the main cause of the American Civil War?",
        answer: "Slavery and states' rights"
    }
];

// Function to display the list of questions for the user to choose from
function displayQuestionChoices() {
    const chatbox = document.getElementById('chatbox');

    // Display bot's message prompting to choose a question
    const botMessage = document.createElement('div');
    botMessage.classList.add('bot-message');
    botMessage.textContent = "Please choose a GCSE History question:";
    chatbox.appendChild(botMessage);

    // Display each question as a button
    historyQuestions.forEach((item, index) => {
        const button = document.createElement('button');
        button.classList.add('question-btn');
        button.textContent = item.question;
        button.onclick = () => showAnswer(index);
        chatbox.appendChild(button);
    });

    // Scroll to the bottom of the chatbox
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Function to show the correct answer after the user selects a question
function showAnswer(index) {
    const chatbox = document.getElementById('chatbox');

    // Display user's selected question
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = `You: ${historyQuestions[index].question}`;
    chatbox.appendChild(userMessage);

    // Show bot's response with the correct answer
    const botMessage = document.createElement('div');
    botMessage.classList.add('bot-message');
    botMessage.textContent = `Bot: The correct answer is "${historyQuestions[index].answer}".`;
    chatbox.appendChild(botMessage);

    // Scroll to the bottom of the chatbox
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Function to send a message (the user can type in the input field)
function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const chatbox = document.getElementById('chatbox');

    // Display user message
    const userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = `You: ${userInput}`;
    chatbox.appendChild(userMessage);

    // Clear input field
    document.getElementById('userInput').value = '';

    // If the user asks to start the quiz, show the questions
    if (userInput.toLowerCase().includes('start quiz')) {
        displayQuestionChoices();
    } else {
        // If the message is not related to starting the quiz, the bot responds with a default message
        const botMessage = document.createElement('div');
        botMessage.classList.add('bot-message');
        botMessage.textContent = `Bot: Sorry, I only help with GCSE History questions. Type 'start quiz' to begin.`;
        chatbox.appendChild(botMessage);
    }

    // Scroll to the bottom of the chatbox
    chatbox.scrollTop = chatbox.scrollHeight;
}
