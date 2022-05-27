import React from "react";
import style from "../../styles/success.module.css";
import Topbar from "../../components/Topbar";

import svg from "../../public/successpage.svg";
import Image from "next/image";
import axios from "axios";
export default class Component4 extends React.Component { 
    constructor(props){
        super(props)
        this.state = {data:[]}
    }
    componentDidMount() {
        let id =  new URL(document.location).searchParams.get("id")
        
        axios.get("https://unihelpproduction.azurewebsites.net/checkout-session?id="+id).then(res => {
            this.setState({data:res.data})
        })
    }
    render() {

        if (this.state.data.PaymentStatus === "paid") {

        return (
           <main>
                <Topbar />
                <section className={style.mainSection}>
                    <div className="container">
                        <div style={{textAlign:"center"}} className="row justify-content-center">
                            <div style={{ fontSize: "24px", fontWeight: "500", marginTop: "25px" }} className="col-10">
                                <h1 >Thank you <br />Your order successfully been placed</h1>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-11">
                                <Image width={400} height={400} src={svg} alt="svg"  />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-10">
                                <p>Our team will contact you with all the details and </p>
                            </div>
                        </div>
                    </div>
                </section>
           </main>
        )
        }
        else {
            return (
                <h1>
                    Invalid access
                </h1>
            )
        }
    }
}