import React , {Component} from "react";
import Product from "./Product";
export default class ShoppingCart extends Component

{

    constructor(props){ 
        // console.log("Hello from constructor - Shopping Cart")
        super(props);
        this.state = {products:[],};

    } 

    

    render(){
        console.log("Hello from render method -Shopping cart")
        return(<div><h4>Shopping Cart</h4>
        
        <div className= "row">{this.state.products.map((prod) => {
            return( <Product key ={prod.id} 
            product = {prod} 
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}>
            
                <button className= "btn btn-primary">Buy Now</button>
            </Product>);
        })}</div>
        </div>
        );
    }

    componentDidMount = async ()=>{
        // console.log("Initial Phase -Shopping Cart")

        var response =await fetch("http://localhost:5000/products", {method:"GET"});
        var prods = await response.json();
        this.setState({products:prods })
        console.log(prods);
        
    };

    componentDidUpdate(prevProps,prevState){
        // console.log("Update Phase- Shopping Cart",prevProps,prevState,this.propes, this.state)
        // if (prevProps.x !== this.props.x){

        // }
    };

    componentWillUnmount(){
        // console.log("Component Unmount -Shopping Cart")
    };

    componentDidCatch(error,info){
        console.log("Component Did Catch -Shopping Cart")
        console.log(error,info)
        localStorage.lastError=`${error}\n${JSON.stringify(info)}`;
    };
    

     

    //Increment and Decrement quantity -- buttons 
    
    handleIncrement = (product, maxValue) => {
        // console.log("Hello form Increment",product);
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);
        if (allProducts[index].quantity<maxValue){
            allProducts[index].quantity++;
            this.setState({products:allProducts}); 
        }
        console.log(index);
    };
    handleDecrement = (product, minValue) => {
        // console.log("Hello form Decrement",product);
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);
        if (allProducts[index].quantity>minValue){
            allProducts[index].quantity--; 
            this.setState({products:allProducts});
        }
        console.log(index);
    };

    //Delete Button - Delete product pointing the index

    handleDelete= (product) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);

        if(window.confirm("You Sure Bruh?")){
        
        allProducts.splice(index,1);
        this.setState({products:allProducts}); 
        }


    }


}