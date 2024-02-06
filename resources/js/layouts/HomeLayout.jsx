/* Default imports */

// Code...
import {Header} from '@/pages/Header/Header.jsx';
import {Main} from '@/pages/Main/Main.jsx';
import {Footer} from '@/pages/Footer/Footer.jsx';

import React, {Component} from 'react';
import {Globalstyle} from '@/Globalstyle.js';

export class HomeLayout extends Component {
    state = {
        checked: !!localStorage.getItem('theme'),
    };
    handleChangeTheme = () => {
        this.setState(prevState => {

            return {
                checked: !prevState.checked,
            }
        })

    }


    render() {
        return (
            <>
                <Header theme={this.state.checked}
                        changeTheme={this.handleChangeTheme}/>
                <Main>
                    {this.props.children}
                </Main>
                <Footer/>
                <Globalstyle theme={this.state.checked}/>
            </>
        );
    }
}

