// import type { Component } from 'vue'

// export const photoItems = Array.from(Object.entries(import.meta.glob('./*.md', { eager: true })))
//   .map(([path, page]: any) => ({
//     date: path.slice(2, -3) as string,
//     comp: page.default as Component,
//   }))
//   .sort((a, b) => b.date.localeCompare(a.date))

export interface PhotoMate {
  text?: string
  lang?: string
}

export interface Photo extends PhotoMate {
  name: string
  url: string
}

const metaInfo = Object.entries(
  import.meta.glob<PhotoMate>('./**/*.json', {
    eager: true,
    import: 'default',
  }),
).map(([name, data]) => {
  name = name.replace(/\.\w+$/, '').replace(/^\.\//, '')
  return {
    name,
    data,
  }
})

const photos = Object.entries(
  import.meta.glob<string>('./**/*.{jpg,png,JPG,PNG}', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
)
  .map(([name, url]): Photo => {
    name = name.replace(/\.\w+$/, '').replace(/^\.\//, '')
    return {
      ...metaInfo.find(info => info.name === name)?.data,
      name,
      url,
    }
  })
  .sort((a, b) => b.name.localeCompare(a.name))

export default photos
