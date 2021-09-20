import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Input, Row } from 'reactstrap';
import { IconButton } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import CachedIcon from '@material-ui/icons/Cached';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import SwapVerticalCircleIcon from '@material-ui/icons/SwapVerticalCircle';
import HelpIcon from '@material-ui/icons/Help';
import coin_action from "../redux/actions/asyncActions/coinAction"
import { connect } from 'react-redux';

function epsilonRound(num) {
    return Math.round((num + Number.EPSILON) * 100000) / 100000
}

class Swap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromValue: 0,
            toValue: 0,
            hel: this.props.coin.result.data["5426"].quote.USD.price,
            chiaDollar: 1,
            sol: this.props.coin.result.data["5665"].quote.USD.price,
            selectorFrom: "Solana",
            selectorTo: "Select a Token",
            inputState: true,
            multiplier: this.props.coin.result.data["5426"].quote.USD.price,
        }
    }
    componentDidMount() {
        this.props.coin_action()
    }
    componentWillUnmount() {

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.coin.loading !== prevProps.coin.loading) {
            if (this.props.coin.loading) {
                this.setState({
                    hel: this.props.coin.result.data["5426"].quote.USD.price,
                    sol: this.props.coin.result.data["5426"].quote.USD.price,
                    inputState: true
                })
            }
        }
    }
    render() {
        return (
            <div className="body-element2">
                <div style={{ fontSize: "1.8rem", background: "#131a35", color: "white", paddingBottom: "50px", outline: "#131a35 solid 2px", outlineOffset: "-1px" }}>
                    <Row md="9" style={{ paddingRight: "20px" }}>
                        <Col xs="3" style={{ fontWeight: "bold" }}>
                            Swap
                        </Col>
                        <Col />
                        <Col xs="1">
                            <CachedIcon style={{ color: "white" }} />
                        </Col>
                        <Col xs="1">
                            <ErrorOutlineIcon style={{ color: "white" }} />
                        </Col>
                        <Col xs="1">
                            <SettingsIcon style={{ color: "white" }} />
                        </Col>
                        <Col xs="1">
                            <SearchIcon style={{ color: "white" }} />
                        </Col>
                    </Row>
                </div>
                <div style={{ background: "#131a35", outline: "#131a35 solid 2px", outlineOffset: "-1px" }}>
                    <Card style={{ borderRadius: "10px", background: "white" }}>
                        <CardBody>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col xs="6" style={{ textAlign: "start" }}>
                                            From
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col xs="6" style={{ textAlign: "start" }}>
                                            <Input defaultValue={0} id="fromInput" disabled={!this.state.inputState} type="text" placeholder="0.00" onChange={(event) => {
                                               if (document.getElementById("toLabel").value !== "Select a Token") {
                                                if (document.getElementById("fromLabel").value === "Solana") {
                                                    if (document.getElementById("toLabel").value === "Solana") {
                                                        this.setState({
                                                            toValue: epsilonRound(parseFloat(document.getElementById("fromInput").value))
                                                        })
                                                    }
                                                    else{
                                                        this.setState({
                                                            toValue: epsilonRound(parseFloat(document.getElementById("fromInput").value) * (this.props.coin.result.data["5665"].quote.USD.price/this.props.coin.result.data["5426"].quote.USD.price))
                                                        })  
                                                    }
                                                }
                                                else {
                                                    if (document.getElementById("toLabel").value === "Solana") {
                                                        this.setState({
                                                            toValue: epsilonRound(parseFloat(document.getElementById("fromInput").value) * (this.props.coin.result.data["5426"].quote.USD.price/this.props.coin.result.data["5665"].quote.USD.price))
                                                        })
                                                    }
                                                    else{
                                                        this.setState({
                                                            toValue: epsilonRound(parseFloat(document.getElementById("fromInput").value))
                                                        })  
                                                    }
                                                }  
                                            }
                                            }} />
                                        </Col>
                                        <Col xs="6" style={{ textAlign: "end" }}>
                                            <Input defaultValue="Solana" type="select" name="select" id="fromLabel" onChange={(event) => {
                                                if (document.getElementById("toLabel").value !== "Select a Token") {
                                                    if (document.getElementById("fromLabel").value === "Solana") {
                                                        if (document.getElementById("toLabel").value === "Solana") {
                                                            this.setState({
                                                                toValue: epsilonRound(parseFloat(document.getElementById("fromInput").value))
                                                            })
                                                        }
                                                        else{
                                                            this.setState({
                                                                toValue: epsilonRound(parseFloat(document.getElementById("fromInput").value) * (this.props.coin.result.data["5665"].quote.USD.price/this.props.coin.result.data["5426"].quote.USD.price))
                                                            })  
                                                        }
                                                    }
                                                    else {
                                                        if (document.getElementById("toLabel").value === "Solana") {
                                                            this.setState({
                                                                toValue: epsilonRound(parseFloat(document.getElementById("fromInput").value) * (this.props.coin.result.data["5426"].quote.USD.price/this.props.coin.result.data["5665"].quote.USD.price))
                                                            })
                                                        }
                                                        else{
                                                            this.setState({
                                                                toValue: epsilonRound(parseFloat(document.getElementById("fromInput").value))
                                                            })  
                                                        }
                                                    }  
                                                }
                                            }}>
                                                <option>Solana</option>
                                                <option>Helium</option>
                                            </Input>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <IconButton>
                                <SwapVerticalCircleIcon style={{ fontSize: "2rem", color: "#131a35" }} />
                            </IconButton>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <Col xs="6" style={{ textAlign: "start" }}>
                                            To (Estimate)
                                        </Col>
                                    </Row>
                                    <br />
                                    <Row>
                                        <Col xs="6" style={{ textAlign: "start" }}>
                                            {this.state.toValue}
                                        </Col>
                                        <Col xs="6" style={{ textAlign: "end" }}>
                                            <Input defaultValue="Select a Token" type="select" name="select" id="toLabel" onChange={(event) => {
                                               if (document.getElementById("toLabel").value !== "Select a Token") {
                                                if (document.getElementById("fromLabel").value === "Solana") {
                                                    if (document.getElementById("toLabel").value === "Solana") {
                                                        this.setState({
                                                            toValue: epsilonRound(parseFloat(document.getElementById("fromInput").value))
                                                        })
                                                    }
                                                    else{
                                                        this.setState({
                                                            toValue: epsilonRound(parseFloat(document.getElementById("fromInput").value) * this.props.coin.result.data["5426"].quote.USD.price)
                                                        })  
                                                    }
                                                }
                                                else {
                                                    if (document.getElementById("toLabel").value === "Solana") {
                                                        this.setState({
                                                            toValue: epsilonRound(parseFloat(document.getElementById("fromInput").value) / this.props.coin.result.data["5426"].quote.USD.price)
                                                        })
                                                    }
                                                    else{
                                                        this.setState({
                                                            toValue: epsilonRound(parseFloat(document.getElementById("fromInput").value) )
                                                        })  
                                                    }
                                                }  
                                            }
                                            }}>
                                                <option disabled>Select a Token</option>
                                                <option>Solana</option>
                                                <option>Helium</option>
                                            </Input>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                            <br />
                            <Row>
                                <Col style={{ textAlign: "start", fontSize: "0.8rem" }}>
                                    Slippage Tolerance
                                    <IconButton>
                                        <HelpIcon style={{ color: "black", width: "0.8rem" }} />
                                    </IconButton>
                                </Col>
                                <Col style={{ textAlign: "end", fontSize: "0.8rem", paddingTop: "12px" }}>
                                    0.5%
                                </Col>
                            </Row>
                            <br />
                            <Button style={{ width: "30vw", height: "6vh", fontSize: "1.2rem", background: "#131a35", color: "white", border: "none" }}>
                                Connect Wallet
                            </Button>
                        </CardBody>
                    </Card>

                </div>
            </div >
        );
    }
}

const mapDispatchToProps =
{
    coin_action
}

const mapStateToProps = (state) => {
    return {
        coin: state.coin
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Swap);