import React, { useState, useEffect } from 'react';
import style from "../styles/component1.module.css"
import illustration from "../public/Group2ill.svg"
import Image from 'next/image';
import Link from 'next/link';
export default class Component1 extends React.Component {
    render() {
       return(
           <section className={style.firstsec}>
               
               <div className={style.content}>
                   <section className="innerContent">
                       <h1>
                           We help you settle
                       </h1>
                       <p  style={{lineHeight:"30px"}}>
                           We are here to Settle you right in and turn your new house across seas into your home.
                       </p>
                       <div className={style.buttons}>
                           <Link href="/bundles"  style={{width:"225px"}}>
                               Explore Collection
                           </Link>
                           
                       </div>
                       
                       <div className={style.compill1}>
                        
                        <Image  src={illustration} alt="Illustration" />
                       </div>
                       
                   </section>
                   
               </div>
               <div className={style.mediasec}>

               </div>
           </section>
       )
    }
}


// class SideNav extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {show:false}
//     }
//     render() {
//         return (
//             <div className={style.sideNav}>
                
//             </div>

//         )
//     }
// }