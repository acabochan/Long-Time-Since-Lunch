document.addEventListener('DOMContentLoaded', function() {
    simulateDialogueScene0();

    document.addEventListener('keydown', function(event) {
        if (event.key === ' ') { // Check if the pressed key is spacebar
            window.location.href = 'Project3-PhoneEnding.html'; // Redirect to project3-cafe.html
        }
    });
});

let clickCounter = 0;

function openWindow(pageUrl, windowName, id, newImageUrl) {
    // Calculate the left and top positions to center the window
    var left = (screen.width - 490) / 2;
    var top = (screen.height - 490) / 2;

    document.getElementById(id).querySelector('img').src = newImageUrl;

    // Open the window with specified properties
    var newWindow = window.open(pageUrl, windowName,
        `toolbar=no,
         location=no,
         status=no,
         menubar=no,
         scrollbars=yes,
         resizable=yes,
         width=490px,
         height=490px,
         left=${left},
         top=${top}`,
        'style=box-shadow: none'); // Remove drop shadow

    // Disable onclick event of the clicked object
    if (id) {
        document.getElementById(id).onclick = null;
    }

    clickCounter++;

    if (clickCounter === 1) {
        simulateDialogueScene1();
    }

    if (clickCounter === 2) {
        simulateDialogueScene2();
    }

    if (clickCounter === 3) {
        simulateDialogueScene3();
    }

    if (clickCounter === 4) {
        simulateDialogueScene4();
        // Set opacity to 1 and make it interactable
        let checkElement = document.querySelector('.the_check');
        checkElement.style.opacity = '1';
        checkElement.style.pointerEvents = 'auto';
    }

    return false;
}


function displayNextLine(dialogue, currentIndex) {
    if (currentIndex < dialogue.length) {
        const currentLine = dialogue[currentIndex];
        const dialogueElement = document.createElement('div');
        dialogueElement.textContent = ""; // Start with an empty string
        dialogueElement.classList.add('dialogue-text');
        dialogueElement.style.minHeight = "40px"; // Adjust the min-height as needed
        dialogueElement.style.color = currentLine.speaker === "1" ? "#679baa" : "#e92437" ;
        document.body.appendChild(dialogueElement);

        // Typewriter effect
        let index = 0;
        const typingInterval = setInterval(() => {
            dialogueElement.textContent += currentLine.text[index];
            index++;
            if (index === currentLine.text.length) {
                clearInterval(typingInterval);
                currentIndex++;
                setTimeout(() => {
                    dialogueElement.remove();
                    displayNextLine(dialogue, currentIndex);
                }, 800); // Adjust the delay between lines as needed
            }
        }, 100); // Adjust the typing speed as needed
    }
}

function simulateDialogueScene0() {
    const dialogue = [
        { speaker: "1", text: "It’s been way too long. How have you been." },
        { speaker: "2", text: "good" },
        { speaker: "1", text: " " },
        { speaker: "2", text: " " },
        { speaker: "1", text: "That’s good" },
        { speaker: "1", text: " " },
        { speaker: "2", text: " " },
        { speaker: "2", text: "what have you been up to?" },
        { speaker: "1", text: "not really-" },
        { speaker: "1", text: "not really much" }
    ];

    let currentIndex = 0;

    displayNextLine(dialogue, currentIndex);
}

function simulateDialogueScene1() {
    const dialogue = [
        { speaker: "2", text: "I saw you’re doing community theatre" },
        { speaker: "1", text: "Oh yeah, it’s-" },
        { speaker: "1", text: "it’s been fun." },
        { speaker: "1", text: "It’s just volunteer work actually." },
        { speaker: "2", text: "Ah." },
        { speaker: "2", text: "..." },
        { speaker: "2", text: "So where have you been working?" },
        { speaker: "1", text: "I’m just-" },
        { speaker: "1", text: " " },
        { speaker: "1", text: "I’m just assistant manager at this Chinese restaurant" },
        { speaker: "2", text: "Nice, are you working your way up?" },
        { speaker: "1", text: "Not really" },
        { speaker: "2", text: "..." }, 
        { speaker: "1", text: "..."},
        { speaker: "2", text: " " }, 
        { speaker: "1", text: " "},
        { speaker: "1", text: "What about you?"}, 
        { speaker: "2", text: "I'm interning at this law firm."},
        { speaker: "1", text: " "}, 
        { speaker: "1", text: " "}, 
        { speaker: "1", text: " "}, 
        { speaker: "1", text: "That sound's fun."}, 
        { speaker: "1", text: " "}, 
        { speaker: "1", text: " "}, 
        { speaker: "2", text: "Yea."},
    ];

    let currentIndex = 0;

    displayNextLine(dialogue, currentIndex);
}

function simulateDialogueScene2() {
    const dialogue = [
        { speaker: "1", text: "Do you still draw?" },
        { speaker: "2", text: "No, not really. I stopped when I got to college." },
        { speaker: "1", text: "Aw." },
        { speaker: "1", text: "How come?" },
        { speaker: "2", text: "I don’t know. Don’t really have the time." },
        { speaker: "2", text: "I saw on your insta you still crochet. That's cool." },
        { speaker: "2", text: "It's nice to still have your hobbies." },
        { speaker: "1", text: "I guess." },
        { speaker: "2", text: "..." },
        { speaker: "1", text: "So what do you do for fun now?" },
        { speaker: "2", text: "I bar-hop with friends." },
        { speaker: "1", text: "Oh cool. Maybe I can come with you sometime." },
        { speaker: "2", text: "Maybe..." },
        { speaker: "2", text: "It’s not really your scene though." },
        { speaker: "1", text: "Oh ok." },
        { speaker: "1", text: "That's fine." }
    ];
    
    let currentIndex = 0;

    displayNextLine(dialogue, currentIndex);
}

function simulateDialogueScene3() {
    const dialogue = [
        { speaker: "1", text: "Anything exciting coming up for you?" },
        { speaker: "2", text: "I have plans to go to Egypt for a friend's wedding." },
        { speaker: "1", text: "Oh wo-" },
        { speaker: "2", text: "Sorry?" },
        { speaker: "1", text: "Oh no, I was just saying" },
        { speaker: "1", text: "Oh wow." },
        { speaker: "2", text: "Oh yea, well..." },
        { speaker: "2", text: "You should go sometime, it’s beautiful." },
        { speaker: "1", text: "Haha, yea I don’t know." },
        { speaker: "1", text: "Maybe... if I have the money..." },
        { speaker: "2", text: "Any big plans for you coming up?" },
        { speaker: "1", text: "I guess-" },
        { speaker: "1", text: "I mean-" },
        { speaker: "1", text: "I'm not sure" },
        { speaker: "1", text: " " },
        { speaker: "1", text: "Some coworkers and I are gonna go to someone’s house" },
        { speaker: "1", text: "to watch a movie." },
        { speaker: "2", text: "Aw I’m sure that’ll be fun too." },
        { speaker: "1", text: " " },
        { speaker: "1", text: " " },
        { speaker: "1", text: "Yea." }
    ];
    
    
    let currentIndex = 0;

    displayNextLine(dialogue, currentIndex);
}

function simulateDialogueScene4() {
    const dialogue = [
        { speaker: "1", text: "It was-" },
        { speaker: "1", text: "It was great seeing you again." },
        { speaker: "2", text: " " },
        { speaker: "2", text: "Yeah" },
        { speaker: "2", text: "yea" }

    ];
    
    
    let currentIndex = 0;

    displayNextLine(dialogue, currentIndex);
}


document.addEventListener('mousemove', function(event) {
    let mouseX = event.clientX;
    let mouseY = event.clientY;
    let coffee = document.querySelector('.coffee');
    let frenchtoast = document.querySelector('.frenchtoast');
    let sandwich = document.querySelector('.sandwich');
    let tea = document.querySelector('.tea');
    let theCheck = document.querySelector('.the_check'); // Adding the_check element

    // Get the original positions of the images and the_check element
    let coffeeRect = coffee.getBoundingClientRect();
    let frenchtoastRect = frenchtoast.getBoundingClientRect();
    let sandwichRect = sandwich.getBoundingClientRect();
    let teaRect = tea.getBoundingClientRect();
    let theCheckRect = theCheck.getBoundingClientRect(); // Rect of the_check

    // Calculate the offset from the original position for images and the_check
    let coffeeOffsetX = mouseX - coffeeRect.left - coffeeRect.width / 2;
    let coffeeOffsetY = mouseY - coffeeRect.top - coffeeRect.height / 2;
    let frenchtoastOffsetX = mouseX - frenchtoastRect.left - frenchtoastRect.width / 2;
    let frenchtoastOffsetY = mouseY - frenchtoastRect.top - frenchtoastRect.height / 2;
    let sandwichOffsetX = mouseX - sandwichRect.left - sandwichRect.width / 2;
    let sandwichOffsetY = mouseY - sandwichRect.top - sandwichRect.height / 2;
    let teaOffsetX = mouseX - teaRect.left - teaRect.width / 2;
    let teaOffsetY = mouseY - teaRect.top - teaRect.height / 2;
    let theCheckOffsetX = mouseX - theCheckRect.left - theCheckRect.width / 2; // Offset for the_check
    let theCheckOffsetY = mouseY - theCheckRect.top - theCheckRect.height / 2; // Offset for the_check

    // Adjust the multiplier values to control the intensity of the parallax effect for images and the_check
    coffee.style.transform = `translate(${coffeeOffsetX * 0.05}px, ${coffeeOffsetY * 0.05}px)`;
    frenchtoast.style.transform = `translate(${frenchtoastOffsetX * 0.03}px, ${frenchtoastOffsetY * 0.03}px)`;
    sandwich.style.transform = `translate(${sandwichOffsetX * 0.02}px, ${sandwichOffsetY * 0.02}px)`;
    tea.style.transform = `translate(${teaOffsetX * 0.04}px, ${teaOffsetY * 0.04}px)`;
    theCheck.style.transform = `translate(${theCheckOffsetX * 0.06}px, ${theCheckOffsetY * 0.06}px)`; // Adjusted multiplier for the_check
});
