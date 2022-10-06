import React, { Component } from 'react'
import {mainContext} from '../../context'
export default class Checkout extends Component {
    static contextType = mainContext
    render() {
        const{total, subtotal, tax, cart} = this.context
        const cartItems = cart.map((item,index)=>{
            return(<tr key={index}>
                        <td><span><h4>{item.name} x {item.orderNo}</h4></span><span><h4>${(item.price*item.orderNo).toFixed(2)}</h4></span></td>
                    </tr>)
        })
        const handlePaymentMethod = (e) =>{
            const radioBtns = document.querySelectorAll('input.radiobtns-checkout')
            let targets = [...radioBtns]
            targets.map(item=>{
                item.checked = false
                let descDiv = item.nextElementSibling
                // descDiv.classList.add('height0')
                // descDiv.classList.remove('height100')
                return true
            })
            e.target.checked = true
            // e.target.nextElementSibling.classList.add('height100')
        }
        return (
            <div className="container checkout-page">
                <h1>CHECKOUT</h1>
                <div className="table-wrapper checkout-page-container">
                    <div className="checkout-summary">
                    <table className="recipt-checkout-page">
                        <tbody>
                        <tr>
                            <td><h3>SUA ENCOMENDA</h3></td>
                        </tr>
                        <tr>
                            <td className="border-bottom"><span>Produto</span><span>Subtotal</span></td>
                        </tr>
                        {cartItems}
                        <tr>
                            <td className="border-top"><h3>Subtotal</h3><h3>${subtotal}</h3></td>
                        </tr>
                        <tr>
                            <td><h3>Tax</h3><h3>${tax}</h3></td>
                        </tr>
                        <tr>
                            <td  className="border-bottom"><h3>Total</h3><h3>${total}</h3></td>
                        </tr>
                        <tr>
                            <td><h3>FORMA DE PAGAMENTO</h3></td>
                        </tr>
                        <tr>
                            <td>
                               <div className="payment-method">
                                <ul>
                                    <li className="rightlabel">
                                        <label htmlFor="payment-direct-transfer">Transferir o dinheiro</label>
                                        <input className="radiobtns-checkout" type="radio" name="payment-direct-transfer" id="payment-direct-transfer" onClick={(e)=>handlePaymentMethod(e)}/>
                                    </li>
                                    <li className="rightlabel">
                                        <label htmlFor="payment-cash-delivery">Pagar na entrega</label>
                                        <input className="radiobtns-checkout" type="radio" name="payment-cash-delivery" id="payment-cash-delivery" onClick={(e)=>handlePaymentMethod(e)}/>
                                    </li>
                                </ul>   
                                <p><b>
                                Sua informação pessoal será usada para processar a entrega.
                                </b></p>
                                <div>
                                    <input type="checkbox" name="payment-direct-transfer" />
                                    <label htmlFor="terms-conditions"><b>Eu li e aceito os termos e condições do site *</b></label>
                                </div>
                                </div> 
                            </td>
                        </tr>
                        
                        <tr className="align-center">
                            <td className="align-center"><button className="cart-btn checkout-btn-cart-page">Pedir</button></td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        )
    }
}
