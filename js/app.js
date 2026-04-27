const STORAGE_KEY = "cs-final-project-tracker-v2";

const PHASES = [
    {
        id: "ideation",
        number: 1,
        title: "Ideation",
        fullTitle: "1. Ideation",
        subtitle: "Define the problem and settle on a project direction.",
        dates: "Apr 28 - May 11, 2025",
        shortDates: "Apr 28 - May 11",
        status: "done",
        tasks: [
            { label: "Identify a project problem worth solving", date: "Apr 28", done: true },
            { label: "Research examples and constraints", date: "Apr 30", done: true },
            { label: "List possible solution ideas", date: "May 2", done: true },
            { label: "Compare ideas and choose one direction", date: "May 5", done: true },
            { label: "Write a one-paragraph project pitch", date: "May 8", done: true },
            { label: "Confirm project scope with teacher", date: "May 11", done: true }
        ],
        highlights: ["Problem statement approved", "Project idea selected"]
    },
    {
        id: "design",
        number: 2,
        title: "Design",
        fullTitle: "2. Design",
        subtitle: "You're designing the solution and planning how everything will work.",
        dates: "May 12 - May 25, 2025",
        shortDates: "May 12 - May 25",
        status: "current",
        milestone: "Design Review  •  May 19, 2025",
        timeRemaining: "6 days",
        phasePercent: 60,
        tasks: [
            { label: "Define problem and project goals", date: "May 12", done: true },
            { label: "Brainstorm and evaluate ideas", date: "May 13", done: true },
            { label: "Create project plan", date: "May 14", done: false },
            { label: "Design system architecture / structure", date: "May 18", done: false },
            { label: "Design user interface / experience", date: "May 21", done: false },
            { label: "Prepare for design review", date: "May 19", done: false }
        ],
        highlights: ["Goals locked", "System plan in progress"]
    },
    {
        id: "implementation",
        number: 3,
        title: "Implementation",
        fullTitle: "3. Implementation",
        subtitle: "Build the core features and validate the main workflow.",
        dates: "May 26 - Jun 22, 2025",
        shortDates: "May 26 - Jun 22",
        status: "upcoming",
        tasks: [
            { label: "Set up the project repository and structure", date: "May 26", done: false },
            { label: "Build the primary user flow", date: "May 30", done: false },
            { label: "Implement data storage or state logic", date: "Jun 4", done: false },
            { label: "Connect supporting views and navigation", date: "Jun 10", done: false },
            { label: "Test the core path end to end", date: "Jun 16", done: false }
        ],
        highlights: ["Core build", "Feature completion"]
    },
    {
        id: "testing",
        number: 4,
        title: "Testing",
        fullTitle: "4. Testing",
        subtitle: "Find issues, refine the experience, and make the project stable.",
        dates: "Jun 23 - Jul 6, 2025",
        shortDates: "Jun 23 - Jul 6",
        status: "upcoming",
        tasks: [
            { label: "Run usability and bug-testing sessions", date: "Jun 24", done: false },
            { label: "Fix critical bugs and polish rough edges", date: "Jun 28", done: false },
            { label: "Improve error handling and empty states", date: "Jul 2", done: false },
            { label: "Prepare test evidence and notes", date: "Jul 6", done: false }
        ],
        highlights: ["Bug fixing", "Polish pass"]
    },
    {
        id: "finalization",
        number: 5,
        title: "Finalization",
        fullTitle: "5. Finalization",
        subtitle: "Package the work, rehearse the demo, and submit the project.",
        dates: "Jul 7 - Jul 20, 2025",
        shortDates: "Jul 7 - Jul 20",
        status: "upcoming",
        tasks: [
            { label: "Finalize documentation and README", date: "Jul 8", done: false },
            { label: "Record or rehearse the final presentation", date: "Jul 12", done: false },
            { label: "Submit project files and reflection", date: "Jul 17", done: false },
            { label: "Deliver the final presentation", date: "Jul 20", done: false }
        ],
        highlights: ["Submission", "Final presentation"]
    }
];

const PROJECT_TYPES = {
    app: {
        label: "App",
        resources: [
            "App Project Guide",
            "UI Design Best Practices",
            "Data & Storage Options",
            "API Integration Checklist"
        ]
    },
    game: {
        label: "Game",
        resources: [
            "Game Loop Planning Guide",
            "Level Design Checklist",
            "Player Feedback Patterns",
            "Game Testing Session Template"
        ]
    },
    research: {
        label: "Research",
        resources: [
            "Question Framing Worksheet",
            "Source Evaluation Guide",
            "Data Collection Template",
            "Presentation Storyline Outline"
        ]
    },
    other: {
        label: "Other",
        resources: [
            "Project Scope Checklist",
            "Milestone Planning Template",
            "Teacher Review Prep",
            "Final Demo Readiness Guide"
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
        selectedType: "app",
        checklistView: "this-phase",
        checklist
    };
}

let state = loadState();

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
                <li>Design review preparation checklist</li>
                <li>Implementation readiness rubric</li>
                <li>Testing log template</li>
                <li>Final presentation rehearsal guide</li>
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
}

document.addEventListener("DOMContentLoaded", () => {
    bindControls();
    renderAll();
});
