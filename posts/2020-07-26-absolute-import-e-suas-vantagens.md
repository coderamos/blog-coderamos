---
title: Paths personalizados e suas vantagens
category: code pattern
tagColor: "#009D3B"
description: Deixando os seus imports mais elegantes e organizados
date: 2020-07-26 03:34:17
image: assets/images/coderamos.png
---
Se existe uma dor que me incomoda quando estou desenvolvendo uma apliação com muitos arquivos que chamam outros arquivos, é o excesso de `../../` nos imports desses arquivos.

É comum vermos que a medida que a nossa aplicação vai crescendo, as pastas dos arquivos do nosso projeto vão se aninhando cada vez mais dentro de outras pastas, e quando menos esperamos nos deparamos com o seguinte exemplo de import:

```jsx
import ExampleComponent from '../../../../../../src/components/ExampleComponent/'
```

O exemplo acima é real e é muito mais comum do que imaginamos. Infelizmente o uso excessivo desses `../` traz algumas dores para a manutenabilidade do nosso código, dentre elas, o retrabalho de consertar o caminho relativo toda vez que precisamo alterar o local de um arquivo importador ou do arquivo importado.

Uma das formas mais simples de deixarmos esse import mais elegante e organizado é criando um path personalizado e deixando-o como absoluto. Dessa forma, o exemplo acima poderia ficar assim:

```jsx
import ExampleComponent from '~/components/ExampleComponent/'
```

No exemplo acima, o prefixo `~` foi configurado como um caminho absoluto de um diretório do nosso projeto, nesse caso o diretório é a pasta `src`. Dessa forma, não importa em qual pasta o nosso arquivo esteja, quando utilizamos o prefixo `~/` sempre estaremos importando o path absoluto da pasta `src`.

Bem louco né?!

![amazing gif](https://media.giphy.com/media/1yiPWNsQ1vq7V90fRY/giphy.gif)

### Fazendo acontecer

#### Instalando as dependências necessárias

Antes de tudo, precisaremos instalar e configurar três dependências para que essa mágica funcione. E elas são:

##### react-app-rewired e customize-cra

Na raiz do nosso projeto, vamos executar o comando abaixo para personalizarmos as configurações do webpack sem a necessidade de utilizar o `eject` e sem a necessidade de criar um fork do react-scripts.

```bash
yarn add -D react-app-rewired customize-cra
```

##### babel-plugin-root-import

Agora vamos executar o comando abaixo para importarmos arquivos usando paths personalizados.

```bash
yarn add -D babel-plugin-root-import
```

#### Criando o 'config-overrides.js'

Agora na raiz do nosso projeto, criaremos um arquivo chamado `config-overrides.js`. Ele será o responsável por estabelecer a pasta raíz do nosso projeto.

Insira esse código no arquivo:

```jsx
const { addBabelPlugin, override } = require('customize-cra')

module.exports = override(
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ])
)
```

#### Facilitando a vida do ~~dev~~ editor

Na raiz do nosso projeto, criaremos um arquivo chamado `jsconfig.json`. Ele será o responsável por fazer com que o VSCODE entendar os paths personalizados.

vamos inserir esse código no arquivo:

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "~/*": ["*"]
    }
  }
}
```

#### Últimos detalhes

Por último, precisamos atualizar os scripts no arquivo `package.json`. Deixe-os dessa forma:

```json
{
  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  }
}
```

Como você pode observar, estamos substituindo todos os scripts `react-scripts` por `react-app-rewired`, com excessão do script **eject**.

### Tudo pronto!

Agora podemos utilizar qualquer arquivo dentro da nossa pasta `src` utilizando o `~/` no momento do import.

```jsx
import ExampleComponent from '~/components/ExampleComponent/'
```

### E...

Se quiser ver esse exemplo na prática, você pode dar uma olhadinha no template que eu criei para projetos React clicando [aqui](https://github.com/coderamos/template-reactjs).

Lá eu também configurei o Eslint e outras coisas para facilizar a estrutura inicial do seu projeto.

Comenta ai o que achou :)

