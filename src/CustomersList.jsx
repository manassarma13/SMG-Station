import React, {Component} from "react";
export default class CustomersList extends Component{

    state = { pageTitle:"Customers",customersCount:5, 
            customers: [
                {id: 1, Name: "Bruce Wayne", phone: "123456",
                address:{city:"Gotham"},
                photo: "https://picsum.photos/id/1010/60 "
        },
                {id: 2, Name: "Clak Kent ", phone: "125256",
                address:{city:"Metropolis"},
                photo: "https://picsum.photos/id/1011/60 "},
                {id: 3, Name: "Hal Jordan", phone: "125776",
                address:{city:"Coast City"},
                photo: "https://picsum.photos/id/1013/60 "},
                {id: 4, Name: "John Jones ", phone: null,
                address:{city:"Mars (unknown)"},
                photo: "https://picsum.photos/id/1015/60 "},
                {id: 5, Name: "Victor Stone", phone: "458456",
                address:{city:"Detroit"},
                photo: "https://picsum.photos/id/1019/60 "},

            ],

            }
    render()
    {
        return<div>
            <h4 className=" m-1 p-1"> {this.state.pageTitle} 
            <span> {this.state.customersCount} </span>
            <button className= "btn btn-info" onClick = {this.onBubblesClick} >Hello</button>
            </h4>

            <table className= "table">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Photo</th>
                    <th> Customer Name</th>
                    <th> Phone</th>
                    <th>City</th>
                    </tr>
                </thead>

                <tbody>{this.getCustomerRow()}</tbody>
            </table>
        </div> 
    }

    onBubblesClick = () => {
        console.log("clicked");
        this.setState({customersCount : 7,
        });
    }

    getPhoneToRender = (phone) => 
    {
      if  (phone)  return phone;
      else {

      return <div className="bg-warning p-2 text-center">No Phone </div>;
    }
     }

     getCustomerRow = () => {
         return (this.state.customers.map((cust,index) =>{
                            return( 
                            <tr key={cust.id}>
                                <td>{cust.id}</td>
                                <td><img src={cust.photo} alt= "Customer"/>
                                <button className="btn btn-sm btn-secondary" onClick= {()=>{this.onChangePictureClick(cust,index);}}>Change Picture</button></td>
                                <td>{cust.Name}</td>
                                <td>{this.getPhoneToRender(cust.phone)}</td>
                                <td>{cust.address.city}</td>

                            </tr>
                            );
                        })
         );}

    onChangePictureClick = (cust,index) => {
        console.log(cust);
        console.log(index);


        var custArr = this.state.customers;
        custArr[index].photo= "https://picsum.photos/id/107/60";
        this.setState({customers:custArr})
    };

}