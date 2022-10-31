import { selector } from 'recoil'

export const userSelector = selector({
  key: 'userLogedSelector',
  get: async () => {
    return await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          name: 'Transon Quan',
          age: 27,
          avatar: 'https://github.com/quanscheng.png',
          job: 'web devloper',
          company: 'Fastlane',
        })
      }, 1000)
    })
  },
})
