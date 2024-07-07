"use client";

import { useEffect, useRef, useState } from "react";
/* options = {
    text: String,
    lang: String, // e.g., 'en-US', 'es-ES'
} */

export const useTextToSpeech = (options) => {
    let utteranceRef = useRef(null);
    let speechSynthesisRef = useRef(null);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [voices, setVoices] = useState([]);

    useEffect(() => {
        speechSynthesisRef.current = window.speechSynthesis;

        const loadVoices = () => {
            const voicesList = speechSynthesisRef.current.getVoices();
            setVoices(voicesList);
            console.log(voicesList);
        };

        // Load voices if they're available
        if (speechSynthesisRef.current.onvoiceschanged !== undefined) {
            speechSynthesisRef.current.onvoiceschanged = loadVoices;
        }
        loadVoices();
    }, []);

    const speak = () => {
        speechSynthesisRef.current.speak(utteranceRef.current);
        setIsSpeaking(true);
    };

    const speakText = (text) => {
        let utt = new window.SpeechSynthesisUtterance(stripMarkdown(text));
        if (options && options.lang) {
            utt.lang = options.lang;
        }
        
        const selectedVoice = voices.find(voice => voice.lang === utt.lang);
        if (selectedVoice) {
            utt.voice = selectedVoice;
        } else {
            console.warn(`No voice found for lang: ${utt.lang}`);
        }

        console.log(`Speaking with voice: ${utt.voice ? utt.voice.name : 'default'}, lang: ${utt.lang}`);
        cancel();
        speechSynthesisRef.current.speak(utt);
    };

    const stripMarkdown = (markdown) => {
        return markdown
            .replace(/[#*_\-~`>[\]()]/g, '') // Remove Markdown characters
            .replace(/!\[.*\]\(.*\)/g, '')   // Remove images
            .replace(/\[(.*?)\]\(.*\)/g, '$1') // Remove links but keep the text
            .replace(/\n/g, ' ') // Replace newlines with spaces
            .replace(/\s{2,}/g, ' ') // Replace multiple spaces with a single space
            .trim();
    };

    const pause = () => {
        speechSynthesisRef.current.pause();
    };

    const cancel = () => {
        speechSynthesisRef.current.cancel();
    };

    return {
        speak, pause, cancel, speakText
    };
};
