"use client";
import exam from "./exam.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Quiz({ searchParams }) {
  const router = useRouter();
  const [questions, setQuestions] = useState([]);
  const [user, setUser] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(20);
  const [backgroundColor, setBackgroundColor] = useState("");
  const { _id } = searchParams;
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/user`, {
          headers: { "x-access-token": token },
        });
        setUser(response.data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/questionss?_id=${_id}`,
          {
            headers: { "x-access-token": token },
          }
        );
        setQuestions(response.data.questions);
      } catch (error) {
        console.error("Error fetching question data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const progress = JSON.parse(localStorage.getItem("quizProgress"));
    if (progress) {
      setCurrentQuestion(progress.currentQuestion);
      setScore(progress.score);
      setShowScore(progress.showScore);
      setTimer(progress.timer);
    }
  }, []);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (!showScore) {
        setTimer((prevTimer) => prevTimer - 1);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [showScore]);

  useEffect(() => {
    if (timer === 0) {
      handleAnswerClick(false);
    }
  }, [timer]);

  const handleAnswerClick = (isCorrect) => {
    const newScore = score + 1;
    if (isCorrect) {
      setScore(newScore);
      setBackgroundColor("green");
    } else {
      setBackgroundColor("red");
    }

    // setTimeout(() => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions[0]?.questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimer(20);
      setBackgroundColor("");
    } else {
      setShowScore(true);
      handleSub(newScore);
    }
    // }, 1000);
  };
  const handleSub = async (newScore) => {
    try {
      const { data } = await axios.post(`http://localhost:8000/result`, {
        phone: user.phone,
        username: user.name,
        result: newScore,
        typeLessons: questions[0]?.questions[currentQuestion]?.questionSection,
      });
      console.log("Submission successful");
    } catch (error) {
      console.error("Error submitting result:", error);
    }
  };

  useEffect(() => {
    const progress = { currentQuestion, score, showScore, timer };
    localStorage.setItem("quizProgress", JSON.stringify(progress));

    return () => localStorage.removeItem("quizProgress");
  }, [currentQuestion, score, showScore, timer]);

  return (
    <div className="bigs">
      {showScore ? (
        <div className="emailSub">
          <Link href="../../ES4edu/es4">
            <button>Back</button>
          </Link>
          <div className="hariu">
            <h2>
              Your Score: {score} out of {questions[0]?.questions.length}
            </h2>
          </div>
        </div>
      ) : (
        <div className="ques">
          <div className="answr">
            <p>
              Time left: {timer} seconds
                <br />
                <br />
                {questions[0]?.questions[currentQuestion]?.questionText}
            
            </p>
              <ul>
              <br />
              {questions[0]?.questions[currentQuestion]?.answerOptions.map(
                (answerOption, index) => (
                  <li key={index}>
                    <button
                      className="correctButton"
                      style={{ backgroundColor }}
                      onClick={() => handleAnswerClick(answerOption.isCorrect)}
                    >
                      {answerOption.answerText}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
