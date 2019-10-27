import React, { Component } from 'react';
import $ from "jquery"
import style from './index.less'

const COIN = require("../../../public/image/btn.gif") 

export default class Turn extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    componentDidMount() {

    }


    render() {

        return (<div className={style.content}>
            <div className="shade">
                <div className="sk-fading-circle">
                    <div className="sk-circle1 sk-circle"></div>
                    <div className="sk-circle2 sk-circle"></div>
                    <div className="sk-circle3 sk-circle"></div>
                    <div className="sk-circle4 sk-circle"></div>
                    <div className="sk-circle5 sk-circle"></div>
                    <div className="sk-circle6 sk-circle"></div>
                    <div className="sk-circle7 sk-circle"></div>
                    <div className="sk-circle8 sk-circle"></div>
                    <div className="sk-circle9 sk-circle"></div>
                    <div className="sk-circle10 sk-circle"></div>
                    <div className="sk-circle11 sk-circle"></div>
                    <div className="sk-circle12 sk-circle"></div>
                </div>
                <div className="number"></div>
            </div>
            <div className="flipbook-viewport" style={{display:"none"}}>
                <div className="previousPage"></div>
                <div className="nextPage"></div>
                <div className="return"></div>
                <img className="btnImg" src={COIN} style= {{ display:"none"}} />
                <div className="container">
                    <div className="flipbook">
                    </div>
                </div>
            </div>



        </div>)
    }
}