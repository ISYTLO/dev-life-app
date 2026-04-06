const forumTopics = [
    {
        title: 'Roblox Studio Scripting Tips',
        summary: 'Open conversation about best practices for studio scripting and event systems.',
        category: 'Development',
        tags: ['Scripting', 'UI', 'Studio'],
        replies: 48,
        url: 'https://devforum.roblox.com/t/roblox-studio-scripting-tips/123456',
        status: 'Open',
        isPrivate: false,
        deleted: false
    },
    {
        title: 'UI Design Best Practices for Games',
        summary: 'Public topic with examples for building responsive UI in Roblox.',
        category: 'Development',
        tags: ['UI', 'Design', 'Building'],
        replies: 37,
        url: 'https://devforum.roblox.com/t/ui-design-best-practices/123457',
        status: 'Open',
        isPrivate: false,
        deleted: false
    },
    {
        title: 'Game Optimization Techniques',
        summary: 'A shared thread on framerate improvements and memory usage.',
        category: 'Optimization',
        tags: ['Performance', 'Scripting'],
        replies: 52,
        url: 'https://devforum.roblox.com/t/game-optimization-techniques/123458',
        status: 'Open',
        isPrivate: false,
        deleted: false
    },
    {
        title: 'Roblox Web APIs Guide',
        summary: 'Open topic covering HTTPService and web integration examples.',
        category: 'API',
        tags: ['API', 'Web', 'Integration'],
        replies: 29,
        url: 'https://devforum.roblox.com/t/roblox-web-apis-guide/123459',
        status: 'Open',
        isPrivate: false,
        deleted: false
    },
    {
        title: 'Data Stores Comprehensive Guide',
        summary: 'Public discussion on saving player data with DataStores.',
        category: 'API',
        tags: ['API', 'Data', 'Persistence'],
        replies: 44,
        url: 'https://devforum.roblox.com/t/data-stores-comprehensive-guide/123460',
        status: 'Open',
        isPrivate: false,
        deleted: false
    },
    {
        title: 'Advanced Lua Metatables',
        summary: 'Deep dive into metatables for advanced scripting.',
        category: 'Development',
        tags: ['Scripting', 'Lua'],
        replies: 31,
        url: 'https://devforum.roblox.com/t/advanced-lua-metatables/123461',
        status: 'Open',
        isPrivate: false,
        deleted: false
    },
    {
        title: 'Monetization Strategies 2026',
        summary: 'Latest tips on premium passes and dev products.',
        category: 'Community',
        tags: ['Business', 'Economy'],
        replies: 27,
        url: 'https://devforum.roblox.com/t/monetization-strategies-2026/123462',
        status: 'Open',
        isPrivate: false,
        deleted: false
    },
    {
        title: 'Roblox Studio Plugins',
        summary: 'Community plugins for better development workflow.',
        category: 'Development',
        tags: ['Tools', 'Productivity'],
        replies: 19,
        url: 'https://devforum.roblox.com/t/roblox-studio-plugins/123463',
        status: 'Open',
        isPrivate: false,
        deleted: false
    },
    {
        title: 'Game Testing Best Practices',
        summary: 'How to test your games effectively.',
        category: 'Optimization',
        tags: ['Testing', 'Quality'],
        replies: 42,
        url: 'https://devforum.roblox.com/t/game-testing-best-practices/123464',
        status: 'Open',
        isPrivate: false,
        deleted: false
    },
    {
        title: 'Roblox Economy Updates',
        summary: 'Official news on Robux and developer earnings.',
        category: 'News',
        tags: ['Monetization', 'Economy'],
        replies: 15,
        url: 'https://devforum.roblox.com/t/roblox-economy-updates/123465',
        status: 'Open',
        isPrivate: false,
        deleted: false
    },
    {
        title: 'Collaborative Development',
        summary: 'Tips for team development on Roblox.',
        category: 'Community',
        tags: ['Team', 'Building'],
        replies: 33,
        url: 'https://devforum.roblox.com/t/collaborative-development/123466',
        status: 'Open',
        isPrivate: false,
        deleted: false
    },
    {
        title: 'Advanced Animation Techniques',
        summary: 'Keyframe and script-based animations.',
        category: 'Development',
        tags: ['Animation', 'UI'],
        replies: 28,
        url: 'https://devforum.roblox.com/t/advanced-animation-techniques/123467',
        status: 'Open',
        isPrivate: false,
        deleted: false
    },
    {
        title: 'Roblox Mobile Optimization',
        summary: 'Making games work great on mobile devices.',
        category: 'Optimization',
        tags: ['Mobile', 'Performance'],
        replies: 36,
        url: 'https://devforum.roblox.com/t/roblox-mobile-optimization/123468',
        status: 'Open',
        isPrivate: false,
        deleted: false
    },
    {
        title: 'API Rate Limiting Guide',
        summary: 'Understanding and working with API limits.',
        category: 'API',
        tags: ['API', 'Security'],
        replies: 22,
        url: 'https://devforum.roblox.com/t/api-rate-limiting-guide/123469',
        status: 'Open',
        isPrivate: false,
        deleted: false
    },
    {
        title: 'Community Events and Contests',
        summary: 'Upcoming Roblox developer events.',
        category: 'Community',
        tags: ['Events', 'Community'],
        replies: 18,
        url: 'https://devforum.roblox.com/t/community-events-and-contests/123470',
        status: 'Open',
        isPrivate: false,
        deleted: false
    },
    {
        title: 'Advanced Animation Techniques',
        summary: 'Tips for creating smooth animations in Roblox.',
        category: 'Development',
        tags: ['Animation', 'Scripting'],
        replies: 35,
        url: 'https://devforum.roblox.com/t/advanced-animation-techniques/123471',
        status: 'Open',
        isPrivate: false,
        deleted: false
    },
    {
        title: 'Security Best Practices',
        summary: 'Protecting your games from exploits.',
        category: 'Optimization',
        tags: ['Security', 'Scripting'],
        replies: 28,
        url: 'https://devforum.roblox.com/t/security-best-practices/123472',
        status: 'Open',
        isPrivate: false,
        deleted: false
    },
    {
        title: 'Collaborative Development Tools',
        summary: 'Tools for team development on Roblox.',
        category: 'Development',
        tags: ['Tools', 'Collaboration'],
        replies: 22,
        url: 'https://devforum.roblox.com/t/collaborative-development-tools/123473',
        status: 'Open',
        isPrivate: false,
        deleted: false
    },
    {
        title: 'Mobile Optimization Guide',
        summary: 'Making games work great on mobile devices.',
        category: 'Optimization',
        tags: ['Mobile', 'Performance'],
        replies: 41,
        url: 'https://devforum.roblox.com/t/mobile-optimization-guide/123474',
        status: 'Open',
        isPrivate: false,
        deleted: false
    }
];

buildTopicDates();

const newsItems = [
    {
        title: 'Roblox Announces New Creator Stats',
        summary: 'Official update for devs on tracking engagement and monetization.',
        url: 'https://devforum.roblox.com/c/announcements/6',
        date: 'Today'
    },
    {
        title: 'DevForum UI Improvements',
        summary: 'Important release notes on forum navigation and markdown enhancements.',
        url: 'https://devforum.roblox.com/c/announcements/6',
        date: 'Yesterday'
    },
    {
        title: 'New API Gateway Guidelines',
        summary: 'Official developer news for secure web service integration.',
        url: 'https://devforum.roblox.com/c/announcements/6',
        date: '2 days ago'
    }
];

let topicFilter = 'All';
let topicSearch = '';
let topicPage = 0;
let topicsPerPage = 20;
let savedTopics = [];
let savedSearchTags = [];
let topicPreferences = {};
let showOlderTopics = false;
const topicFilterOptions = ['All', 'Development', 'API', 'News', 'Optimization', 'UI', 'Scripting', 'Building', 'Modeling', 'Community'];
let tabColors = {};
let habits = [];
let subjects = [];
let reminderState = { lunch: false, habits: {}, subjects: {} };

function getDateDaysAgo(days) {
    const date = new Date();
    date.setDate(date.getDate() - days);
    return date.toISOString().split('T')[0];
}

function daysBetween(dateA, dateB) {
    const diff = Math.abs(new Date(dateB) - new Date(dateA));
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function isRecentTopic(topic) {
    return topic.lastActivity && daysBetween(topic.lastActivity, new Date()) <= 10;
}

function getTopicScore(topic) {
    const preferenceScore = topicPreferences[topic.category] || 0;
    const recentScore = isRecentTopic(topic) ? 8 : 0;
    const replyScore = Math.min(topic.replies, 40) / 8;
    return preferenceScore * 10 + recentScore + replyScore;
}

function sortTopics(topics) {
    return topics.slice().sort((a, b) => getTopicScore(b) - getTopicScore(a));
}

function toggleOlderTopics() {
    showOlderTopics = !showOlderTopics;
    const button = document.getElementById('older-topics-toggle');
    button.textContent = showOlderTopics ? 'Hide older topics' : 'Show older topics';
    renderDevForum();
}

function loadTopicPreferences() {
    const stored = localStorage.getItem('devlife-topic-preferences');
    topicPreferences = stored ? JSON.parse(stored) : {};
}

function saveTopicPreferences() {
    localStorage.setItem('devlife-topic-preferences', JSON.stringify(topicPreferences));
}

function updateTopicPreferences(category) {
    topicPreferences[category] = (topicPreferences[category] || 0) + 1;
    saveTopicPreferences();
}

function buildTopicDates() {
    forumTopics.forEach((topic, index) => {
        topic.createdAt = getDateDaysAgo(1 + index * 2);
        topic.lastActivity = getDateDaysAgo(Math.max(0, index % 7));
    });
}

function showTab(tabId, event) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');

    const navButtons = document.querySelectorAll('.tab, .bottom-nav-btn');
    navButtons.forEach(button => button.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }

    // Show/hide category bar
    const categoryBar = document.querySelector('.category-bar');
    if (tabId === 'devforum') {
        categoryBar.style.display = 'grid';
        document.querySelector('.nav-tabs').style.top = '92px';
    } else {
        categoryBar.style.display = 'none';
        document.querySelector('.nav-tabs').style.top = '0';
    }

    applyDynamicStyles(tabId);
}

function applyDynamicStyles(activeTab) {
    const root = document.documentElement;
    let primary = '#6f42c1';
    let secondary = '#8a5dff';
    if (tabColors[activeTab]) {
        primary = tabColors[activeTab].primary;
        secondary = tabColors[activeTab].secondary;
    } else {
        // Default colors
        switch (activeTab) {
            case 'devforum':
                primary = '#6f42c1';
                secondary = '#8a5dff';
                break;
            case 'habits':
                primary = '#28a745';
                secondary = '#22c55e';
                break;
            case 'study':
                primary = '#ffc107';
                secondary = '#ff9f1a';
                break;
        }
    }
    root.style.setProperty('--primary-color', primary);
    root.style.setProperty('--secondary-color', secondary);

    document.querySelectorAll('.btn').forEach(btn => {
        btn.style.background = `linear-gradient(135deg, ${primary}, ${secondary})`;
    });
}

function selectCategory(category, event) {
    document.querySelectorAll('.category-pill').forEach(pill => pill.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }
    topicFilter = category;
    topicPage = 0;
    renderDevForum();
    updateCategoryBubble();
    showSuccessMessage(`Category set to ${category}!`);
}

function updateCategoryBubble() {
    const activePill = document.querySelector('.category-pill.active');
    const bubble = document.querySelector('.category-bubble');
    if (!activePill || !bubble) return;
    const pillRect = activePill.getBoundingClientRect();
    const barRect = activePill.parentElement.getBoundingClientRect();
    bubble.style.width = `${pillRect.width}px`;
    bubble.style.transform = `translateX(${pillRect.left - barRect.left}px)`;
}

function toggleSettingsPanel() {
    const panel = document.getElementById('settings-panel');
    const backdrop = document.getElementById('settings-backdrop');
    const fab = document.querySelector('.settings-fab');
    panel.classList.toggle('open');
    backdrop.classList.toggle('open');
    fab.classList.toggle('hidden', panel.classList.contains('open'));
}

function renderDevForum() {
    renderTopicList();
    renderNewsList();
    document.getElementById('open-topic-count').textContent = getFilteredTopics().length;
    document.getElementById('news-count').textContent = newsItems.length;
    document.getElementById('recent-filter-note').textContent = showOlderTopics ? 'Showing all open topics' : 'Showing topics updated in the last 2 weeks';
}

function getFilteredTopics() {
    return forumTopics.filter(topic => {
        const isOpen = topic.status === 'Open' && !topic.isPrivate && !topic.deleted;
        const topicText = `${topic.title.toLowerCase()} ${topic.summary.toLowerCase()} ${topic.category.toLowerCase()} ${topic.tags ? topic.tags.join(' ').toLowerCase() : ''}`;
        const matchesFilter = topicFilter === 'All'
            || topic.category === topicFilter
            || (topic.tags && topic.tags.includes(topicFilter))
            || topicText.includes(topicFilter.toLowerCase());
        const searchText = topicText;
        const matchesSearch = searchText.includes(topicSearch.toLowerCase());
        const recentMatch = showOlderTopics || isRecentTopic(topic);
        return isOpen && matchesFilter && matchesSearch && recentMatch;
    });
}

function getPagedTopics() {
    const filtered = getFilteredTopics();
    return filtered.slice(0, (topicPage + 1) * topicsPerPage);
}

function renderTopicList() {
    const topicList = document.getElementById('topic-list');
    topicList.innerHTML = '';
    const topics = sortTopics(getPagedTopics());
    const allFiltered = getFilteredTopics();

    if (!topics.length) {
        const empty = document.createElement('div');
        empty.className = 'topic-card';
        empty.innerHTML = '<h4>No live topics found</h4><p>Try another filter or keyword.</p>';
        topicList.appendChild(empty);
        return;
    }

    topics.forEach(topic => {
        const isRecommended = (topicPreferences[topic.category] || 0) > 0;
        const label = isRecentTopic(topic) ? 'New' : 'Updated';
        const badgeClass = isRecommended ? 'recommended' : 'open';
        const tagItems = topic.tags ? topic.tags.map(tag => `<span class="topic-tag">${tag}</span>`).join('') : '';
        const card = document.createElement('div');
        card.className = 'topic-card';
        card.onclick = () => openForumTopic(topic.url);
        card.innerHTML = `
            <div class="topic-card-header">
                <h4>${topic.title}</h4>
                <span class="topic-status ${badgeClass}">${isRecommended ? 'Recommended' : label}</span>
            </div>
            <p>${topic.summary}</p>
            <div class="topic-meta">
                <span>${topic.category}</span>
                <span>${topic.replies} replies</span>
                <span>${isRecentTopic(topic) ? 'Active within 14 days' : 'Older thread'}</span>
            </div>
            <div class="topic-tags">${tagItems}</div>
            <div class="topic-actions">
                <button class="save-btn" onclick="saveTopic('${topic.title}', event)">💾 Save</button>
            </div>
        `;
        topicList.appendChild(card);
    });

    if (topics.length < allFiltered.length) {
        const showMoreBtn = document.createElement('button');
        showMoreBtn.className = 'btn';
        showMoreBtn.textContent = 'Show More Topics';
        showMoreBtn.onclick = () => {
            topicPage++;
            renderTopicList();
        };
        topicList.appendChild(showMoreBtn);
    }
}

function renderNewsList() {
    const newsList = document.getElementById('news-list');
    newsList.innerHTML = '';
    newsItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'news-card';
        card.onclick = () => openForumTopic(item.url);
        card.innerHTML = `
            <h4>${item.title}</h4>
            <p>${item.summary}</p>
            <div class="news-meta">
                <span>${item.date}</span>
                <span class="topic-status news">Official</span>
            </div>
        `;
        newsList.appendChild(card);
    });
}

function sendNotification(title, body) {
    if (localStorage.getItem('notifications') !== 'true') {
        return;
    }
    if ('Notification' in window) {
        if (Notification.permission === 'default') {
            Notification.requestPermission();
        }
        if (Notification.permission === 'granted') {
            new Notification(title, { body, icon: 'https://via.placeholder.com/128' });
        }
    }
}

function triggerReminder(id, title, message) {
    if (reminderState[id]) return;
    reminderState[id] = true;
    showSuccessMessage(message);
    sendNotification(title, message);
}

function checkReminders() {
    if (localStorage.getItem('notifications') !== 'true') return;
    const now = new Date();

    habits.forEach((habit, index) => {
        if (!habit.reminder || habit.done) return;
        const reminderTime = habit.reminder.split(':');
        if (reminderTime.length !== 2) return;
        const reminderDate = new Date(now);
        reminderDate.setHours(parseInt(reminderTime[0], 10), parseInt(reminderTime[1], 10), 0, 0);
        const minutesUntil = Math.round((reminderDate - now) / 60000);
        if (minutesUntil <= 15 && minutesUntil >= 0) {
            triggerReminder(`habit-${index}`, 'Habit reminder', `Your habit '${habit.name}' starts soon.`);
        } else if (minutesUntil < 0 && minutesUntil >= -30) {
            triggerReminder(`habit-started-${index}`, 'Habit started', `'${habit.name}' should start now.`);
        }
    });

    subjects.forEach((subject, index) => {
        ['dueDate', 'examDate'].forEach(type => {
            if (!subject[type]) return;
            const eventDate = new Date(subject[type]);
            const minutesUntil = Math.round((eventDate - now) / 60000);
            if (minutesUntil <= 15 && minutesUntil >= 0) {
                triggerReminder(`subject-${type}-${index}`, 'Study reminder', `${subject.name} has a ${type === 'examDate' ? 'test' : 'deadline'} in 15 minutes.`);
            } else if (minutesUntil < 0 && minutesUntil >= -60) {
                triggerReminder(`subject-started-${type}-${index}`, 'Study window', `${subject.name} ${type === 'examDate' ? 'exam' : 'deadline'} is happening now.`);
            }
        });
    });

    const lunchKey = 'lunch-time';
    const lunchStart = new Date(now);
    lunchStart.setHours(11, 45, 0, 0);
    const lunchEnd = new Date(now);
    lunchEnd.setHours(12, 15, 0, 0);
    if (now >= lunchStart && now <= lunchEnd && !reminderState[lunchKey]) {
        triggerReminder(lunchKey, 'Lunch break reminder', 'Time to prepare lunch and recharge for the next study session.');
    }
}

function startReminderChecker() {
    checkReminders();
    setInterval(checkReminders, 60000);
}

function applyTopicFilter(filter, event) {
    topicFilter = filter;
    topicPage = 0; // Reset page
    document.querySelectorAll('.chip').forEach(chip => chip.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }
    document.getElementById('topic-search').value = '';
    topicSearch = '';
    renderDevForum();
}

function filterTopics() {
    topicSearch = document.getElementById('topic-search').value;
    if (topicSearch.trim().length > 1) {
        addSearchTags(topicSearch);
    }
    topicPage = 0; // Reset page
    renderDevForum();
}

function saveTopic(title, event) {
    event.stopPropagation();
    const topic = forumTopics.find(item => item.title === title);
    if (topic) {
        updateTopicPreferences(topic.category);
    }
    if (!savedTopics.includes(title)) {
        savedTopics.push(title);
        saveSavedTopics();
        showSuccessMessage('Topic saved! 📚');
    } else {
        showSuccessMessage('Topic already saved!');
    }
}

function saveSavedTopics() {
    localStorage.setItem('devlife-saved-topics', JSON.stringify(savedTopics));
}

function saveSavedSearchTags() {
    localStorage.setItem('devlife-search-tags', JSON.stringify(savedSearchTags));
}

function loadSavedSearchTags() {
    const stored = localStorage.getItem('devlife-search-tags');
    savedSearchTags = stored ? JSON.parse(stored) : [];
}

function addSearchTags(query) {
    const tags = query
        .split(/[^a-zA-Z0-9]+/)
        .map(word => word.trim())
        .filter(word => word.length > 1)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    tags.forEach(tag => {
        if (!topicFilterOptions.includes(tag) && !savedSearchTags.includes(tag)) {
            savedSearchTags.unshift(tag);
        }
    });
    savedSearchTags = savedSearchTags.slice(0, 8);
    saveSavedSearchTags();
    renderSavedSearchTags();
}

function renderSavedSearchTags() {
    const savedRow = document.getElementById('saved-search-tags');
    if (!savedRow) return;
    savedRow.innerHTML = '';
    if (!savedSearchTags.length) {
        savedRow.style.display = 'none';
        return;
    }
    savedRow.style.display = 'flex';
    savedSearchTags.forEach(tag => {
        const button = document.createElement('button');
        button.className = 'chip';
        button.textContent = tag;
        button.onclick = event => applyTopicFilter(tag, event);
        savedRow.appendChild(button);
    });
}

function openForumTopic(url) {
    if (!url) {
        showSuccessMessage('Topic URL not available.');
        return;
    }
    window.open(url, '_blank');
    showSuccessMessage('Opening topic directly in DevForum.');
}

function openRobloxForum() {
    window.open('https://devforum.roblox.com/', '_blank');
    playSound('click');
}

function openRobloxNews() {
    window.open('https://devforum.roblox.com/c/announcements/6', '_blank');
    playSound('click');
}

function playSound(type) {
    if (localStorage.getItem('sound') !== 'true') {
        return;
    }
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const context = new AudioContext();
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.value = type === 'click' ? 880 : 440;
        gain.gain.value = 0.05;
        oscillator.connect(gain);
        gain.connect(context.destination);
        oscillator.start();
        oscillator.stop(context.currentTime + 0.06);
        setTimeout(() => context.close(), 200);
    } catch (error) {
        console.warn('Sound playback not supported', error);
    }
}

function loadMoreContent() {
    const devforum = document.getElementById('devforum');
    const newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.innerHTML = `
        <div class="section-header">
            <div>
                <h3>More Public Topics</h3>
                <p class="section-subtitle">Fresh open discussions added for your feed.</p>
            </div>
        </div>
        <div class="topic-card" onclick="openForumTopic('https://devforum.roblox.com/t/advanced-lua-scripting/123461')">
            <h4>Advanced Lua Scripting</h4>
            <p>Open thread on advanced metatables, OOP, and performance.</p>
            <div class="topic-meta"><span>Development</span><span>31 replies</span><span class="topic-status open">Open</span></div>
        </div>
        <div class="topic-card" onclick="openForumTopic('https://devforum.roblox.com/t/monetization-strategies/123462')">
            <h4>Monetization Strategies</h4>
            <p>Public discussion on premium passes, developer products, and UX.</p>
            <div class="topic-meta"><span>Community</span><span>27 replies</span><span class="topic-status open">Open</span></div>
        </div>
    `;
    devforum.insertBefore(newCard, devforum.lastElementChild);
}

function hideForm(sectionId) {
    if (sectionId === 'habit-form-section') {
        document.getElementById('habit-list').style.display = 'block';
        document.querySelector('#habits .card:nth-child(3)').style.display = 'block';
        document.getElementById('habit-form-section').style.display = 'none';
        document.querySelector('#habits .button-row').style.display = 'flex';
    } else if (sectionId === 'subject-form-section') {
        document.querySelector('#study .card:nth-child(2)').style.display = 'block';
        document.querySelector('#study .card:nth-child(3)').style.display = 'block';
        document.getElementById('subject-form-section').style.display = 'none';
        document.querySelector('#study .button-row').style.display = 'flex';
    } else {
        document.getElementById(sectionId).classList.remove('active');
    }
}

function showAddHabitForm() {
    document.getElementById('habit-list').style.display = 'none';
    document.querySelector('#habits .card:nth-child(3)').style.display = 'none'; // category grid card
    document.getElementById('habit-form-section').style.display = 'block';
    document.querySelector('#habits .button-row').style.display = 'none';
}

function showAddSubjectForm() {
    document.querySelector('#study .card:nth-child(2)').style.display = 'none'; // task list card
    document.querySelector('#study .card:nth-child(3)').style.display = 'none'; // subject list card
    document.getElementById('subject-form-section').style.display = 'block';
    document.querySelector('#study .button-row').style.display = 'none';
}

function viewAllHabits() {
    const habitSection = document.getElementById('habits');
    habitSection.scrollIntoView({ behavior: 'smooth' });
    showSuccessMessage('Scrolling to your full habit planner.');
}

function editSubject(index, event) {
    event.stopPropagation();
    const subject = subjects[index];
    document.getElementById('subject-name').value = subject.name;
    document.getElementById('subject-priority').value = subject.priority;
    document.getElementById('subject-due-date').value = subject.dueDate;
    document.getElementById('subject-exam-date').value = subject.examDate;
    document.getElementById('subject-notes').value = subject.notes;
    const form = document.getElementById('subject-form');
    form.dataset.editIndex = index;
    document.querySelector('#subject-form-section h3').textContent = 'Edit Subject';
    document.querySelector('#subject-form-section button[type="submit"]').textContent = 'Update Subject';
    showAddSubjectForm();
}

function deleteSubject(index, event) {
    event.stopPropagation();
    if (confirm('Delete this subject? This cannot be undone! 📚💔')) {
        subjects.splice(index, 1);
        saveSubjects();
        renderStudy();
        showSuccessMessage('Subject deleted.');
    }
}

function setReminder() {
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification('DevLife Hub Reminder', {
                    body: 'Time to review your study planner.',
                    icon: 'https://via.placeholder.com/128'
                });
            }
        });
    } else {
        alert('Notifications are not supported in this browser.');
    }
}

function showSuccessMessage(message) {
    const existing = document.querySelector('.success-toast');
    if (existing) existing.remove();
    const successDiv = document.createElement('div');
    successDiv.className = 'success-toast';
    successDiv.textContent = message;
    document.body.appendChild(successDiv);
    setTimeout(() => {
        successDiv.remove();
    }, 2800);
}

function saveHabits() {
    localStorage.setItem('devlife-habits', JSON.stringify(habits));
}

function saveSubjects() {
    localStorage.setItem('devlife-subjects', JSON.stringify(subjects));
}

function calculateStreak() {
    return habits.filter(habit => habit.streak > 0).length;
}

function calculateCompletion() {
    if (!habits.length) return 0;
    const completed = habits.filter(habit => habit.done).length;
    return Math.round((completed / habits.length) * 100);
}

function calculateFocusPoints() {
    return habits.reduce((sum, habit) => sum + (habit.done ? 10 : 3), 0);
}

function renderHabits() {
    const list = document.getElementById('habit-list');
    list.innerHTML = '';
    habits.forEach((habit, index) => {
        const emojiMap = {
            Learning: '📚',
            Health: '💪',
            Productivity: '⚡',
            Community: '🤝'
        };
        const emoji = emojiMap[habit.category] || '🎯';
        const card = document.createElement('div');
        card.className = 'habit-card';
        card.onclick = () => toggleHabitComplete(index);
        card.innerHTML = `
            <div class="card-top">
                <h4>${emoji} ${habit.name}</h4>
                <button class="more-btn" onclick="toggleCardMenu('habit', ${index}, event)">⋯</button>
                <div class="item-menu" id="habit-menu-${index}" onclick="event.stopPropagation()">
                    <button class="menu-item" onclick="editHabit(${index}, event)">Edit</button>
                    <button class="menu-item danger" onclick="deleteHabit(${index}, event)">Delete</button>
                </div>
            </div>
            <p>${habit.goal || habit.category} - ${habit.done ? '✅ Done!' : '⏳ In progress'}</p>
            <div class="topic-meta">
                <span>${habit.frequency}</span>
                <span>${habit.category}</span>
                <span>${habit.reminder || 'No reminder'}</span>
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width: ${habit.progress}%"></div></div>
        `;
        list.appendChild(card);
    });
    document.getElementById('streak-count').textContent = calculateStreak();
    document.getElementById('habit-completion').textContent = `${calculateCompletion()}%`;
    document.getElementById('focus-points').textContent = calculateFocusPoints();
}

function toggleCardMenu(type, index, event) {
    event.stopPropagation();
    closeAllMenus();
    const menu = document.getElementById(`${type}-menu-${index}`);
    if (menu) {
        menu.classList.toggle('open');
    }
}

function closeAllMenus() {
    document.querySelectorAll('.item-menu.open').forEach(menu => menu.classList.remove('open'));
}

function toggleHabitComplete(index) {
    habits[index].done = !habits[index].done;
    habits[index].progress = habits[index].done ? 100 : 0;
    habits[index].streak = habits[index].done ? (habits[index].streak || 0) + 1 : 0;
    saveHabits();
    renderHabits();
    showSuccessMessage(habits[index].done ? 'Habit completed! 🎉' : 'Habit reset.');
}

function editHabit(index, event) {
    event.stopPropagation();
    const habit = habits[index];
    // Populate form with habit data
    document.getElementById('habit-name').value = habit.name;
    document.getElementById('habit-category').value = habit.category;
    document.getElementById('habit-frequency').value = habit.frequency;
    document.getElementById('habit-goal').value = habit.goal;
    document.getElementById('habit-reminder').value = habit.reminder;
    // Change form to edit mode
    const form = document.getElementById('habit-form');
    form.dataset.editIndex = index;
    document.querySelector('#habit-form-section h3').textContent = 'Edit Habit';
    document.querySelector('#habit-form-section button[type="submit"]').textContent = 'Update Habit';
    showAddHabitForm();
}

function deleteHabit(index, event) {
    event.stopPropagation();
    if (confirm('Delete this habit? This cannot be undone!')) {
        habits.splice(index, 1);
        saveHabits();
        renderHabits();
        showSuccessMessage('Habit deleted. 💔');
    }
}

function renderStudy() {
    const tasks = document.getElementById('study-task-list');
    const subjectsList = document.getElementById('subject-list');
    tasks.innerHTML = '';
    subjectsList.innerHTML = '';
    let taskCount = 0;
    let nextExam = null;
    subjects.forEach((subject, index) => {
        const priorityEmoji = subject.priority === 'High' ? '🔥' : subject.priority === 'Medium' ? '⚡' : '🐌';
        const subjectCard = document.createElement('div');
        subjectCard.className = 'study-card';
        subjectCard.innerHTML = `
            <div class="card-top">
                <h4>${priorityEmoji} ${subject.name}</h4>
                <button class="more-btn" onclick="toggleCardMenu('subject', ${index}, event)">⋯</button>
                <div class="item-menu" id="subject-menu-${index}" onclick="event.stopPropagation()">
                    <button class="menu-item" onclick="editSubject(${index}, event)">Edit</button>
                    <button class="menu-item danger" onclick="deleteSubject(${index}, event)">Delete</button>
                </div>
            </div>
            <p>${subject.notes || 'No notes yet. 📝'}</p>
            <div class="study-meta">
                <span>Priority: ${subject.priority}</span>
                <span>Due ${subject.dueDate || 'TBD'}</span>
                <span>Exam ${subject.examDate || 'TBD'}</span>
            </div>
        `;
        subjectsList.appendChild(subjectCard);
        if (subject.examDate) {
            const examDate = new Date(subject.examDate);
            if (!nextExam || examDate < nextExam) {
                nextExam = examDate;
            }
        }
        taskCount += 1;
        const taskCard = document.createElement('div');
        taskCard.className = 'topic-card';
        taskCard.innerHTML = `
            <h4>${subject.name} 📚</h4>
            <p>Finish ${subject.notes || 'core study tasks'} before ${subject.dueDate || 'the deadline'}. ⏰</p>
            <div class="topic-meta">
                <span>${subject.priority} priority</span>
                <span>${subject.dueDate || 'No due date'}</span>
            </div>
        `;
        tasks.appendChild(taskCard);
    });
    document.getElementById('task-count').textContent = taskCount;
    document.getElementById('next-exam').textContent = nextExam ? `${Math.max(0, Math.ceil((nextExam - new Date()) / (1000 * 60 * 60 * 24)))} days` : 'TBD';
    document.getElementById('study-progress').textContent = `${subjects.length ? Math.min(100, Math.round((subjects.filter(s => s.dueDate).length / subjects.length) * 100)) : 0}%`;
}

function loadSettings() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').checked = true;
    }
    if (localStorage.getItem('notifications') !== 'false') {
        document.getElementById('notifications-toggle').checked = true;
    }
    if (localStorage.getItem('sound') === 'true') {
        document.getElementById('sound-toggle').checked = true;
    }
    if (localStorage.getItem('forumNotifications') === 'true') {
        document.getElementById('forum-notifications').checked = true;
    }
    const savedColor = localStorage.getItem('accentColor');
    if (savedColor) {
        changeAccentColor(savedColor);
    }
    const savedTabColors = localStorage.getItem('devlife-tab-colors');
    tabColors = savedTabColors ? JSON.parse(savedTabColors) : {};
}

function loadState() {
    const savedHabits = localStorage.getItem('devlife-habits');
    habits = savedHabits ? JSON.parse(savedHabits) : [
        { name: 'Review Lua API', category: 'Learning', frequency: 'Daily', goal: '20 minutes', reminder: '18:00', done: false, progress: 60, streak: 3 },
        { name: 'Publish community update', category: 'Community', frequency: 'Weekly', goal: 'Write a forum post', reminder: '20:00', done: true, progress: 100, streak: 5 },
        { name: 'Optimize game scripts', category: 'Productivity', frequency: '2x per week', goal: 'Reduce lag', reminder: '16:00', done: false, progress: 20, streak: 1 }
    ];
    const savedSubjects = localStorage.getItem('devlife-subjects');
    subjects = savedSubjects ? JSON.parse(savedSubjects) : [
        { name: 'Game Design', priority: 'High', dueDate: '2026-04-10', examDate: '2026-04-14', notes: 'Review level flow and UI.' },
        { name: 'Roblox Scripting', priority: 'Medium', dueDate: '2026-04-12', examDate: '', notes: 'Practice DataStore and API integrations.' }
    ];
    const savedTopicsData = localStorage.getItem('devlife-saved-topics');
    savedTopics = savedTopicsData ? JSON.parse(savedTopicsData) : [];
    loadSavedSearchTags();
    loadTopicPreferences();
}

function toggleDarkMode() {
    const isDark = document.getElementById('theme-toggle').checked;
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('darkMode', isDark ? 'true' : 'false');
    showSuccessMessage(isDark ? 'Dark mode enabled!' : 'Light mode enabled!');
}

function toggleNotifications() {
    const enabled = document.getElementById('notifications-toggle').checked;
    localStorage.setItem('notifications', enabled ? 'true' : 'false');
    if (enabled && 'Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission().then(permission => {
            showSuccessMessage(permission === 'granted' ? 'Notifications granted!' : 'Notifications denied.');
        });
    } else {
        showSuccessMessage(enabled ? 'Notifications enabled!' : 'Notifications disabled');
    }
}

function toggleSound() {
    const enabled = document.getElementById('sound-toggle').checked;
    localStorage.setItem('sound', enabled ? 'true' : 'false');
    showSuccessMessage(enabled ? 'Sound effects enabled!' : 'Sound effects disabled');
}

function toggleForumNotifications() {
    const enabled = document.getElementById('forum-notifications').checked;
    localStorage.setItem('forumNotifications', enabled ? 'true' : 'false');
    showSuccessMessage(enabled ? 'Forum alerts enabled!' : 'Forum alerts disabled');
}

function changeTabColor(tab, color) {
    const secondaryMap = {
        '#6f42c1': '#8a5dff',
        '#667eea': '#7c3aed',
        '#28a745': '#22c55e',
        '#22c55e': '#16a34a',
        '#16a34a': '#15803d',
        '#ffc107': '#ff9f1a',
        '#ff9f1a': '#f59e0b',
        '#f59e0b': '#d97706'
    };
    tabColors[tab] = { primary: color, secondary: secondaryMap[color] || color };
    localStorage.setItem('devlife-tab-colors', JSON.stringify(tabColors));
    // Update selected
    document.querySelectorAll(`.color-option[data-tab="${tab}"]`).forEach(opt => opt.classList.remove('selected'));
    const selected = document.querySelector(`.color-option[data-tab="${tab}"][data-color="${color}"]`);
    if (selected) selected.classList.add('selected');
    // Apply if current tab
    const currentTab = document.querySelector('.tab.active')?.textContent.toLowerCase().replace('forum', 'devforum') || 'devforum';
    if (currentTab === tab) {
        applyDynamicStyles(tab);
    }
    showSuccessMessage(`Color updated for ${tab} tab! 🎨`);
}

function exportData() {
    const data = {
        habits,
        subjects,
        settings: {
            darkMode: localStorage.getItem('darkMode') === 'true',
            notifications: localStorage.getItem('notifications') === 'true',
            sound: localStorage.getItem('sound') === 'true',
            forumNotifications: localStorage.getItem('forumNotifications') === 'true',
            accentColor: localStorage.getItem('accentColor') || '#6f42c1'
        }
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'devlife-hub-data.json';
    a.click();
    URL.revokeObjectURL(url);
    showSuccessMessage('Data exported successfully!');
}

function clearAllData() {
    if (confirm('Clear all local app data?')) {
        localStorage.clear();
        location.reload();
    }
}

function initForms() {
    document.getElementById('habit-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('habit-name').value.trim();
        const category = document.getElementById('habit-category').value;
        const frequency = document.getElementById('habit-frequency').value;
        const goal = document.getElementById('habit-goal').value.trim();
        const reminder = document.getElementById('habit-reminder').value;
        const editIndex = this.dataset.editIndex;
        if (editIndex !== undefined) {
            // Edit mode
            habits[editIndex] = { ...habits[editIndex], name, category, frequency, goal, reminder };
            delete this.dataset.editIndex;
            showSuccessMessage('Habit updated! ✨');
        } else {
            // Add mode
            habits.push({ name, category, frequency, goal, reminder, done: false, progress: 0, streak: 0 });
            showSuccessMessage('New habit added! 🎉');
        }
        saveHabits();
        renderHabits();
        hideForm('habit-form-section');
        this.reset();
        // Reset form title and button
        document.querySelector('#habit-form-section h3').textContent = 'Create Advanced Habit';
        document.querySelector('#habit-form-section button[type="submit"]').textContent = 'Save Habit';
    });
    document.getElementById('subject-form').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('subject-name').value.trim();
        const priority = document.getElementById('subject-priority').value;
        const dueDate = document.getElementById('subject-due-date').value;
        const examDate = document.getElementById('subject-exam-date').value;
        const notes = document.getElementById('subject-notes').value.trim();
        const editIndex = this.dataset.editIndex;
        if (editIndex !== undefined) {
            // Edit mode
            subjects[editIndex] = { ...subjects[editIndex], name, priority, dueDate, examDate, notes };
            delete this.dataset.editIndex;
            showSuccessMessage('Subject updated! 📖✨');
        } else {
            // Add mode
            subjects.push({ name, priority, dueDate, examDate, notes });
            showSuccessMessage('New subject added! 🎓');
        }
        saveSubjects();
        renderStudy();
        hideForm('subject-form-section');
        this.reset();
        // Reset form title and button
        document.querySelector('#subject-form-section h3').textContent = 'Create New Subject';
        document.querySelector('#subject-form-section button[type="submit"]').textContent = 'Save Subject';
    });
}

function initializeColorOptions() {
    const savedColor = localStorage.getItem('accentColor') || '#6f42c1';
    const selected = document.querySelector(`[data-color="${savedColor}"]`);
    if (selected) {
        selected.classList.add('selected');
        changeAccentColor(savedColor);
    }
    // Set selected for tab colors
    for (const tab in tabColors) {
        const color = tabColors[tab].primary;
        const tabSelected = document.querySelector(`.color-option[data-tab="${tab}"][data-color="${color}"]`);
        if (tabSelected) tabSelected.classList.add('selected');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    loadState();
    loadSettings();
    initForms();
    renderSavedSearchTags();
    renderDevForum();
    renderHabits();
    renderStudy();
    initializeColorOptions();
    applyDynamicStyles('devforum');
    updateCategoryBubble();
    selectCategory('All');
    showTab('devforum');
    document.addEventListener('click', closeAllMenus);
    startReminderChecker();
    window.addEventListener('resize', updateCategoryBubble);
});
