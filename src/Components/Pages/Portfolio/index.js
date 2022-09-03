//will add project 3 + 3 more side projects as completed!!

import MusicPlayer from './images/MusicPlayer.png';
import farming from './images/farming.png';
import placeholder from './images/placeholder.png';


function Portfolio(){
    return (
    <section class = "portfolio">
        <div class = "row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
            <div class = "col">
                <div class = "card">
                    <img
                    src = {MusicPlayer}
                    alt = "4 friends"
                    class = "card-img-top"
                    />
                    <div class = "card-body">
                    <a href="https://lindslewis.github.io/music-generator/" target="_blank"></a>
                    </div>
                </div>
            </div>
        </div>

        <div class = "col">
            <div class = "card">
                <img
                src = {farming}
                alt = "Farmers Market Manager"
                class = "card-img-top"
                />
                <a href="https://farmersmarketmanager.herokuapp.com/" target="_blank"></a>
            </div>
        </div>

    <div class = "col">
            <div class = "card">
                <img
                src = {placeholder}
                alt = "placeholder"
                class = "card-img-top"
                />
                <a href="./images/placeholder.png" target="_blank"></a>
            </div>
        </div>

    <div class = "col">
            <div class = "card">
                <img
                src = {placeholder}
                alt = "placeholder"
                class = "card-img-top"
                />
                <a href="./images/placeholder.png" target="_blank"></a>
            </div>
        </div>

    <div class = "col">
            <div class = "card">
                <img
                src = {placeholder}
                alt = "placeholder"
                class = "card-img-top"
                />
                <a href="./images/placeholder.png" target="_blank"></a>
            </div>
        </div>

    <div class = "col">
            <div class = "card">
                <img
                src = {placeholder}
                alt = "placeholder"
                class = "card-img-top"
                />
                <a href="./images/placeholder.png" target="_blank"></a>
            </div>
        </div>

    <div class = "col">
            <div class = "card">
                <img
                src = {placeholder}
                alt = "placeholder"
                class = "card-img-top"
                />
                <a href="./images/placeholder.png" target="_blank"></a>
            </div>
        </div>
    </section>
)};

export default Portfolio;