// site.js
(async function() {
    // ========================
    // КОНФИГУРАЦИЯ КОМИКСОВ
    // Добавляй новые комиксы по образцу ниже.
    // ========================
    const COMICS = [
        {
            id: "glotkagrad",
            title: "В Глоткаграде",
            status: "planned",
            cover: "images/cover-glotkagrad.png",
            description: "Оригинальный проект про вселенную Ильи! Следите за анонсами!",
            parts: []
        },
        {
            id: "cat-vasya",
            title: "Кот Вася",
            status: "archive",
            cover: "images/cover-cat-vasya.png",
            description: "Легендарный серый кот, который всегда попадает в истории. Все шесть частей в одном флаконе!",
            parts: [
                { partNumber: 1, title: "Часть 1: знакомство", panels: [ { image: "images/vasyacat/strip1.png", caption: "" } ] },
                { partNumber: 2, title: "Часть 2: Это мне?", panels: [ { image: "images/vasyacat/strip2.png", caption: "" } ] },
                { partNumber: 3, title: "Часть 3: Про спячку", panels: [ { image: "images/vasyacat/strip3.png", caption: "" } ] },
                { partNumber: 4, title: "Часть 4: 3Д принтер", panels: [ { image: "images/vasyacat/strip4.png", caption: "" } ] },
                { partNumber: 5, title: "Часть 5: Не хватает", panels: [ { image: "images/vasyacat/strip5.png", caption: "" } ] },
                { partNumber: 6, title: "Часть 6: Почтальон", panels: [ { image: "images/vasyacat/strip6.png", caption: "" } ] }
            ]
        },
        {
            id: "vasya-minecraft",
            title: "Приключения Васи В МайнКрафт",
            status: "archive",
            cover: "images/cover-vasya-minecraft.png",
            description: "Вася отрубается после тусы в честь открытия огуречного завода в ГлоткаГраде, сны его достаточно удивительны.",
            parts: [
                {
                    partNumber: 1,
                    title: "Часть 1: Начало",
                    panels: [
                        { image: "images/PVVMK/p1/panel1.png", caption: "" },
                        { image: "images/PVVMK/p1/panel2.png", caption: "Вася: Ого!" },
                        { image: "images/PVVMK/p1/panelwide1.png", caption: "Вася: Берег!" },
                        { image: "images/PVVMK/p1/panel3.png", caption: "" },
                        { image: "images/PVVMK/p1/panel4.png", caption: "Диктор: Замёрз, да?" },
                        { image: "images/PVVMK/p1/panelwide2.png", caption: "Диктор: Сначала сруби дерево." },
                        { image: "images/PVVMK/p1/panel5.png", caption: "Вася: Чё? Диктор: Голыми руками." },
                        { image: "images/PVVMK/p1/panel6.png", caption: "" },
                        { image: "images/PVVMK/p1/panel7.png", caption: "" },
                        { image: "images/PVVMK/p1/panel8.png", caption: "" },
                        { image: "images/PVVMK/p1/panel9.png", caption: "Диктор: Деревья не падают, бояться нечего." },
                        { image: "images/PVVMK/p1/panel10.png", caption: "Диктор: А про твою челюсть я так не скажу." },
                        { image: "images/PVVMK/p1/panel11.png", caption: "Диктор: Сделай там доски и верстак." },
                        { image: "images/PVVMK/p1/panel12.png", caption: "Диктор: Вот тебе и царь майна." },
                        { image: "images/PVVMK/p1/panel13.png", caption: "Диктор: Добро пожаловать." },
                        { image: "images/PVVMK/p1/panel14.png", caption: "" },
                        { image: "images/PVVMK/p1/panel15.png", caption: "Диктор: Время добыть камня." },
                        { image: "images/PVVMK/p1/panel16.png", caption: "" },
                        { image: "images/PVVMK/p1/panel17.png", caption: "" },
                        { image: "images/PVVMK/p1/panel18.png", caption: "Диктор: Сохрани его на потом." },
                        { image: "images/PVVMK/p1/panel19.png", caption: "Диктор: Время найти поляну для дома!" },
                        { image: "images/PVVMK/p1/panel20.png", caption: "Диктор: Эта выглядит неплохо." },
                        { image: "images/PVVMK/p1/panel21.png", caption: "Диктор: Строй, я приду позже." },
                        { image: "images/PVVMK/p1/panel22.png", caption: "ОЧЕНЬ МНОГО ВРЕМЕНИ СПУСТЯ." },
                        { image: "images/PVVMK/p1/panel23.png", caption: "Диктор: Выглядит как экскременты, буквально." },
                        { image: "images/PVVMK/p1/panel24.png", caption: "Диктор: И зачем я тебя за булыгой слал?" },
                        { image: "images/PVVMK/p1/panel25.png", caption: "НИЧТОЖЕСТВО." },
                        { image: "images/PVVMK/p1/panel26.png", caption: "Диктор: Хоть внутри не так плохо, печка, верстак и прочее есть." },
                        { image: "images/PVVMK/p1/panelwide3.png", caption: "Диктор: Чтож, а мы прощаемся с вами! До новых встреч." }
                    ]
                }
            ]
        }
    ];

    // ========================
    // СИСТЕМА ПОСТОВ (НОВОСТИ)
    // Добавляй новые посты сюда.
    // ========================
    const POSTS = [
        {
            date: "2026-04-20",
            title: "Запуск сайта!",
            text: "Привет, друзья! Сегодня я запустил свой сайт с комиксами. Сделан он Дипсиком так что строго не судите.",
            image: "" // можешь добавить путь к PNG, например "images/news/launch.png"
        },
        {
            date: "2026-04-20",
            title: "По поводу «В Глоткаграде»",
            text: "Скоро я начну рисовать возможно пик моего юмора, а точнее этот комикс.",
            image: ""
        }
    ];

    // ================
    // ЗАГЛУШКИ ДЛЯ PNG
    // ================
    function placeholderSVG(text, width=400, height=250) {
        return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'%3E%3Crect width='100%25' height='100%25' fill='%23f4e5c9'/%3E%3Ctext x='50%25' y='50%25' font-family='Comic Sans MS, cursive' font-size='24' font-weight='bold' fill='%231e1a16' text-anchor='middle' dy='.3em'%3E${text}%3C/text%3E%3C/svg%3E`;
    }

    // ================
    // РОУТИНГ
    // ================
    const app = document.getElementById('app');
    
    function renderMainPage() {
        const gridHtml = COMICS.map(comic => {
            const partsCount = comic.parts.length;
            const statusBadge = comic.status === 'planned' 
                ? '<span class="badge planned">⏳ Планируется</span>' 
                : '<span class="badge">📚 Архив</span>';
            return `
                <div class="comic-card" data-comic-id="${comic.id}" onclick="navigateToComic('${comic.id}')">
                    <img class="comic-cover" src="${comic.cover}" alt="${comic.title}" 
                         onerror="this.onerror=null; this.src='${placeholderSVG(comic.title.replace(/'/g, "\\'"))}';">
                    <h2 class="comic-title">${comic.title}</h2>
                    <div>${statusBadge} ${partsCount > 0 ? `<span class="parts-count">${partsCount} части</span>` : ''}</div>
                    <p class="comic-description">${comic.description}</p>
                </div>`;
        }).join('');

        app.innerHTML = `
            <header class="main-header">
                <h1>📚 КОМИКСЫ ИЛЬИ</h1>
                <div class="subtitle">💥 читай, смейся, выживай 💥</div>
                <div style="margin-top:20px;">
                    <button class="back-btn" onclick="navigateToNews()">📝 Новости</button>
                </div>
            </header>
            <div class="comics-grid">${gridHtml}</div>
        `;
    }

    function renderComicDetail(comicId) {
        const comic = COMICS.find(c => c.id === comicId);
        if (!comic) return renderMainPage();

        const partsHtml = comic.parts.length > 0 
            ? comic.parts.map(p => `
                <button class="part-btn" onclick="navigateToPart('${comic.id}', ${p.partNumber})">
                    📖 ${p.title}
                </button>`).join('')
            : '<p>Части пока не добавлены.</p>';

        app.innerHTML = `
            <div class="comic-detail">
                <button class="back-btn" onclick="navigateToMain()">⬅️ Назад к комиксам</button>
                <h2>${comic.title}</h2>
                <img src="${comic.cover}" alt="${comic.title}" style="width:100%; max-width:300px; display:block; margin:15px auto; border-radius:20px; border:3px solid #1e1a16;" 
                     onerror="this.onerror=null; this.src='${placeholderSVG(comic.title, 300, 200)}';">
                <p style="font-weight:bold; margin-top:10px;">${comic.description}</p>
                <h3 style="margin-top:25px;">Выбери часть:</h3>
                <div class="part-list">${partsHtml}</div>
            </div>
        `;
    }

    function renderPartViewer(comicId, partNumber) {
        const comic = COMICS.find(c => c.id === comicId);
        if (!comic) return renderMainPage();
        const part = comic.parts.find(p => p.partNumber === partNumber);
        if (!part) return renderComicDetail(comicId);

        const panelsHtml = part.panels.map(panel => `
            <div class="panel">
                <img src="${panel.image}" alt="Панель" 
                     onerror="this.onerror=null; this.src='${placeholderSVG('Панель комикса', 600, 400)}';">
                <div class="caption">${panel.caption}</div>
            </div>
        `).join('');

        const prevPart = comic.parts.find(p => p.partNumber === partNumber - 1);
        const nextPart = comic.parts.find(p => p.partNumber === partNumber + 1);

        app.innerHTML = `
            <div class="part-viewer">
                <button class="back-btn" onclick="navigateToComic('${comic.id}')">⬅️ К списку частей</button>
                <h2 style="margin:10px 0;">${comic.title} — ${part.title}</h2>
                ${panelsHtml}
                <div class="nav-buttons">
                    <button class="nav-btn" ${prevPart ? `onclick="navigateToPart('${comic.id}', ${prevPart.partNumber})"` : 'disabled'}>
                        ⬅️ Предыдущая часть
                    </button>
                    <button class="nav-btn" ${nextPart ? `onclick="navigateToPart('${comic.id}', ${nextPart.partNumber})"` : 'disabled'}>
                        Следующая часть ➡️
                    </button>
                </div>
                <button class="back-btn" style="margin-top:20px;" onclick="navigateToMain()">🏠 На главную</button>
            </div>
        `;
    }

    function renderNewsPage() {
        // Сортируем по дате (сначала новые)
        const sortedPosts = [...POSTS].sort((a, b) => (b.date > a.date ? 1 : -1));
        const newsHtml = sortedPosts.map(post => `
            <div class="news-item">
                <div class="news-date">${post.date}</div>
                <h2 class="news-title">${post.title}</h2>
                <div class="news-text">${post.text}</div>
                ${post.image ? `<img class="news-image" src="${post.image}" alt="${post.title}" onerror="this.onerror=null; this.style.display='none';">` : ''}
            </div>
        `).join('');

        app.innerHTML = `
            <div class="news-container">
                <h2 style="margin-top:10px; font-family:'Comic Neue',cursive; font-size:2rem;">📝 Новости автора</h2>
                ${newsHtml}
                <button class="back-btn" style="margin-top:20px;" onclick="navigateToMain()">🏠 На главную</button>
            </div>
        `;
    }

    // Глобальные функции для onclick
    window.navigateToMain = () => {
        window.location.hash = '';
        renderMainPage();
    };
    window.navigateToComic = (id) => {
        window.location.hash = `#/comic/${id}`;
        renderComicDetail(id);
    };
    window.navigateToPart = (comicId, partNum) => {
        window.location.hash = `#/comic/${comicId}/part/${partNum}`;
        renderPartViewer(comicId, partNum);
    };
    window.navigateToNews = () => {
        window.location.hash = '#/news';
        renderNewsPage();
    };

    // Обработчик хеша
    function handleHashChange() {
        const hash = window.location.hash.slice(1);
        if (hash === '/news') {
            renderNewsPage();
            return;
        }
        const matchComicPart = hash.match(/^\/comic\/([^/]+)\/part\/(\d+)$/);
        const matchComic = hash.match(/^\/comic\/([^/]+)$/);
        if (matchComicPart) {
            renderPartViewer(matchComicPart[1], parseInt(matchComicPart[2]));
        } else if (matchComic) {
            renderComicDetail(matchComic[1]);
        } else {
            renderMainPage();
        }
    }

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
})();
