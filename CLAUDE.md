# CLAUDE.md — Blog Pessoal

Este arquivo define o contexto, stack, convenções e diretrizes para o agente de desenvolvimento deste projeto. Leia-o integralmente antes de qualquer tarefa.

---

## 🎯 Visão geral do projeto

Blog pessoal hospedado via **GitHub Pages**, construído com **React**. O objetivo é ter um espaço de publicação de artigos técnicos e pessoais, com foco em boa experiência de leitura, performance e facilidade de manutenção de conteúdo.

---

## 🛠️ Stack & Ferramentas

| Camada        | Tecnologia                              |
|---------------|-----------------------------------------|
| Framework     | React 18+                               |
| Build Tool    | Vite                                    |
| Roteamento    | React Router DOM v6 (HashRouter)        |
| Estilização   | CSS Modules ou Tailwind CSS             |
| Conteúdo      | Markdown (`.md`) com front matter YAML  |
| Parser MD     | `gray-matter` + `react-markdown`        |
| Deploy        | GitHub Pages via `gh-pages`             |
| Lint/Format   | ESLint + Prettier                       |
| Controle      | Git + GitHub                            |

> ⚠️ **Atenção ao roteamento:** GitHub Pages não suporta rotas HTML5 History API diretamente. Use sempre `HashRouter` do React Router (URLs com `#`), ou configure um `404.html` com redirect workaround se preferir `BrowserRouter`.

---

## 📁 Estrutura de pastas

```
/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/          # Imagens, ícones estáticos
│   ├── components/      # Componentes reutilizáveis (Header, Footer, Card, etc.)
│   ├── pages/           # Páginas da aplicação (Home, Post, About)
│   ├── posts/           # Arquivos .md com os posts do blog
│   ├── hooks/           # Custom hooks (ex: usePosts, useTheme)
│   ├── utils/           # Funções utilitárias (ex: formatDate, slugify)
│   ├── styles/          # CSS global, variáveis, reset
│   ├── App.jsx
│   └── main.jsx
├── CLAUDE.md
├── package.json
└── vite.config.js
```

---

## ✍️ Formato dos posts

Cada post é um arquivo `.md` dentro de `src/posts/`, com front matter YAML no topo:

```markdown
---
title: "Título do post"
date: "2025-04-01"
slug: "titulo-do-post"
tags: ["react", "javascript", "data-engineering"]
excerpt: "Breve descrição que aparece na listagem."
published: true
---

Conteúdo do post em Markdown aqui...
```

> Posts com `published: false` não devem aparecer na listagem pública.

---

## 🔧 Configuração do Vite para GitHub Pages

O `vite.config.js` deve conter o `base` configurado com o nome do repositório:

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/nome-do-repositorio/', // substitua pelo nome real do repo
})
```

---

## 🚀 Deploy

O deploy é feito via pacote `gh-pages`. O script no `package.json` deve ser:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Para publicar: `npm run deploy`

---

## 🌐 Domínio customizado

O blog usa um domínio próprio no lugar da URL padrão `gustavoueti.github.io`.

### Configuração do arquivo CNAME

Crie o arquivo `public/CNAME` (sem extensão) com apenas o domínio, sem `https://`:

```
meudominio.com
```

O Vite copia automaticamente tudo que está em `public/` para o `dist/` no build, então o `CNAME` chegará corretamente ao GitHub Pages a cada deploy.

> ⚠️ **Nunca adicione o `CNAME` manualmente pela interface do GitHub** — ele será sobrescrito no próximo deploy. O arquivo deve sempre vir do repositório.

### Configuração do Vite com domínio customizado

Com domínio próprio, o `base` do `vite.config.js` deve ser `/` (raiz), não o nome do repositório:

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
})
```

### Configuração de DNS

No painel do seu registrador de domínio, configure os seguintes registros DNS:

**Para domínio apex** (ex: `meudominio.com`) — adicione 4 registros tipo `A`:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Para subdomínio** (ex: `www.meudominio.com`) — adicione um registro tipo `CNAME`:
```
www  →  gustavoueti.github.io
```

### Ativando no GitHub

Após o primeiro deploy com o `CNAME`:
1. Acesse o repositório → **Settings** → **Pages**
2. O campo "Custom domain" deve estar preenchido automaticamente
3. Marque a opção **"Enforce HTTPS"** (disponível após o DNS propagar, pode levar até 24h)

### Checklist de domínio

- [ ] Arquivo `public/CNAME` criado com o domínio correto
- [ ] `base: '/'` configurado no `vite.config.js`
- [ ] Registros DNS configurados no registrador
- [ ] HTTPS ativado nas configurações do GitHub Pages

---

## 📐 Convenções de código

- **Componentes**: PascalCase (`PostCard.jsx`, `Header.jsx`)
- **Hooks**: camelCase com prefixo `use` (`usePosts.js`)
- **Utilitários**: camelCase (`formatDate.js`, `slugify.js`)
- **CSS Modules**: mesmo nome do componente (`PostCard.module.css`)
- **Commits**: seguir [Conventional Commits](https://www.conventionalcommits.org/):
  - `feat:` nova funcionalidade
  - `fix:` correção de bug
  - `style:` mudança visual sem lógica
  - `content:` adição ou edição de post
  - `chore:` configuração, dependências, build

---

## 🎨 Princípios de design

- Foco total na **legibilidade**: tipografia generosa, linha de leitura controlada (max ~70 caracteres), espaçamento confortável.
- Suporte a **modo claro e escuro** via CSS custom properties ou Tailwind dark mode.
- **Mobile-first**: o layout deve funcionar perfeitamente em telas pequenas antes de escalar.
- **Performance**: sem bibliotecas pesadas desnecessárias. Imagens otimizadas. Lazy loading onde fizer sentido.
- Visual **limpo e editorial**, sem exageros de animação — priorizando a leitura.

---

## 📄 Páginas principais

| Rota              | Descrição                                      |
|-------------------|------------------------------------------------|
| `/`               | Home com listagem de posts mais recentes       |
| `/post/:slug`     | Leitura de um post individual                  |
| `/about`          | Página "Sobre mim"                             |
| `/tags/:tag`      | Listagem de posts filtrados por tag (opcional) |

---

## ✅ Checklist antes de qualquer PR/commit

- [ ] O site buildou sem erros (`npm run build`)
- [ ] O roteamento funciona corretamente com `HashRouter`
- [ ] Novos posts têm front matter completo e válido
- [ ] Responsividade verificada em mobile e desktop
- [ ] Nenhuma dependência desnecessária adicionada

---

## 💡 Diretrizes para o agente

- Sempre consulte este arquivo antes de propor mudanças arquiteturais.
- Prefira soluções simples e sem over-engineering — este é um blog, não um SaaS.
- Ao criar novos componentes, siga a estrutura de pastas definida acima.
- Ao sugerir dependências novas, justifique a necessidade e avalie o impacto no bundle.
- Nunca quebre o fluxo de deploy para o GitHub Pages.
- Quando houver dúvida sobre roteamento, prefira `HashRouter`.