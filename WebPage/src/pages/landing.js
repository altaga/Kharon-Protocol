import React, { Component } from 'react';
import { Button, Card, Col, Row } from 'reactstrap';
import logo from '../assets/logo.png'
import logoS from '../assets/solana.png';
import logoH from '../assets/helium.png';
import gitbook from '../assets/gitbook.svg';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import coin_action from "../redux/actions/asyncActions/coinAction"
//import { FaDiscord } from 'react-icons/fa';

import { connect } from 'react-redux';


function epsilonRound(num) {
    return Math.round((num + Number.EPSILON) * 100) / 100
}

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chiaPrice: 0,
            solPrice: 0,
        }
        this.unirest = require('unirest');
    }

    componentDidMount() {
        this.props.coin_action()
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="landing-page">
                <img className="logo-element-landing" src={logo} alt="logo" />
                <div className="logo-text-element-landing"> &nbsp; Kharon Protocol</div>
                <Button onClick={() => window.open("/app", "_blank")} className="landing-button" style={{ width: "160px", height: "50px", background: `linear-gradient(300deg,#131a35,#6500eb)`, color: "white", border: "1px solid linear-gradient(0deg,#131a35,#6500eb)", borderStyle: "groove", borderRadius: "15px" }}>
                    Launch App
                </Button>
                <div style={{ fontWeight: "bolder", WebkitTextStroke: "2px black", position: "absolute", fontSize: "4rem", top: "40vh" }}>
                    Power-up the wireless Revolution
                </div>
                <div style={{ WebkitTextStroke: "0.5px black", position: "absolute", fontSize: "1.8rem", top: "52vh" }}>
                    Trade and build while bringing interoperability between Solana and Helium.
                </div>
                <Button onClick={() => window.open("/app", "_blank")} style={{ width: "160px", height: "50px", background: `linear-gradient(300deg,#131a35,#6500eb)`, color: "white", border: "1px solid linear-gradient(0deg,#131a35,#6500eb)", borderStyle: "groove", borderRadius: "15px", position: "absolute", top: "63vh", left: "44vw", transform: `translate(-50%, -50%)` }}>
                    Launch App {" >"}
                </Button>
                <Button onClick={() => window.open("https://github.com/altaga/Kharon-Protocol", "_blank")} style={{ width: "160px", height: "50px", background: `linear-gradient(300deg,#131a35,#6500eb)`, color: "white", border: "1px solid linear-gradient(0deg,#131a35,#6500eb)", borderStyle: "groove", borderRadius: "15px", position: "absolute", top: "63vh", left: "56vw", transform: `translate(-50%, -50%)` }}>
                    Read docs &nbsp; <img alt="docs" src={gitbook} class="icon"></img>
                </Button>
                <Card style={{ background: `linear-gradient(300deg,hsla(0,0%,100%,0.7),hsla(0,0%,100%,0.1))`, color: "black", position: "absolute", top: "80vh", left: "40.7vw", transform: `translate(-50%, -50%)`, width: "260px", height: "100px", borderRadius: "25px" }}>
                    <div style={{ color: "white", fontSize: "1rem", fontWeight: "bold", textAlign: "center", paddingTop: "24px" }}>
                        <div style={{ fontSize: "14px", color: "#adc6ff", WebkitTextStroke: "0.7px black" }}>
                            Helium Price
                        </div>
                        <div style={{ fontSize: "22px", WebkitTextStroke: "1px black" }}>
                            $ {
                                epsilonRound(this.props.coin.result.data["5665"].quote.USD.price)
                            } USD
                        </div>
                    </div>
                </Card>
                <Card style={{ background: `linear-gradient(300deg,hsla(0,0%,100%,0.7),hsla(0,0%,100%,0.1))`, color: "black", position: "absolute", top: "80vh", left: "59.3vw", transform: `translate(-50%, -50%)`, width: "260px", height: "100px", borderRadius: "25px" }}>
                    <div style={{ color: "white", fontSize: "1rem", fontWeight: "bold", textAlign: "center", paddingTop: "24px" }}>
                        <div style={{ fontSize: "14px", color: "#adc6ff", WebkitTextStroke: "0.7px black" }}>
                            Solana Price
                        </div>
                        <div style={{ fontSize: "22px", WebkitTextStroke: "1px black" }}>
                            $ {
                                epsilonRound(this.props.coin.result.data["5426"].quote.USD.price)
                            } USD
                        </div>
                    </div>
                </Card>
                <div style={{ position: "absolute", top: "105vh", left: "50vw", transform: `translate(-50%, -50%)`, color: "white", fontSize: "2rem", WebkitTextStroke: "0.5px black" }}>
                    Built on <img alt="based" width="200vw" src={logoS} /> based on <img alt="on" style={{ marginBottom: "6px" }} width="180vw" src={logoH} />
                </div>
                <Card style={{ background: `linear-gradient(300deg,hsla(238,50%,60%,0.5),hsla(274,50%,90%,0.5))`, color: "black", position: "absolute", top: "150vh", left: "50vw", transform: `translate(-50%, -50%)`, width: "80vw", height: "70vh", borderRadius: "100px" }}>
                    <div style={{ fontSize: "1.4rem", position: "absolute", top: "30vh", left: "40vw", transform: `translate(-50%, -50%)`, width: "50vw", height: "30vh", borderRadius: "25px", textAlign: "center", color: "white" }}>
                        Powering-up the wireless revolution of the Helium and Solana blockchain
                    </div>
                    <Card style={{ background: `linear-gradient(300deg,hsla(0,0%,100%,0.7),hsla(0,0%,100%,0.1))`, color: "black", position: "absolute", top: "40vh", left: "13vw", transform: `translate(-50%, -50%)`, width: "17vw", height: "30vh", borderRadius: "25px" }}>
                        <div style={{ color: "white", fontSize: "1rem", fontWeight: "bold", textAlign: "center", paddingTop: "24px" }}>
                            <TrendingUpIcon style={{ background: `linear-gradient(300deg,#131a35,#6500eb)`, border: "1px solid white", borderRadius: "5px", width: "40px", height: "40px", marginBottom: "10px" }} />
                            <div style={{ fontSize: "22px", color: "white", paddingBottom: "10px" }}>
                                Provenance
                            </div>
                            <div style={{ fontSize: "20px", WebkitTextStroke: "0px black", paddingBottom: "15px" }}>
                                Track goods.
                            </div>
                            <Button onClick={() => window.open("https://main.dgkf9soue15wf.amplifyapp.com/#/", "_blank")} style={{ width: "160px", height: "50px", background: `linear-gradient(300deg,#131a35,#6500eb)`, color: "white", border: "1px solid linear-gradient(0deg,#131a35,#6500eb)", borderStyle: "groove", borderRadius: "15px" }}>
                            Explore
                            </Button>
                        </div>
                    </Card>
                    <Card style={{ background: `linear-gradient(300deg,hsla(0,0%,100%,0.7),hsla(0,0%,100%,0.1))`, color: "black", position: "absolute", top: "40vh", left: "31vw", transform: `translate(-50%, -50%)`, width: "17vw", height: "30vh", borderRadius: "25px" }}>
                        <div style={{ color: "white", fontSize: "1rem", fontWeight: "bold", textAlign: "center", paddingTop: "24px" }}>
                            <SwapHorizIcon style={{ background: `linear-gradient(300deg,#131a35,#6500eb)`, border: "1px solid white", borderRadius: "5px", width: "40px", height: "40px", marginBottom: "10px" }} />
                            <div style={{ fontSize: "22px", color: "white", paddingBottom: "10px" }}>
                                Swaps
                            </div>
                            <div style={{ fontSize: "20px", WebkitTextStroke: "0px black", paddingBottom: "15px" }}>
                                Swap cheaply.
                            </div>
                            <Button onClick={() => window.open("https://main.d1hf85nd9w4cq7.amplifyapp.com/app/Swap", "_blank")} style={{ width: "160px", height: "50px", background: `linear-gradient(300deg,#131a35,#6500eb)`, color: "white", border: "1px solid linear-gradient(0deg,#131a35,#6500eb)", borderStyle: "groove", borderRadius: "15px" }}>
                                Enter Swap
                            </Button>
                        </div>
                    </Card>
                    <Card style={{ background: `linear-gradient(300deg,hsla(0,0%,100%,0.7),hsla(0,0%,100%,0.1))`, color: "black", position: "absolute", top: "40vh", left: "49vw", transform: `translate(-50%, -50%)`, width: "17vw", height: "30vh", borderRadius: "25px" }}>
                        <div style={{ color: "white", fontSize: "1rem", fontWeight: "bold", textAlign: "center", paddingTop: "24px" }}>
                            <InvertColorsIcon style={{ background: `linear-gradient(300deg,#131a35,#6500eb)`, border: "1px solid white", borderRadius: "5px", width: "40px", height: "40px", marginBottom: "10px" }} />
                            <div style={{ fontSize: "22px", color: "white", paddingBottom: "10px" }}>
                                Devices
                            </div>
                            <div style={{ fontSize: "20px", WebkitTextStroke: "0px black", paddingBottom: "15px" }}>
                                Upload IoT Data.
                            </div>
                            <Button onClick={() => window.open("https://main.d1hf85nd9w4cq7.amplifyapp.com/app/Liquidity", "_blank")} style={{ width: "160px", height: "50px", background: `linear-gradient(300deg,#131a35,#6500eb)`, color: "white", border: "1px solid linear-gradient(0deg,#131a35,#6500eb)", borderStyle: "groove", borderRadius: "15px" }}>
                                Add Devices
                            </Button>
                        </div>
                    </Card>
                    <Card style={{ background: `linear-gradient(300deg,hsla(0,0%,100%,0.7),hsla(0,0%,100%,0.1))`, color: "black", position: "absolute", top: "40vh", left: "67vw", transform: `translate(-50%, -50%)`, width: "17vw", height: "30vh", borderRadius: "25px" }}>
                        <div style={{ color: "white", fontSize: "1rem", fontWeight: "bold", textAlign: "center", paddingTop: "24px" }}>
                            <MonetizationOnIcon style={{ background: `linear-gradient(300deg,#131a35,#6500eb)`, border: "1px solid white", borderRadius: "5px", width: "40px", height: "40px", marginBottom: "10px" }} />
                            <div style={{ fontSize: "22px", color: "white", paddingBottom: "10px" }}>
                                OBOL
                            </div>
                            <div style={{ fontSize: "20px", WebkitTextStroke: "0px black", paddingBottom: "15px" }}>
                                KharonProtocol Token.
                            </div>
                            <Button onClick={() => window.open("https://main.d1hf85nd9w4cq7.amplifyapp.com/app/Staking", "_blank")} style={{ width: "160px", height: "50px", background: `linear-gradient(300deg,#131a35,#6500eb)`, color: "white", border: "1px solid linear-gradient(0deg,#131a35,#6500eb)", borderStyle: "groove", borderRadius: "15px" }}>
                                Token Metrics
                            </Button>
                        </div>
                    </Card>
                </Card>
                <div className="myhr-header2" />
                <Card style={{ background: `none`, color: "black", position: "absolute", top: "240vh", left: "50vw", transform: `translate(-50%, -50%)`, width: "80vw", height: "70vh", borderRadius: "100px", border: "0px" }}>
                    <div style={{ fontSize: "1.4rem", position: "absolute", top: "25vh", left: "40vw", transform: `translate(-50%, -50%)`, width: "50vw", height: "30vh", borderRadius: "25px", textAlign: "center", color: "white", marginBottom: "90px" }}>
                        Bringing interoperability between Helium and Solana.
                    </div>
                    <Card style={{ background: `linear-gradient(300deg,hsla(0,0%,100%,0.7),hsla(0,0%,100%,0.1))`, color: "black", position: "absolute", top: "40vh", left: "13vw", transform: `translate(-50%, -50%)`, width: "25vw", height: "40vh", borderRadius: "25px" }}>
                        <div style={{ color: "white", fontSize: "1rem", fontWeight: "bold", textAlign: "center", paddingTop: "24px" }}>
                            <div style={{ fontSize: "2rem", color: "white" }}>
                                OBOL
                            </div>
                            <div style={{ fontSize: "1.4rem", padding: "10%" }}>
                                OBOL is a SPL Token that allows for the exchange of tokens between Helium and Solana.
                            </div>
                        </div>
                    </Card>
                    <Card style={{ background: `linear-gradient(300deg,hsla(0,0%,100%,0.7),hsla(0,0%,100%,0.1))`, color: "black", position: "absolute", top: "40vh", left: "40vw", transform: `translate(-50%, -50%)`, width: "25vw", height: "40vh", borderRadius: "25px" }}>
                        <div style={{ color: "white", fontSize: "1rem", fontWeight: "bold", textAlign: "center", paddingTop: "24px" }}>
                            <div style={{ fontSize: "2rem", color: "white" }}>
                                Start right away
                            </div>
                            <div style={{ fontSize: "1.4rem", padding: "10%" }}>
                                Connect your crypto wallet and start interacting.
                            </div>
                        </div>
                    </Card>
                    <Card style={{ background: `linear-gradient(300deg,hsla(0,0%,100%,0.7),hsla(0,0%,100%,0.1))`, color: "black", position: "absolute", top: "40vh", left: "67vw", transform: `translate(-50%, -50%)`, width: "25vw", height: "40vh", borderRadius: "25px" }}>
                        <div style={{ color: "white", fontSize: "1rem", fontWeight: "bold", textAlign: "center", paddingTop: "24px" }}>
                            <div style={{ fontSize: "2rem", color: "white" }}>
                                Built with Solana and Helium
                            </div>
                            <div style={{ fontSize: "1.4rem", padding: "10%" }}>
                                Peak 65,000 TPS <p />
                                400ms block times <p />
                                $0.00001 transaction cost
                            </div>
                        </div>
                    </Card>
                </Card>
                <Row md="4" style={{ position: "absolute", top: "360vh", left: "57vw", transform: `translate(-50%, -50%)`, width: "80vw" }}>
                    <Col xs="3">
                        <div style={{ padding: "10px" }}>
                            About
                        </div>
                        <div className="myhr-header3" />
                        <div style={{ padding: "10px", color: "white" }}>
                            <a href="https://github.com/altaga/Kharon-Protocol" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}>Documentation</a>
                        </div>
                    </Col>
                    <Col xs="3">
                        <div style={{ padding: "10px" }}>
                            Protocol
                        </div>
                        <div className="myhr-header3" />
                        <div style={{ padding: "10px" }}>
                            <a href="https://github.com/altaga/Kharon-Protocol" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}> OBOL</a>
                        </div>
                    </Col>
                    <Col xs="3">
                        <div style={{ padding: "10px" }}>
                            Support
                        </div>
                        <div className="myhr-header3" />
                        <div style={{ padding: "10px" }}>
                            <a href="https://github.com/altaga/Kharon-Protocol" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}>Getting Started in Kharon Protocol</a>
                        </div>
                        <div style={{ padding: "10px" }}>
                            <a href="/" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}>FAQ</a>
                        </div>
                    </Col>
                    <Col xs="3">
                        <div style={{ padding: "10px" }}>
                            Community
                        </div>
                        <div className="myhr-header3" />
                        <div style={{ padding: "5px" }}>
                            <IconButton onClick={() => window.open("https://twitter.com/KharonProtocol", "_blank")} style={{ color: "white" }}>
                                <TwitterIcon /> &nbsp; {"Twitter"}
                            </IconButton>
                        </div>
                        <div style={{ padding: "5px" }}>
                            <IconButton onClick={() => window.open("https://www.facebook.com/KharonProtocol", "_blank")} style={{ color: "white" }}>
                                <FacebookIcon /> &nbsp; {"Facebook"}
                            </IconButton>
                        </div>
                        {
                            /*
                                <>
                                    <div style={{ padding: "5px" }}>
                                        <IconButton onClick={() => window.open("https://main.d1hf85nd9w4cq7.amplifyapp.com/app/Swap", "_blank")} style={{ color: "white" }}>
                                            <InstagramIcon /> &nbsp; {"Instagram"}
                                        </IconButton>
                                    </div>
                                    <div style={{ padding: "5px" }}>
                                        <IconButton onClick={() => window.open("https://main.d1hf85nd9w4cq7.amplifyapp.com/app/Swap", "_blank")} style={{ color: "white" }}>
                                            <FaDiscord /> &nbsp; {"Discord"}
                                        </IconButton>
                                    </div>
                                </>
                            */
                        }
                    </Col>
                </Row>
                <img className="logo-element-landing-bottom" src={logo} alt="logo" />
                <div className="logo-text-element-landing-bottom"> &nbsp; Kharon Protocol</div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Landing); // connect(state, props)(mycomponent)