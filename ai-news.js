// Данные о рейтинге ИИ в 2025 году (условные)
const aiNews = [
  "По данным аналитиков, GPT-5 лидирует в генерации текста и кода.",
  "Google Gemini Ultra 2 показывает лучшие результаты в мультимодальных задачах.",
  "OpenAI и Microsoft представили ИИ с контекстом до 10 млн токенов.",
  "Китайская модель Qwen-4 вошла в топ-3 по скорости и энергоэффективности."
];

// Отображаем новости
const list = document.getElementById('ai-list');
aiNews.forEach(news => {
  const li = document.createElement('li');
  li.textContent = news;
  list.appendChild(li);
});
