---
title: "Olá, mundo!"
date: "2026-04-01"
slug: "ola-mundo"
tags: ["blog", "primeiro-post"]
excerpt: "O primeiro post deste blog — um pouco sobre o projeto e o que esperar por aqui."
published: true
---

## Por que mais um blog?

A resposta honesta: porque quero um lugar só meu. Sem algoritmo, sem feed, sem engajamento forçado. Só texto.

Este blog foi construído com **React + Vite**, hospedado no GitHub Pages, e os posts são escritos em Markdown puro. Simples, rápido e fácil de manter.

## O que vem por aí

Pretendo escrever sobre:

- Engenharia de dados: pipelines, qualidade de dados, ferramentas
- Desenvolvimento web: React, performance, acessibilidade
- Reflexões sobre carreira e aprendizado contínuo

## Como foi feito

O projeto segue uma stack enxuta:

```js
// Roteamento com HashRouter para compatibilidade com GitHub Pages
import { HashRouter } from 'react-router-dom'
```

Posts são arquivos `.md` com front matter YAML, carregados via `import.meta.glob` do Vite e parseados com `gray-matter`.

Até o próximo post.
