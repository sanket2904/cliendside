import  { Component } from "react";
import Component1 from "../components/Component1"
import Component2 from "../components/Component2"
import Component4 from "../components/Component4"
import Component5 from "../components/Component5"
import Component6 from "../components/Component6"
import Component7 from "../components/Component7";
import Topbar from "../components/Topbar"
import style from "../styles/mainHome.module.css"
import axios from "axios";
import Head from "next/head";
export default class Home extends Component {
  componentDidMount() {
    this.setState({ width: window.innerWidth })
    document.title = "Home - UniHelp"
    
      axios.get("https://unihelpproduction.azurewebsites.net/api/bundles", { "query": "{bundles{id,name,displayPicture,pageDescription}}" }).then(res => {
        this.setState({ data: res.data })
       
      }).catch(err => console.log(err))
    
    
  }
  
  constructor(props) {
    super(props)
    this.state = {width:0,data:[]}
  }
  
  

  render() {
    if(this.state.width > 480) {
      
      return(
        <div className={style.large} style={{display:"grid",height:"100vh",width:"100vw"}}>
          <h1 style={{alignSelf:"center",justifySelf:"center",fontSize:"48px"}}>Please Use your phone to access the Site</h1>
        </div>
      )
    }
    else {
      return (
        <>

          <div className={style.main}>
            {/* <input type="file" name="files" id="uploader" multiple />
            
            <input type="text" name="ids" id="ids" />
            <input type="button" value="Upload" onClick={async () => {
              let input = document.getElementById("uploader");
              var files = await input.files;
              var input2 =  document.getElementById("ids");
              var ids = await input2.ids;
              console.log(ids)
              var formData = new FormData();
              console.log(files)
              await formData.append("Name", "test");
              await formData.append("Description", "description");
              await formData.append("Price", 252);
              await formData.append("Items.Id","6257b7592e058547798cba5a")
              await formData.append("MainPicture",files[0]);
              for (var i = 1; i < files.length; i++) {
                
                await formData.append("files", files[i]);
              }
              console.log(formData)
              try {
                let res =  await axios.post("http://localhost:5273/api/bundles", formData)
                console.log(res)
              }
              catch (error) {
                await console.log(error)
              }
            } } /> */}
            <Head>
              <title>Home - Unihelp</title>
            </Head>
            <Topbar home={{opacity:"1"}  }  />
            <Component1 />
            <Component2 />
            <Component4 data={this.state.data} />
            <Component5 />
            <Component6 />
            <Component7 />
          </div>

        </>
      )
    }
    

  }
}

