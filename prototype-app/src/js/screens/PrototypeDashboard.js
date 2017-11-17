import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Anchor from 'grommet/components/Anchor';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Columns from 'grommet/components/Columns';
import Chart from 'grommet/components/chart/Chart';
import Axis from 'grommet/components/chart/Axis';
import Base from 'grommet/components/chart/Base';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Markdown from 'grommet/components/Markdown';
import Notification from 'grommet/components/Notification';
import Meter from 'grommet/components/Meter';
import Paragraph from 'grommet/components/Paragraph';
import Value from 'grommet/components/Value';
import Spinning from 'grommet/components/icons/Spinning';
import SettingsOption from 'grommet/components/icons/base/SettingsOption';
import Section from 'grommet/components/section'
import { getMessage } from 'grommet/utils/Intl';

import NavControl from '../components/NavControl';

import update from 'immutability-helper';

import {
  loadSlaves, unloadSlaves
} from '../actions/slaves';

import { pageLoaded } from './utils';

class PrototypeDashboard extends Component {
  /*constructor(){
    super();
    this.setState({slaveSeries: []})
  }*/
  /**Keeps the last 30 seconds of series */
  /*tick(){
    let now = new Date();
    if(this.state.slaveSeries !== undefined && this.state.slaveSeries.length > 0 && (now - this.state.slaveSeries[0].timestamp)/1000 > 30){
        this.state.slaveSeries
        this.state.slaveSeries.shift();
    }
  }*/

  componentDidMount() {
    pageLoaded('PrototypeDashboard');
    this.props.dispatch(loadSlaves());
    //this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    console.log("unmount");
    this.props.dispatch(unloadSlaves());
    //clearInterval(this.interval);
  }

  shouldComponentUpdate(nextProps,nextState){
      return false;
  }

  render() {
    const { error, slaves } = this.props;
    const { intl } = this.context;

    let errorNode;
    let listNode;
    //static max voltage display
    let maxVoltage = 0.8;
    let charge = 85;
    let systemstate='ERROR'
    if (error) {
      errorNode = (
        <Notification
          status='critical'
          size='large'
          state={error.message}
          message='An unexpected error happened, please try again later'
        />
      );
    } else if (slaves.length === 0) {
      listNode = (
        <Box
          direction='row'
          responsive={false}
          pad={{ between: 'small', horizontal: 'medium', vertical: 'medium' }}
        >
          <Spinning /><span>Loading...</span>
        </Box>
      );
    } else {
        const dimensions= {
            height:'xsmall'
        }
      const slavesNode = (slaves || []).map(function(slave){
        const rows = [];
        const temps = [];
        slave.voltages.forEach((voltage) => {
            rows.push(                              
                            <Meter
                              key={slave.name + '_' + voltage.name}
                              max={maxVoltage}
                              value={voltage.value}
                              size='small'
                              vertical={true}
                            >
                              <Label>
                                  <Value
                                    value={voltage.value}
                                    units='mV'
                                    size='small'
                                  />
                              </Label>
                              
                            </Meter>);
        });
        slave.temperatures.forEach((temperature) => {
            temps.push(  
                            
                                <Value
                                label={temperature.name}
                                value={Math.round(temperature.value * 10) / 10}
                                units='°C'
                                size='small'
                                />);
        });
        return (
        <Box
          key={slave.name}
          justify='center'
          margin="small"
          colorIndex={(slave.id != "slave-2" ? 'light-2' : 'error')}
          pad='small'
        >
            <Box
              direction='row'
              justify="between"
            >
                <Heading
                tag='h4'
                >
                {slave.name}
                </Heading>
                <Button
                  icon={<SettingsOption/>}
                  plain={true}
                />
            </Box>
            <Box
              margin="medium"
            >
                <Chart>
                    <Axis
                      vertical={true}
                      count={8}
                      ticks={true}
                      labels={[{label:<Label size='small'>0 mV</Label>, index:0},{label:<Label size='small'>{maxVoltage + " mV"}</Label>, index:7}]}
                    />
                    <Base>
                      {rows}
                    </Base>
                </Chart>
            </Box>
            <Box
              justify='around'
              direction='row'
              separator='top'
              pad='small'
            >
             {temps}
            </Box>
        </Box>);
      });

      listNode = (
        <Columns
          size="medium"
          justify="center"
        >
          {slavesNode}
        </Columns>
      );
    }

    return (
      <Article primary={true} full='vertical'>
        <Header
          direction='row'
          justify='between'
          size='large'
          pad={{ horizontal: 'medium', between: 'small' }}
          colorIndex='brand'
        >
          <NavControl name={getMessage(intl, 'Tableau de bord')} />
          <Box
            direction='row'
            justify='around'
            pad='small'
            justify="end"
          >
            
            <Meter
                value={charge}
                type='bar'
                size='medium'
                colorIndex={(charge > 80 ? 'ok' :(charge > 40 ? 'warning' : 'critical'))}
                label= {<Box
                          direction='row'
                          justify='around'
                          pad='small'
                        >
                            <Label
                              margin='none'
                            >
                              {'Batterie '}
                            </Label>
                            <Value
                              value={charge}
                              units='%'
                              size='small'
                            />
                            <Value
                                value={9.5}
                                units='V'
                                size='small'
                            />
                            <Value
                                value={13}
                                units='A'
                                size='small'
                            />
                        </Box>}
            >
            </Meter>
            
          </Box>
        </Header>
        <Section
          pad='medium'
          colorIndex='grey-4'
        >
            <Heading
              tag='h5'
              strong={true}
            >
              {"Modules"}
            </Heading>
            {errorNode}
            {listNode}
        </Section>
        <Section
          pad='medium'
          colorIndex='grey-4'
          flex='grow'
        >
            <Heading
              tag='h5'
              strong={true}
            >
              {"System"}
            </Heading>
            
              <Box
                pad='small'
                direction='row'
              >
                <Heading
                tag='h5'
                strong={true}
                margin='none'
                >
                    {"État : "}
                </Heading>
                {'\u00a0Précharge Batterie'}
              </Box>
              <Box
                colorIndex='grey-1'
                flex='grow'
                pad='small'
                separator='all'
              >
                
                    {"> [2017-11-16 20:17:32] ERROR slave-2 Critical voltage 9001 over threshold 9000"}
              </Box>
        </Section>
      </Article>
    );
  }
}

PrototypeDashboard.defaultProps = {
  error: undefined,
  slaves: []
};

PrototypeDashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  slaves: PropTypes.arrayOf(PropTypes.object)
};

PrototypeDashboard.contextTypes = {
  intl: PropTypes.object
};

const select = state => ({ ...state.slaves });

export default connect(select)(PrototypeDashboard);
