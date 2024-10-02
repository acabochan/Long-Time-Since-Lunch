document.addEventListener('DOMContentLoaded', function() {
    simulateDialogueScene0();

    
});

function displayNextLine(dialogue, currentIndex) {
    if (currentIndex < dialogue.length) {
        const currentLine = dialogue[currentIndex];
        const dialogueElement = document.createElement('div');
        dialogueElement.textContent = ""; // Start with an empty string
        dialogueElement.classList.add('texting-text');
        dialogueElement.style.minHeight = "40px"; // Adjust the min-height as needed
        dialogueElement.style.color = currentLine.speaker === "1" ? "#679baa" : "#e92437";
        document.body.appendChild(dialogueElement);

        // Typewriter effect
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < currentLine.text.length) {
                dialogueElement.textContent += currentLine.text[index];
                index++;
            } else {
                clearInterval(typingInterval);
                if (currentIndex < dialogue.length - 1) {
                    setTimeout(() => {
                        deleteText(dialogueElement, currentIndex, dialogue);
                    }, 800); // Adjust the delay between lines as needed
                }
            }
        }, 100); // Adjust the typing speed as needed
    }
}

function displayNextLine2(dialogue, currentIndex) {
    if (currentIndex < dialogue.length) {
        const currentLine = dialogue[currentIndex];
        const dialogueElement = document.createElement('div');
        dialogueElement.textContent = ""; // Start with an empty string
        dialogueElement.classList.add('texting-text2');
        dialogueElement.style.minHeight = "40px"; // Adjust the min-height as needed
        dialogueElement.style.color = currentLine.speaker === "1" ? "#679baa" : "#e92437";
        document.body.appendChild(dialogueElement);

        // Typewriter effect
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < currentLine.text.length) {
                dialogueElement.textContent += currentLine.text[index];
                index++;
            } else {
                clearInterval(typingInterval);
                if (currentIndex < dialogue.length - 1) {
                    setTimeout(() => {
                        deleteText(dialogueElement, currentIndex, dialogue);
                    }, 800); // Adjust the delay between lines as needed
                }
            }
        }, 100); // Adjust the typing speed as needed
    }
}

function deleteText(dialogueElement, currentIndex, dialogue) {
    let index = dialogueElement.textContent.length;
    const deletingInterval = setInterval(() => {
        if (index > 0) {
            dialogueElement.textContent = dialogueElement.textContent.slice(0, index - 1);
            index--;
        } else {
            clearInterval(deletingInterval);
            dialogueElement.remove();
            displayNextLine(dialogue, currentIndex + 1);
        }
    }, 50); // Adjust the deleting speed as needed
}

function simulateDialogueScene0() {
    const dialogue = [
        { speaker: "1", text: "Lunch was great. I loved seeing you again. Maybe we can get dinner next week" },
    ];

    let currentIndex = 0;

    displayNextLine(dialogue, currentIndex);
}
