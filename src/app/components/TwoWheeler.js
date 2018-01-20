import React from "react";
import {render} from "react-dom";
import PropTypes from 'prop-types';

// TwoWheel as a Class Component
export class TwoWheeler extends React.Component {
	constructor(props) {
		super();
        console.log('Inside Child -> constructor');
	    this.state = {price:props.firstPrice};
		this.handleOnClickPrice = this.handleOnClickPrice.bind(this);
		this.handleOnClickVisitor = this.handleOnClickVisitor.bind(this);
        
	}
	
	handleOnClickPrice() {
        console.log('Inside Child -> handleOnClickPrice');
        this.setState( { price: this.state.price + 100000});
        // this.state.price = this.state.price + 100000;
        console.log('New price -> ', this.state.price);
	}
	
	handleOnClickVisitor() {
        console.log('Inside Child -> handleOnClickVisitor');
		this.props.changeVisitor('New Visitor');
		
	}
	
    render() {
        console.log('Inside Child -> render');
        // this.setState( { price: this.state.price + 10});
       
        return ( 
		    <div  className="alert alert-warning" >
						<h1 style={{color:'blue'}}> Two Wheeler </h1>
                         {this.props.children}
						<ul>
							<li>
								<b>Name :</b> {this.props.name}
							</li>
							<li>
								<b>By :</b> {this.props.specs.manufacturer}
							</li>
							
							<li>
								<b style={{color:'green'}}>PRICE :</b> {this.state.price}
							</li>
							<li>
							     <b>Visitor :</b>  {this.props.visitor}
							</li>
							
						</ul>
						<div className="btn-group btn-group-sm">
							<button 
                                style={{margin:'10px 10px 10px 10px'}} 
                                onClick={this.handleOnClickPrice} 
                                className="btn btn-primary" >Get New Price</button>
							 
							<button 
                                style={{margin:'10px 10px 10px 10px'}} 
                                onClick={this.handleOnClickVisitor} 
                                className="btn btn-primary" >Recent Visitor</button>
						</div>
					</div>
				 
      
        );
    } 
}
 

