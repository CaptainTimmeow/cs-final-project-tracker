const STORAGE_KEY = "cs-final-project-tracker-v4";

const PHASES = [
    {
        id: "milestone-1",
        number: 1,
        title: "Launch",
        fullTitle: "Milestone 1. Project Launch",
        subtitle: "Choose a direction and draft your first mini PRD.",
        dates: "Class 1",
        shortDates: "Class 1",
        status: "done",
        tasks: [
            { label: "Read the final project overview", date: "Done", done: true },
            { label: "Review the project menu", date: "Done", done: true },
            { label: "Draft a mini PRD plan", date: "Done", done: true },
            { label: "Bring the plan to class for review", date: "Done", done: true }
        ],
        highlights: ["Mini PRD drafted", "Ready for teacher review"]
    },
    {
        id: "milestone-2",
        number: 2,
        title: "Scope Lock",
        fullTitle: "Milestone 2. Mini PRD Scope Lock",
        subtitle: "Get your project approved, shrunk, or redirected before coding.",
        dates: "Next class",
        shortDates: "Milestone 2",
        status: "current",
        milestone: "Approved Mini PRD  •  Submit to Canvas",
        timeRemaining: "Today",
        phasePercent: 35,
        tasks: [
            { label: "Choose one project inspiration and pick a direction", date: "Start", done: false },
            { label: "Choose one variation from the project menu", date: "Start", done: false },
            { label: "Write one clear interaction flow", date: "Work time", done: false },
            { label: "Write one example data structure", date: "Work time", done: false },
            { label: "List 3-5 planned functions", date: "Work time", done: false },
            { label: "Get Green, Yellow, or Red teacher status", date: "Review", done: false },
            { label: "Submit revised Mini PRD to Canvas", date: "Exit", done: false }
        ],
        highlights: ["One archetype", "One core feature", "One clear data flow"]
    },
    {
        id: "milestone-3",
        number: 3,
        title: "Prototype",
        fullTitle: "Milestone 3. First Working Prototype",
        subtitle: "Build the smallest approved version and make it run.",
        dates: "After approval",
        shortDates: "Prototype",
        status: "upcoming",
        tasks: [
            { label: "Create project folder and main.py", date: "Next", done: false },
            { label: "Write a runnable skeleton", date: "Next", done: false },
            { label: "Build the approved core feature", date: "Build", done: false },
            { label: "Test with normal input", date: "Build", done: false },
            { label: "Save one working version", date: "Build", done: false }
        ],
        highlights: ["Code runs", "Core feature works"]
    },
    {
        id: "milestone-4",
        number: 4,
        title: "Test",
        fullTitle: "Milestone 4. Test and Fix",
        subtitle: "Break the prototype on purpose, then fix the highest-risk bugs.",
        dates: "After prototype",
        shortDates: "Test",
        status: "upcoming",
        tasks: [
            { label: "Ask a partner to test your app", date: "Test", done: false },
            { label: "Try bad input and edge cases", date: "Test", done: false },
            { label: "Fix at least one crash or wrong output", date: "Fix", done: false },
            { label: "Record what changed in your iteration log", date: "Fix", done: false }
        ],
        highlights: ["Bug report", "Evidence of iteration"]
    },
    {
        id: "milestone-5",
        number: 5,
        title: "Refine",
        fullTitle: "Milestone 5. Final Package",
        subtitle: "Polish what works, explain your code, and prepare the demo.",
        dates: "Final week",
        shortDates: "Final",
        status: "upcoming",
        tasks: [
            { label: "Write README instructions", date: "Polish", done: false },
            { label: "Clean up names, comments, and dead code", date: "Polish", done: false },
            { label: "Prepare AI prompt and iteration logs", date: "Submit", done: false },
            { label: "Practice explaining one function", date: "Demo", done: false },
            { label: "Submit final package to Canvas", date: "Submit", done: false }
        ],
        highlights: ["README", "Presentation-ready demo"]
    }
];

const PROJECT_MENU = [
    {
        id: "habit-tracker",
        name: "The \"I Keep Forgetting\" Habit Tracker",
        shortName: "Habit Tracker",
        pitch: "Log daily habits and see how many days in a row you've kept them.",
        difficulty: "Easy",
        concepts: ["json", "datetime", "loops"],
        preview: `What habit? Drink water
Did you do it today? yes
Streak: 5 days 🔥
Keep it up!`,
        examples: [
            { name: "Beginner CLI Projects", url: "https://github.com/tomi3-11/Python-beginner-CLI-projects" }
        ]
    },
    {
        id: "expense-logger",
        name: "The \"Where Did My Money Go?\" Expense Logger",
        shortName: "Expense Logger",
        pitch: "Track what you buy and how much you spend. See your weekly total.",
        difficulty: "Easy",
        concepts: ["csv", "loops", "matplotlib"],
        preview: `What did you buy? Coffee
How much? 25
Saved! Total this week: $143`,
        examples: [
            { name: "Expense Tracker CLI", url: "https://github.com/Alvix11/Expense-Tracker-CLI" },
            { name: "Python Expense Tracker", url: "https://github.com/suphawadeeth/expense_tracker" }
        ]
    },
    {
        id: "meal-picker",
        name: "The \"What Should I Eat?\" Meal Picker",
        shortName: "Meal Picker",
        pitch: "Can't decide what to eat? Let your app pick a random meal from your favorites.",
        difficulty: "Easy",
        concepts: ["random", "lists", "json"],
        preview: `Press Enter to pick a meal...
Tonight: Pizza 🍕`,
        examples: [
            { name: "Python Beginner Projects", url: "https://github.com/Mmabiaa/Python_Beginner_Projects" }
        ]
    },
    {
        id: "password-gen",
        name: "The \"I Forgot My Password Again\" Generator",
        shortName: "Password Generator",
        pitch: "Create strong, random passwords and save them with the website name.",
        difficulty: "Easy",
        concepts: ["random", "string", "json"],
        preview: `Website? Netflix
Password: xK9#mP2$vL
Save? yes`,
        examples: [
            { name: "Python Beginner Projects", url: "https://github.com/Mmabiaa/Python_Beginner_Projects" }
        ]
    },
    {
        id: "quiz-app",
        name: "The \"Test My Friends\" Quiz App",
        shortName: "Quiz App",
        pitch: "Make a multiple-choice quiz on any topic and score your friends.",
        difficulty: "Medium",
        concepts: ["dictionaries", "loops", "input"],
        preview: `Q1: What is 2+2?
  1) 3  2) 4  3) 5
Your answer: 2
Correct! Score: 1/1`,
        examples: [
            { name: "Quiz Game", url: "https://github.com/randilt/quiz-game" },
            { name: "Python Simple Games", url: "https://github.com/Su-creator-spec/games-using-python" }
        ]
    },
    {
        id: "adventure-game",
        name: "The \"Choose Your Own Adventure\" Story Game",
        shortName: "Story Game",
        pitch: "Write a story where the player picks what happens next.",
        difficulty: "Medium",
        concepts: ["conditionals", "functions", "dictionaries"],
        preview: `You enter a dark cave.
1) Go left
2) Go right
Choose: 1
You find treasure!`,
        examples: [
            { name: "Text Adventure Tutorial", url: "https://github.com/Kyle-L/Text-Adventure-Tutorial" },
            { name: "Python Simple Games", url: "https://github.com/Su-creator-spec/games-using-python" }
        ]
    },
    {
        id: "weather-checker",
        name: "The \"Is It Raining?\" Weather Checker",
        shortName: "Weather Checker",
        pitch: "Type a city name and get the current weather from the internet.",
        difficulty: "Medium",
        concepts: ["requests", "json", "APIs"],
        preview: `City? Tokyo
Tokyo: 24°C, partly cloudy
Humidity: 60%`,
        examples: [
            { name: "Open-Meteo Weather", url: "https://github.com/m0rp43us/openmeteopy" },
            { name: "Awesome Python Ideas", url: "https://github.com/Ritesh-456/awesome-python-project-ideas" }
        ]
    },
    {
        id: "movie-picker",
        name: "The \"I Can't Decide\" Movie Picker",
        shortName: "Movie Picker",
        pitch: "Store your favorite movies and let the app pick one when you can't choose.",
        difficulty: "Easy",
        concepts: ["random", "lists", "json"],
        preview: `Add movie: Inception
Add movie: The Matrix
Pick random → Watch: The Matrix`,
        examples: [
            { name: "Python Mini Projects", url: "https://github.com/ndleah/python-mini-project" },
            { name: "Karan's Projects List", url: "https://github.com/karan/Projects" }
        ]
    }
];

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        return JSON.parse(saved);
    }

    const checklist = {};
    PHASES.forEach((phase) => {
        phase.tasks.forEach((task, taskIndex) => {
            checklist[`${phase.id}:${taskIndex}`] = task.done;
        });
    });

    return {
        selectedProject: PROJECT_MENU[0].id,
        checklistView: "this-phase",
        checklist
    };
}

let state = loadState();

const hasValidProject = PROJECT_MENU.some((p) => p.id === state.selectedProject);
if (!hasValidProject) {
    state.selectedProject = PROJECT_MENU[0].id;
    saveState();
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getCurrentPhase() {
    return PHASES.find((phase) => phase.status === "current") || PHASES[0];
}

function getTaskDone(phaseId, taskIndex) {
    return Boolean(state.checklist[`${phaseId}:${taskIndex}`]);
}

function setTaskDone(phaseId, taskIndex, done) {
    state.checklist[`${phaseId}:${taskIndex}`] = done;
    saveState();
}

function getPhaseCompletion(phase) {
    const doneCount = phase.tasks.filter((task, index) => getTaskDone(phase.id, index)).length;
    return {
        doneCount,
        totalCount: phase.tasks.length
    };
}

function getOverallCompletion() {
    const totalCount = PHASES.reduce((sum, phase) => sum + phase.tasks.length, 0);
    const doneCount = PHASES.reduce(
        (sum, phase) => sum + phase.tasks.filter((task, index) => getTaskDone(phase.id, index)).length,
        0
    );

    return {
        doneCount,
        totalCount,
        percent: Math.round((doneCount / totalCount) * 100)
    };
}

function renderCurrentPhase() {
    const phase = getCurrentPhase();
    const completion = getPhaseCompletion(phase);

    document.getElementById("phaseTitle").textContent = phase.fullTitle;
    document.getElementById("phaseDescription").textContent = phase.subtitle;
    document.getElementById("phaseDates").textContent = phase.dates;
    document.getElementById("milestone").textContent = phase.milestone || "Next review to be scheduled";
    document.getElementById("timeRemaining").textContent = phase.timeRemaining || "On track";
    document.getElementById("phasePercent").textContent = `${phase.phasePercent || 0}%`;
    document.getElementById("phaseBar").style.width = `${phase.phasePercent || 0}%`;
    document.getElementById("phaseTaskSummary").textContent = `${completion.doneCount} of ${completion.totalCount} complete`;

    const footerLabel =
        state.checklistView === "this-phase"
            ? `${completion.doneCount} of ${completion.totalCount} complete`
            : `${getOverallCompletion().doneCount} of ${getOverallCompletion().totalCount} complete`;
    document.getElementById("checklistFooter").textContent = footerLabel;

    const miniTaskList = document.getElementById("miniTaskList");
    miniTaskList.innerHTML = "";

    phase.tasks.slice(0, 3).forEach((task, index) => {
        const li = document.createElement("li");
        const done = getTaskDone(phase.id, index);
        li.className = done ? "done" : "";
        li.innerHTML = `
            <span class="task-check ${done ? "checked" : ""}"></span>
            <span>${task.label}</span>
        `;
        miniTaskList.appendChild(li);
    });
}

function renderProgress() {
    const overall = getOverallCompletion();
    const ring = document.getElementById("progressRing");
    ring.style.setProperty("--p", overall.percent);
    document.getElementById("progressNumber").textContent = `${overall.percent}%`;
}

function renderRoadmap() {
    const roadmap = document.getElementById("roadmap");
    roadmap.innerHTML = "";

    PHASES.forEach((phase) => {
        const item = document.createElement("div");
        item.className = `roadmap-item ${phase.status}`;
        const nodeContent = phase.status === "done" ? "✓" : phase.number;
        item.innerHTML = `
            <div class="roadmap-node">${nodeContent}</div>
            <div class="roadmap-name">${phase.title}</div>
            <div class="roadmap-date">${phase.shortDates}</div>
        `;
        roadmap.appendChild(item);
    });
}

function checklistRowsForPhase(phase) {
    return phase.tasks
        .map((task, index) => {
            const done = getTaskDone(phase.id, index);
            return `
                <div class="checklist-row" data-phase="${phase.id}" data-index="${index}">
                    <button class="${done ? "done" : ""}" type="button" aria-label="Toggle ${task.label}"></button>
                    <div class="checklist-task ${done ? "done" : ""}">${task.label}</div>
                    <div class="checklist-date">${task.date}</div>
                    <div class="checklist-arrow">
                        <svg viewBox="0 0 20 20"><path d="M7 4l6 6-6 6"/></svg>
                    </div>
                </div>
            `;
        })
        .join("");
}

function renderChecklist() {
    const currentPhase = getCurrentPhase();
    const table = document.getElementById("checklistTable");

    if (state.checklistView === "this-phase") {
        table.innerHTML = checklistRowsForPhase(currentPhase);
    } else {
        table.innerHTML = PHASES.map((phase) => {
            return `
                <div class="checklist-group">
                    <div class="checklist-group-title">
                        <div></div>
                        <div>${phase.fullTitle}</div>
                        <div>${phase.shortDates}</div>
                        <div></div>
                    </div>
                    ${checklistRowsForPhase(phase)}
                </div>
            `;
        }).join("");
    }

    table.querySelectorAll(".checklist-row button").forEach((button) => {
        button.addEventListener("click", () => {
            const row = button.closest(".checklist-row");
            const phaseId = row.dataset.phase;
            const taskIndex = Number(row.dataset.index);
            setTaskDone(phaseId, taskIndex, !getTaskDone(phaseId, taskIndex));
            renderAll();
        });
    });
}

function renderProjectMenu() {
    const menu = document.getElementById("typeTabs");
    menu.innerHTML = "";
    menu.className = "project-menu";

    PROJECT_MENU.forEach((project) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `project-menu-item ${state.selectedProject === project.id ? "active" : ""}`;
        button.innerHTML = `
            <span class="project-menu-name">${project.shortName}</span>
            <span class="project-menu-difficulty">${project.difficulty}</span>
        `;
        button.addEventListener("click", () => {
            state.selectedProject = project.id;
            saveState();
            renderResources();
            renderProjectMenu();
        });
        menu.appendChild(button);
    });
}

function getSelectedProject() {
    return PROJECT_MENU.find((p) => p.id === state.selectedProject) || PROJECT_MENU[0];
}

function renderResources() {
    const project = getSelectedProject();
    document.getElementById("resourceHeading").textContent = project.name;

    const list = document.getElementById("resourceList");
    list.innerHTML = project.concepts
        .map((concept) => `<li><span class="resource-bullet"></span><span>${concept}</span></li>`)
        .join("");

    const resourceSections = document.getElementById("resourceSections");
    resourceSections.innerHTML = `
        <article class="resource-card project-detail">
            <div class="project-detail-header">
                <h3>${project.name}</h3>
                <span class="project-badge">${project.difficulty}</span>
            </div>
            <p class="project-pitch">${project.pitch}</p>
            <div class="terminal-preview">
                <div class="terminal-bar">Terminal</div>
                <pre>${project.preview}</pre>
            </div>
            <div class="project-meta">
                <strong>Key concepts:</strong> ${project.concepts.join(", ")}
            </div>
        </article>
        <article class="resource-card example-card">
            <h3>Online Examples</h3>
            <ul class="example-list">
                ${project.examples.map((ex) => `
                    <li>
                        <a href="${ex.url}" target="_blank" rel="noopener">${ex.name}</a>
                        <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 4l6 6-6 6"/></svg>
                    </li>
                `).join("")}
            </ul>
        </article>
        <article class="resource-card">
            <h3>Milestone Resources</h3>
            <ul>
                <li>Milestone 2 Canvas page</li>
                <li>Mini PRD work packet</li>
                <li>AI prompt formula</li>
            </ul>
        </article>
        <article class="resource-card project-grid-card" style="grid-column: 1 / -1;">
            <h3>Browse All Projects</h3>
            <div class="project-grid">
                ${PROJECT_MENU.map((p) => `
                    <button class="project-grid-item ${p.id === project.id ? "active" : ""}" data-id="${p.id}" type="button">
                        <div class="project-grid-name">${p.shortName}</div>
                        <div class="project-grid-difficulty">${p.difficulty}</div>
                    </button>
                `).join("")}
            </div>
        </article>
    `;

    resourceSections.querySelectorAll(".project-grid-item").forEach((btn) => {
        btn.addEventListener("click", () => {
            state.selectedProject = btn.dataset.id;
            saveState();
            renderResources();
            renderProjectMenu();
            window.location.href = "#resources";
        });
    });
}

function renderTimeline() {
    const timelineList = document.getElementById("timelineList");
    timelineList.innerHTML = PHASES.map((phase) => {
        const statusLabel =
            phase.status === "done" ? "Complete" : phase.status === "current" ? "Current" : "Upcoming";

        const stepContent = phase.status === "done" ? "✓" : phase.number;
        return `
            <article class="timeline-card ${phase.status}">
                <div class="timeline-step">${stepContent}</div>
                <div class="timeline-meta">
                    <h3>${phase.fullTitle}</h3>
                    <p>${phase.subtitle}</p>
                    <ul>${phase.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
                </div>
                <div>
                    <div class="timeline-status">${statusLabel}</div>
                    <p class="muted">${phase.dates}</p>
                </div>
            </article>
        `;
    }).join("");
}

function renderStatusNote() {
    const overall = getOverallCompletion();
    const title = document.getElementById("statusTitle");
    const copy = document.getElementById("statusCopy");

    if (overall.percent < 40) {
        title.textContent = "Keep going!";
        copy.textContent = "You're making great progress. Focus on completing your phase tasks and preparing for your next milestone.";
    } else if (overall.percent < 80) {
        title.textContent = "Solid momentum";
        copy.textContent = "The project is moving well. Keep the scope tight and clear the highest-risk work first.";
    } else {
        title.textContent = "Nearly finished";
        copy.textContent = "You're close to the end. Shift attention to polish, testing, and presentation readiness.";
    }
}

function renderViewToggle() {
    const thisPhaseButton = document.getElementById("viewThisPhase");
    const allPhasesButton = document.getElementById("viewAllPhases");
    thisPhaseButton.classList.toggle("active", state.checklistView === "this-phase");
    allPhasesButton.classList.toggle("active", state.checklistView === "all-phases");
}

function bindControls() {
    document.getElementById("viewThisPhase").addEventListener("click", () => {
        state.checklistView = "this-phase";
        saveState();
        renderAll();
    });

    document.getElementById("viewAllPhases").addEventListener("click", () => {
        state.checklistView = "all-phases";
        saveState();
        renderAll();
    });
}

function renderAll() {
    renderCurrentPhase();
    renderProgress();
    renderRoadmap();
    renderChecklist();
    renderViewToggle();
    renderProjectMenu();
    renderResources();
    renderTimeline();
    renderStatusNote();
}

document.addEventListener("DOMContentLoaded", () => {
    bindControls();
    renderAll();
});
