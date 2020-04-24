# Bot Yui ユイ

Bot para [Discord](https://discordapp.com/) que informa a cotação (em reais) de algumas moedas com imagens de anime.


## Requisitos

- [Node.js](https://nodejs.org/en/) v12+
- [Discord app/bot](https://discordapp.com/developers/applications)

## Instalação

1) Instale os pacotes do projeto: `npm install`

2) Crie um arquivo chamado `.env` na raiz do projeto com as seguintes variáveis:
```
# .env

BOT_TOKEN = <bot_token>
BOT_PREFIX = <bot_prefix>
```

3) Digite `node .` para iniciar o bot. Caso queira disponibilizar seu bot em nuvem, recomendo a plataforma [Heroku](https://www.heroku.com/home).

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

## *Sources*

- Cotações: [Dados abertos do Banco Central do Brasil](https://dadosabertos.bcb.gov.br/dataset/dolar-americano-usd-todos-os-boletins-diarios).

- Imagens: [Nekos.life](https://github.com/Nekos-life/nekos-dot-life).
