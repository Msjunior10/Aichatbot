// Internationalization (i18n) for MS AI Assistant
const translations = {
    en: {
        'title': '⚡ MS AI Assistant',
        'welcome-message': 'Hello! How can I help you today?',
        'input-placeholder': 'Type your question here...',
        'send-button': 'Send'
    },
    sv: {
        'title': '⚡ MS AI Assistent',
        'welcome-message': 'Hej! Hur kan jag hjälpa dig idag?',
        'input-placeholder': 'Skriv din fråga här...',
        'send-button': 'Skicka'
    },
    ar: {
        'title': '⚡ مساعد MS الذكي',
        'welcome-message': 'مرحباً! كيف يمكنني مساعدتك اليوم؟',
        'input-placeholder': 'اكتب سؤالك هنا...',
        'send-button': 'إرسال'
    },
    es: {
        'title': '⚡ MS Asistente IA',
        'welcome-message': '¡Hola! ¿Cómo puedo ayudarte hoy?',
        'input-placeholder': 'Escribe tu pregunta aquí...',
        'send-button': 'Enviar'
    },
    fr: {
        'title': '⚡ MS Assistant IA',
        'welcome-message': 'Bonjour! Comment puis-je vous aider aujourd\'hui?',
        'input-placeholder': 'Tapez votre question ici...',
        'send-button': 'Envoyer'
    },
    de: {
        'title': '⚡ MS KI-Assistent',
        'welcome-message': 'Hallo! Wie kann ich Ihnen heute helfen?',
        'input-placeholder': 'Geben Sie Ihre Frage hier ein...',
        'send-button': 'Senden'
    },
    it: {
        'title': '⚡ MS Assistente IA',
        'welcome-message': 'Ciao! Come posso aiutarti oggi?',
        'input-placeholder': 'Scrivi la tua domanda qui...',
        'send-button': 'Invia'
    },
    pt: {
        'title': '⚡ MS Assistente IA',
        'welcome-message': 'Olá! Como posso te ajudar hoje?',
        'input-placeholder': 'Digite sua pergunta aqui...',
        'send-button': 'Enviar'
    },
    ru: {
        'title': '⚡ MS ИИ Помощник',
        'welcome-message': 'Привет! Как я могу помочь вам сегодня?',
        'input-placeholder': 'Введите ваш вопрос здесь...',
        'send-button': 'Отправить'
    },
    zh: {
        'title': '⚡ MS AI助手',
        'welcome-message': '你好！今天我可以为您做些什么？',
        'input-placeholder': '在这里输入您的问题...',
        'send-button': '发送'
    },
    ja: {
        'title': '⚡ MS AIアシスタント',
        'welcome-message': 'こんにちは！今日はどのようにお手伝いできますか？',
        'input-placeholder': 'ここに質問を入力してください...',
        'send-button': '送信'
    },
    ko: {
        'title': '⚡ MS AI 어시스턴트',
        'welcome-message': '안녕하세요! 오늘 어떻게 도와드릴까요?',
        'input-placeholder': '여기에 질문을 입력하세요...',
        'send-button': '전송'
    }
};

// RTL languages
const rtlLanguages = ['ar'];

// Current language
let currentLanguage = 'en';

// Initialize internationalization
function initI18n() {
    // Get saved language from localStorage or use browser language
    const savedLanguage = localStorage.getItem('language');
    const browserLanguage = navigator.language.substring(0, 2);
    
    currentLanguage = savedLanguage || (translations[browserLanguage] ? browserLanguage : 'en');
    
    // Set language selector
    document.getElementById('language-select').value = currentLanguage;
    
    // Apply language
    changeLanguage(currentLanguage);
    
    // Add event listener for language change
    document.getElementById('language-select').addEventListener('change', function(e) {
        changeLanguage(e.target.value);
    });
}

// Change language function
function changeLanguage(lang) {
    if (!translations[lang]) {
        console.warn(`Language ${lang} not supported, falling back to English`);
        lang = 'en';
    }
    
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Handle RTL/LTR
    if (rtlLanguages.includes(lang)) {
        document.documentElement.dir = 'rtl';
        document.body.dir = 'rtl';
    } else {
        document.documentElement.dir = 'ltr';
        document.body.dir = 'ltr';
    }
    
    // Update all translatable elements
    const elementsWithI18n = document.querySelectorAll('[data-i18n]');
    elementsWithI18n.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update placeholder texts
    const elementsWithI18nPlaceholder = document.querySelectorAll('[data-i18n-placeholder]');
    elementsWithI18nPlaceholder.forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update document title
    if (translations[lang]['title']) {
        document.title = translations[lang]['title'];
    }
}

// Get translated text
function t(key) {
    return translations[currentLanguage][key] || key;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initI18n);