// Event listeners
document.getElementById("submit-btn").addEventListener("click", function () {
  sendToChatGPT();
});

// Add Enter key support
document.getElementById("word-input").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendToChatGPT();
  }
});

// Secure backend communication - API key is safely stored on server
function sendToChatGPT() {
  let value = document.getElementById("word-input").value.trim();
  
  // Don't send empty messages
  if (!value) return;
  
  console.log('🔥 Sending message:', value);
  
  // Show loading state
  const submitBtn = document.getElementById("submit-btn");
  const originalText = submitBtn.textContent;
  submitBtn.innerHTML = '<div class="loading"></div>';
  submitBtn.disabled = true;

  // Send to our secure backend instead of directly to OpenAI
  console.log('📤 Making axios request to /api/chat');
  axios
    .post("/api/chat", {
      message: value
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log('✅ Response received:', response.data);
      let reply = response.data.response;
      const replyElement = document.getElementById("reply-content");
      replyElement.textContent = reply;
      
      // Scroll to top of reply content to show beginning of response
      replyElement.scrollTop = 0;
      
      // Clear input after successful send
      document.getElementById("word-input").value = "";
    })
    .catch((error) => {
      console.error("❌ Error occurred:", error);
      console.error("❌ Error details:", error.response?.data || error.message);
      
      let errorMsg;
      if (error.response?.status === 429) {
        errorMsg = currentLanguage === 'ar' ? 'تم تجاوز الحد الأقصى للطلبات. حاول لاحقاً.' :
                   currentLanguage === 'syc' ? 'ܐܬܥܒܪ ܣܘܓܐܐ ܕܒܥܘܬܐ. ܢܣܐ ܬܘܒ ܒܬܪܟܢ.' :
                   currentLanguage === 'sv' ? 'För många förfrågningar. Försök igen senare.' :
                   'Too many requests. Please try again later.';
      } else {
        errorMsg = currentLanguage === 'ar' ? 'عذراً، حدث خطأ. حاول مرة أخرى.' :
                   currentLanguage === 'syc' ? 'ܚܘܣܝܐ، ܐܬܓܫܬ ܦܘܕܝܬܐ. ܢܣܐ ܬܘܒ.' :
                   currentLanguage === 'sv' ? 'Ursäkta, ett fel uppstod. Försök igen.' :
                   currentLanguage === 'es' ? 'Lo siento, ocurrió un error. Inténtalo de nuevo.' :
                   currentLanguage === 'fr' ? 'Désolé, une erreur s\'est produite. Veuillez réessayer.' :
                   currentLanguage === 'de' ? 'Entschuldigung, ein Fehler ist aufgetreten. Versuchen Sie es erneut.' :
                   currentLanguage === 'it' ? 'Scusa, si è verificato un errore. Riprova.' :
                   currentLanguage === 'pt' ? 'Desculpe, ocorreu um erro. Tente novamente.' :
                   currentLanguage === 'ru' ? 'Извините, произошла ошибка. Попробуйте еще раз.' :
                   currentLanguage === 'zh' ? '抱歉，发生了错误。请重试。' :
                   currentLanguage === 'ja' ? '申し訳ありませんが、エラーが発生しました。もう一度お試しください。' :
                   currentLanguage === 'ko' ? '죄송합니다. 오류가 발생했습니다. 다시 시도해주세요.' :
                   'Sorry, an error occurred. Please try again.';
      }
      
      document.getElementById("reply-content").textContent = errorMsg;
    })
    .finally(() => {
      // Restore button state
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    });
}
