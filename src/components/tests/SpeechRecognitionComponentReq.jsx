import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechRecognitionComponentReq = () => {
  const [text, setText] = useState("");
  const { transcript, resetTranscript } = useSpeechRecognition();

  const startListening = () => {
    SpeechRecognition.startListening({ language: "pt-BR" });
  };

  const stopListening = () => {
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
  };

  return (
    <div>
      <button onClick={handleListen}>Ouvir</button>
      <button onClick={handleStop}>Parar</button>
      <button onClick={handleReset}>Limpar</button>
      <p>{text}</p>
    </div>
  );
};

export default SpeechRecognitionComponentReq;
