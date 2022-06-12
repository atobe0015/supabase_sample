import localForage from 'localforage'
import { AtomEffect } from 'recoil'

type LocalForageEffect = (TKey: string) => AtomEffect<any>
export const localForageEffect: LocalForageEffect = (key: string) => {
  return ({ setSelf, onSet }) => {
    const loadPresisted = async () => {
      const savedValue: string | null = await localForage.getItem(key)
      if (savedValue) setSelf(JSON.parse(savedValue))
    }

    loadPresisted()

    onSet((newValue) => {
      localForage.setItem(key, JSON.stringify(newValue))
    })
  }
}
