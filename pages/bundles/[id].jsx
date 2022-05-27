
import React, { useEffect } from "react";
import Topbar from "../../components/Topbar";
import { useRouter } from "next/router";
import axios from "axios"
import style from "../../styles/bundlespage.module.css";
import Image from "next/image";
import Link from "next/link";


export default function BundlesMain(props) {

    const [images,setImages] = React.useState([]);
    
    const [data, setData] = React.useState();
    const [cart,setCart] = React.useState([]);
    const [width, setWidth] = React.useState(0);
    const [show,setShow] = React.useState(false);   

    useEffect(() => {
        document.title = "Bundles";
        
       
        axios.get(`https://unihelpproduction.azurewebsites.net/api${window.location.pathname}`).then(res => {
            setData(res.data)
            
            const arr = []
            arr.push(res.data.DisplayPicture)
            for (let i = 0; i < res.data.Items.length; i++) {
                for (let j = 0; j < res.data.Items[i].ImagePaths.length; j++) {
                    arr.push(res.data.Items[i].ImagePaths[j])
                }
            }
            setImages(arr)
        
        
        })
        
        
        console.log(data)

        
            
            
        
        setWidth(window.innerWidth);
        window.cart = JSON.parse(localStorage.getItem('cart'))
       setCart(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []);

    },[])
    
    
    // localstorageCart = () => {
    //     localStorage.setItem("cart", "test" );
    // }

    if(data && images.length) {
        return (
            <main style={{overflowX:"hidden"}} >
                <Topbar />
                <header className={style.bundleHeader}>
                    <div className={style.innerHeader}>
                        <h1>{data.Name}</h1>
                    </div>

                </header>
                <section className={`${style.photosSection} container`}>
                    <div className="row align-items-center" style={{ marginRight: "0", marginLeft: "0", height: "400px" }}>


                        <div className={`col-12 ${style.imagesManage}`} style={{ display: "flex", flexDirection: "row", padding: "0" }}>
                            {
                                images.map((image, index) => {
                                    
                                    if (image) {
                                        return <img style={{ maxWidth: "100vw", maxHeight: "400px", marginRight: "40px" }} src={image} alt="image" />
                                    }
                                    else {
                                        return <h1>Loading</h1>
                                    }



                                })
                            }


                        </div>
                        


                    </div>






                </section>
                <section>
                   
                    <div className={`${style.packageOptions} row`}>
                        <div className="col-1">

                        </div>
                        <div className="col-10" style={{ marginTop: "10vh" }}>
                            <div className={style.priceButton}>
                                <button onClick={(e) => {
                                    console.log(data)
                                    if (!window.cart) {
                                        window.cart = []
                                    }
                                    window.cart.push(data)
                                    localStorage.setItem("cart", JSON.stringify(window.cart));
                                    e.target.innerHTML = "Added to cart"
                                }} style={{ width: "250px" }}>
                                    ADD TO CART
                                </button>
                                <div className={style.priceDisplay}>
                                    ₹{data.Price}
                                </div>
                            </div>
                            <p id="description">

                            </p>


                        </div>
                        <div className="col-1">

                        </div>
                    </div>
                    <div className={`${style.packageDetails} row`} >
                        <div className="col-1">

                        </div>
                        <div className="col-10">

                        </div>
                        <div className="col-1">

                        </div>
                    </div>

                </section>
                <section className={style.detailsSection}>
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-11">
                                <div className={style.detailsCard}>
                                    <div className={style.DetailsCardHeader}>
                                        <h1>
                                            Details
                                        </h1>

                                    </div>
                                    <div className={style.detailsCardBody}>
                                        <p>{data.Description}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className={style.detailsSection}>
                    <div className="container">
                        <div className="row justify-content-center">

                            <div className="col-11">
                                <div className={style.detailsCard}>
                                    <div className={style.DetailsCardHeader}>
                                        <h1>
                                            Delivery
                                        </h1>

                                    </div>
                                    <div className={style.detailsCardBody}>
                                        <p>{data.deliveryDetails}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className={style.allsubitems}>
                    <div className={`container ${style.bundlesSpec}`}>
                        <div className={`row justify-content-center ${style.viewContent}`}>
                            <div className="col-11">
                                <h1>What is in the Bundle</h1>
                            </div>

                        </div>
                        <div className={`row justify-content-center ${style.viewContent}`} >
                            <div className="col-11">
                                <div onClick={ () =>  setShow(true)}>
                                    <h1>View full specs</h1>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section style={{ backgroundColor:"#edd0b2",marginTop:"50px",paddingBottom:"50px"}} className={style.section5}>
                    <div className="container">
                        <div className="row">
                            <div style={{marginTop:"50px",textAlign:"center",fontSize:"22px",fontWeight:"500"}} className="col-12">
                                Things you might need
                            </div>
                        </div>
                        <div className={`row ${style.scroller}`}>
                            
                            {

                                 data.recomendations.map(element => {
                                     
                                     return (
                                         <div key={element.Id} className="col-6">
                                             
                                             <div className={style.recCard}>
                                                 <div className={style.recCardHeader}>
                                                     <Image width={200} height={200} src={element.ImagePaths[0]} alt="image" />

                                                 </div>
                                                 <div className={style.recCardContent}>
                                                     <h1>
                                                        {element.Name}
                                                     </h1>
                                                 </div>


                                             </div>
                                             <div className={style.cardButton}>
                                                 <div className={style.buttonCard}>
                                                     ADD | ₹ {element.Price}
                                                 </div>
                                             </div>
                                         </div>
                                     )
                                    
                                })
                            }


                        </div>
                    </div>
                </section>
                <section id="list" className={show ? style.listSectionTransition : style.listSection}>
                    <div style={{ width: "90vw", height: "90vh", margin: "5vh auto",  border:"#0f2733 2px solid",overflowY:"scroll"}} className="container">
                        <div className="row" style={{ height: "75px", borderBottom:"#0f2733 2px solid"}} >
                            <div className="col-9 align-self-center justify-self-center"  >
                                <h1 style={{fontWeight:"500",textAlign:"center"}}>Bundle Specifications</h1>
                            </div>
                            <div onClick={(e) => {
                                setShow(false)
                                
                            }} className="col-3 align-self-center justify-self-center" style={{ textAlign: "center",height:"100%",padding:"20px"}}>
                                <i style={{fontSize:"30px",margin:"0 auto"}} className="bi bi-x-lg"></i>
                            </div>
                        </div>
                        {
                            data.Items.map(element => {
                                return (
                                    <div  style={{fontSize:"14px",fontWeight:"600",borderBottom:"1px solid black"}} key={element.Id} className={`${style.itemsDisplay} row `}>
                                        <div className="col-10">
                                            <i className="bi bi-box"></i>  1 x {element.Name} 
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>    
                <section>
                    {/* this is faq section */}
                </section>        
                <section  className={style.endSection}>
                    <div className="container ">
                        <div className="row justify-content-center">
                            <div className="col-10">
                                Information
                            </div>

                        </div>
                        <div style={{padding:"30px 0 0 0 ",fontSize:"16px"}} className="row justify-content-center">
                            <div className="col-9">
                                Contact
                            </div>

                        </div>
                        <div style={{ padding: "20px 0 0 0 ", fontSize: "16px" }} className="row justify-content-center">
                            <div className="col-9">
                                About Us
                            </div>

                        </div>
                        <div style={{ padding: "0px 0 0 0 ", fontSize: "25px" ,margin:"30px 0"}} className="row justify-content-center">
                            <div className="col-10">
                                <div className="row">
                                    <div className="col-2">
                                        <i className="bi bi-whatsapp"></i>

                                    </div>
                                    <div className="col-2">
                                        <i className="bi bi-facebook"></i>

                                    </div>

                                    <div className="col-2">
                                        <i className="bi bi-instagram"></i>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </main>

        )
        
    }
    else {
        console.log(images)
        return (
            <div className="container">
                <div style={{ height: "500px" }} className="row align-items-center justify-content-center">
                    <div className="col-9">
                        <div className="spinner-border" style={{ width: "250px", height: "250px" }} role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}




function LeftIcon(props) {
    return(
        <i style={props.style} onClick={props.onClick} className="bi bi-arrow-left-circle-fill"></i>
    )
}

function RightIcon(props) {
    return(
        <i style={props.style} onClick={props.onClick} className="bi bi-arrow-right-circle-fill"></i>
    )
}






