
import React from 'react';
import style from "../styles/bundles2.module.css"
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
export default class Bundles2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data:[]}
    }
    componentDidMount() {

        
            axios.post("https://api.yourunihelp.com/graphql", { "query": "{\n\tbundles {\n\t\tid,name,displayPicture,pageDescription,items {\n\t\t\tid,\n\t\t\tname,\n\t\t\tid,\n\t\t\tprice\n\t\t}\n\t\t\n\t}\n}" }).then(res => {
                this.setState({ data: res.data.data.bundles }) 
            } )
            
           
            
        
    }
    
    render() {
        
        if(this.state.data.length === 0) {
            return(
                <div className="container">
                    <div style={{ height: "500px" }} className="row align-items-center justify-content-center">
                        <div className="col-9">
                            <div className="spinner-border" style={{width:"250px",height:"250px"}} role="status">
                                <span className="sr-only"></span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
       
        else {
            return (
                <section className={style.bundlesSec}>
                    <section className={style.innerElement}>
                        {
                            this.state.data.map(element => {

                                return (

                                    <Card style={{ marginBottom: "25px" }} key={element.id} id={element.id} name={element.name} DisplayPicture={element.displayPicture} pageDescription={element.pageDescription} />
                                )

                            })
                        }

                    </section>
                </section>
            )
        }
        
    }

}


class Card extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div key={this.props.id} className={style.bundlesCard} style={this.props.style}>
                <div className={style.cardHeader}>
                    <h5>
                        {this.props.name}
                    </h5>
                </div>
                <div className={style.cardContent}>
                    <div className={style.cardImage}>

                        {
                            this.props.DisplayPicture && <Image src={this.props.DisplayPicture} alt="picture" width={300} height={200} />
                        }
                        
                        
                       
                    </div>
                    <div className={style.cardDesc}>
                        <p style={{ fontSize: "calc(16px + 6 * ((100vw - 320px) / 680))", fontWeight: "600" }}>{this.props.pageDescription}</p>
                    </div>
                </div>
                <div className={style.cardButton}>
                    <Link color="#f5f5f5" style={{color:"#f5f5f5"}} href={`/bundles/${this.props.id}`}>Explore Bundle</Link>
                </div>
            </div>
        )
    }
}


