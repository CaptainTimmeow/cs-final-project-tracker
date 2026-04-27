// ── Configuration ─────────────────────────────────────────────
const STORAGE_KEY = 'cs_tracker_dates_v1';
const DEFAULT_LAUNCH = '2026-04-27';
const DEFAULT_FINAL = '2026-05-29';

// ── Data: Phase definitions ───────────────────────────────────
function getPhases(launchStr, finalStr) {
    const launch = new Date(launchStr);
    const final = new Date(finalStr);
    const addDays = (d, n) => new Date(d.getTime() + n * 864e5);
    const span = (final - launch) / 4;

    return [
        {
            id: 'launch',
            title: '1. Project Launch',
            subtitle: 'Choose a problem & pitch your idea',
            illustration: 'assets/phase-illustrations/phase-launch.svg',
            start: launch,
            end: addDays(launch, Math.floor(span / 864e5)),
            tasks: [
                'Pick a realistic project idea',
                'Define the problem in one sentence',
                'Identify target user',
                'List 3 core features + 1 MVP feature',
                'Submit Mini PRD (Canvas)',
                'Set up Obsidian project vault'
            ]
        },
        {
            id: 'mvp',
            title: '2. MVP Planning & Build',
            subtitle: 'Scope your MVP & get feature #1 working',
            illustration: 'assets/phase-illustrations/phase-mvp.svg',
            start: addDays(launch, Math.floor(span / 864e5)),
            end: addDays(launch, Math.floor(2 * span / 864e5)),
            tasks: [
                'Break project into features, files, functions',
                'Ask AI for one small feature at a time',
                'Build and run feature #1',
                'Test with sample inputs',
                'Write down one bug or blocker',
                'Bring best prompt to class'
            ]
        },
        {
            id: 'sprint',
            title: '3. Build Sprint & Debug',
            subtitle: 'Strengthen prototype & fix serious bugs',
            illustration: 'assets/phase-illustrations/phase-sprint.svg',
            start: addDays(launch, Math.floor(2 * span / 864e5)),
            end: addDays(launch, Math.floor(3 * span / 864e5)),
            tasks: [
                'Get at least one usable feature working',
                'Add error handling (try/except)',
                'Test edge cases',
                'Refactor messy code with AI help',
                'Keep AI tracker log updated',
                'Prepare 60-second show-and-tell'
            ]
        },
        {
            id: 'polish',
            title: '4. Polish & Feedback',
            subtitle: 'Demo, peer review, and revise',
            illustration: 'assets/phase-illustrations/phase-polish.svg',
            start: addDays(launch, Math.floor(3 * span / 864e5)),
            end: addDays(launch, Math.floor(3.8 * span / 864e5)),
            tasks: [
                'Deliver 60-second mini demo',
                'Collect warm/cool feedback',
                'Fix issues from feedback',
                'Add README with run instructions',
                'Prepare sample data if needed',
                'Practice final presentation'
            ]
        },
        {
            id: 'present',
            title: '5. Final Presentation',
            subtitle: 'Ship it & present to class',
            illustration: 'assets/phase-illustrations/phase-present.svg',
            start: addDays(launch, Math.floor(3.8 * span / 864e5)),
            end: final,
            tasks: [
                'Submit final code package (Canvas)',
                '5-minute demo to class',
                'Explain what the program does',
                'Explain how main logic works',
                'Show what AI helped with & what you changed',
                'Share what you would build next'
            ]
        }
    ];
}

// ── Data: Project types ───────────────────────────────────────
const PROJECT_TYPES = [
    {
        id: 'game',
        name: 'Game',
        desc: 'Quiz, adventure, puzzle',
        examples: ['Text Adventure', 'Quiz Game', 'Number Strategy', 'Trivia App']
    },
    {
        id: 'productivity',
        name: 'Productivity',
        desc: 'Timers, trackers, tools',
        examples: ['Study Timer', 'Task Tracker', 'File Renamer', 'Habit Logger']
    },
    {
        id: 'data',
        name: 'Data',
        desc: 'Analyze & visualize',
        examples: ['Grade Calculator', 'Workout Tracker', 'Reading Log', 'Expense Analyzer']
    },
    {
        id: 'api',
        name: 'API',
        desc: 'Fetch & display data',
        examples: ['Weather Checker', 'Movie Lookup', 'Exchange Rate', 'News Reader']
    },
    {
        id: 'creative',
        name: 'Creative',
        desc: 'Generate & transform',
        examples: ['Story Generator', 'Playlist Helper', 'Pixel Art Converter', 'Quote Maker']
    },
    {
        id: 'automation',
        name: 'Automation',
        desc: 'Scripts & organizers',
        examples: ['Folder Organizer', 'Filename Cleaner', 'Batch Helper', 'File Sorter']
    }
];

// ── Helpers ───────────────────────────────────────────────────
function loadDates() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
    return { launch: DEFAULT_LAUNCH, final: DEFAULT_FINAL };
}

function saveDates() {
    const launch = document.getElementById('launchDateInput').value;
    const final = document.getElementById('finalDateInput').value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ launch, final }));
    renderAll();
}

function getCurrentPhaseIndex(phases) {
    const now = new Date();
    for (let i = 0; i < phases.length; i++) {
        if (now >= phases[i].start && now < phases[i].end) return i;
        if (i === phases.length - 1 && now >= phases[i].start) return i;
    }
    if (now < phases[0].start) return -1;
    return phases.length;
}

function fmtDate(d) {
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function setRingProgress(percent) {
    const circle = document.getElementById('ringCircle');
    if (!circle) return;
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = offset;
}

// ── Render: Hero ──────────────────────────────────────────────
function renderHero(phases, currentIndex) {
    const badge = document.getElementById('statusBadge');
    const task = document.getElementById('currentTask');
    const desc = document.getElementById('taskDesc');
    const count = document.getElementById('countdown');
    const illustration = document.getElementById('heroIllustration');
    const percentEl = document.getElementById('ringPercent');

    const now = new Date();
    const totalDuration = phases[phases.length - 1].end - phases[0].start;
    const elapsed = Math.min(Math.max(now - phases[0].start, 0), totalDuration);
    const pct = Math.round((elapsed / totalDuration) * 100);

    // Update linear progress bar
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('progressLabel').textContent = pct + '% complete';

    // Update ring
    setRingProgress(pct);
    if (percentEl) percentEl.textContent = pct + '%';

    // Update hero text & illustration
    if (currentIndex >= 0 && currentIndex < phases.length) {
        const p = phases[currentIndex];
        badge.className = 'status-badge active';
        badge.textContent = 'Active Phase';
        task.textContent = p.title;
        desc.textContent = p.subtitle;
        if (illustration) { illustration.src = p.illustration; illustration.style.display = 'block'; }

        const daysLeft = Math.ceil((p.end - now) / 864e5);
        count.innerHTML = `⏰ <span>${daysLeft}</span> day${daysLeft !== 1 ? 's' : ''} left &nbsp;|&nbsp; Ends <span>${fmtDate(p.end)}</span>`;
    } else if (currentIndex === -1) {
        badge.className = 'status-badge upcoming';
        badge.textContent = 'Not Started';
        task.textContent = 'Project Launch Coming Soon';
        desc.textContent = 'Get ready to choose your project idea.';
        if (illustration) { illustration.src = phases[0].illustration; illustration.style.display = 'block'; }
        const daysUntil = Math.ceil((phases[0].start - now) / 864e5);
        count.innerHTML = `🚀 Launch in <span>${daysUntil}</span> day${daysUntil !== 1 ? 's' : ''}`;
    } else {
        badge.className = 'status-badge done';
        badge.textContent = 'Complete';
        task.textContent = 'Project Finished';
        desc.textContent = 'All phases complete. Great work!';
        if (illustration) { illustration.src = phases[phases.length - 1].illustration; illustration.style.display = 'block'; }
        count.innerHTML = '';
    }
}

// ── Render: Roadmap ───────────────────────────────────────────
function renderRoadmap(phases, currentIndex) {
    const svg = document.getElementById('roadmapSvg');
    if (!svg) return;

    const nodes = svg.querySelectorAll('.node');
    const path = svg.getElementById('roadmapPath');
    const marker = svg.getElementById('youAreHere');

    const totalLength = 640;
    let activeLength = 0;

    nodes.forEach((node, idx) => {
        node.classList.remove('done', 'active', 'future');
        if (idx < currentIndex) {
            node.classList.add('done');
            activeLength += totalLength / 4;
        } else if (idx === currentIndex) {
            node.classList.add('active');
            activeLength += (totalLength / 4) * 0.5;
        } else {
            node.classList.add('future');
        }

        // Click to expand phase
        node.onclick = () => {
            const phaseEl = document.getElementById(`phase-${idx}`);
            if (phaseEl) {
                phaseEl.classList.add('open');
                phaseEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        };
    });

    // Animate path fill
    if (path) {
        path.style.strokeDasharray = totalLength;
        path.style.strokeDashoffset = totalLength;
        requestAnimationFrame(() => {
            path.style.transition = 'stroke-dashoffset 1s ease';
            path.style.strokeDashoffset = totalLength - activeLength;
        });
    }

    // Position "You Are Here" marker
    if (marker && currentIndex >= 0 && currentIndex < phases.length) {
        const positions = [80, 240, 400, 560, 720];
        marker.style.display = 'block';
        marker.setAttribute('transform', `translate(${positions[currentIndex]}, 38)`);
    } else if (marker) {
        marker.style.display = 'none';
    }
}

// ── Render: Timeline / Phases ─────────────────────────────────
function renderTimeline(phases, currentIndex) {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';

    phases.forEach((p, idx) => {
        const isCurrent = idx === currentIndex;
        const isDone = idx < currentIndex;

        const div = document.createElement('div');
        div.className = 'phase' + (isCurrent ? ' open' : '');
        div.id = `phase-${idx}`;

        // Check if all tasks are complete
        const allChecked = p.tasks.every((_, i) => localStorage.getItem(`${p.id}_task${i}`) === '1');
        if (allChecked) div.classList.add('all-complete');

        div.innerHTML = `
            <div class="phase-header" onclick="togglePhase(${idx})">
                <div class="phase-illustration-sm">
                    <img src="${p.illustration}" alt="${p.title}" loading="lazy">
                </div>
                <div class="phase-meta">
                    <div class="phase-title">
                        ${isDone ? '✅' : isCurrent ? '▶️' : '⏳'} ${p.title}
                    </div>
                    <div class="phase-subtitle">${p.subtitle}</div>
                </div>
                <span class="phase-date">${fmtDate(p.start)} – ${fmtDate(p.end)}</span>
                <span class="phase-toggle">▼</span>
            </div>
            <div class="phase-content">
                <ul class="checklist" data-phase="${p.id}">
                    ${p.tasks.map((t, i) => `
                        <li>
                            <input type="checkbox" id="${p.id}_task${i}" 
                                ${localStorage.getItem(`${p.id}_task${i}`) === '1' ? 'checked' : ''} 
                                onchange="onTaskCheck('${p.id}', ${i}, ${idx})">
                            <label for="${p.id}_task${i}">${t}</label>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
        timeline.appendChild(div);
    });
}

function togglePhase(idx) {
    const el = document.getElementById(`phase-${idx}`);
    if (el) el.classList.toggle('open');
}

function onTaskCheck(phaseId, taskIdx, phaseIdx) {
    const key = `${phaseId}_task${taskIdx}`;
    const checked = document.getElementById(key).checked;
    localStorage.setItem(key, checked ? '1' : '0');

    // Check if all tasks in this phase are now complete
    const phaseEl = document.getElementById(`phase-${phaseIdx}`);
    const inputs = phaseEl.querySelectorAll('.checklist input');
    const allChecked = Array.from(inputs).every(inp => inp.checked);
    if (allChecked) {
        phaseEl.classList.add('all-complete');
    } else {
        phaseEl.classList.remove('all-complete');
    }
}

// ── Render: Project Types ─────────────────────────────────────
function renderProjectTypes() {
    const grid = document.getElementById('typeGrid');
    if (!grid) return;
    grid.innerHTML = '';

    PROJECT_TYPES.forEach(type => {
        const card = document.createElement('div');
        card.className = 'type-card';
        card.onclick = () => showTypeExamples(type.id);
        card.innerHTML = `
            <svg><use href="assets/icons/sprite.svg#icon-${type.id}"></use></svg>
            <h4>${type.name}</h4>
            <p>${type.desc}</p>
        `;
        grid.appendChild(card);
    });
}

function showTypeExamples(typeId) {
    const type = PROJECT_TYPES.find(t => t.id === typeId);
    if (!type) return;

    // Toggle active state on cards
    document.querySelectorAll('.type-card').forEach(c => c.classList.remove('active'));
    const activeCard = Array.from(document.querySelectorAll('.type-card')).find(
        c => c.querySelector('h4').textContent === type.name
    );
    if (activeCard) activeCard.classList.add('active');

    const examples = document.getElementById('typeExamples');
    examples.innerHTML = `
        <h4>${type.name} Project Ideas</h4>
        <ul>
            ${type.examples.map(ex => `<li>${ex}</li>`).join('')}
        </ul>
    `;
    examples.classList.add('open');
}

// ── Render: Comparison & AI Rules ─────────────────────────────
// These are static HTML sections, no JS needed for initial render

// ── Main Render ───────────────────────────────────────────────
function renderAll() {
    const dates = loadDates();
    document.getElementById('launchDateInput').value = dates.launch;
    document.getElementById('finalDateInput').value = dates.final;

    const phases = getPhases(dates.launch, dates.final);
    const currentIndex = getCurrentPhaseIndex(phases);

    renderHero(phases, currentIndex);
    renderRoadmap(phases, currentIndex);
    renderTimeline(phases, currentIndex);
    renderProjectTypes();
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    renderAll();

    // Expose globals for inline handlers
    window.saveDates = saveDates;
    window.togglePhase = togglePhase;
    window.onTaskCheck = onTaskCheck;
    window.showTypeExamples = showTypeExamples;
});
