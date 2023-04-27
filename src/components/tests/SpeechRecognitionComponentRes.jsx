import React, { useState, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useSpeechSynthesis } from "react-speech-kit";

const SpeechRecognitionComponentRes = () => {
  const [text, setText] = useState("");
  const { transcript, resetTranscript } = useSpeechRecognition();
  const { speak, speaking } = useSpeechSynthesis();
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    setIsListening(true);
    SpeechRecognition.startListening({ language: "pt-BR" });
  };

  const stopListening = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
  };

  const handleReset = () => {
    setText("");
    resetTranscript();
  };

  const handleListen = () => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert("Seu navegador não suporta reconhecimento de voz.");
      return;
    }

    startListening();
  };

  const handleStop = () => {
    if (transcript.trim() === "") {
      alert("Você não disse nada.");
      return;
    }

    setText(transcript);
    stopListening();
    speak({ text: "Ôrhch,...e então: " + transcript });
  };

  useEffect(() => {
    startListening();
    setTimeout(() => stopListening(), 5000);
  }, []);

  return (
    <div>
      <button onClick={!isListening ? handleListen : handleStop}>
        {isListening ? "Parar" : "Ouvir"}
      </button>
      <button onClick={handleListen}>Ouvir</button>
      <button onClick={handleStop}>Parar</button>
      <button onClick={handleReset}>Limpar</button>
      <p>{text}</p>
      {speaking && <p>Respondendo...</p>}
    </div>
  );
};

export default SpeechRecognitionComponentRes;
