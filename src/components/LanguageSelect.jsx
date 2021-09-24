import { useAtom } from 'jotai'
import React from 'react'
import { Select } from 'antd'
import { availableLocales, localeAtom } from '../state'
import styled from 'styled-components'

const Container = styled.div`
  align-self: flex-end;
  justify-self: flex-end;
`

const LanguageSelect = () => {
  const [locale, setLocale] = useAtom(localeAtom)

  return (
    <Container>
      <Select
        defaultValue={locale.value}
        onChange={(val) =>
          setLocale(availableLocales.find((locale) => locale.value === val))
        }
      >
        {availableLocales.map(({ name, value }) => (
          <Select.Option value={value} key={`Locale_${value}`}>
            <span>
              {name.split(' ').map((s, i) => (
                <span style={{ paddingRight: i === 0 ? 10 : 0 }} key={`${s}_i`}>
                  {s}
                </span>
              ))}
            </span>
          </Select.Option>
        ))}
      </Select>
    </Container>
  )
}

export default LanguageSelect
