import React from 'react';
import "./styles/Hello.css";

export default class Hello extends React.Component {

    constructor(props) {
        super(props);

        //initialisation de l'état applicatif du composant
        this.state = {
            dark_mode: false
        };

        //this.when_button_is_clicked = this.when_button_is_clicked.bind(this);//référence à this depuis constructor
    }

    when_button_is_clicked() {

        // let new_mode;

        // if (this.state.dark_mode === true) {
        //     new_mode = false;
        // } else {
        //     new_mode = true;
        // }

        // this.setState({
        //     dark_mode: new_mode
        // });

        this.setState({
            dark_mode: !this.state.dark_mode
        });
    }

    mode_label() {
        //opérateur ternaire
        return (this.state.dark_mode) ? "Light" : "Dark";

        // équivaut à

        // if (this.state.dark_mode === true) {
        //     return "Light";
        // } else {
        //     return "Dark";
        // }
    }

    mode_button() {
        return <button onClick={this.when_button_is_clicked}>{this.mode_label()} Mode</button>;
        //return <button onClick={this.when_button_is_clicked}>{this.mode_label()} Mode</button>;//si déclaré dans constructor
    }

    render() {
        return <div className="Hello">

            <h1>Hello {this.props.who} !</h1>
            {this.mode_button()}

        </div>;
    }
}