import React from "react";
import { Icon } from '@iconify/react';


export const LandingPage = () => {
    return (
        <div className="landing-page">
            <wrapper className="wrapper">
            <h1> Titre du film</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Morbi quis metus quis neque porta rhoncus. Mauris malesuada<br></br> lacus neque, a viverra risus fringilla nec. Fusce gravida nulla id orci<br></br> mollis, et malesuada velit blandit.
            </p>
            <ul>
            <span className="premieritem"><li> <Icon icon="ph:play-fill"/> Play Episode</li></span>
            <span className="deuxiemeitem"><li> <Icon icon="material-symbols:info-outline" /> More info</li></span>
            </ul>  
            </wrapper>

        </div>  
    )
}

