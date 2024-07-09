"use client";
import { useEffect } from "react";
import { useTextToSpeech } from "../managers/textToSpeech";
import { HiSpeakerWave } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

// text: the text to be read
// onCompleted: a function to be called when the reading is completed
// autoSpeak: a boolean to indicate if the text should be read automatically or wait for onCompleted
export default function ChatOptions({
	text,
	onResponse,
	autoSpeak,
	disabled,
	audioId,
}) {
	//const [isSpeaking, setIsSpeaking] = useState(false);
	const { pause, cancel, speakText, isSpeaking } = useTextToSpeech({
		lang: "vi-VN",
	});

	useEffect(() => {
		if (disabled) return;
		if (autoSpeak) speakText(text);
	}, [text]);

	const handleSpeak = () => {
		speakText(text);
	};

	const handlePause = () => {
		pause();
	};

	const handleCancel = () => {
		cancel();
	};

	return disabled ? null : (
		<div className="flex px-2">
			{isSpeaking ? (
				<>
					{/* <Button onClick={handlePause}>
						<IoPauseSharp />
					</Button> */}
					<div className="tooltip tooltip-bottom  shadow-lg" data-tip="Dừng">
						<button
							className="btn btn-outline py-1 text-black dark:text-white"
							onClick={handleCancel}
						>
							<IoMdClose />
						</button>
					</div>
				</>
			) : (
				<div
					className="tooltip tooltop-md tooltip-bottom  shadow-lg"
					data-tip="Nghe"
				>
					<button
						className="btn btn-outline py-1 text-black dark:text-white"
						onClick={handleSpeak}
					>
						<HiSpeakerWave />
					</button>
				</div>
			)}
		</div>
	);
}
