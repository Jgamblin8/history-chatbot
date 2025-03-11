// Define the questions for each topic
const topics = {
    "Medicine through time": [
        {
            question: "What was the key discovery in medicine during the Renaissance?",
            answer: "The circulation of blood",
            choices: ["The circulation of blood", "The Germ Theory", "Vaccination", "Anesthesia"]
        },
        {
            question: "Who developed the theory of Germs causing disease?",
            answer: "Louis Pasteur",
            choices: ["Louis Pasteur", "Edward Jenner", "Hippocrates", "William Harvey"]
        }
    ],
    "American West": [
        {
            question: "What year did the American Civil War end?",
            answer: "1865",
            choices: ["1861", "1865", "1870", "1850"]
        },
        {
            question: "Who was the famous outlaw of the American West?",
            answer: "Billy the Kid",
            choices: ["Billy the Kid", "Jesse James", "Butch Cassidy", "Wild Bill Hickok"]
        }
    ],
    "Henry VIII": [
        {
            question: "How many wives did Henry VIII have?",
            answer: "6",
            choices: ["4", "7", "6", "5"]
        },
        {
            question: "What was the name of Henry VIII's second wife?",
            answer: "Anne Boleyn",
            choices: ["Catherine of Aragon", "Anne Boleyn", "Jane Seymour", "Catherine Howard"]
        }
    ],
    "Nazi Germany": [
        {
            question: "Who was the leader of Nazi Germany?",
            answer: "Adolf Hitler",
            choices: ["Adolf Hitler", "Joseph Stalin", "Benito Mussolini", "Heinrich Himmler"]
        },
        {
            question: "In what year did Hitler come to power?",
            answer: "1933",
            choices: ["1933", "1929", "1940", "1923"]
        }
    ]
};

let currentTopic = null;
let currentQuestions = [];
let currentQuestionIndex = 0;

function displayTopicChoices() {
    const chatbox = document.getElementById("chatbox");

    // Bot asks the user to select a topic
    const botMessage = document.createElement("div");
    botMessage.classList.add("bot-message");
    botMessage.textContent = "Please choose a topic: Medicine through time, American West, Henry VIII, or Nazi Germany.";
    chatbox.appendChild(botMessage);

    // Display topic buttons
    Object.keys(topics).forEach(topic => {
        const buttonContainer = document.createElement("div");
        
        const button = document.createElement("button");
        button.classList.add("question-btn");
        button.textContent = topic;
        button.onclick = () => startQuiz(topic);
        buttonContainer.appendChild(button);

        // Add the "Experience It" button
        const experienceButton = document.createElement("button");
        experienceButton.classList.add("experience-btn");
        experienceButton.textContent = "Experience It";
        experienceButton.onclick = () => show360Image(topic);
        buttonContainer.appendChild(experienceButton);

        chatbox.appendChild(buttonContainer);
    });

    chatbox.scrollTop = chatbox.scrollHeight;
}


// Function to start the quiz after topic selection
function startQuiz(topic) {
    currentTopic = topic;
    currentQuestions = [...topics[topic]];  // Copy the questions for the selected topic
    currentQuestionIndex = 0;
    showNextQuestion();
}

// Function to shuffle an array (questions and choices)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Function to show the next question
function showNextQuestion() {
    const chatbox = document.getElementById("chatbox");

    if (currentQuestionIndex >= currentQuestions.length) {
        const finalMessage = document.createElement("div");
        finalMessage.classList.add("bot-message");
        finalMessage.textContent = `You've completed the quiz on ${currentTopic}. Great job!`;
        chatbox.appendChild(finalMessage);
        return;
    }

    const currentQuestion = currentQuestions[currentQuestionIndex];
    currentQuestionIndex++;

    shuffleArray(currentQuestion.choices); // Shuffle the choices

    const botMessage = document.createElement("div");
    botMessage.classList.add("bot-message");
    botMessage.textContent = currentQuestion.question;
    chatbox.appendChild(botMessage);

    currentQuestion.choices.forEach(choice => {
        const button = document.createElement("button");
        button.classList.add("question-btn");
        button.textContent = choice;
        button.onclick = () => checkAnswer(currentQuestion.answer, choice);
        chatbox.appendChild(button);
    });

    chatbox.scrollTop = chatbox.scrollHeight;
}

// Function to check the user's answer
function checkAnswer(correctAnswer, selectedAnswer) {
    const chatbox = document.getElementById("chatbox");

    // Show the user's selected answer
    const userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.textContent = `You: ${selectedAnswer}`;
    chatbox.appendChild(userMessage);

    // Check if the answer is correct
    const botMessage = document.createElement("div");
    botMessage.classList.add("bot-message");
    if (selectedAnswer === correctAnswer) {
        botMessage.textContent = "Bot: Correct! 🎉";
    } else {
        botMessage.textContent = `Bot: Incorrect! The correct answer was "${correctAnswer}".`;
    }
    chatbox.appendChild(botMessage);

    chatbox.scrollTop = chatbox.scrollHeight;
    setTimeout(showNextQuestion, 1000); // Move to next question after 1 second
}

// Function to send a message (the user can type in the input field)
function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    const chatbox = document.getElementById("chatbox");

    // Display user message
    const userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.textContent = `You: ${userInput}`;
    chatbox.appendChild(userMessage);

    // Clear input field
    document.getElementById("userInput").value = "";

    // If the user asks to start the quiz, show the topics
    if (userInput.toLowerCase().includes("start quiz")) {
        displayTopicChoices();
    } else {
        // If the message is not related to starting the quiz, the bot responds with a default message
        const botMessage = document.createElement("div");
        botMessage.classList.add("bot-message");
        botMessage.textContent = "Bot: Sorry, I only help with GCSE History questions. Type 'start quiz' to begin.";
        chatbox.appendChild(botMessage);
    }

    chatbox.scrollTop = chatbox.scrollHeight;
    function show360Image(topic) {
        const chatbox = document.getElementById("chatbox");
    
        // Clear previous content in the chatbox
        chatbox.innerHTML = '';
    
        // Create a bot message introducing the 360-degree experience
        const botMessage = document.createElement("div");
        botMessage.classList.add("bot-message");
        botMessage.textContent = `You are now experiencing a 360-degree image of the ${topic} topic. Look around to explore!`;
        chatbox.appendChild(botMessage);
    
        // Create the A-Frame scene for 360-degree image
        const scene = document.createElement("a-scene");
    
        // Create the 360-degree image element
        const image = document.createElement("a-sky");
    
        // Assign 360 image URLs based on the topic
        let imageUrl = "";
        if (topic === "Medicine through time") {
            imageUrl = "https://example.com/medicine360.jpg";  // Replace with your 360 image URL
        } else if (topic === "American West") {
            imageUrl = "https://example.com/americanwest360.jpg";  // Replace with your 360 image URL
        } else if (topic === "Henry VIII") {
            imageUrl = "https://example.com/henryviii360.jpg";  // Replace with your 360 image URL
        } else if (topic === "Nazi Germany") {
            imageUrl = "https://example.com/nazigermany360.jpg";  // Replace with your 360 image URL
        }
    
        image.setAttribute("src", imageUrl);
        scene.appendChild(image);
    
        // Append the A-Frame scene to the chatbox
        chatbox.appendChild(scene);
    
        // Scroll to the bottom of the chatbox
        chatbox.scrollTop = chatbox.scrollHeight;
    }
    

}
