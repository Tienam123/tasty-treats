/* Default imports */

// Code...
import {Header} from '@/pages/Header/Header.jsx';
import {Main} from '@/pages/Main/Main.jsx';
import {Footer} from '@/pages/Footer/Footer.jsx';
import {Globalstyle} from '@/Globalstyle.js';
import {Component} from 'react';

export class HomeLayout extends Component {
    state = {
        checked: JSON.parse(localStorage.getItem('checked')),
        theme: localStorage.getItem('theme'),
    };
    switchStatusCheckbox = () => {
        this.setState(prevState => {
            return {
                checked: !prevState.checked,
            };
        });
    };
    switchTheme = (newTheme) => {
        this.setState({theme:newTheme})
        localStorage.setItem('theme', newTheme);
    };
    // componentDidMount() {
    //     this.setState(prevState => {
    //         return {
    //             checked: JSON.parse(localStorage.getItem('theme')),
    //             theme:JSON.parse(localStorage.getItem('theme'))
    //         }
    //     });
    // }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.checked !== this.state.checked) {
            localStorage.setItem('checked', this.state.checked);
            this.state.checked
                ? this.switchTheme('dark')
                : this.switchTheme('light');
        }
    }

    render() {
        console.log(JSON.parse(localStorage.getItem('checked')));
        return (
            <>
                <Header checked={this.state.checked}
                        setChecked={this.switchStatusCheckbox}/>
                <Main>
                    {this.props.children}
                </Main>
                <Footer/>
                <Globalstyle theme={this.state.theme}/>
            </>
        );
    }
}
