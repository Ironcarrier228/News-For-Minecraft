// Скрипт для отображения новостей по Minecraft
(function() {
  // Данные о новостях по Minecraft с крутыми эффектами
  const minecraftNews = [
    {
      text: "🎮 Вышло обновление Caves & Cliffs Part 3 с новыми биомами и подземными структурами!",
      type: "update",
      color: "#50C878"
    },
    {
      text: "📦 Mojang анонсировала официальный модпак для Bedrock Edition с поддержкой RTX.",
      type: "announcement",
      color: "#FF6B6B"
    },
    {
      text: "🏆 Новый сезон Minecraft Championship стартует в ноябре 2025 с рекордным призовым фондом.",
      type: "event",
      color: "#FFD700"
    },
    {
      text: "🤖 Добавлены улучшенные ИИ-мобы с поведением на основе нейросетей - теперь враги действуют умнее!",
      type: "feature",
      color: "#4ECDC4"
    },
    {
      text: "🌍 Открыт новый биом 'Кристальные пещеры' с уникальными ресурсами и мобами.",
      type: "biome",
      color: "#96CEB4"
    },
    {
      text: "⚔️ Обновлена система боя с добавлением комбо-атак и новых видов оружия.",
      type: "combat",
      color: "#DDA0DD"
    }
  ];

  // Функция отображения новостей
  function displayNews() {
    const list = document.getElementById('minecraft-list');
    const timeElement = document.getElementById('minecraft-time');
    
    if (!list) {
      console.error('Элемент minecraft-list не найден');
      return;
    }

    // Очищаем список
    list.innerHTML = '';

    // Добавляем новости с крутыми анимациями
    minecraftNews.forEach((news, index) => {
      setTimeout(() => {
        const li = document.createElement('li');
        li.innerHTML = `
          <div class="news-content">
            <div class="type-badge" style="background: ${news.color}">${news.type.toUpperCase()}</div>
            <span class="news-text">${news.text}</span>
          </div>
        `;
        li.style.animationDelay = `${index * 0.15}s`;
        li.style.setProperty('--type-color', news.color);
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
    document.addEventListener('DOMContentLoaded', displayNews);
  } else {
    displayNews();
  }
})();
