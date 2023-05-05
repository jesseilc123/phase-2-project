import React from "react";
import logo from "/home/jesseilc123/development/code/phase-2/final-project-phase-2/phase-2-project/src/MatsuneHiku.png"

function Home() {
    return (
        <div className="home">
            <h1>Home</h1>
            <img src={logo} alt="logo" />  
            <div className="body">
                <p>My name is Matsune Hiku, and I'm a musician. I've been passionate about music since I was a child and dedicated my life to pursuing my dreams of becoming a professional musician.</p>
                <p>As a musician, I strive to create music that's not only enjoyable but also meaningful. I believe that music has the power to bring people together and to create emotions that transcend language and cultural barriers.</p>
                <p>My primary genre is Funk, but I also enjoy experimenting with other styles and incorporating different influences into my music. My goal is to create a unique sound that is all my own and to constantly evolve as an artist.</p>
                <p>Thank you for taking the time to read about me! I hope my music speaks to you and that we can connect through the universal language of music.</p>
            </div>
         </div>
    );
}

export default Home;