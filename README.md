# Bot Yui ユイ

Discord bot para postar cotações de moedas com *background* de *nekos*.

Clique [aqui](https://discord.com/api/oauth2/authorize?client_id=510838424161353731&permissions=183296&scope=bot) para convidar o bot para seu servidor.

<img src='./assets/example.jpeg'>

## Utilização

"#" + código da moeda. Exemplo: `#USD`

#### Cotações disponíveis:

- Dólar australiano (AUD)
- Dólar canadense (CAD)
- Franco suíço (CHF)
- Coroa dinamarquesa (DKK)
- Euro (EUR)
- Libra esterlina (GBP)
- Iene (JPY)
- Coroa norueguesa (NOK)
- Coroa sueca (SEK)
- Dólar americano (USD)

## Instalação do projeto

> Requer [Node.js](https://nodejs.org/en/) instalado e uma [aplicação no Discord](https://discordapp.com/developers/applications).

1) Crie um *fork* e clone o projeto para sua máquina.

1) Instale as dependências: `npm install`.

2) Crie um arquivo chamado `.env` na raiz do projeto com o *token* do seu bot:
```
# .env

BOT_TOKEN=
```

4) Use `npm run start` para iniciar o bot. Você também pode hospedar gratuitamente em algumas dessas plataformas:

- Heroku: https://www.heroku.com/home
- Glitch: https://glitch.com/


## *Sources*

> [Dados abertos do Banco Central do Brasil](https://dadosabertos.bcb.gov.br/dataset/dolar-americano-usd-todos-os-boletins-diarios) (cotações)

> [Nekos.life](https://github.com/Nekos-life/nekos-dot-life) (imagens)
