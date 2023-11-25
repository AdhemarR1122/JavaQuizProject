// Questions that will be asked
const Questions = [{
	q: "Who is the Creator of One Piece?",
	a: [{ text: " Eiichiro Oda.", isCorrect: true },
	{ text: "Masashi Kishimoto", isCorrect: false },
	{ text: "Tatsuki Fujimoto ", isCorrect: false },
	{ text: "Akira Toriyama", isCorrect: false }
	]

},
{
	q: "In Naruto Shippuden what is the song called in oppening 3?",
	a: [{ text: "Lovers", isCorrect: false, isSelected: false },
	{ text: "Hero's Come Back", isCorrect: false },
	{ text: "Distance", isCorrect: false },
	{ text: "Blue Bird", isCorrect: true }
	]

},
{
	q: "Who is the main villian in Demon Slayer?",
	a: [{ text: "Micheal Jackson", isCorrect: false },
	{ text: "Muzan Kibutsuji", isCorrect: true },
	{ text: "Inosuke Hashibira", isCorrect: false },
	{ text: "Kokushibo", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}`
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}