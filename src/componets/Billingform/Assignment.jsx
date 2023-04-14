import React, { useState } from "react";
import {userdata} from './UserItem'
import { useRecoilState } from "recoil";

export default function Assignment() {
    const [inputList, setInputList] = useState([]);



    const onAddBtnClick = event => {
     setInputList(inputList.concat(<Cart key={inputList.length} />));
    };

    return (
        <div>

            <h1>Biling Form</h1>
            <p>Customer Name</p>
            <input type="text" placeholder="Customer Name" />

            <hr /> <br />

            <Cart />

            {inputList}
            <button style={{ display: 'inline-block' }} onClick={onAddBtnClick}>Add input</button>

            <div>
                {
                    inputList.length === 0 ? null : <button>Create Bill</button>
                }
            </div>

                <DisplayData/>
        </div>
    );
}

const Cart = () => {

    return (
        <div style={{ width: '80%', display: 'inline-block' }}>

            <table cellSpacing="5px" cellPadding='5px'  border="1px">
                <tbody>
                    <tr>
                        <td>
                            <p>Select Product</p>
                            <select name="" id="">
                                <option value="">Sugar</option>
                                <option value="">Coffee</option>
                                <option value="">Milk</option>
                                <option value="">Bread</option>
                                <option value="">Tea</option>
                            </select>
                        </td>

                        <td>
                            <p>Select Quantity</p>
                            <input type="text" placeholder="Quantity" />
                        </td>

                        
                    </tr>
                </tbody>
            </table>

        </div>
    )
};


function DisplayData() {
    
    const[totalItem , setTotalItem]=useRecoilState(userdata)

    return (
        <div >
            <hr /> 
            <br />
            <table border='1px' style={{ width: '80%'}}>

                <thead>
                    <tr>
                        <th colSpan='3'>
                            Customer Name :
                        </th>
                        <th>

                        </th>
                    </tr>

                    <tr>
                        <th colSpan='3'>
                            Date :
                        </th>
                        <th>

                        </th>
                    </tr>

                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sub Total</th>
                    </tr>
                </thead>

                <tbody>
                    <p>{totalItem[0].Name}</p>
                    {/* {
                    totalItem.map((value,index)=>{
                        return(
                            <div key={index}>
                                <p>{value}</p>
                            </div>
                        )
                    })
                    } */}
                </tbody>

            </table>
        </div>
    )
}