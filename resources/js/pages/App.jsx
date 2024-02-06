import React, {Component} from 'react';
import {HomeLayout} from '@/layouts/HomeLayout.jsx';
import {SwiperHome} from '@/components/SwiperHome/SwiperHome.jsx';
import {Home} from '@/components/Home/Home.jsx'
import {ProductStyled} from '@/components/Product/Product.styled.js';
import {ProductForm} from '@/components/Product/ProductForm/ProductForm.jsx';



export default class App extends Component {
    state = {

    }
    render() {
        return (
            <HomeLayout>
                <Home />
                <ProductStyled>
                <ProductForm categories={this.props.categories}/>
                </ProductStyled>
            </HomeLayout>
        );
    }
}
