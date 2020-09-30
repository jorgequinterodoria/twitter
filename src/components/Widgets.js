import React from 'react'
import '../css/Widgets.css'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Buscar Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>Qué está pasando</h2>

                <TwitterTweetEmbed tweetId={"1275379234404433920"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="Jorge Quintero"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"https://montajeonline.com/jqdesign"}
                    options={{ text: "#reactjs es increíble", via: "JorgeQui_123" }}
                />
            </div>
        </div>
    )
}

export default Widgets
