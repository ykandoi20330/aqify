import React, { useEffect, useRef, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechToText = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const componentIsMounted = useRef(true);
  const [text, setText] = useState("");

  useEffect(() => {
    // Set the mounted flag to true when the component mounts
    componentIsMounted.current = true;

    const continuousListening = () => {
      if (componentIsMounted.current) {
        SpeechRecognition.startListening({continuous:true});
        setTimeout(continuousListening, 1000); // Adjust the delay as needed
      }
    };

    continuousListening();

    // Cleanup function to stop listening when the component unmounts
    return () => {
      componentIsMounted.current = false;
      SpeechRecognition.stopListening();
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  useEffect(() => {
    // console.log(transcript);
    setText((prev) => {
      const newState = prev + " " + transcript;
      return newState;
    });
  }, [listening]);

  useEffect(() => {
    console.log("transcript", transcript);
  }, [transcript]);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
      <p>{text}</p>
    </div>
  );
};

export default SpeechToText;
