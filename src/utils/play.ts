import { atom } from 'recoil'

export const audioState = atom<HTMLAudioElement | null>({
  key: 'audioKey',
  default: null
})
