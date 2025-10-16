// Данные о новостях по Minecraft (можно заменить на API-запрос)
const minecraftNews = [
  "Вышло обновление Caves & Cliffs Part 3 с новыми биомами!",
  "Mojang анонсировала официальный модпак для Bedrock Edition.",
  "Новый сезон Minecraft Championship стартует в ноябре 2025.",
  "Добавлены улучшенные ИИ-мобы с поведением на основе нейросетей."
];

// Отображаем новости
const list = document.getElementById('minecraft-list');
minecraftNews.forEach(news => {
  const li = document.createElement('li');
  li.textContent = news;
  list.appendChild(li);
});
