import { useAtom } from 'jotai'
import { localeAtom } from '../state'

import en from '../texts/en'
import sv from '../texts/sv'

const useText = () => {
  const [locale] = useAtom(localeAtom)

  return locale.value === 'sv' ? sv : en
}

export default useText
