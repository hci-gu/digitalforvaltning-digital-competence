import Papa from 'papaparse'
import { useAtom } from 'jotai'
import { useEffect } from 'react'

const mapData = (row) => ({
  ...row,
  year: parseInt(row.year),
  mean: parseFloat(row.mean),
})

const useCsv = (filename, atom) => {
  const [, setData] = useAtom(atom)
  useEffect(() => {
    const run = async () => {
      const response = await fetch(filename)
      const reader = response.body.getReader()
      const result = await reader.read() // raw array
      const decoder = new TextDecoder('utf-8')
      const csv = decoder.decode(result.value) // the csv text
      const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
      const rows = results.data // array of objects
      setData(rows.map(mapData))
    }
    run()
  }, [setData])
}

export default useCsv
