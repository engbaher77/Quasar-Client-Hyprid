<template>
  <card-base>
    <apexchart type="polarArea" height=200 :options="chartOptions" :series="series"/>
  </card-base>
</template>

<script>
import CardBase from 'components/Dashboard/CardBase'
export default {
  name: 'ApexPolarMap',
  components: {
    CardBase
  },
  data () {
    return {
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
      chartOptions: {
        labels: ['GitHub', 'Facebook', 'Twitter', 'WhatsApp', 'Linkedin', 'Messenger', 'Bitbucket', 'Hubstaff', 'Jira'],
        title: {
          text: 'Polar Area',
          align: 'left',
          style: {
            color: '#FFF'
          }
        },
        chart: {
          type: 'polarArea',
          toolbar: {
            show: true
          }
        },
        stroke: {
          colors: ['#fff']
        },
        legend: {
          labels: {
            colors: '#FFF'
          },
          offsetY: -1
        },
        fill: {
          opacity: 0.8
        },
        yaxis: {
          labels: {
            style: {
              colors: '#FFF'
            }
          }
        }
      }

    }
  }
}
</script>
