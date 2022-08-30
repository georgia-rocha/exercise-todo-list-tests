Esse é um projeto para o conteúdo sobre `RTL`.

### Antes de iniciar

- Crie um fork desse projeto, para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

Após feito o fork, clone o repositório criado para o seu computador.

Rode o `npm install`.

- Vá para a branch master do seu projeto e execute o comando:

 `git branch` ou `git branch -a`

Verifique se as seguintes branchs apareceram:

`exercise-one`
`exercise-two`
`exercise-three`

Aviso: Cada branch dessas será um exercício.

- Mude para a branch `exercise-one` com o comando `git checkout exercise-one`. 
> É nessa branch que você realizará a solução para o exercício 1, e assim por diante.

Aviso: Observe o que deve ser feito nas instruções para cada exercício.

Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a master, sinta-se a vontade!

**Atenção!**: Quando for criar o PR você irá se deparar com essa tela:

![PR do exercício](images/example-pr.png)

É necessário realizar uma mudança. Clique no _base repository_ como na imagem abaixo:

![Mudando a base do repositório](images/change-base.png)

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/TicTacToe`. Depois desse passo a página deve ficar assim:

![Após mudança](images/after-change.png)

Agora, basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

Aviso: Para cada PR realize esse processo.

### COMEÇANDO OS EXERCÍCIOS

#### Exercício 1

Implemente os seguintes testes:

- É necessário um botão para adicionar a tarefa.
- O botão precisa conter o texto "Adicionar".
- Ao ser clicado no botão, a tarefa digitada pelo o usuário precisa ser salva.

Pode adicionar mais testes que achar relevantes para verificar a funcionalidade desse botão.

---

#### Exercício 2

Teste a aplicação. Atenção ao que o teste orienta:

- (I) Use o array já disponibilizado no código para realizar os testes; (II) Cada elemento do array será uma tarefa; (III) Simule a adição de todas e depois verifique se elas estão aparecendo.
- Teste apenas o componente Item. 
> Ao passar uma string para o componente Item, a string precisa aparecer na tela.

---

#### Exercício 3

Diferente dos outros exercícios anteriores, os testes desse exercício já estão prontos. Será necessário criar apenas as funcionalidades que eles testam.

- Cada task adicionada deverá ter um botão, ao lado dela, com o texto "Selecionar"
- Cada task adicionada deverá ter outro botão ao lado dela com o texto "Remover", esse botão deverá estar desabilitado
- Ao clicar no botão "Selecionar" de uma task, ela deverá habilitar o seu botão de "Remover"
- Ao clicar no botão "Remover", a task deverá ser removida da tela

Aviso: Observe bem como os testes estão escritos, todos devem passar quando terminar a funcionalidade.
