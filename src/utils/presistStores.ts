import localForage from 'localforage'
import { AtomEffect, DefaultValue } from 'recoil'

type LocalForageEffect = (TKey: string) => AtomEffect<any>
export const localForageEffect: LocalForageEffect =
  (key: string) =>
  ({ setSelf, onSet }) => {
    setSelf(
      localForage
        .getItem(key)
        .then((savedValue) => (savedValue != null ? JSON.parse(savedValue) : new DefaultValue())),
    )

    onSet((newValue, _, isReset) => {
      isReset ? localForage.removeItem(key) : localForage.setItem(key, JSON.stringify(newValue))
    })
  }
