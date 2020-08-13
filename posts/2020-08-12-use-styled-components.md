---
title: Use styled-components
category: styled-components
tagColor: "#FE5960"
description: e se livre de muitos problemas
date: 2020-08-12 07:18:36
image: assets/images/captura-de-tela-de-2020-08-12-17-30-39.png
---
## CSS, o cara legal

> CSS é muito difícil. Se te dizem o contrário, é porque só querem te deixar feliz

Não me leve a mal. É bem legal trabalhar com CSS e muitas vezes temos muito prazer em conseguir criar nossos ~~desenhos~~ componentes e páginas, mas o CSS também tem vários problemas. 

Os principais problemas ocorrem quando estamos estilizando uma aplicação muito grande.

Muitas vezes nem sabemos mais quais são todos os componentes que existem na nossa aplicação e o problema se agrava quando existem várias outras pessoas desenvolvendo junto com a gente.

> CSS não está a frente do seu tempo

O CSS, está evoluindo. Já temos funcionalidades bem legais, como por exemplo a possibilidade de utilizarmos variáveis dentro do CSS, mas mesmo com algumas funcionalidades novas, ainda temos alguns problemas.

![amazing gif](https://media.giphy.com/media/13FrpeVH09Zrb2/giphy.gif)

> **No começo**:  vou arrumar aqui, e... ops quebrou ali..., hummm é só arrumar aqui e ali...
>
> **No fim**: parece que estou no começo

## Problemas conhecidos

Alguns dos principais problemas de CSS são:

- **COLISÃO DE ESTILOS**

Como o CSS não é definido por componente ou por página, ele é carregado para o nosso site e o estilo é aplicado sobre todo o HTML visível. Quando precisamos importar alguma biblioteca, pode acontecer que essa biblioteca possua as mesmas classes ou possua uma especificidade maior que acaba colidindo com o nosso código, gerando alguns problemas no estilo da nossa aplicação.

- **CÓDIGO NÃO UTILIZADO**

Muitas vezes escrevemos o CSS pensando em várias formas de representar um componente, como por exemplo, botões de diferentes formas. Precisamos carregar o CSS de todos os estilos, mas não necessariamente precisamos utilizar todos os estilos em na mesma página. Com isso, acabamos carregando todos os estilos de botões que não serão utilizados ali. Isso trás mais problemas para o *client* que acaba gastando mais banda sem necessidade.

- **DIFICULDADE NA MANUTENÇÃO**

Muitas vezes quando precisamos atualizar um estilo, acabamos quebrando outro estilo em outra parte do código que não tem nada a ver com o primeiro estilo. Isso faz com que a manutenção seja muito mais custosa do que deveria ser e precisamos ficar "cavando" muito código para não corremos o risco de quebrar algo que não deveria ser quebrado.

> Less, Sass, Stylus. Como vivem? O que comem?

![sass not less - batman](https://memegenerator.net/img/instances/55042898/sass-not-less.jpg)

Os pré-processadores estão aí e ajudam muito, principalmente com a possibilidade de utilizar variáveis no CSS (recurso que antes não existia no css, mas agora existe) e com a facilidade em trabalhar com aninhamento de estilos (cascatas), mas continuaram com os problemas clássicos, além de abrir margem para **péssimas práticas**, como por exemplo o aninhamento excessivo:

```scss
// nested
section {
  nav {
    ul {
      li {
        a {
        }
      }
    }
  }
}

// in line
nav ul li a { ... }
```

Quem nunca viu um código `scss` com todo esse aninhamento, não é mesmo?

Esse aninhamento não é uma boa prática, porque você acaba criando uma especificidade enorme para esse componente, e consequentemente se quisermos alterar esse estilo em algum outro lugar, precisaremos deixar esse código ainda mais específico, muitas vezes precisando inserir um `id` ou mais um `seletor`, ou até mesmo um `!important`, o que não é nada legal.

![deselegante](https://media.giphy.com/media/dCB56ll26OPsdTg7ou/giphy.gif)

## STYLED-COMPONENTS, seu amiguinho

Styled Components é uma biblioteca que, através de um conjunto de práticas, resolve problemas complexos do CSS.

As principais vantagens na utilização do **styled-components** são:

- **CRITICAL CSS AUTOMÁTICO**

O styled-components monitora quais componentes são renderizados em uma página e só injeta os estilos desses componentes, de forma totalmente automática. Isso significa que o *client* carrega a menor quantidade de código necessária para a renderização.

- **ESCOPO DEFINIDO**

Os estilos são criados para cada componente, de forma isolada. Por mais que os componentes estilizados possam ter o mesmo nome, os estilos não se colidirão pois o escopo é individual.

- **REMOÇÃO DE CSS NÃO UTILIZADO**

Todo o CSS não utilizado não é carregado. Se o componente não for utilizado, to o seu estilo será deletado.

- **ESTILOS DINÂMICOS**

É possível alterar o estilo dos componentes através das `propriedades` e `temas` recebidos.

- **VENDOR PREFIXING AUTOMÁTICO**

Propriedades como `-webkit`, `-moz-`, `-ms` e `-o-` não precisam ser mais inseridas, pois o `styled-components` faz esse trabalho de forma automática.

![wonderful](https://media.giphy.com/media/dycoeyAvTEkaKgvcWT/giphy.gif)

- **MANUTENÇÃO SIMPLIFICADA E SEM DOR**

O estilo que está sendo alterado corresponde somente ao componente que o importa.

---

Styled Components é incrível, não é mesmo?

[Nesse repositório](https://github.com/coderamos/template-reactjs) você pode observar como eu utilizei `styled-components` de forma bem simples.

Comenta aí se você já utiliza `styled-components`.