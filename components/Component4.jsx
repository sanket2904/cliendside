import React, { useState, useEffect } from 'react';
import style from "../styles/component4.module.css"
import ill from "../public/1ill2.svg"
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
export default class Component4 extends React.Component {
    constructor(props){
        super(props)
       
    }
    
    render() {
        return (
            <section className={style.fourthSec}>
                    <header className={style.bundlesSec}>
                        <h1>All you have to Do is make a Selection</h1>
                        <p>Unihelp Bundles Collection</p>
                    </header>
                    
                    <section className={style.fourthContent}>
                       {
                           this.props.data.map(element => {
                               return (
                                   <Card key={element.id} data={element} />
                               )
                           })
                       }
                        
                    </section>
            </section>
        )
    }
}


class Card extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        console.log(this.props.data)
        return(
            <div className={style.bundlesCard} style={this.props.style}>
                <div className={style.cardHeader}>
                    <h5>
                        {this.props.data.name}
                    </h5>
                </div>
                <div className={style.cardContent}>
                    <div className={style.cardImage}>
                        <Image src={this.props.data.displayPicture} alt="picture" width={300} height={200} />
                    </div>
                    <div className={style.cardDesc}>
                        <p style={{ fontSize: "calc(16px + 6 * ((100vw - 320px) / 680))", fontWeight: "600" }}>{this.props.data.pageDescription}</p>
                    </div>
                </div>
                <div  className={style.cardButton}>
                    <Link  href={`/bundles/${this.props.data.id}`}>Explore Bundle</Link>
                </div>
            </div>
        )
    }
}