document.addEventListener('DOMContentLoaded', function() {
    simulateDialogueScene0();
    setTimeout(simulateDialogueScene1, 26000); 

    document.addEventListener('keydown', function(event) {
        if (event.key === ' ') { 
            window.location.href = 'project3-cafe.html';
        }
    });
});

function displayNextLine(dialogue, currentIndex) {
    if (currentIndex < dialogue.length) {
        const currentLine = dialogue[currentIndex];
        const dialogueElement = document.createElement('div');
        dialogueElement.textContent = ""; 
        dialogueElement.classList.add('texting-text');
        dialogueElement.style.minHeight = "40px"; 
        dialogueElement.style.color = currentLine.speaker === "1" ? "#679baa" : "#e92437";
        document.body.appendChild(dialogueElement);

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
                    }, 800); 
                }
            }
        }, 100); 
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
                    }, 800); 
                }
            }
        }, 100);
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
    }, 50); 
}

function simulateDialogueScene0() {
    const dialogue = [
        { speaker: "1", text: "Hi. I know it’s been awhile but do you wan" },
        { speaker: "1", text: "Hey I know it’s been awhile but would you wanna hang  ou" },
        { speaker: "1", text: "Heyy I know it’s been awhile but would you want to get luch sometime" },
    ];

    let currentIndex = 0;

    displayNextLine(dialogue, currentIndex);
}

function simulateDialogueScene1() {
    const dialogue = [
        { speaker: "2", text: "sure" },
    ];
    
    let currentIndex = 0;
    displayNextLine2(dialogue, currentIndex);


}
