// Скрипт для отображения детального рейтинга ИИ-моделей 2025 года
(function() {
  // Детальные данные о ИИ-моделях 2025 года
  const aiModels = [
    {
      name: "GPT-5",
      company: "OpenAI",
      rank: "🥇",
      description: "Революционная модель с контекстом до 10 млн токенов. Лидер в генерации текста, кода и мультимодальных задач.",
      accuracy: "98%",
      speed: "9.2",
      safety: "9.5",
      features: ["Текст", "Код", "Изображения", "Видео", "Голос"],
      color: "#10a37f"
    },
    {
      name: "Gemini Ultra 2",
      company: "Google",
      rank: "🥈",
      description: "Мультимодальный гигант с превосходными возможностями обработки изображений и видео в реальном времени.",
      accuracy: "96%",
      speed: "8.8",
      safety: "9.3",
      features: ["Мультимодальность", "Поиск", "Анализ", "Творчество"],
      color: "#4285f4"
    },
    {
      name: "Claude 4",
      company: "Anthropic",
      rank: "🥉",
      description: "Стандарт безопасности и этичности. Идеален для критически важных задач и анализа документов.",
      accuracy: "95%",
      speed: "8.5",
      safety: "9.8",
      features: ["Безопасность", "Анализ", "Этика", "Исследования"],
      color: "#d97706"
    },
    {
      name: "Qwen-4",
      company: "Alibaba",
      rank: "4",
      description: "Китайская модель с фокусом на скорость и энергоэффективность. Отличный выбор для массовых задач.",
      accuracy: "94%",
      speed: "9.5",
      safety: "8.9",
      features: ["Скорость", "Эффективность", "Многоязычность", "Масштабирование"],
      color: "#ff6b35"
    },
    {
      name: "LLaMA 4",
      company: "Meta",
      rank: "5",
      description: "Открытая модель с открытым исходным кодом. Демократизирует доступ к передовым ИИ-технологиям.",
      accuracy: "93%",
      speed: "8.7",
      safety: "8.8",
      features: ["Open Source", "Локальное развертывание", "Кастомизация", "Сообщество"],
      color: "#1877f2"
    },
    {
      name: "Midjourney V7",
      company: "Midjourney",
      rank: "6",
      description: "Лучший генератор изображений с невероятным качеством и креативностью. Художник нового поколения.",
      accuracy: "97%",
      speed: "7.8",
      safety: "8.5",
      features: ["Генерация изображений", "Художественный стиль", "Высокое разрешение", "Креативность"],
      color: "#8b5cf6"
    },
    {
      name: "DALL-E 4",
      company: "OpenAI",
      rank: "7",
      description: "Продвинутый генератор изображений с пониманием контекста и возможностью редактирования.",
      accuracy: "96%",
      speed: "8.2",
      safety: "9.0",
      features: ["Генерация", "Редактирование", "Понимание контекста", "Интеграция"],
      color: "#10a37f"
    },
    {
      name: "GitHub Copilot X",
      company: "Microsoft",
      rank: "8",
      description: "ИИ-помощник для программистов с интеграцией в IDE и автоматизацией до 80% рутинных задач.",
      accuracy: "95%",
      speed: "9.0",
      safety: "8.7",
      features: ["Автодополнение", "Рефакторинг", "Отладка", "Документация"],
      color: "#0078d4"
    }
  ];

  let currentView = 'grid';

  // Функция создания карточки модели
  function createModelCard(model, index) {
    const card = document.createElement('div');
    card.className = 'ai-model-card';
    card.style.animationDelay = `${index * 0.1}s`;
    card.style.borderLeftColor = model.color;
    
    card.innerHTML = `
      <div class="model-header">
        <h3 class="model-name">${model.name}</h3>
        <span class="model-rank">${model.rank}</span>
      </div>
      <p class="model-description">${model.description}</p>
      <div class="model-stats">
        <div class="stat">
          <div class="stat-value">${model.accuracy}</div>
          <div class="stat-label">Точность</div>
        </div>
        <div class="stat">
          <div class="stat-value">${model.speed}/10</div>
          <div class="stat-label">Скорость</div>
        </div>
        <div class="stat">
          <div class="stat-value">${model.safety}/10</div>
          <div class="stat-label">Безопасность</div>
        </div>
      </div>
      <div class="model-features">
        ${model.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
      </div>
    `;
    
    return card;
  }

  // Функция создания списка моделей
  function createModelList(model, index) {
    const item = document.createElement('li');
    item.className = 'news-list-item';
    item.style.animationDelay = `${index * 0.1}s`;
    
    item.innerHTML = `
      <div class="list-item-header">
        <span class="model-rank">${model.rank}</span>
        <strong>${model.name}</strong> - ${model.company}
      </div>
      <p>${model.description}</p>
      <div class="list-item-stats">
        Точность: ${model.accuracy} | Скорость: ${model.speed}/10 | Безопасность: ${model.safety}/10
      </div>
    `;
    
    return item;
  }

  // Функция отображения контента
  function displayAIContent() {
    const content = document.getElementById('ai-content');
    const timeElement = document.getElementById('ai-time');
    
    if (!content) {
      console.error('Элемент ai-content не найден');
      return;
    }

    content.innerHTML = '';

    if (currentView === 'grid') {
      aiModels.forEach((model, index) => {
        const card = createModelCard(model, index);
        content.appendChild(card);
      });
    } else {
      const list = document.createElement('ul');
      list.className = 'news-list';
      aiModels.forEach((model, index) => {
        const item = createModelList(model, index);
        list.appendChild(item);
      });
      content.appendChild(list);
    }

    // Обновляем время
    if (timeElement) {
      const now = new Date();
      timeElement.textContent = `Обновлено: ${now.toLocaleString('ru-RU')}`;
    }
  }

  // Функция переключения вида
  function setupViewToggle() {
    const toggles = document.querySelectorAll('.view-toggle');
    toggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        toggles.forEach(t => t.classList.remove('active'));
        toggle.classList.add('active');
        currentView = toggle.dataset.view;
        displayAIContent();
      });
    });
  }

  // Инициализация
  function init() {
    displayAIContent();
    setupViewToggle();
  }

  // Загружаем при готовности DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
