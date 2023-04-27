import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useSpeechSynthesis } from "react-speech-kit";

const SpeechRecognitionComponentRes = () => {
  const [text, setText] = useState("");
  const { transcript, resetTranscript } = useSpeechRecognition();
  const { speak, speaking } = useSpeechSynthesis();

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
    speak({ text: "Ôrhch,...e então: " + transcript });
  };

  return (
    <div>
      <button onClick={handleListen}>Ouvir</button>
      <button onClick={handleStop}>Parar</button>
      <button onClick={handleReset}>Limpar</button>
      <p>{text}</p>
      {speaking && <p>Respondendo...</p>}
    </div>
  );
};

export default SpeechRecognitionComponentRes;
