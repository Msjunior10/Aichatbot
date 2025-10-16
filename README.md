# ⚡ MS AI Assistant

Ett elegant AI-drivet chattbot med svart/vit tema och dynamisk bakgrund. Byggt med Node.js, Express och OpenAI API för säker och skalbar AI-kommunikation.

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Funktioner

- **🎨 Elegant Design**: Minimalistiskt svart/vit tema med dynamiska flytande kulor i bakgrunden
- **🌍 Flerspråksstöd**: 12 språk inklusive svenska, engelska, arabiska, spanska, franska, tyska, italienska, portugisiska, ryska, kinesiska, japanska och koreanska
- **🔒 Säker Backend**: Express.js server med säkerhetsåtgärder, CORS, rate limiting och helmet
- **⚡ Snabb Respons**: Optimerad för snabba svar med streaming och caching
- **📱 Responsiv Design**: Fungerar perfekt på desktop, tablet och mobil
- **🎭 Animerad Bakgrund**: 120 flytande kulor som skapar en levande bakgrund
- **🛡️ API-säkerhet**: OpenAI API-nyckel säkert lagrad på servern

## 🚀 Snabbstart

### Förutsättningar

- Node.js 18+ installerat
- Git installerat

### Installation

1. **Klona repositoryn**
```bash
git clone https://github.com/Msjunior10/Aichatbot.git
cd Aichatbot
```

2. **Installera dependencies**
```bash
npm install
```

3. **Starta servern**
```bash
# För utveckling (med nodemon)
npm run dev

# För produktion
npm start
```

4. **Öppna i webbläsaren**
```
http://localhost:8000
```

## 📁 Projektstruktur

```
Aichatbot/
├── app.js                 # Express server och API endpoints
├── index.html            # Frontend HTML struktur
├── style.css             # Svart/vit tema styling
├── script.js             # Frontend JavaScript logik
├── floating-orbs.js      # Animerad bakgrund med kulor
├── i18n.js              # Internationalisering (12 språk)
├── .env                 # Miljövariabler (skapas av dig)
├── .gitignore           # Git ignore filer
├── package.json         # NPM dependencies och scripts
└── README.md           # Denna fil
```

## 🔧 Konfiguration

Chatboten är redo att använda direkt efter installation. Alla nödvändiga inställningar är redan konfigurerade.

## 🎨 Tema och Design

### Färgschema
- **Bakgrund**: Vit gradient (#ffffff, #f5f5f5)
- **Text**: Svart (#000000)
- **Accenter**: Mörkgrå (#333333)
- **Borders**: Svarta (#000000)

### Animerad Bakgrund
- 120 flytande kulor (70% svarta, 30% vita)
- Snabb rörelse för dynamisk känsla
- Transparent för att inte störa läsbarhet

## 🌍 Språkstöd

Chatboten stöder 12 språk med komplett lokalisering:

| Språk | Kod | Status |
|-------|-----|--------|
| Svenska | sv | ✅ |
| English | en | ✅ |
| العربية | ar | ✅ |
| Español | es | ✅ |
| Français | fr | ✅ |
| Deutsch | de | ✅ |
| Italiano | it | ✅ |
| Português | pt | ✅ |
| Русский | ru | ✅ |
| 中文 | zh | ✅ |
| 日本語 | ja | ✅ |
| 한국어 | ko | ✅ |

## 🛡️ Teknologi

- **Helmet.js**: Säkerhetshuvuden
- **CORS**: Kontrollerad åtkomst  
- **Rate Limiting**: Begränsar requests per IP
- **Express.js**: Robust web server
- **Responsiv Design**: Fungerar på alla enheter

## 📱 API Endpoints

### POST /api/chat
Skicka meddelande till AI och få svar.

**Request:**
```json
{
  "message": "Hej, hur är läget?"
}
```

**Response:**
```json
{
  "response": "Hej! Jag mår bra, tack för att du frågar. Hur kan jag hjälpa dig idag?"
}
```

## 🚀 Deployment

### Lokal Utveckling
```bash
npm run dev
```

### Produktion
```bash
npm start
```

### Docker (Optional)
```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "start"]
```

## 🤝 Bidra

1. Forka projektet
2. Skapa en feature branch (`git checkout -b feature/ny-funktionalitet`)
3. Commita dina ändringar (`git commit -am 'Lägg till ny funktionalitet'`)
4. Pusha till branchen (`git push origin feature/ny-funktionalitet`)
5. Öppna en Pull Request

## 📝 Changelog

### v1.0.0 (2025-10-16)
- ✨ Initial release
- 🎨 Svart/vit tema implementation
- 🌍 12 språk stöd
- 🔒 Säker backend med Express
- 🎭 Animerad bakgrund med 120 kulor
- 📱 Responsiv design
- 🛡️ Säkerhetsåtgärder

## 📄 Licens

Detta projekt är licensierat under MIT License - se [LICENSE](LICENSE) filen för detaljer.

## verktyg

- OpenAI för GPT API
- Express.js community
- Alle som bidragit till open source dependencies

## Support

Om du stöter på problem eller har frågor:

1. Kolla [Issues](https://github.com/Msjunior10/Aichatbot/issues) för liknande problem
2. Skapa en ny issue med detaljerad beskrivning
3. Inkludera alltid:
   - Node.js version
   - Operativsystem
   - Steg för att reproducera problemet

---

**Byggt med ❤️ av [Msjunior10](https://github.com/Msjunior10)**
