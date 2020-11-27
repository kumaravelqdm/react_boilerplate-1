import React from "react";
import { LinearProgress } from "@material-ui/core";
import { NetworkCall } from "./networkcall";

class AppAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  componentDidMount(){
    NetworkCall('meta.json','GET',null,null,false,true).then((_)=>{
      localStorage.setItem('version',_.data.version)
    }).catch(err=>{
      console.log('err:', err);
    })
  }

  render() {

    let {
      loading
    } = this.props;

    return (
      <>       
        {loading && (
          <LinearProgress/>
        )}
        {this.props.children}
      </>
    );
  }
}

export default AppAuth;
