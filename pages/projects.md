---
title: Projects - Ajiu9
display: 项目
description: List of projects that I am proud of
art: dots
wrapperClass: 'text-center'
projects:
  Current Focus:
    - name: 'Comuse'
      link: 'https://github.com/ajiu9/comuse'
      desc: 'the common use for js'
      icon: 'i-carbon:tools-alt h-1em'
    - name: 'ts-type'
      link: 'https://github.com/ajiu9/ts-type'
      desc: 'the type for ts'
      icon: 'i-file-icons:config-typescript h-1em'
  Components:
    - name: 'Carousel'
      link: 'https://github.com/ajiu9/carousel'
      desc: 'A carousel, a group of carousels.'
      icon: 'i-material-symbols-light:view-carousel h-1em'
  Starter Template:
    - name: 'Starter-Ts'
      link: 'https://github.com/ajiu9/starter-ts'
      desc: 'A starter template for TypeScript projects.'
      icon: 'i-fluent:code-ts-16-filled h-1em'
  CLI:
    - name: 'ninesh'
      link: 'https://github.com/ajiu9/ninesh'
      desc: 'My zsh config and obsidian script'
      icon: 'i-simple-icons:zsh h-1em'
  Configurations:
    - name: 'Eslint-Config'
      link: 'https://github.com/ajiu9/eslint-config'
      desc: 'My ESLint config presets'
      icon: 'i-mdi:eslint h-1em'
    - name: 'Espanso'
      link: 'https://github.com/ajiu9/SoftwareConfiguration/tree/main/espanso'
      desc: 'my software configuration for espanso'
      icon: 'i-bx:text h-1em'
---

<!-- @layout-full-width -->

<ListProjects :projects="frontmatter.projects" />
