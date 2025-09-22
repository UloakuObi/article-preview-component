
import facebookIcon from "../images/icon-facebook.svg"
import twitterIcon from "../images/icon-twitter.svg"
import pinterestIcon from "../images/icon-pinterest.svg"



export default function Tooltip() {

    return (
        <div className="tooltip">
            <span>SHARE</span>
            <img src={facebookIcon} alt="Facebook icon"/>
            <img src={twitterIcon} alt="Twitter icon" />
            <img src={pinterestIcon} alt="Pinterest icon" />
        </div>
    )
}