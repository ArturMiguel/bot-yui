# Bot Yui ユイ

Bot para [Discord](https://discordapp.com/) que informa a cotação (em reais) de algumas moedas com *background* de anime.

Clique [aqui](https://discordapp.com/api/oauth2/authorize?client_id=510838424161353731&permissions=149504&scope=bot) para convidar o bot para seu servidor.

## Requisitos

- [Node.js](https://nodejs.org/en/)
- [Discord app/bot](https://discordapp.com/developers/applications)

## Instalação

1) Instale os pacotes do projeto: `npm install`

2) Crie um arquivo chamado `.env` na raiz do projeto com as seguintes variáveis:
```
# .env

BOT_TOKEN = "bot_token"
PREFIX = "bot_prefix"
```

3) Digite `node .` para iniciar o bot.

## Utilização

> {Prefixo do bot}{Código da moeda}

#### Moedas disponíveis

| Código | Moeda |
| --- | --- |
| AUD | Dólar australiano |
| CAD | Dólar canadense |
| CHF | Franco suíço |
| DKK | Coroa dinamarquesa |
| EUR | Euro |
| GBP | Libra esterlina |
| JPY | Iene |
| NOK | Coroa norueguesa |
| SEK | Coroa sueca |
| USD | Dólar americano |

#### Exemplos

![](./assets/example.jpeg)

## *Sources*

- Cotação: [Dados abertos do Banco Central do Brasil](https://dadosabertos.bcb.gov.br/dataset/dolar-americano-usd-todos-os-boletins-diarios).

- Imagens: [Nekos.life](https://github.com/Nekos-life/nekos-dot-life).
