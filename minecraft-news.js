// Скрипт для отображения новостей по Minecraft
(function() {
  // Данные о новостях по Minecraft (можно заменить на API-запрос)
  const minecraftNews = [
    "🎮 Вышло обновление Caves & Cliffs Part 3 с новыми биомами и подземными структурами!",
    "📦 Mojang анонсировала официальный модпак для Bedrock Edition с поддержкой RTX.",
    "🏆 Новый сезон Minecraft Championship стартует в ноябре 2025 с рекордным призовым фондом.",
    "🤖 Добавлены улучшенные ИИ-мобы с поведением на основе нейросетей - теперь враги действуют умнее!",
    "🌍 Открыт новый биом 'Кристальные пещеры' с уникальными ресурсами и мобами.",
    "⚔️ Обновлена система боя с добавлением комбо-атак и новых видов оружия."
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

    // Добавляем новости с задержкой для эффекта анимации
    minecraftNews.forEach((news, index) => {
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
    document.addEventListener('DOMContentLoaded', displayNews);
  } else {
    displayNews();
  }
})();
