import React from 'react'
import { Select } from 'antd'
import { useAtom } from 'jotai'
import { municipalitiesAtom, selectedAtom } from '../state'
import styled from 'styled-components'
import useText from '../hooks/useText'

const Container = styled.div`
  width: 200px;

  @media (max-width: 640px) {
    margin: 0 auto;
  }
`

const SearchSelect = () => {
  const [municipalities] = useAtom(municipalitiesAtom)
  const [, setSelected] = useAtom(selectedAtom)
  const { selectPlaceholder } = useText()

  const onChange = (value) => {
    setSelected(value)
  }

  return (
    <Container>
      <Select
        style={{ width: 200 }}
        showSearch
        placeholder={selectPlaceholder}
        optionFilterProp="children"
        onChange={onChange}
        filterOption={(input, option) =>
          option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        options={municipalities.map((value) => ({
          value,
        }))}
      />
    </Container>
  )
}

export default SearchSelect
