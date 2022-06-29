import React from 'react';
import style from "../../styles/bundles.module.css"
import TopBar from "../../components/Topbar.jsx"
import Head from 'next/head';
import Bundles2 from '../../components/BundlesComp2';
import Component1 from "../../components/BundlesComp1.jsx"
import axios from 'axios';
import Component7 from "../../components/Component7.jsx"
export default function Bundles({data}) {
    
    let [loader,setLoader] = React.useState(true)
    React.useEffect(() => {
    setTimeout(() => {
        setLoader(false)
        
    }, 1000)

    if (!window.cart) {
        window.cart = JSON.parse(localStorage.getItem('cart'))

    }

    },[])

    
    return (
        <main className={style.main} style={{ overflowX: "hidden" }}>
            <Head>
                <title>Bundles - Unihelp</title>
            </Head>
            <TopBar />
            <Component1 />
            <Bundles2 data={data} />
            <Component7 />
        </main>
    )
    
            
            
            
        
       
}




export async function getServerSideProps(context) {
    let res;


    try {
        res = await axios.get("https://unihelpproduction.azurewebsites.net/api/bundles");
        
    } catch (error) {
        console.log(error);
    }


    return {
        props: {
            data: res.data
        }, // will be passed to the page component as props
    }
}
