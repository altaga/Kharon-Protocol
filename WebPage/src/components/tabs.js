import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import logo from '../assets/logo.png'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AdjustIcon from '@material-ui/icons/Adjust';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import { set_user_action } from '../redux/actions/syncActions/myActions';
import search_action from '../redux/actions/asyncActions/searchAction';
import "../assets/main.css"

const TabsNav = (props) => {
    const [walletState, setWalletState] = useState("Connect");
    let provider;

    let myTab = 1;
    if (props.defaultTab !== undefined && props.defaultTab !== -1) {
        myTab = props.defaultTab;
    }
    const [activeTab, setActiveTab] = useState(myTab);

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const getProvider = () => {
        if ("solana" in window) {
            const provide = window.solana;
            if (provide.isPhantom) {
                return provide;
            }
        }
        return null;
    };

    const connectWallet = () => {
        const isPhantomInstalled = window.solana && window.solana.isPhantom
        if (isPhantomInstalled) {
            provider = getProvider();
            if (walletState === "Connected") {
                provider.disconnect();
                provider.on('disconnect', () => {
                    setWalletState("Connect")
                    props.set_user_action("")
                })
            }
            else {
                provider.connect();
                provider.on("connect", () => {
                    setWalletState("Connected")
                    props.search_action(provider.publicKey.toString()) 
                    props.set_user_action(provider.publicKey.toString())
                })
            }
        }
        else {
            alert("Install Phantom Wallet Extention")
            window.open("https://phantom.app/", "_blank");
        }
    }

    return (
        <div>
            <div>
                
                <img className="logo-element" src={logo} alt="logo" />
                <div className="logo-text-element">
                    Kharon Protocol
                </div>
            </div>
            <div className="button-element">
                <Button onClick={connectWallet} style={{ background: "#131a35", border: "1px solid white", color: "white" }}><AccountBalanceWalletIcon /> {walletState}</Button>
            </div>
            <header className="header-element">
                <Nav tabs style={{ width: "70vw", textAlign: "center" }}>
                    {
                        props.tab.map((tab, index) => {
                            if (tab === "Info") {
                                return (
                                    <NavItem key={index + "Nav"} style={{ paddingLeft: props.padding }}>
                                        <NavLink
                                            className={classnames({ active: activeTab === index })}
                                            onClick={() => window.open("https://github.com/altaga/Kharon-Protocol", "_blank")}
                                        >
                                            {tab}
                                        </NavLink>
                                    </NavItem>
                                )
                            }
                            else {
                                return (
                                    <NavItem key={index + "Nav"} style={{ paddingLeft: props.padding }}>
                                        <NavLink
                                            className={classnames({ active: activeTab === index })}
                                            onClick={() => { toggle(index); }}
                                        >
                                            {tab}
                                        </NavLink>
                                    </NavItem>
                                );
                            }
                        })
                    }
                </Nav>
            </header>
            <div className="myhr-header" />
            <body>
                <TabContent activeTab={activeTab}>
                    {
                        props.tabContent.map((tab, index) => {
                            return (
                                <TabPane key={index + "Nave"} tabId={index}>
                                    {tab}
                                </TabPane>
                            );
                        })
                    }
                </TabContent>
            </body>
            <footer>
                <div>
                    <div className="myhr-footer" />
                    <img className="logo-footer-element" src={logo} alt="logo" />
                    <div className="logo-text-footer-element">
                        Kharon Protocol
                    </div>
                    <div className="logo-f-text-footer-element">
                        <Row md="7">
                            <Col className="margins">
                                <a href="/" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}>Home</a>
                            </Col>
                            <Col style={{ paddingLeft: "25px", paddingRight: "25px" }}>
                                <AdjustIcon style={{ fontSize: "0.6rem", color: "white" }} />
                            </Col>
                            <Col style={{ paddingLeft: "25px", paddingRight: "25px" }}>
                                <a href="/app" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}>App</a>
                            </Col>
                            <Col style={{ paddingLeft: "25px", paddingRight: "25px" }}>
                                <AdjustIcon style={{ fontSize: "0.6rem", color: "white" }} />
                            </Col>
                            <Col style={{ paddingLeft: "25px", paddingRight: "25px" }}>
                                <a href="https://github.com/altaga/Kharon-Protocol" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}>Info</a>
                            </Col>
                        </Row>
                    </div>
                    <div className="logo-text-footer-element-right">
                        <Row md="2">
                            <Col>
                                <IconButton onClick={() => window.open("https://github.com/altaga/Kharon-Protocol", "_blank")} style={{ color: "white" }}>
                                    <TwitterIcon />
                                </IconButton>
                            </Col>
                            <Col>
                                <IconButton onClick={() => window.open("https://www.facebook.com/XCHD-101700602262231", "_blank")} style={{ color: "white" }}>
                                    <FacebookIcon />
                                </IconButton>
                            </Col>
                            {
                                /*
                                    <>
                                <Col>
                                    <IconButton style={{ color: "white" }}>
                                        <InstagramIcon />
                                    </IconButton>
                                </Col>
                                <Col>
                                    <IconButton style={{ color: "white" }}>
                                        <FaDiscord />
                                    </IconButton>
                                </Col>
                                </>
                                */
                            }
                        </Row>
                    </div>
                </div>
            </footer>
        </div>
    );
}

const mapDispatchToProps =
{
    set_user_action,
    search_action
}

const mapStateToProps = (state) => {
    return {
        set_user:state.set_user,
        search:state.search
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabsNav); // connect(state, props)(mycomponent)