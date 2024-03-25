import type { Component } from 'vue'

export const photoItems = Array.from(Object.entries(import.meta.glob('./*.md', { eager: true })))
  .map(([path, page]: any) => ({
    date: path.slice(2, -3) as string,
    comp: page.default as Component,
  }))
  .sort((a, b) => b.date.localeCompare(a.date))
