import React from 'react';
import style from "../../styles/bundles.module.css"
import TopBar from "../../components/Topbar.jsx"
import Head from 'next/head';
import Bundles2 from '../../components/BundlesComp2';
import Component1 from "../../components/BundlesComp1.jsx"

import Component7 from "../../components/Component7.jsx"
export default class Bundles extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            
            this.setState({ loader: false })
        }, 1000)

        if(!window.cart) {
            window.cart = JSON.parse(localStorage.getItem('cart'))

        }
        
    }
    constructor(props) {
        super(props);
        this.state = {loader: true};

    }

    
    render() {
            
            
            return(
               <main className={style.main} style={{overflowX:"hidden"}}>
                    <Head>
                        <title>Bundles - Unihelp</title>
                    </Head>
                    <TopBar />
                    <Component1 />
                    <Bundles2 />
                    <Component7 />
               </main>
            )
        }
       
    }




