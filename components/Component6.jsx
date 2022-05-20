import React, { useState, useEffect } from 'react';
import style from "../styles/component6.module.css"
import ill from "../public/expand.svg"
import ill2 from "../public/expand_less.svg"
import Image from 'next/image';


let data = [{ question: "Which countries do you deliver to?", answer: "Wherever you go, we have you covered. We deliver you all your essential items globally" }, { question: "When should I place my order to get a timely delivery?", answer: "We recommend you order ASAP. But at least 15-20 days before the departure date will be ideal." }, { question: "How do I track my order?", answer: "Track your order to your door! You will receive a tracking link via mail and also through our website." }, { question: "What is your replacement policy?", answer: "Your satisfaction is our primary goal. Contact us ASAP and provide us with appropriate images & videos and we will get it replaced for you." }, { question: "How do I make my return?", answer: "Make trouble-free and easy returns with UniHelp. Make sure the product is unused & packed and we shall get it picked from your place through our delivery agent." }, { question: "What payment methods do you accept?", answer: "Payment is made easy through cashless. We accept all major Credit-Debits cards" }, { question: "How long does the delivery take?", answer: "It takes a minimum of 7 to 10 days maximum for the delivery. And if you want urgent delivery, we got your back. There will be extra charges for special deliveries." }, {
    question: "I want an item not included in your pack, so how can I get it?", answer: "We packed everything you need to survive at a campus or a flat into a single box. But if you need anything extra, we customize the bundle.Just add it cart and we’ll package them up inside of your box ready for your move! "
}, { question: "What if something is broken or missing?", answer: "Send us the appropriate images and videos and we will get them replaced for you. For the broken & missing items." }, { question: "I want to cancel my order?", answer: "After an order is placed you can cancel it at any time, but if your order has already been packed or dispatched, the cancellation is not possible." }, { question: "Can I get my bundles customized?", answer: "You can customize your bundle as per your own needs and style!" }, { question: "What is your shipping cost?", answer:"That depends upon what location and country you want to get delivery."}]
export default class Component4 extends React.Component {
    render() {
        return (
            
            <section className={style.sectionsix}>
                <div className={style.headersix}>
                    <h1>FAQ&rsquo;s</h1>
                    <p>Hi Amigo! Need help? <br /> We&rsquo;ve got you covered.</p>
                </div>
                <div className={style.contentsix}>

                    {
                        data.map((Element,index) => {
                            return (
                                <DropDown key={index} title={Element.question}  answer={Element.answer} />
                            )
                        })
                    }
                    
                   
                </div>
            </section>
        )
    }
}


class DropDown extends React.Component {
    constructor(props) {
        super(props)
        this.state = {show:false}
    }
    render() {
        return (
            <div className={style.faqcard} style={{ color: this.state.show ? "#000000" : "#757575" }}   >
                <div className={style.faqheader} style={{ border: this.state.show ? "2px solid #1c1e27" : "2px solid #757575" }} >
                    <p>{this.props.title}</p>
                    <Image width="50px" margin="0 10px 0 0 " src={this.state.show ? ill2 : ill} onClick={() => this.setState({show:!this.state.show})}/>
                </div>

                {
                    this.state.show && <div className={style.faqcontent}>
                        <p>{this.props.answer}</p>
                    </div>
                }
                
            </div>
        )
    }
}
