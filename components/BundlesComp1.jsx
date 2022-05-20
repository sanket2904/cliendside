// creating the bundles component to be expoerted to the bundles page 
// Language: javascript


import React from 'react';
import style from "../styles/bundles1.module.css"

export default class Bundles1 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <section className={style.bundlesfirst}>
                <header className={style.bundlesHeader}>
                    <h1>Bundles and Packages</h1>
                    <p>Definitive essentials you’ll need for your Uni-Home. <br /> Here are some great packages to help you get settled in. Bundle with us for a hassle free Uni-Life.</p>
                </header>
            </section>
        )
    }

}


