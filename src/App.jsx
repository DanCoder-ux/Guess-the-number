import { motion } from "framer-motion";
import "./index.scss";

const App = () => {

  function theGame() {
    let guess = prompt("Guess a number between 1 - 10 🤓");
    guess = parseInt(guess);
    let answer = Math.floor(Math.random() * 10) + 1;

    if (guess === null) return;

    if (isNaN(guess) || guess < 1 || guess > 10) {
      alert("invalid input, please input the number between 1-10.🤨");
      return;
    }

    alert(guess == answer
        ? "Congra!!, you got the answer correctly!😅"
        : `Oops, you missed it. The answer was ${answer}.🙄`
    );
  };

  return (
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome To The Game
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Can You Guess the Number?
      </motion.p>
      <motion.button
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={() => theGame()}
      >
        Start
      </motion.button>
    </div>
  );
}

export default App;
