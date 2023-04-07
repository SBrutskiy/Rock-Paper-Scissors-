const root = document.getElementById("root");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function MyApp() {
    const [userScore, setUserScore] = React.useState(0);
    const [computerScore, setComputerScore] = React.useState(0);
    const [resultText, setResultText] = React.useState(
        "Paper Covers Rock, you Won!"
    );

    function win() {
        setUserScore(userScore + 1);
        setResultText("You Win!!!");
    }

    function lose() {
        setComputerScore(computerScore + 1);
        setResultText("You lose");
    }

    function draw() {
        setResultText("Its a draw");
    }
    function game(userChoice) {
        const computerChoice = getComputerChoice();
        switch (userChoice + computerChoice) {
            case "rs":
            case "pr":
            case "sp":
                win();
                break;
            case "rp":
            case "ps":
            case "sr":
                lose();
                break;
            case "rr":
            case "pp":
            case "ss":
                draw();
                break;
        }
    }
    return (
        <div>
            <header>
                <h1>Rock Paper Scissors</h1>
            </header>

            <div className="score-board">
                <div id="user-label" class="badge">
                    User
                </div>
                <div id="computer-label" className="badge">
                    Computer
                </div>
                <span id="user-score">{userScore}</span>:
                <span id="computer-score">{computerScore}</span>
            </div>
            <div class="result">
                <p id="resultText">{resultText}</p>
            </div>
            <div class="choices">
                <div
                    onClick={() => {
                        game("r");
                    }}
                    id="r"
                    class="choice"
                >
                    <img src="Images/rock.png" alt="rock" />
                </div>
                <div
                    onClick={() => {
                        game("p");
                    }}
                    id="p"
                    class="choice"
                >
                    <img src="Images/paper.png" alt="paper" />
                </div>
                <div
                    onClick={() => {
                        game("s");
                    }}
                    id="s"
                    class="choice"
                >
                    <img src="Images/sccisors.png" alt="scissors" />
                </div>
            </div>
            <p id="action-message">Make your Move.</p>
        </div>
    );
}
ReactDOM.render(<MyApp />, root);
