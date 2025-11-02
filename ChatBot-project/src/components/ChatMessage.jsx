import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";
import "./ChatMessage.css";

export function ChatMessage({ message, sender }) {
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img
          className="chat-message-profile"
          src={RobotProfileImage}
          alt="robot"
        />
      )}
      <div className="chat-message-text">{message}</div>
      {sender === "user" && (
        <img
          className="chat-message-profile"
          src={UserProfileImage}
          alt="user"
        />
      )}
    </div>
  );
}
export default ChatMessage;
