import React from 'react';
import Card from './card'

const StartPage = () => {
    return (
        <Card>
            <h1 className="header">Test your Drarry knowledge!</h1>
            <h3 className="subtitle">Please enter your username.</h3>
            <input type="text" className="username_input" placeholder="Username"/>
            <button className="startbtn">Click to play!</button>
            <p className="top_score">
                Top Score: <span></span>
            </p>
        </Card>
    )
};

export default StartPage;