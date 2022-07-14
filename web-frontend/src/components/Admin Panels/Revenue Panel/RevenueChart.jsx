import React, {useContext} from 'react';
import Highcharts from 'highcharts';
import {
  HighchartsProvider, HighchartsChart, Chart, XAxis, YAxis, Title, Subtitle, Legend, LineSeries
} from 'react-jsx-highcharts';
import { NftMoreInfoContext } from '../../../App';
const plotOptions = {
  series: {
    pointStart: 4010
  },

};

const RevenueChart = () => {

 const {ActiveNetworkThemeColorLighter, setActiveNetworkThemeColorLighter} = useContext(NftMoreInfoContext);
 const {ActiveNetworkThemeColorDarker, setActiveNetworkThemeColorDarker} = useContext(NftMoreInfoContext);
 
 return(
  <div >
    <HighchartsProvider Highcharts={Highcharts}>
      <HighchartsChart plotOptions={plotOptions}>
        <Chart colors={['#2f7ed8', '#0d233a', '#8bbc21', '#910000', '#1aadce',
        '#492970', '#f28f43', '#77a1e5', '#c42525', '#a6c96a']} backgroundColor={'rgba(5,5,10,.9)'} width={1920} height={700}/>
        
        <Title style={{color:'#fff',fontSize:'1.5vw'}}>Machine Capsule Sales </Title>

        <Subtitle>Data is live from MoralisDB</Subtitle>

        <Legend layout="vertical" align="right" verticalAlign="middle" />

        <XAxis>
          <XAxis.Title>Date</XAxis.Title>
        </XAxis>

        <YAxis>
          <YAxis.Title>Count</YAxis.Title>
          <LineSeries name="Capsules Sold" data={[6, 14, 14, 25, 113, 220, 300, 340]} />
          <LineSeries name="EMERALD balance" data={[612, 800, 900, 0, 400, 800, 850, 900]} />

        </YAxis>
      </HighchartsChart>
    </HighchartsProvider>
  </div>
 
 )};

export default RevenueChart;