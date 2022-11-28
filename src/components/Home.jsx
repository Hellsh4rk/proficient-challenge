import React from "react";

const Home = () => {
    return (
        <div>
            <div className="header">
                <div className="vectorHome">
                    <img src="../images/cil_house.png" alt="VectorHome" />
                </div>
                <div className="headerText">
                    <p className="headerText1">How we work</p>
                    <p className="headerText2">Services</p>
                    <p className="headerText3">Free Quote</p>
                    <p className="headerText4">Contact</p>
                </div>
            </div>

        <div className="contentText">
            <h1>What items to store?</h1>
        </div>
        <div className="contentText2">
            <p>Select which items you wish to store before moving to your new home. We'll keep 'em safe!</p>
        </div>
    </div>
    );
};

export default Home;