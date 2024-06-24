---
title: Projects - Ajiu9
display: Projects
description: List of projects that I am proud of
art: dots
wrapperClass: 'text-center'
projects:
  Current Focus:
    - name: 'commonuse'
      link: 'https://github.com/ajiu9/commonuse'
      desc: 'the common use for js'
      icon: 'i-carbon:tools-alt h-1em'
    - name: 'ts-type'
      link: 'https://github.com/ajiu9/ts-type'
      desc: 'the type for ts'
      icon: 'i-file-icons:config-typescript h-1em'
  Components:
    - name: 'carousel'
      link: 'https://github.com/ajiu9/carousel'
      desc: 'A carousel, a group of carousels.'
      icon: 'i-material-symbols-light:view-carousel h-1em'
  Starter Template:
    - name: 'starter-ts'
      link: 'https://github.com/ajiu9/starter-ts'
      desc: 'A starter template for TypeScript projects.'
      icon: 'i-fluent:code-ts-16-filled h-1em'
  CLI:
    - name: 'obsidian'
      link: 'https://github.com/ajiu9/shell/tree/main/packages/obsidian'
      desc: 'shell script for obsidian'
      icon: 'i-simple-icons:obsidian h-1em'
  Configurations:
    - name: 'zsh'
      link: 'https://github.com/ajiu9/SoftwareConfiguration/tree/main//zsh'
      desc: 'my software configuration for zsh'
      icon: 'i-fluent-mdl2:configuration-solid h-1em'
    - name: 'espanso'
      link: 'https://github.com/ajiu9/SoftwareConfiguration/tree/main/espanso'
      desc: 'my software configuration for espanso'
      icon: 'i-bx:text h-1em'
---

<!-- @layout-full-width -->

<ListProjects :projects="frontmatter.projects" />
