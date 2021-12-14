# Greenthumb


# Um pouco sobre

O objetivo deste desafio era construir uma aplicação sem uso de frameworks (Ex: React, Angular entre outros) de acordo com um layout responsivo. Para que o projeto funcione como o esperado, existia a necessidade de integrar com uma API que aceita três paramêtros.

O esperado é que os `selects` fossem integrados entre si para trazer a lista de plantas dinamicamente, conforme a combinação das opções.

Com estas informações o aplicativo foi construido usando [CustomEvents](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent) no componente `select` para cumprir os requisitos mencionados acima.

A partir disso, são reunidos todas as opções selecionadas pelo usuário em um estado local, e quando
todos os items obrigatórios(paramêtros utilizados pela API) são preenchidos, uma `request` é enviada
para o serviço fornecido.

Após obter essa resposta é construida a grade de produtos que é exibida para o usuário.

Em casos que nenhuma resposta é retornada pelo serviço, é exibido uma "tela" de nenhum item encontrado.

# Como executar o projeto

O bundle do projeto é gerado utilizando [ParcelJS](https://parceljs.org/), para ve-lo funcionando execute o seguinte comando em seu terminal:

```sh
yarn start
```

# Tecnologias

- `CSS`: Utilizado pré-processador SCSS para as folhas de estilo
- `JS`: Nenhum framework foi utilizado neste projeto, apenas Javascript em sua forma nativa suportada pelo browser.
- `DOC`: Utilizado JSDoc para documentar funções dentro do projeto.

# Estrutura de pastas

- `images`: Local onde as imagens utilizadas no projeto estão armazenadas.
- `scripts`: Para criar uma estrutura de pasta que considero adequado para tornar uma aplicação escalável, utilizei conhecimento agregado baseado em minha experiência profissional.
- `stylesheet`: Dentro da pasta onde foi inserido todo o estilo do aplicativo, foi utilizado uma adaptação do padrão SMACSS. Também tentei utilizar o padrão RSCSS em conjunto.

# Modulos usados no projeto

- [axios](https://github.com/axios/axios) - Usado para realizar chamadas da API consumida no projeto.
- [parcel](https://github.com/parcel-bundler/parcel) - Usado para compilar arquivos JS e SCSS.
- [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver) - Usado para criar `aliases` de `paths` dentro do projeto.

# Feedback

Você tem alguma dúvida sobre o projeto ou uma sugestão? ficarei feliz em ouvir a sua opinião sobre este pequeno projeto. Sempre estarei aberto a possiveis pontos de melhoria do mesmo.

E se você leu até aqui você é dahora!
Grande abraço!
