// Скрипт для отображения рейтинга ИИ-моделей 2025 года
(function() {
  // Данные о рейтинге ИИ в 2025 году (условные)
  const aiNews = [
    "🥇 GPT-5 от OpenAI лидирует в генерации текста и кода, достигнув точности 98%.",
    "🥈 Google Gemini Ultra 2 показывает лучшие результаты в мультимодальных задачах (текст, изображения, видео).",
    "🚀 OpenAI и Microsoft представили модель с контекстом до 10 млн токенов - революция в обработке данных!",
    "⚡ Китайская модель Qwen-4 вошла в топ-3 по скорости и энергоэффективности.",
    "🧠 Claude 4 от Anthropic стал стандартом безопасности и этичности ИИ-систем.",
    "🎨 Midjourney V7 и DALL-E 4 конкурируют за звание лучшего генератора изображений.",
    "💻 GitHub Copilot X с GPT-5 автоматизирует до 80% рутинных задач программирования.",
    "🌐 Meta представила LLaMA 4 - открытая модель, конкурирующая с коммерческими гигантами."
  ];

  // Функция отображения новостей
  function displayAINews() {
    const list = document.getElementById('ai-list');
    const timeElement = document.getElementById('ai-time');
    
    if (!list) {
      console.error('Элемент ai-list не найден');
      return;
    }

    // Очищаем список
    list.innerHTML = '';

    // Добавляем новости с задержкой для эффекта анимации
    aiNews.forEach((news, index) => {
      setTimeout(() => {
        const li = document.createElement('li');
        li.textContent = news;
        li.style.animationDelay = `${index * 0.1}s`;
        list.appendChild(li);
      }, index * 100);
    });

    // Обновляем время
    if (timeElement) {
      const now = new Date();
      timeElement.textContent = `Обновлено: ${now.toLocaleString('ru-RU')}`;
    }
  }

  // Загружаем новости при загрузке страницы
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', displayAINews);
  } else {
    displayAINews();
  }
})();
