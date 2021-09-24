import { Line } from '@ant-design/charts'
import { useAtom } from 'jotai'
import React from 'react'
import { dataMeanAtom, selectedAtom, selectedMunicipalityAtom } from '../state'
import useText from '../hooks/useText'

const colorForName = (name, opacity = 1) => {
  switch (name) {
    case 'Agencies':
    case 'Myndigheter':
      return `rgba(91, 143, 249, ${opacity})`
    case 'Municipalities':
    case 'Kommuner':
      return `rgba(97, 221, 170, ${opacity})`
    case 'Industry':
    case 'Näringsliv':
      return `rgba(101, 120, 155, ${opacity})`
    case 'Regions':
    case 'Regioner':
      return `rgba(246, 189, 23, ${opacity})`
    default:
      break
  }
}

const LineChart = () => {
  const [data] = useAtom(dataMeanAtom)
  const [selected] = useAtom(selectedAtom)
  const [selectedMunicipality] = useAtom(selectedMunicipalityAtom)
  const { xAxis, yAxis, names } = useText()

  var config = {
    height: 600,
    data: [
      ...data.map((d) => ({ ...d, name: names[d.name], selected: false })),
      ...selectedMunicipality.map((d) => ({ ...d, selected: true })),
    ],
    xField: 'year',
    yField: 'mean',
    seriesField: 'name',
    color: ({ name }) => {
      if (name === selected) {
        return 'rgba(1, 134, 133, 1)'
      }
      return colorForName(name, selected === null ? 1 : 0.33)
    },
    legend: { position: 'top' },
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 800,
      },
    },
    xAxis: {
      label: {
        autoRotate: false,
        style: {
          fill: '#aaa',
          fontSize: 12,
        },
      },
      title: {
        text: xAxis,
        style: { fontSize: 16 },
      },
    },
    yAxis: {
      label: {
        autoRotate: false,
        style: {
          fill: '#aaa',
          fontSize: 12,
        },
      },
      title: {
        text: yAxis,
        style: { fontSize: 16 },
      },
    },
  }
  return <Line {...config} />
}

export default LineChart
// ;('myndigheter, kommuner, regioner, näringsliv')
