// alert('contéudo') --> cria um box interativo ao abrir o navegador

// tipos dados primitivos:
// *string = tudo que é texto, caracter livre -- sempre entre aspas
// *números -- se colocado entre aspas, se torna string
// *boolean = true or false (afirmativo ou negativo)

// escrever código com nomes de variáveis intuitivas -- boa prática

// variáveis = let ou const
// *let = variável pode ser alternada
// *const = variável não pode ser alterada

// uma variável pode ser um objeto, ou seja, guardar várias informações

// dentro de um objeto não se usa "=", se usa ":"

// função = agrupar comandos que será repassado ao javascrip
// como criar uma função? --> function showMeSomenthing() {}
// para executar a função você escreve showMeSomething() fora das chaves
// function nomeDaFuncao (argumento) { code }

// DOM = document object model
// mapeamento de objetos do HTML, para se organizar

// três formas de boa prática na hora de escrever o código:
// *camelCase
// *PascalCase
// *snake_case

// boa prática ao executar uma função, iniciar o nome da função com uma ação, como por exemplo "changeSomething", "createSomething"

// DOM é muito importante durante o uso de uma função

// document.getElementByID('idQueSeráSubstituido').textContent = 'Texto que irá substituir o ID' -- lembrar de executar a função.
// =
// idQueseráSubstituido.textContent = "Texto que irá substituir od ID"

// Laço de repetição For of
// irá repetir até ser instruído a encerrar
// for(let i = 0; i <= 10; i++) { alert (i) } - irá repetir o alerta i até o número 10
// == é uma condição
// i = i + número --> icrementar = i++
// usamos o laço for para tudo que é necessário fazer repetidas vezes
// o for precisa de um início, de um final e o que irá fazer nas repetições

// template string --> indicar uma variável em meio a uma string --> deve-se utilizar a crase ``--> `https://${variável}.com`

// API exemplo ludico = voce esta em um restaurante e a gnt quer fazer um pedido, vms entender que é um restaurante maior, e eu quero pedir uma lasanha e voce quer um peixe grelhado. Sera que tem como chegar direto no cozinheiro e pedir? nao, um garçom ira atende-lo e ele ira anotar os pedidos em um bloco, agora ele ira caminhar com o bloco e deixar na cozinha, o cozinheiro n se interessa para quem é o pedido, ele simplesmente prepara

// API = mandar e receber dados

// consumir uma API = executando uma transação de dados

// JSON - documento para transacionar informações

// fetch = vai bater na url vai pegar o JSON que a API responde e vai trazer para dentro (o fetch não sabe que o retorno é um JSON) -- é uma função

// promise -- recurso da linguagem javascrip para poder pegar respostas de algo

// promise = .then()

// => arrow function = é uma forma reduzida da função
// argumento => { code }

const LinksSocialMedia = {
  github: 'maiasbarbara',
  youtube: 'channel/UCclf1ELbQy8VRRxfh8qUkFQ',
  instagram: 'maiasbarbara',
  facebook: 'maiasbarbara',
  twitter: 'maiambarbara'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
