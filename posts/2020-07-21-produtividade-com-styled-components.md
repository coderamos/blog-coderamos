---
title: Produtividade com styled-components
category: styled-components
tagColor: "#FE5960"
description: Duas boas práticas para melhorar o seu projeto com essa biblioteca fenomenal
date: 2020-07-21 04:08:43
image: assets/images/styled-components_3.png
---
O **styled-components** é uma biblioteca para estilizar a sua aplicação através do JavaScript e é utilizada principalmente na estilização de projetos React e React Native.

Quando pensamos em estilizar algo, também deveríamos estar pensando em como organizar esses estilos, e para quem está começando no mundo do desenvolvimento front end, essas duas práticas são fundamentais para a escrita e manutenção de um bom código:

### Crie estilos isolados

> Sempre que possível, crie estilos isolados.

Através dessa prática temos acesso aos estilos do seu componente de forma mais rápida e isso gera mais produtividade e torna a manutenibilidade seus estilos muito mais fácil.

Uma prática muito utilizada no mercado é criar o arquivo de estilos juntamente com o arquivo principal (`index.js`) do seu componente / página.

Nomear o seu arquivo como `styles.js` ou `styled.js` também é uma boa prática. Esses dois nomes são muito utilizados.

Como exemplo, essa é a estrutura dos arquivos de estilo que utilizei em um template para React, no meu GitHub:

![styled-components_structure-files](assets/images/styled-components_3.png "estrutura de arquivos usando styled-components")

### Crie estilos semânticos

Apesar do styled-components ser muito conhecido e adotado, é comum vermos muitos componentes de agrupamento e que deveriam possui escopo semântico, sendo criados como uma simples `div`. É extremamente importante não esquecermos de utilizar as tags de forma correta  e consciente.

Esse é um exemplo de como criamos e exportamos um estilizado com styled-components:

```jsx
export const ExampleComponentContainer = styled.div``;
```

Podemos acessar todas as outras tags como propriedades do styled, como `styled.header`, `styled.nav`, `styled.section`, `styled.article`, `styled.aside`, `styled.footer`, dentre outras.

---

Você pode acessar o template mencionado acima clicando [aqui](https://github.com/coderamos/template-reactjs). Baixe o projeto ai e me diga o que achou!