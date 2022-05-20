import { Component } from "react";
import axios from "axios";
import style from "../styles/adder.module.css";
import ill from "../public/expand.svg";
import ill2 from "../public/expand_less.svg";
import Image from "next/image";
export default class Adder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[],
            adder:false,
            item:true
        }
    }

    componentDidMount() {
        (async () => {
            
            
            try {
                var response = await axios.get("https://api.yourunihelp.com/api/items");
                
                this.setState({ data: response.data })
            } catch (error) {
                console.log(error);
            }
            
            
        })()
    }
    render() {
        
        return(
            <div className={style.adderSection}>
                <main className={style.innerMain} style={{overflowY:"scroll"}}>
                    <section className={style.navigator}>
                        
                            
                        <button onClick={async() => {
                            this.setState({ item: true })
                            try {
                                var response = await axios.get("https://api.yourunihelp.com/api/items");
                                
                                this.setState({ data: response.data })
                            } catch (error) {
                                console.log(error);
                            }

                        }} style={{gridColoumn:"1"}}>
                            Items
                        </button>
                        <button onClick={async () => {
                            this.setState({ item:false})
                            try {
                                var response = await axios.get("https://api.yourunihelp.com/api/bundles");
                               
                                this.setState({data:response.data})
                            } catch (error) {
                                console.log(error);
                            }

                        }} style={{ gridColoumn: "2"}}>
                            Bundles
                        </button>

                        
                    </section>
                    <section className={style.restSection}>
                        <button onClick={() => this.setState({adder:true})}>Add + </button>
                        {
                            this.state.adder ? <Form item={this.state.item} data={this.state.data} /> : (this.state.data.length > 0) ? <List data={this.state.data} item={this.state.item} /> : <Loader />
                                
                            
                        }
                    </section>
                </main>
            </div>
        )
    }


}




class  List extends Component   {
   
    constructor(props) {
        super(props)
        this.state = {show:false}
    }

    render() {
        return (
            <div className={style.list}>



                {
                    this.props.data.map((item) => {
                        
                        return (
                            <>
                            <div className={style.listItem} key={item.Id} >
                               
                                <div className={style.listItemName} style={{ gridColumn: "2/3" }}>
                                    {item.Name}
                                </div>

                                <div className={style.listItemPrice} style={{ gridColumn: "3/4",maxWidth:"100%" }}>
                                    {item.Price}
                                </div>

                                <div>
                                    
                                </div>
                                <Image width="50px" alt="svg" margin="0 10px 0 0 " gridColoumn="5" src={this.state.show ? ill2 : ill} onClick={() => this.setState({show:!this.state.show})}/>
                            </div>
                            <div>
                                    {
                                        this.state.show && <div className={style.faqcontent}>
                                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eum asperiores illum eaque, minus a! Eveniet nesciunt ut expedita rem beatae, itaque modi asperiores fugit dignissimos, cumque doloremque, ipsum minima.</p>
                                        </div>
                                    }
                            </div>
                            </>
                        )

                    })
                }

            </div>

        )
    }
    
}



class Form extends Component {
    constructor(props,child) {
        super(props)
        this.state = {data:[]}
    }

    componentDidMount() {
        try {
            this.child = document.getElementById("check").childNodes
        } catch (error) {
            console.log(error);
        }
        axios.get("https://api.yourunihelp.com/api/items").then(res => {
            this.setState({ data: res.data })
            console.log(res.data)
        })
    }
    render() {
        

        if(this.props.item) {
            return (
                <div className={style.form}>
                    <div className={style.forminner}>
                        <input type="text" name="Name" placeholder="Name" id="name" />
                        <input type="textarea" name="Description" placeholder="Description" id="desc" />
                        <input type="text" name="Price" placeholder="Price" id="price" />
                        <label>
                            
                            <p style={{justifySelf:"center",alignSelf:"center"}}>Choose Files</p>
                            <input type="file" name="files" id="files" multiple style={{ color: "#fefefe", backgroundColor: "#fefefe", display:"none" }} />
                        </label>
                        
                        
                        <button onClick={ async() => {
                            let name = document.getElementById("name").value;
                            let desc = document.getElementById("desc").value;
                            let price = document.getElementById("price").value;
                            let files = document.getElementById("files").files;
                            let formData = new FormData();
                            formData.append("Name", name);
                            formData.append("Description", desc);
                            formData.append("Price", price);
                            for(let i = 0; i < files.length; i++) {
                                formData.append("files", files[i]);
                            }
                            


                            try {
                                var response = await axios.post("https://api.yourunihelp.com/api/items", formData)
                                console.log(response)
                                alert(response.data)
                            } catch (error) {
                                console.log(error);
                            }
                            
                            
                        } }>Upload</button>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className={style.form} style={{overflowY:"scroll"}} >
                    <div className={style.forminner} id="check" >
                        
                        <input type="text" name="Name" placeholder="Name" id="name" />
                        <input type="textarea" name="Description" placeholder="Description" id="desc" />
                        <input type="text" name="Price" placeholder="Price" id="price" />
                        <label>

                            <p style={{ justifySelf: "center", alignSelf: "center" }}>Choose Main File</p>
                            <input type="file" name="files" id="MainPicture" style={{ color: "#fefefe", backgroundColor: "#fefefe", display: "none" }} />
                        </label>
                        <label>

                            <p style={{ justifySelf: "center", alignSelf: "center" }}>Choose other files</p>
                            <input type="file" name="files" id="files" multiple style={{ color: "#fefefe", backgroundColor: "#fefefe", display: "none" }} />
                        </label>

                        <div id="nextdiv" style={{textAlign:"left"}} >
                            <select name="data" id="ids" style={{width:"80%",height:"50px",margin:"15px 0"}}>
                                {
                                   

                                    this.state.data.map(function(item) {
                                        return(
                                            <option key={item.Id} value={item.Id}>{item.Name}</option>
                                        )
                                    })
                                }
                            </select>
                            <button onClick={() =>{
                                var div = document.createElement("div")
                                div.setAttribute("style","text-align:left;")
                                var select = document.createElement("select")
                                this.state.data.forEach(element => {
                                    var option = document.createElement("option")
                                    option.value = element.Id
                                    option.innerHTML = element.Name
                                    select.appendChild(option)
                                });
                                select.setAttribute("name","data")
                                select.setAttribute("id","ids")
                                select.setAttribute("style","width:80%;height:50px;margin:15px 0;alignSelf:left")
                                div.appendChild(select)
                                var container = document.getElementById("check")
                                container.insertBefore(div, container.children[container.childElementCount - 1])
                                
                                
                            }}  style={{width:"30px",height:"30px",borderRadius:"25px"}}>+</button>
                        </div>
                        


                        <button onClick={async () => {
                            let name = document.getElementById("name").value;
                            let desc = document.getElementById("desc").value;
                            let price = document.getElementById("price").value;
                            let main = document.getElementById("MainPicture").files;
                            let files = document.getElementById("files").files;
                            let data = document.querySelectorAll("select")
                           
                                
                            let formData = new FormData();
                            formData.append("Name", name);
                            formData.append("Description", desc);
                            formData.append("Price", price);
                            formData.append("MainPicture", main[0]);
                            for (let j = 0; j < data.length; j++) {
                                formData.append("data", data[j].value)
                            }
                            for (let i = 0; i < files.length; i++) {
                                formData.append("files", files[i]);
                            }



                            try {
                                var response = await axios.post("https://api.yourunihelp.com/api/bundles", formData)
                                console.log(response)
                                alert(response.data)
                            } catch (error) {
                                console.log(error);
                            }


                        }}>Upload</button>
                    </div>
                </div>
            )
        }
        
    }
}



function Loader(props) {
    return (
        <div className="text-center">
            <div className="spinner-border" role="status">
                <span className="sr-only"></span>
            </div>
        </div>
    )
}