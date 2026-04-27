const MILESTONE_2_SLIDES = [
    {
        slide: 1,
        title: "Milestone 2",
        body: "Scope Lock + First GitHub Repo",
        notes: "Today is about making the project smaller, clearer, and easier to build."
    },
    {
        slide: 2,
        title: "Today's Two Goals",
        body: "1. Lock your project plan\n2. Give your project a home",
        notes: "By the end, every student should know what they are building and where the project will live."
    },
    {
        slide: 3,
        title: "The Scope Rule",
        body: "One archetype\nOne core feature\nOne clear data flow",
        notes: "A good project is not the biggest idea. It is the smallest version you can build, explain, test, and present."
    },
    {
        slide: 4,
        title: "Two Approved Archetypes",
        body: "Personal Tracker\nSmart Lookup Tool",
        notes: "Do not add new project types today. Students must fit their idea into one of these two buckets."
    },
    {
        slide: 5,
        title: "What I Am Checking",
        body: "Archetype\nCore feature\nInteraction flow\nData structure\nFunctions",
        notes: "I am checking whether the plan is buildable, not whether it sounds impressive."
    },
    {
        slide: 6,
        title: "Project Status",
        body: "Green — Ready to build\nYellow — Revise first\nRed — Too unclear or too large",
        notes: "Green means approved. Yellow means close. Red means we need to shrink or clarify the idea."
    },
    {
        slide: 7,
        title: "Git vs GitHub",
        body: "Git remembers versions\nGitHub stores and shares projects online",
        notes: "Keep this simple. Git is the memory system. GitHub is the online home."
    },
    {
        slide: 8,
        title: "Plain Language Terms",
        body: "Repository — Project folder online\nCommit — Saved checkpoint\nREADME — Project explanation\nCLI — Control by typing",
        notes: "Do not teach commands yet. Students only need the vocabulary today."
    },
    {
        slide: 9,
        title: "Project Home Flow",
        body: "Laptop folder → Git remembers → GitHub shares\nCLI controls by text",
        notes: "Use this as the mental model. Their code starts on the laptop, then GitHub becomes the shared project home."
    },
    {
        slide: 10,
        title: "First GitHub Task",
        body: "Create repo\nAdd README\nUpload current files\nCopy repo link",
        notes: "This is setup only. Students should not start coding before their plan is approved."
    },
    {
        slide: 11,
        title: "While You Wait",
        body: "Look at examples\nPeer check your PRD\nRevise your plan\nJoin the teacher queue",
        notes: "Students should stay productive while I review plans one by one."
    },
    {
        slide: 12,
        title: "Exit Ticket",
        body: "Status\nFinal MVP\nNext coding step\nGitHub repo plan",
        notes: "This tells me who is ready, who needs revision, and who needs GitHub help next class."
    },
    {
        slide: 13,
        title: "Reminder",
        body: "Small and working\nbeats\nbig and broken",
        notes: "End calm and practical. The goal is a project they can finish and explain."
    }
];

const STORAGE_KEY = "cs-final-project-tracker-v3";

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
            { label: "Choose one archetype: Personal Tracker or Smart Lookup Tool", date: "Start", done: false },
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

const PROJECT_TYPES = {
    tracker: {
        label: "Personal Tracker",
        resources: [
            "Project Menu: Option A",
            "Constrained PRD Template",
            "JSON data example",
            "Canvas Milestone 2"
        ],
        pythonLibs: [
            { name: "json / csv", use: "Save and load habit, mood, or expense data locally" },
            { name: "datetime", use: "Track dates, streaks, deadlines, and schedules" },
            { name: "rich", use: "Print clean tables, progress bars, and colored output in the terminal" },
            { name: "matplotlib", use: "Draw simple charts for streaks or totals over time" },
            { name: "os / pathlib", use: "Manage files and folders where data is stored" }
        ]
    },
    lookup: {
        label: "Smart Lookup Tool",
        resources: [
            "Project Menu: Option B",
            "Constrained PRD Template",
            "AI Prompt Formula",
            "Canvas Milestone 2"
        ],
        pythonLibs: [
            { name: "requests", use: "Fetch live data from APIs (weather, words, currency, etc.)" },
            { name: "json", use: "Parse API responses and local data files" },
            { name: "difflib", use: "Fuzzy matching when the user typo’s a search term" },
            { name: "re", use: "Pattern matching and text extraction" },
            { name: "csv / pandas", use: "Read and filter large local datasets" }
        ]
    }
};

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
        selectedType: "tracker",
        checklistView: "this-phase",
        checklist
    };
}

let state = loadState();

if (!PROJECT_TYPES[state.selectedType]) {
    state.selectedType = "tracker";
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
        item.innerHTML = `
            <div class="roadmap-node">${phase.number}</div>
            ${phase.status === "done" ? '<div class="roadmap-check">✓</div>' : ""}
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

function renderTypeTabs() {
    const tabs = document.getElementById("typeTabs");
    tabs.innerHTML = "";

    Object.entries(PROJECT_TYPES).forEach(([key, type]) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `type-tab ${state.selectedType === key ? "active" : ""}`;
        button.textContent = type.label;
        button.addEventListener("click", () => {
            state.selectedType = key;
            saveState();
            renderResources();
            renderTypeTabs();
        });
        tabs.appendChild(button);
    });
}

function renderResources() {
    const type = PROJECT_TYPES[state.selectedType];
    document.getElementById("resourceHeading").textContent = `Resources (${type.label})`;

    const list = document.getElementById("resourceList");
    list.innerHTML = type.resources
        .map((resource) => `<li><span class="resource-bullet"></span><span>${resource}</span></li>`)
        .join("");

    const resourceSections = document.getElementById("resourceSections");
    resourceSections.innerHTML = `
        <article class="resource-card">
            <h3>${type.label} Resources</h3>
            <ul>${type.resources.map((resource) => `<li>${resource}</li>`).join("")}</ul>
        </article>
        <article class="resource-card">
            <h3>Milestone Resources</h3>
            <ul>
                <li>Milestone 2 Canvas page</li>
                <li>Project Menu</li>
                <li>Mini PRD work packet</li>
                <li>AI prompt formula</li>
            </ul>
        </article>
        <article class="resource-card lib-card">
            <h3>Python Libraries — ${type.label}</h3>
            <ul class="lib-list">
                ${type.pythonLibs.map((lib) => `
                    <li>
                        <code>${lib.name}</code>
                        <span>${lib.use}</span>
                    </li>
                `).join("")}
            </ul>
        </article>
    `;
}

function renderTimeline() {
    const timelineList = document.getElementById("timelineList");
    timelineList.innerHTML = PHASES.map((phase) => {
        const statusLabel =
            phase.status === "done" ? "Complete" : phase.status === "current" ? "Current" : "Upcoming";

        return `
            <article class="timeline-card ${phase.status}">
                <div class="timeline-step">${phase.number}</div>
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

function renderSlides() {
    const deck = document.getElementById("slideDeck");
    if (!deck) return;
    deck.innerHTML = MILESTONE_2_SLIDES.map((s) => `
        <article class="slide-card">
            <div class="slide-number">Slide ${s.slide}</div>
            <h3>${s.title}</h3>
            <div class="slide-body">${s.body.replace(/\n/g, "<br>")}</div>
            <div class="slide-notes">
                <strong>Speaker notes:</strong> ${s.notes}
            </div>
        </article>
    `).join("");
}

function renderAll() {
    renderCurrentPhase();
    renderProgress();
    renderRoadmap();
    renderChecklist();
    renderViewToggle();
    renderTypeTabs();
    renderResources();
    renderTimeline();
    renderStatusNote();
    renderSlides();
}

document.addEventListener("DOMContentLoaded", () => {
    bindControls();
    renderAll();
});
