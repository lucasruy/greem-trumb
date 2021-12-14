# Greenthumb

# Como funciona

Basicamente o aplicativo trabalha com `CustomEvents` utilizado junto ao componente de `select`.
A partir disso, são reunidos todas as opções selecionadas pelo usuário em um estado local, e quando
todos os items obrigatórios(paramêtros utilizados pela API) são preenchidos, uma `request` é enviada
para o serviço fornecido. Após obter essa resposta é construida a grade de produtos que é exibida para o usuário.
Em casos que nenhuma resposta é retornada pelo serviço, é exibido uma "tela" de nenhum item encontrado.

# Estrutura de pastas

- `images`: Segui o padrão que foi fornecido no projeto base pois considerei muito bem organizado.
- `scripts`: Para criar uma estrutura de pasta que considero adequado para tornar uma aplicação escalável, utilizei conhecimento agregado baseado em minha experiência profissional.
- `stylesheet`: Dentro da pasta onde foi inserido todo o estilo do aplicativo, foi utilizado uma adaptação do padrão SMACSS. Também tentei utilizar o padrão RSCSS em conjunto, porém com a falta de experiencia em aplicar o mesmo espero uma resposta de vocês sobre como ficou essa implementação.

# Modulos usados no projeto

- [axios](https://github.com/axios/axios) - Used to make requests to API's.
- [parcel](https://github.com/parcel-bundler/parcel) - Used to compile JS and SCSS files.
- [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver) - Used to create directory aliases.

# Feedback

Dito tudo isso, ficarei feliz em ouvir a opinião de vocês sobre este pequeno projeto. Foi um desafio muito legal
e estarei totalmente aberto a ouvir sobre os possiveis pontos de melhoria do mesmo.

E se você leu até aqui você é zika!
Grande abraço!
