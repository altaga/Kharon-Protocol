import '../assets/main.css';
import React, { Component } from 'react';
import TabsNav from '../components/tabs';
import Devices from '../components/devices';
import Register from '../components/register';
import Swap from '../components/swap';
import Info from '../components/info';
import { connect } from 'react-redux';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        {
          (this.props.set_user.payload === "") ?
          <TabsNav
          padding="40vh"
          defaultTab={0}
          tab={[
            "Swap",
            "Info",
          ]}
          tabContent={[
            <Swap />,
            <Info />,
          ]}
        />:
        <TabsNav
          defaultTab={0}
          padding="20vh"
          tab={[
            "Swap",
            "Devices",
            "Add Device",
            "Info",
          ]}
          tabContent={[
            <Swap />,
            <Devices />,
            <Register />,
            <Info />,
          ]}
        />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      set_user:state.set_user
  }
}

export default connect(mapStateToProps, null)(Main);