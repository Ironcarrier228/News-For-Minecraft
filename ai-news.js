// Скрипт для отображения рейтинга ИИ-моделей 2025 года
(function() {
  // Данные о рейтинге ИИ в 2025 году с крутыми эффектами
  const aiNews = [
    {
      text: "🥇 GPT-5 от OpenAI лидирует в генерации текста и кода, достигнув точности 98%.",
      rank: 1,
      color: "#FFD700"
    },
    {
      text: "🥈 Google Gemini Ultra 2 показывает лучшие результаты в мультимодальных задачах (текст, изображения, видео).",
      rank: 2,
      color: "#C0C0C0"
    },
    {
      text: "🚀 OpenAI и Microsoft представили модель с контекстом до 10 млн токенов - революция в обработке данных!",
      rank: 3,
      color: "#FF6B6B"
    },
    {
      text: "⚡ Китайская модель Qwen-4 вошла в топ-3 по скорости и энергоэффективности.",
      rank: 4,
      color: "#4ECDC4"
    },
    {
      text: "🧠 Claude 4 от Anthropic стал стандартом безопасности и этичности ИИ-систем.",
      rank: 5,
      color: "#45B7D1"
    },
    {
      text: "🎨 Midjourney V7 и DALL-E 4 конкурируют за звание лучшего генератора изображений.",
      rank: 6,
      color: "#96CEB4"
    },
    {
      text: "💻 GitHub Copilot X с GPT-5 автоматизирует до 80% рутинных задач программирования.",
      rank: 7,
      color: "#FFEAA7"
    },
    {
      text: "🌐 Meta представила LLaMA 4 - открытая модель, конкурирующая с коммерческими гигантами.",
      rank: 8,
      color: "#DDA0DD"
    }
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

    // Добавляем новости с крутыми анимациями
    aiNews.forEach((news, index) => {
      setTimeout(() => {
        const li = document.createElement('li');
        li.innerHTML = `
          <div class="news-content">
            <div class="rank-badge" style="background: ${news.color}">#${news.rank}</div>
            <span class="news-text">${news.text}</span>
          </div>
        `;
        li.style.animationDelay = `${index * 0.15}s`;
        li.style.setProperty('--rank-color', news.color);
        list.appendChild(li);
        
        // Добавляем эффект печатания
        setTimeout(() => {
          li.classList.add('typing-effect');
        }, index * 150 + 200);
      }, index * 150);
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
