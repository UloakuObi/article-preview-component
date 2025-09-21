import avatarMichelle from "../images/avatar-michelle.jpg"
import shareIcon from "../images/icon-share.svg"
import drawers from "../images/drawers.jpg"



export default function App() {
    return (
        <section className="article-card">

            <div className="main-img-wrapper">
                <img className="main-img" src={drawers} alt="A green bedside drawer with a flower vase and portraits on top"/>
            </div>

            <article>
                <h1>Shift the overall look and feel by adding these wonderful 
                    touches to furniture in your home
                </h1>

                <p>Ever been in a room and felt like something was missing? Perhaps 
                    it felt slightly bare and uninviting. I’ve got some simple tips 
                    to help you make any room feel complete.
                </p>

                <div className="author-box">
                    <div className="author-info">
                        <img className="avatar" src={avatarMichelle} alt="Michelle's avatar"/>
                        <div>
                            <p className="author-name">Michelle Appleton</p>
                            <time>28 Jun 2020</time>
                        </div>
                    </div>
                    <img className="share-icon" src={shareIcon} alt="share icon"/>
                </div>
            </article>

        </section>
    )
}

