# Espaço Sorriê Odontologia

Site institucional elegante e moderno para a clínica odontológica Espaço Sorriê, localizada em Paulínia/SP.

## Sobre o Projeto

Site profissional desenvolvido com React, TypeScript e Tailwind CSS, apresentando todos os serviços e informações da clínica de forma elegante e responsiva.

### Características

- Design sofisticado com paleta de cores branco, dourado metálico e bege
- Totalmente responsivo (mobile-first)
- Animações suaves e interativas
- Integração direta com WhatsApp
- Google Maps integrado
- Seções completas: Hero, Sobre, Serviços, Resultados, Depoimentos e Contato
- Botão flutuante de WhatsApp
- Navegação suave entre seções
- SEO otimizado

## Tecnologias Utilizadas

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (ícones)

## Como Rodar o Projeto Localmente

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/espaco-sorrie-odontologia.git
cd espaco-sorrie-odontologia
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

## Build para Produção

Para gerar a versão otimizada para produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

Para testar a build localmente:

```bash
npm run preview
```

## Como Publicar no GitHub Pages

### Método 1: Usando GitHub Actions (Recomendado)

1. Crie um repositório no GitHub

2. No arquivo `vite.config.ts`, adicione a propriedade `base`:
```typescript
export default defineConfig({
  base: '/espaco-sorrie-odontologia/',
  plugins: [react()],
  // ...
});
```

3. Crie o arquivo `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'

    - name: Install dependencies
      run: npm install

    - name: Build
      run: npm run build

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

4. Faça push do código:
```bash
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/seu-usuario/espaco-sorrie-odontologia.git
git push -u origin main
```

5. Nas configurações do repositório, vá em Settings > Pages e selecione a branch `gh-pages` como source.

### Método 2: Deploy Manual

1. Instale o pacote `gh-pages`:
```bash
npm install --save-dev gh-pages
```

2. Adicione os scripts no `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Execute o deploy:
```bash
npm run deploy
```

## Estrutura de Pastas

```
espaco-sorrie-odontologia/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── BeforeAfter.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   ├── WhatsAppButton.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## Seções do Site

1. **Hero**: Banner principal com chamada para ação e informações de localização
2. **Sobre**: Apresentação da clínica, equipe e diferenciais
3. **Serviços**: Cards elegantes com todos os serviços oferecidos
4. **Antes e Depois**: Galeria de resultados
5. **Depoimentos**: Avaliações de pacientes satisfeitos
6. **Contato**: Formulário, mapa e informações de contato

## Personalização

Para personalizar cores, edite o arquivo `tailwind.config.js` e as classes nos componentes.

## Contato da Clínica

- **Telefone/WhatsApp**: (19) 95321-4847
- **Endereço**: Rua Santa Cruz, 164 - Sala 04, Galeria Casa Verde, Nova Paulínia - Paulínia/SP
- **E-mail**: contato@espacosorrie.com.br

## Licença

Este projeto foi desenvolvido para uso exclusivo da Espaço Sorriê Odontologia.

---

Desenvolvido com dedicação para transformar sorrisos
