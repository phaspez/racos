/* 
	response: [
		{
			user: String,
			bot: String,
		}, ...
	]
*/
import { FaUser } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useChat } from "../managers/chatContext";

export default function ChatResponse({ response, index }) {
	const { isLoading, setIsLoading } = useChat();
	return (
		<div className="text-black grid grid-cols-1 gap-4">
			<div className="flex items-start flex-row-reverse gap-4">
				<div className=" rounded-full bg-white p-2 text-lg">
					<FaUser />
				</div>
				<div className="bg-white shadow-md rounded-lg p-2 max-w-2/3">
					<p className="text-left max-w-2/3">{response.user}</p>
				</div>
			</div>
			<div className="flex items-start  gap-4">
				<div className=" rounded-full bg-white p-2 text-lg">
					<RiRobot2Fill />
				</div>
				<div className="bg-white shadow-md rounded-lg p-2">
					<p className="text-left">
						<Markdown
							className={"p-2 text-wrap"}
							key={index}
							rehypePlugins={[rehypeRaw]}
						>
							{response.bot}
						</Markdown>
					</p>
				</div>
			</div>
		</div>
	);
}
