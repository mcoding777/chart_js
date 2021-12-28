import 'chart.js/auto'
import { Chart } from 'react-chartjs-2'

// chart.js로 만든 막대 차트

function Chart3() {

    const data = {
      labels: ['2015', '2016', '2017', '2018', '2019', '2020'],
      datasets: [
        {
          type: 'bar',
          label: '릴리즈되는 한국 컨텐츠 수',
          borderColor: 'white',
          borderWidth: 5,
          backgroundColor: 'rgb(255, 99, 132)',
          data: [700, 600, 807, 432, 234, 453],
        },
      ],
    };
  
    return (
        <div className='chart3Container'>
            <Chart type="bar" data={data} />
        </div>
    )
  }

export default Chart3;