import { useAtom } from 'jotai'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styled from 'styled-components'
import LanguageSelect from './components/LanguageSelect'
import LineChart from './components/LineChart'
import SearchSelect from './components/SearchSelect'
import useText from './hooks/useText'

const Container = styled.div`
  padding: 1rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  > * {
    margin-top: 0.5rem;
  }

  @media (max-width: 960px) {
    width: 100%;
    padding: 0.5rem;
  }
`

const Content = styled.div`
  display: grid;

  grid-template-columns: 2fr 1fr;

  > div {
    padding: 1rem;
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

const Footer = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;

  justify-content: flex-end;
  font-weight: 200;

  > a {
    font-weight: 400;
    margin: 0 3px;
  }
`

const App = () => {
  const { header, body, createdBy } = useText()

  return (
    <Container>
      <LanguageSelect />
      <Content>
        <LineChart />
        <div>
          <h1>{header}</h1>
          <ReactMarkdown children={body} remarkPlugins={[remarkGfm]} />
          <SearchSelect />
        </div>
      </Content>
      <Footer>
        {createdBy}
        <a href="https://hci-gu.github.io/appademin/" target="_blank">
          Appademin
        </a>{' '}
        @ GU
      </Footer>
    </Container>
  )
}

export default App
