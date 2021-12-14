# Greenthumb

# Como funciona

Basicamente o aplicativo trabalha com `CustomEvents` utilizado junto ao componente de `select`.
A partir disso, são reunidos todas as opções selecionadas pelo usuário em um estado local, e quando
todos os items obrigatórios(paramêtros utilizados pela API) são preenchidos, uma `request` é enviada
para o serviço fornecido. Após obter essa resposta é construida a grade de produtos que é exibida para o usuário.
Em casos que nenhuma resposta é retornada pelo serviço, é exibido uma "tela" de nenhum item encontrado.

# Tecnologias

- `CSS`: Utilizado pré-processador SCSS para as folhas de estilo
- `JS`: Nenhum framework foi utilizado neste projeto, apenas Javascript em sua forma nativa suportada pelo browser.

# Estrutura de pastas

- `images`: Local onde as imagens utilizadas no projeto estão armazenadas.
- `scripts`: Para criar uma estrutura de pasta que considero adequado para tornar uma aplicação escalável, utilizei conhecimento agregado baseado em minha experiência profissional.
- `stylesheet`: Dentro da pasta onde foi inserido todo o estilo do aplicativo, foi utilizado uma adaptação do padrão SMACSS. Também tentei utilizar o padrão RSCSS em conjunto.

# Modulos usados no projeto

- [axios](https://github.com/axios/axios) - Usado para realizar chamadas da API consumida no projeto.
- [parcel](https://github.com/parcel-bundler/parcel) - Usado para compilar arquivos JS e SCSS.
- [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver) - Usado para criar `aliases` de `paths` dentro do projeto.

# Feedback

Dito tudo isso, ficarei feliz em ouvir a opinião de vocês sobre este pequeno projeto. Foi um desafio muito legal
e estarei totalmente aberto a ouvir sobre os possiveis pontos de melhoria do mesmo.

E se você leu até aqui você é dahora!
Grande abraço!
