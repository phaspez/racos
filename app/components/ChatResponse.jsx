/* 
	response: {
		role: String (user, bot)
		content: String
	}
*/
import { FaUser } from "react-icons/fa";
import { RiRobot2Fill } from "react-icons/ri";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
//import { useChat } from "../managers/chatContext";

export default function ChatResponse({ response, index }) {
	//const { isLoading, setIsLoading } = useChat();
	//const [message, setMessage] = useState("");
	// const { messages, input, handleInputChange, handleSubmit, data } = useChat();
	// const [botResponse, setBotResponse] = useState("");

	return (
		<div className="text-black grid grid-cols-1 gap-4 py-4">
			{response.role === "user" ? (
				<div className="flex items-start flex-row-reverse gap-4">
					<div className=" rounded-full bg-white p-2 text-lg">
						<FaUser />
					</div>
					<div className="bg-white shadow-md rounded-lg p-2 max-w-2/3">
						<p className="text-left max-w-2/3">{response.content}</p>
					</div>
				</div>
			) : (
				<div className="flex items-start  gap-4">
					<div className=" rounded-full bg-white p-2 text-lg">
						<RiRobot2Fill />
					</div>
					<div className="bg-white shadow-md rounded-lg p-2">
						<p className="text-left">
							{/* { <pre>{JSON.stringify(data, null, 2)}</pre>} */}
							<Markdown
								className={"p-0 text-wrap"}
								key={index}
								rehypePlugins={[rehypeRaw]}
							>
								{response.content}
							</Markdown>
						</p>
					</div>
				</div>
			)}
		</div>
	);
}
