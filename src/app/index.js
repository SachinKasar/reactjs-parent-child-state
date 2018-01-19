import React from "react";
import {render} from "react-dom";

import {TwoWheeler} from "./components/TwoWheeler";
import {FourWheeler} from "./components/FourWheeler";

class App extends React.Component {
	constructor () {
		super()
		this.state = {
			visitor:'Visitor 1'
		}
		this.handleVisitor = this.handleVisitor.bind(this);
	}
	
	 
	
	handleVisitor(name) {
        console.log('Inside App ->  handleVisitor() ' );
		this.setState({
			visitor:name
		});		
	}
	
    render() {
        console.log(' Inside App ->  render() ' );
                    
		let twoWheelSpecs = {manufacturer : "Royal Enfield"};
		let fourWheelSpecs = {manufacturer : "Maruti Suzuki"};
		// this.setState({
		//	visitor:'sasas'
		// });	
        
        return ( 
			<div className="container">
                <div className="row col-xs-10 col-xs-offset-1 alert alert-success">
                    {this.state.visitor}
				    <br/>   
                    <div className="row">
                      <div className="col-xs-10 col-xs-offset-1" >
							<TwoWheeler 
							           name={"Enfield Classic"}  
                                       specs={twoWheelSpecs} 
								       firstPrice={0}   
                                       visitor={this.state.visitor} 
                                       changeVisitor={this.handleVisitor}
                            />
                    </div>
					</div> <br/>
            
				   <div className="row">
                      <div className="col-xs-10 col-xs-offset-1" >
							<FourWheeler 
								name="Grand Vitara" 
								specs={fourWheelSpecs} 
								visitor={this.state.visitor}/>
						</div>
					</div>
				  </div>
            </div>
        );
    } 
}

render( < App / > , document.getElementById("app"));
