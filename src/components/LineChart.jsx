import { Line } from '@ant-design/charts'
import { useAtom } from 'jotai'
import React from 'react'
import { dataMeanAtom, selectedAtom, selectedMunicipalityAtom } from '../state'

const colorForName = (name, opacity = 1) => {
  switch (name) {
    case 'agencies':
      return `rgba(91, 143, 249, ${opacity})`
    case 'municipalities':
      return `rgba(97, 221, 170, ${opacity})`
    case 'OMX30':
      return `rgba(101, 120, 155, ${opacity})`
    case 'regions':
      return `rgba(246, 189, 23, ${opacity})`
    default:
      break
  }
}

const LineChart = () => {
  const [data] = useAtom(dataMeanAtom)
  const [selected] = useAtom(selectedAtom)
  const [selectedMunicipality] = useAtom(selectedMunicipalityAtom)

  var config = {
    data: [
      ...data.map((d) => ({ ...d, selected: false })),
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
  }
  return <Line {...config} />
}

export default LineChart
