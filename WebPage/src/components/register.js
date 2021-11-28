import React, { Component } from 'react';
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import CachedIcon from '@material-ui/icons/Cached';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import AddIcon from '@material-ui/icons/Add';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';

class Register extends Component {
    constructor(props) {
        super(props);
        autoBind(this);
        this.state = {
            appeui: "",
            deveui: "",
        }
        this.unirest = require('unirest');
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }

    formCallback(data) {
        if (data.target.id === "appeui") {
            this.setState({
                appeui: data.target.value
            })
        }
        else if (data.target.id === "deveui") {
            this.setState({
                deveui: data.target.value
            })
        }
    }

    addDevice() {
        this.unirest('GET', 'https://XXXXXX.execute-api.us-east-1.amazonaws.com/register-device')
            .headers({
                'app_eui': this.state.appeui,
                'dev_eui': this.state.deveui,
                'pub_key': this.props.set_user.payload
            })
            .end((res) => {
                if (res.error) throw new Error(res.error);
                alert(res.raw_body);
            });
    }

    render() {
        return (
            <div className="body-element example">
                <div style={{ fontSize: "1.8rem", background: "#131a35", color: "white", paddingBottom: "50px", outline: "#131a35 solid 2px", outlineOffset: "-1px" }}>
                    <Row md="9" style={{ paddingRight: "20px" }}>
                        <Col xs="6" style={{ fontWeight: "bold" }}>
                            Add Device
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
                        <Col xs="1">
                            <AddIcon style={{ color: "white" }} />
                        </Col>
                    </Row>
                </div>
                <div style={{ background: "#131a35", outline: "#131a35 solid 2px", outlineOffset: "-1px" }}>
                    <Card style={{ minWidth: "30vw", borderRadius: "10px", background: "white" }}>
                        <CardBody>
                            <Form onChange={this.formCallback}>
                                <FormGroup>
                                    <Label>App EUI</Label>
                                    <Input id="appeui" type="text" name="appeui" placeholder="XXXXXXXXX" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Dev EUI</Label>
                                    <Input id="deveui" type="text" name="deveui" placeholder="XXXXXXXXX" />
                                </FormGroup>
                            </Form>
                            <Button onClick={this.addDevice} style={{ marginTop: "20px", width: "30vw", height: "6vh", fontSize: "1.2rem", background: "#131a35", color: "white", border: "none" }}>
                                Add Device
                            </Button>
                        </CardBody>
                    </Card>
                </div>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        set_user:state.set_user
    }
  }
  
  export default connect(mapStateToProps, null)(Register);