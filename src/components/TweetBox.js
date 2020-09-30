import React, {useState} from 'react'
import '../css/TweetBox.css'
import { Avatar, Button } from "@material-ui/core";
import db from "../firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Jorge Quintero",
            username: "JorgeQui_123",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar:
                "https://pbs.twimg.com/profile_images/1213496225649102849/CMSS3MZO_400x400.jpg",
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/1213496225649102849/CMSS3MZO_400x400.jpg" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="Qué está pasando?"
                        type="text"
                    />
                </div>
                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Opcional: Ingrese URL de imagen"
                    type="text"
                />

                <Button
                    onClick={sendTweet}
                    type="submit"
                    className="tweetBox__tweetButton"
                >
                    Twittear
                </Button>
            </form>
        </div>
    );
}

export default TweetBox
