import SettingSection from "./SettingSection";
import { useSettings } from "../managers/SettingsContext";
export default function SettingSectionGeneral() {
	const {
		isDarkMode,
		setIsDarkMode,
		isChatAutoSpeak,
		setIsChatAutoSpeak,
		isVoiceAutoSpeak,
		setIsVoiceAutoSpeak,
		modalOption,
		setModalOption,
	} = useSettings();
	return (
		<SettingSection title={"Cài đặt chung"}>
			<div className="p-2 grid grid-cols-1 gap-4">
				<span className="flex gap-4">
					<label
						className="text-black grow dark:text-white"
						htmlFor="toggle-dark-mode"
					>
						Chế độ tối
					</label>
					<input
						type="checkbox"
						id="toggle-dark-mode"
						className="toggle toggle-info"
						checked={isDarkMode}
						onClick={() => setIsDarkMode(!isDarkMode)}
					/>
				</span>
				<span className="flex gap-4">
					<label
						className="text-black grow dark:text-white"
						htmlFor="toggle-chat-speak"
					>
						Tự động nói trong Chat
					</label>
					<input
						type="checkbox"
						id="toggle-chat-speak"
						className="toggle toggle-info"
						checked={isChatAutoSpeak}
						onClick={() => setIsChatAutoSpeak(!isChatAutoSpeak)}
					/>
				</span>
				<span className="flex gap-4">
					<label
						className="text-black grow dark:text-white"
						htmlFor="toggle-voice-speak"
					>
						Tự động nói trong Voice
					</label>
					<input
						type="checkbox"
						id="toggle-voice-speak"
						className="toggle toggle-info"
						checked={isVoiceAutoSpeak}
						onClick={() => setIsVoiceAutoSpeak(!isVoiceAutoSpeak)}
					/>
				</span>
			</div>
		</SettingSection>
	);
}
