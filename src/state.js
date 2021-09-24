import { atom } from 'jotai'

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index
}

export const dataMeanAtom = atom([])

export const dataAtom = atom([])

export const municipalitiesAtom = atom((get) => {
  const data = get(dataAtom)

  return data.map(({ name }) => name).filter(onlyUnique)
})

export const selectedAtom = atom(null)

export const selectedMunicipalityAtom = atom((get) => {
  const data = get(dataAtom)
  const selected = get(selectedAtom)

  if (!selected) return []
  return data.filter((d) => d.name === selected)
})

export const availableLocales = [
  {
    name: '🇸🇪 Svenska',
    value: 'sv',
  },
  {
    name: '🇬🇧 English',
    value: 'en',
  },
]
export const localeAtom = atom(availableLocales[0])
