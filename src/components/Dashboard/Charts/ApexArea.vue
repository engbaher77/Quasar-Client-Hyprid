<template>
  <card-base>
    <apexchart type="area" height="230" :options="chartOptions" :series="series"></apexchart>
  </card-base>
</template>

<script>
import CardBase from 'components/Dashboard/CardBase'

export default {
  name: 'ApexArea',
  data () {
    return {
      series: [{
        name: 'Active users',
        data: [79, 48, 39, 92, 67, 32, 94, 120]
      }],
      chartOptions: {
        fill: {
          gradient: {
            shade: 'dark',
            type: 'vertical',
            shadeIntensity: 0.5,
            gradientToColors: ['#17ead9'],
            inverseColors: false,
            opacityFrom: 0.9,
            opacityTo: 0.7,
            stops: [0, 100]
          }
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: 'Area',
          align: 'left',
          style: {
            color: '#FFF'
          }
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
          labels: {
            style: {
              colors: '#fff'
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: '#fff'
            }
          }
        }
      }
    }
  },
  components: {
    CardBase
  }
}
</script>

<style>

</style>
