import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Row } from 'reactstrap';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import CachedIcon from '@material-ui/icons/Cached';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { connect } from 'react-redux';

class Devices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devices: {

            }
        }
        this.unirest = require("unirest");
    }
    componentDidMount() {
        console.log(this.props.search)
    }
    componentWillUnmount() {

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.search.loading !== prevProps.search.loading) {
            if (this.props.search.loading) {

            }
        }
    }

    checkLastMessage(app_eui, dev_eui, index) {
        this.unirest('GET', 'https://XXXXXX.execute-api.us-east-1.amazonaws.com/check-last-transaction-data-devdata')
            .headers({
                'app_eui': app_eui,
                'dev_eui': dev_eui
            })
            .end((res) => {
                if (res.error) throw new Error(res.error);
                let temp = this.state.devices;
                temp[dev_eui] = res.body;
                console.log(temp)
                this.setState({
                    devices: temp
                }, () => {
                    document.getElementById("hiddenid" + index).style.display = "block"
                })
            });
    }
    render() {
        return (
            <div className="body-element2">
                <div style={{ fontSize: "1.8rem", background: "#131a35", color: "white", paddingBottom: "50px", outline: "#131a35 solid 2px", outlineOffset: "-1px" }}>
                    <Row md="9" style={{ paddingRight: "20px" }}>
                        <Col xs="3" style={{ fontWeight: "bold" }}>
                            Devices
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
                    {
                        this.props.search.result.devices.map((device, index) => {
                            let app_eui = device.substring(0, 16);
                            let dev_eui = device.substring(16, 32);
                            return (
                                <div key={"device"+index}>
                                    <Card style={{ borderRadius: "10px", background: "white", width: "60vw" }}>
                                        <CardBody>
                                            <Row>
                                                <Col xs="8" style={{ verticalAlign: "middle" }} onClick={() => {
                                                    if (document.getElementById("hiddenid" + index).style.display === "none") {
                                                        document.getElementById("hiddenid" + index).style.display = "block";
                                                    } else {
                                                        document.getElementById("hiddenid" + index).style.display = "none";
                                                    }
                                                }}>
                                                    <div>
                                                        AppEUI: {app_eui}
                                                    </div>
                                                    <div>
                                                        DevEUI: {dev_eui}
                                                    </div>
                                                </Col>
                                                <Col xs="4">
                                                    <Button style={{ fontSize: "1.2rem", background: "#131a35", color: "white", border: "none" }} onClick={() => this.checkLastMessage(app_eui, dev_eui, index)}>
                                                        Last Message
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                        <CardFooter style={{ display: "none" }} id={"hiddenid" + index}>
                                            <Row>
                                                <br />
                                                {
                                                    this.state.devices[dev_eui] === undefined ? <Col xs="12">{"No message received"}</Col> :
                                                        <>
                                                            <Col xs="4">
                                                                Message:
                                                                <><br /></>
                                                                {
                                                                    this.state.devices[dev_eui].data[0]
                                                                }
                                                            </Col>
                                                            <br />
                                                            <Col xs="4">
                                                                Transaction (Explorer):
                                                                <><br /></>
                                                                <a href={`https://explorer.solana.com/tx/${this.state.devices[dev_eui].transaction[0]}?cluster=devnet`} target="_blank" rel="noopener noreferrer">
                                                                    {
                                                                        this.state.devices[dev_eui].transaction[0].substring(0, 22)
                                                                    }
                                                                    <br />
                                                                    {
                                                                        this.state.devices[dev_eui].transaction[0].substring(22, 44)
                                                                    }
                                                                    <br />
                                                                    {
                                                                        this.state.devices[dev_eui].transaction[0].substring(44, 66)
                                                                    }
                                                                    <br />
                                                                    {
                                                                        this.state.devices[dev_eui].transaction[0].substring(66, 88)
                                                                    }
                                                                </a>
                                                            </Col>
                                                            <br />
                                                            <Col xs="4">
                                                                BlockTime:
                                                                <><br /></>
                                                                {
                                                                    this.state.devices[dev_eui].blockTime[0]
                                                                }
                                                            </Col>
                                                        </>
                                                }
                                            </Row>
                                        </CardFooter>
                                    </Card>
                                    <br />
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        set_user: state.set_user,
        search: state.search
    }
}

export default connect(mapStateToProps, null)(Devices);