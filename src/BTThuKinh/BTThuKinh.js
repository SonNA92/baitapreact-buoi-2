import React, { Component } from 'react'
import './index.css'

export default class BTThuKinh extends Component {

    arrProduct = [

        { id: 1, price: 30, name: 'GUCCI G8850U',src:'./img/g1.jpg' ,url: './img/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 2, price: 50, name: 'GUCCI G8759H',src:'./img/g2.jpg' , url: './img/v2.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 3, price: 40, name: 'DIOR D6700HQ',src:'./img/g3.jpg' , url: './img/v3.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 4, price: 60, name: 'DIOR D6005U',src:'./img/g4.jpg' , url:  './img/v4.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 5, price: 20, name: 'PRADA P8750',src:'./img/g5.jpg' , url: './img/v5.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 6, price: 30, name: 'PRADA P9700',src:'./img/g6.jpg' , url: './img/v6.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 7, price: 30, name: 'FENDI F8750',src:'./img/g7.jpg' , url: './img/v7.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 8, price: 30, name: 'FENDI F8500',src:'./img/g8.jpg' , url: './img/v8.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
        { id: 9, price: 35, name: 'FENDI F4300',src:'./img/g9.jpg' , url: './img/v9.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ' },
    
    ];

    state = {
        sanPhamChiTiet:{id: 1, price: 30, name: 'GUCCI G8850U',url: './img/v1.png', desc: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. '}
    }
    renderProduct = ()=>{
        return this.arrProduct.map((product,index)=>{
            return <div className="col-4" key={index}>
                        <img src={product.src} alt={product.name} className="img-fluid" onClick={()=>{
                            this.tryOn(product);
                        }} />
                    </div>

        });
    }
    tryOn = (sanPhamClick)=>{
        this.setState({
            sanPhamChiTiet:sanPhamClick
        })
    }


    render() {
        let {name,price,url,desc} = this.state.sanPhamChiTiet;
        return (
            <div className="row justify-content-between">
                <div className="col-6 vglasses__left">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="mb-2">Bài Tập Thử Kính</h1>
                        </div>
                    </div>
                    <div className="row" id="vglassesList">
                        {this.renderProduct()}
                    </div>
                </div>
                <div className="col-5 vglasses__right p-0">
                    <div className="vglasses__card">
                        <div class="vglasses__model" id="avatar" style={{backgroundImage:'url(./img/model.jpg)'}}>
                            <img src={url} alt={name} />
                        </div>
                        <div id="glassesInfo" class="vglasses__info">
                            <h5>{name}</h5>
                            <p class="card-text"> 
                                <span class="btn btn-danger btn-sm mr-2">{price}</span>
                            </p>
                            <p class="card-text"> 
                                {desc}
                            </p>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
}
