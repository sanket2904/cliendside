import React from "react"
import Topbar from "../components/Topbar";
import style from "../styles/cart.module.css";
import Image from "next/image";
import axios from "axios";

export default class Cart extends React.Component { 
    constructor(props) {
        super(props);
        this.state = { cart:[]}
    }
    componentDidMount() {
        window.cart = JSON.parse(localStorage.getItem("cart"))
        this.setState({
            cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
        })
        
    }
    render() {
       
        return (
            
            <main>
                <Topbar />
                <div className={`${style.cartHeader} container `}>
                    <div className="row justify-content-center">
                        <div className="col-5"> 
                            <h1 style={{fontWeight:"600"}}>
                                Order Details
                            </h1>
                        </div>
                    </div>
                    
                </div>
                <div className="container">
                    <div style={{ marginTop: "50px" }} className="row">
                        <div className="col-6">
                            <h1 style={{ fontWeight: "600",fontSize:"24px" }} >My Cart</h1>
                        </div>
                    </div>
                </div>
                <div className="container" style={{padding:"0"}}>
                    {
                        !this.state.cart.length && <div style={{margin:"50px 0",height:"400px"}} className="container">
                            <div className="row align-self-center justify-self-center">
                                <div className="col-10">
                                    <h1>Your cart is empty</h1>
                                </div>
                            </div>
                        </div>
                    }
                   {
                       
                       this.state.cart.map((element,inin) => {

                           return(
                               <div key={element.Id} className={`row ${style.card}`}>
                                   <div className="col-5 align-self-center">
                                       <div className={style.cardImage}>
                                           <Image width={200} height={200} src={element.DisplayPicture} alt="image" />
                                       </div>
                                   </div>
                                   <div className="col-7 align-self-center">
                                       <div className={style.cardContent} >
                                           <div className="container" style={{ padding: "10px 0", height: "150px" }}>


                                               <div className="row" style={{ height: "40%" }}>
                                                   <div className="col-12 align-self-start">
                                                       <h1 style={{ fontWeight: "600" }}>
                                                            {element.Name}
                                                       </h1>
                                                   </div>
                                               </div>


                                               <div className="row" style={{ height: "30%" }}>
                                                   <div className="col-6 align-self-start">
                                                       <h4 style={{ fontSize: "16px", fontWeight: "500" }}>
                                                            {element.Price}
                                                       </h4>
                                                   </div>
                                               </div>
                                               <div className="row align-items-center" style={{ height: "30%" }}>
                                                   <div style={{ width: "30px", height: "50px" }} className="col align-self-center" >
                                                       <i onClick={(e) => {
                                                          let init =  window.cart.filter((item,index) => {
                                                             
                                                              return inin != index
                                                          })
                                                          window.cart = init
                                                          this.setState({cart: init})
                                                            localStorage.setItem("cart", JSON.stringify(window.cart))
                                                            console.log(this.state.cart)
                                                       }} className="bi bi-trash"></i>

                                                   </div>
                                                   
                                               </div>


                                               {/* <div className="col-6">
                                            delete button 

                                        </div> */}

                                           </div>
                                       </div>
                                   </div>
                               </div>
                           )
                           
                       })
                   }
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-10">
                            <button onClick={async () => {

                                var form = new FormData();
                                window.cart.forEach((item) => {
                                    form.append("price", item.stripePriceId)
                                })
                                let res
                                try {
                                    axios.post("https://api.yourunihelp.com/checkout-session", form).then(res => {
                                        localStorage.setItem("sessionid",res.data.Item2) 
                                        return res
                                    }).then(res => {
                                        window.location.href = res.data.Item1
                                    })
                                    
                                    
                                   

                        
                                   
                                    
                                } catch (error) {
                                    console.error(error)
                                }

                                
                            }} className="button">
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        )
        
    }
}