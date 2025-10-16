// Скрипт для отображения версий и обновлений Minecraft
(function() {
  // Данные о версиях Minecraft
  const minecraftVersions = {
    latest: [
      {
        version: "1.21 - Tricky Trials",
        date: "Июнь 2025",
        type: "Major Update",
        features: [
          "Новые испытания в подземельях с уникальными наградами",
          "Улучшенная система крафта с экспериментальными рецептами",
          "Новые мобы: Trial Spawner и Breeze",
          "Обновленная система освещения с динамическими тенями",
          "Улучшенная производительность на всех платформах"
        ]
      },
      {
        version: "1.20.5 - Armadillos & Wolves",
        date: "Март 2025",
        type: "Minor Update",
        features: [
          "Новые мобы: Армадиллы в саваннах",
          "Волки теперь могут носить броню",
          "Улучшенная система разведения животных",
          "Новые звуки и анимации для мобов"
        ]
      }
    ],
    snapshot: [
      {
        version: "24w20a - Experimental Features",
        date: "Май 2025",
        type: "Snapshot",
        features: [
          "Экспериментальная система квестов",
          "Новые блоки для декорации",
          "Улучшенный ИИ для мобов",
          "Тестирование новых механик крафта"
        ]
      },
      {
        version: "24w19b - Bug Fixes",
        date: "Май 2025",
        type: "Snapshot",
        features: [
          "Исправления критических ошибок",
          "Оптимизация производительности",
          "Улучшения стабильности",
          "Подготовка к релизу 1.21"
        ]
      }
    ],
    legacy: [
      {
        version: "1.16 - Nether Update",
        date: "Июнь 2020",
        type: "Legacy",
        features: [
          "Полностью обновленный Нижний мир",
          "Новые биомы: Crimson Forest, Warped Forest",
          "Новые мобы: Piglin, Hoglin, Strider",
          "Новые блоки: Netherite, Ancient Debris"
        ]
      },
      {
        version: "1.8 - Bountiful Update",
        date: "Сентябрь 2014",
        type: "Classic",
        features: [
          "Новые блоки: Slime Block, Barrier",
          "Команды и командные блоки",
          "Новые мобы: Rabbit, Endermite",
          "Улучшенная система генерации мира"
        ]
      }
    ]
  };

  let currentVersion = 'latest';

  // Функция создания карточки версии
  function createVersionCard(versionData, index) {
    const card = document.createElement('div');
    card.className = 'version-card';
    card.style.animationDelay = `${index * 0.2}s`;
    
    const typeColors = {
      'Major Update': '#4CAF50',
      'Minor Update': '#2196F3',
      'Snapshot': '#FF9800',
      'Legacy': '#9E9E9E',
      'Classic': '#795548'
    };
    
    card.innerHTML = `
      <div class="version-title">
        <span>🎮</span>
        <span>${versionData.version}</span>
        <span class="version-type" style="background: ${typeColors[versionData.type] || '#666'}">${versionData.type}</span>
      </div>
      <div class="version-date">📅 ${versionData.date}</div>
      <ul class="version-features">
        ${versionData.features.map(feature => `<li>${feature}</li>`).join('')}
      </ul>
    `;
    
    return card;
  }

  // Функция отображения контента версий
  function displayVersionContent() {
    const content = document.getElementById('minecraft-content');
    const timeElement = document.getElementById('minecraft-time');
    
    if (!content) {
      console.error('Элемент minecraft-content не найден');
      return;
    }

    content.innerHTML = '';

    // Создаем контейнер для текущей версии
    const versionContainer = document.createElement('div');
    versionContainer.className = `version-content ${currentVersion === 'latest' ? 'active' : ''}`;
    versionContainer.id = `version-${currentVersion}`;

    const versions = minecraftVersions[currentVersion];
    versions.forEach((version, index) => {
      const card = createVersionCard(version, index);
      versionContainer.appendChild(card);
    });

    content.appendChild(versionContainer);

    // Обновляем время
    if (timeElement) {
      const now = new Date();
      timeElement.textContent = `Обновлено: ${now.toLocaleString('ru-RU')}`;
    }
  }

  // Функция переключения версий
  function setupVersionTabs() {
    const tabs = document.querySelectorAll('.version-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Убираем активный класс со всех табов
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Обновляем текущую версию
        currentVersion = tab.dataset.version;
        
        // Обновляем контент
        displayVersionContent();
      });
    });
  }

  // Функция анимации счетчиков в заголовке
  function animateCounters() {
    const minecraftVersion = document.getElementById('minecraft-version');
    const aiModels = document.getElementById('ai-models');
    const newsCount = document.getElementById('news-count');
    
    if (minecraftVersion) {
      animateNumber(minecraftVersion, 0, 1.21, 0.01, 2);
    }
    
    if (aiModels) {
      animateNumber(aiModels, 0, 8, 1, 0);
    }
    
    if (newsCount) {
      animateNumber(newsCount, 0, 14, 1, 0);
    }
  }

  // Функция анимации чисел
  function animateNumber(element, start, end, step, decimals) {
    let current = start;
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      element.textContent = current.toFixed(decimals);
    }, 50);
  }

  // Инициализация
  function init() {
    displayVersionContent();
    setupVersionTabs();
    
    // Запускаем анимацию счетчиков с задержкой
    setTimeout(animateCounters, 1000);
  }

  // Загружаем при готовности DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
