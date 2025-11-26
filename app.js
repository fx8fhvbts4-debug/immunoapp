// app.js - Versão Final Corrigida

// Importar dados
// Import removed for file protocol compatibility
// import { BANCO_DADOS } from './dados.js';

// Sidebar toggle
window.toggleSidebar = function () {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('active');
};

// Estado Global
let assuntoAtualID = "";
let dadosAtuais = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answersState = [];
let currentFlashcards = [];
let currentFlashcardIndex = 0;
let currentOpenQuestions = [];
let currentOpenIndex = 0;

// Elementos DOM
const homeScreen = document.getElementById('home-screen');
const detailScreen = document.getElementById('detail-screen');
const levelScreen = document.getElementById('level-screen');
const quizScreen = document.getElementById('quiz-screen');
const flashcardScreen = document.getElementById('flashcard-screen');
const summaryScreen = document.getElementById('summary-screen');
const materialsScreen = document.getElementById('materials-menu-screen');
const videoPlayerScreen = document.getElementById('video-player-screen');
const audioPlayerScreen = document.getElementById('audio-player-screen');
const openQuestionsScreen = document.getElementById('open-questions-screen');
const infographicsScreen = document.getElementById('infographics-screen');

// Overlay de Erro Global (Debug)
(function attachErrorOverlay() {
    function makeOverlay() {
        const overlay = document.createElement('div');
        overlay.id = 'error-overlay-debug';
        overlay.style.position = 'fixed';
        overlay.style.left = '12px'; overlay.style.right = '12px'; overlay.style.bottom = '12px';
        overlay.style.zIndex = 99999;
        overlay.style.background = 'rgba(15,23,42,0.95)'; overlay.style.color = 'white';
        overlay.style.padding = '12px 14px'; overlay.style.borderRadius = '10px';
        overlay.style.maxHeight = '40vh'; overlay.style.overflow = 'auto';
        const pre = document.createElement('pre');
        pre.id = 'error-overlay-text'; pre.style.whiteSpace = 'pre-wrap';
        overlay.appendChild(pre);
        document.body.appendChild(overlay);
        return overlay;
    }
    function showError(msg) {
        try {
            if (!document.body) return;
            document.getElementById('error-overlay-debug') || makeOverlay();
            document.getElementById('error-overlay-text').innerText = msg;
        } catch {
            // Silently fail if overlay cannot be created
        }
    }
    window.addEventListener('error', ev => showError(`Erro: ${ev.message}`));
    window.addEventListener('unhandledrejection', ev => showError(`Promessa falhou: ${ev.reason}`));
})();

// --- NAVEGAÇÃO ---

window.abrirAssunto = function (id) {
    if (!BANCO_DADOS[id]) return console.error("Assunto não encontrado:", id);
    assuntoAtualID = id;
    dadosAtuais = BANCO_DADOS[id];

    document.getElementById('detail-title').innerText = dadosAtuais.titulo;

    const btnVideo = document.getElementById('btn-video-generic');
    const btnAudio = document.getElementById('btn-podcast-generic');
    const btnInfographics = document.getElementById('btn-infographics-generic');

    if (btnVideo) {
        // Ocultar botão de vídeo para celulaseorgaos, anticorpos e inflamacao
        if (id === 'Celulaseorgaos' || id === 'anticorpos' || id === 'inflamacao') {
            btnVideo.style.display = 'none';
        } else {
            btnVideo.style.display = 'flex';
            btnVideo.onclick = () => window.playVideo(dadosAtuais.midia && dadosAtuais.midia.video);
        }
    }
    if (btnAudio) {
        btnAudio.style.display = 'flex';
        btnAudio.onclick = () => window.playAudio(dadosAtuais.midia && dadosAtuais.midia.audio);
    }
    if (btnInfographics) {
        if (id === 'inflamacao') {
            btnInfographics.style.display = 'none';
        } else {
            btnInfographics.style.display = 'flex';
            btnInfographics.onclick = () => window.openInfographics(dadosAtuais.midia && dadosAtuais.midia.infographics);
        }
    }

    // Configurar background dinâmico (Gradiente Cyan-Pink com Anéis)
    if (['intro', 'Celulaseorgaos', 'inflamacao', 'anticorpos'].includes(id)) {
        detailScreen.style.backgroundColor = "#06b6d4"; // Cyan fallback
        detailScreen.style.backgroundImage = `
            radial-gradient(circle at 10% 20%, transparent 50px, rgba(255,255,255,0.1) 51px, rgba(255,255,255,0.1) 65px, transparent 66px),
            radial-gradient(circle at 90% 80%, transparent 80px, rgba(255,255,255,0.1) 81px, rgba(255,255,255,0.1) 95px, transparent 96px),
            radial-gradient(circle at 50% 50%, transparent 120px, rgba(255,255,255,0.05) 121px, rgba(255,255,255,0.05) 140px, transparent 141px),
            linear-gradient(to bottom, #06b6d4, #d946ef)
        `;
        detailScreen.style.backgroundSize = "cover";
        detailScreen.style.backgroundPosition = "center";
        detailScreen.style.backgroundRepeat = "no-repeat";
        detailScreen.style.backgroundAttachment = "fixed";
    } else {
        detailScreen.style.backgroundImage = "";
        detailScreen.style.backgroundColor = "";
        detailScreen.style.backgroundSize = "";
        detailScreen.style.backgroundPosition = "";
        detailScreen.style.backgroundRepeat = "";
        detailScreen.style.backgroundAttachment = "";
    }

    navegar(homeScreen, detailScreen);
}

window.voltarParaHome = () => navegar(detailScreen, homeScreen);
window.voltarParaDetalhes = () => {
    [levelScreen, summaryScreen, materialsScreen].forEach(el => el.classList.add('hidden'));
    detailScreen.classList.remove('hidden');
}

function navegar(origem, destino) {
    if (origem) origem.classList.add('hidden');
    if (destino) destino.classList.remove('hidden');
}

// --- RESUMO ---
window.abrirResumo = function () {
    const area = document.getElementById('summary-content-area');
    area.innerHTML = dadosAtuais.resumo || "<p>Conteúdo indisponível.</p>";
    document.getElementById('summary-title').innerText = dadosAtuais.titulo;
    navegar(detailScreen, summaryScreen);
}
window.sairResumo = () => navegar(summaryScreen, detailScreen);

// --- FLASHCARDS ---
window.abrirFlashcards = function () {
    if (!dadosAtuais.flashcards || dadosAtuais.flashcards.length === 0) return alert("Sem flashcards.");
    currentFlashcards = dadosAtuais.flashcards;
    currentFlashcardIndex = 0;
    renderFlashcard();
    navegar(detailScreen, flashcardScreen);
}
window.sairFlashcards = () => navegar(flashcardScreen, detailScreen);

function renderFlashcard() {
    const fc = currentFlashcards[currentFlashcardIndex];
    const card = document.querySelector('.flashcard');
    card.classList.remove('flipped');
    document.getElementById('fc-question').innerText = fc.q;
    document.getElementById('fc-answer').innerText = fc.a;
    document.getElementById('fc-current').innerText = currentFlashcardIndex + 1;
    document.getElementById('fc-total').innerText = currentFlashcards.length;
}

window.virarCard = (el) => el.classList.toggle('flipped');
window.proxFlashcard = () => {
    currentFlashcardIndex = (currentFlashcardIndex < currentFlashcards.length - 1) ? currentFlashcardIndex + 1 : 0;
    renderFlashcard();
}
window.antFlashcard = () => {
    currentFlashcardIndex = (currentFlashcardIndex > 0) ? currentFlashcardIndex - 1 : currentFlashcards.length - 1;
    renderFlashcard();
}

// --- QUIZ ---
window.abrirSelecaoNivel = () => navegar(detailScreen, levelScreen);

window.iniciarQuiz = function (nivel) {
    if (!dadosAtuais.quiz || !dadosAtuais.quiz[nivel] || dadosAtuais.quiz[nivel].length === 0) return alert("Quiz indisponível.");
    currentQuestions = dadosAtuais.quiz[nivel];
    currentQuestionIndex = 0;
    score = 0;
    answersState = new Array(currentQuestions.length).fill(null);

    document.getElementById('quiz-header-title').innerText = `Quiz: ${nivel === 'basico' ? 'Básico' : 'Avançado'}`;
    document.getElementById('result-content').classList.add('hidden');
    document.getElementById('quiz-content').classList.remove('hidden');
    document.getElementById('quiz-controls').style.display = 'flex';

    renderQuestion();
    navegar(levelScreen, quizScreen);
}

window.sairQuiz = () => navegar(quizScreen, levelScreen);

function renderQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    const progressBar = document.getElementById('progress');
    const optionsContainer = document.getElementById('options-container');
    const feedbackEl = document.getElementById('feedback');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    if (!progressBar || !optionsContainer || !feedbackEl || !prevBtn || !nextBtn) {
        console.error('Elementos do quiz não encontrados');
        return;
    }

    progressBar.style.width = `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%`;
    document.getElementById('question-text').innerText = `${currentQuestionIndex + 1}. ${q.q}`;
    optionsContainer.innerHTML = '';
    feedbackEl.innerHTML = '';
    feedbackEl.style.display = 'none';
    feedbackEl.className = 'feedback-area';

    const isAnswered = answersState[currentQuestionIndex] !== null;

    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.innerText = opt;
        btn.onclick = () => verificarResposta(idx);
        if (isAnswered) {
            btn.disabled = true;
            if (idx === q.correct) btn.classList.add('correct');
            else if (idx === answersState[currentQuestionIndex]) btn.classList.add('wrong');
        }
        optionsContainer.appendChild(btn);
    });

    if (isAnswered) mostrarFeedback(answersState[currentQuestionIndex] === q.correct);
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.innerText = (currentQuestionIndex === currentQuestions.length - 1) ? "Finalizar" : "Próxima";
}

function verificarResposta(idx) {
    answersState[currentQuestionIndex] = idx;
    const q = currentQuestions[currentQuestionIndex];
    if (idx === q.correct) score++;

    const buttons = document.getElementById('options-container').children;
    for (let btn of buttons) btn.disabled = true;
    buttons[q.correct].classList.add('correct');
    if (idx !== q.correct) buttons[idx].classList.add('wrong');
    mostrarFeedback(idx === q.correct);
}

function mostrarFeedback(correto) {
    const q = currentQuestions[currentQuestionIndex];
    const el = document.getElementById('feedback');
    el.className = correto ? 'feedback-area show-correct' : 'feedback-area show-wrong';
    el.innerHTML = `<strong>${correto ? 'Correto!' : 'Incorreto.'}</strong><br>${q.feedback}`;
    el.style.display = 'block';
}

window.proxQuestao = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
    } else {
        document.getElementById('quiz-content').classList.add('hidden');
        document.getElementById('quiz-controls').style.display = 'none';
        document.getElementById('result-content').classList.remove('hidden');
        document.getElementById('final-score').innerText = score;
        document.getElementById('score-total').innerText = `/ ${currentQuestions.length}`;
    }
}

window.antQuestao = () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
    }
}

// --- QUESTÕES ABERTAS ---
window.iniciarAbertas = function () {
    if (!dadosAtuais.abertas || dadosAtuais.abertas.length === 0) return alert("Sem questões abertas.");
    currentOpenQuestions = dadosAtuais.abertas;
    currentOpenIndex = 0;
    document.getElementById('oq-result-content').classList.add('hidden');
    document.getElementById('oq-content').classList.remove('hidden');
    renderOpenQuestion();
    navegar(levelScreen, openQuestionsScreen);
}

window.sairAbertas = () => navegar(openQuestionsScreen, levelScreen);

function renderOpenQuestion() {
    const q = currentOpenQuestions[currentOpenIndex];
    document.getElementById('oq-number').innerText = `Questão ${currentOpenIndex + 1}`;
    document.getElementById('oq-text').innerText = q.q;
    document.getElementById('oq-progress').style.width = `${((currentOpenIndex + 1) / currentOpenQuestions.length) * 100}%`;
    document.getElementById('oq-feedback').style.display = 'none';
    const btn = document.getElementById('oq-action-btn');
    btn.innerText = "Ver Resposta";
    btn.onclick = mostrarRespostaAberta;
}

function mostrarRespostaAberta() {
    const q = currentOpenQuestions[currentOpenIndex];
    document.getElementById('oq-feedback').style.display = 'block';
    document.getElementById('oq-answer-text').innerText = q.a;
    const btn = document.getElementById('oq-action-btn');
    if (currentOpenIndex < currentOpenQuestions.length - 1) {
        btn.innerText = "Próxima Questão";
        btn.onclick = () => { currentOpenIndex++; renderOpenQuestion(); };
    } else {
        btn.innerText = "Finalizar";
        btn.onclick = () => {
            document.getElementById('oq-content').classList.add('hidden');
            document.getElementById('oq-result-content').classList.remove('hidden');
        };
    }
}

// --- MÍDIA ---
window.abrirMateriais = () => navegar(detailScreen, materialsScreen);
window.sairMateriais = () => navegar(materialsScreen, detailScreen);

window.playVideo = (file) => {
    if (!file) return alert("Vídeo indisponível.");
    document.getElementById('video-source').src = file;
    document.getElementById('main-video').load();
    navegar(materialsScreen, videoPlayerScreen);
}
window.fecharVideo = () => {
    document.getElementById('main-video').pause();
    navegar(videoPlayerScreen, materialsScreen);
}

window.playAudio = (file) => {
    if (!file) return alert("Podcast indisponível.");
    document.getElementById('audio-source').src = file;
    document.getElementById('audio-title').innerText = dadosAtuais.titulo;
    document.getElementById('main-audio').load();
    navegar(materialsScreen, audioPlayerScreen);
}
window.fecharAudio = () => {
    document.getElementById('main-audio').pause();
    navegar(audioPlayerScreen, materialsScreen);
}

// --- INFOGRÁFICOS & PDF (Versão Robusta) ---
window.openInfographics = (files) => {
    const container = document.getElementById('infographics-content');
    container.innerHTML = '';

    if (!files) {
        container.innerHTML = "<p style='color:#64748b; padding:20px;'>Infográficos indisponíveis.</p>";
        navegar(materialsScreen, infographicsScreen);
        return;
    }

    const arr = Array.isArray(files) ? files : [files];

    arr.forEach(f => {
        const wrapper = document.createElement('div');
        wrapper.className = 'infographic-wrapper';

        if (typeof f === 'string' && f.match(/\.pdf$/i)) {
            wrapper.classList.add('pdf');
            wrapper.style.padding = '0'; // Remove padding for full iframe

            // Create iframe for PDF
            const iframe = document.createElement('iframe');
            iframe.src = f;
            iframe.type = 'application/pdf';
            iframe.width = '100%';
            iframe.height = '600px'; // Fixed height or adjust as needed
            iframe.style.border = 'none';
            iframe.style.borderRadius = '8px';

            // Fallback for browsers that don't support PDF in iframe (rare nowadays but good practice)
            iframe.innerHTML = `<p>Seu navegador não suporta visualização de PDF. <a href="${f}" target="_blank">Clique aqui para baixar.</a></p>`;

            wrapper.appendChild(iframe);
        } else {
            // Normal image
            const img = document.createElement('img');
            img.src = f;
            img.className = 'infographic-item';
            wrapper.appendChild(img);
        }
        container.appendChild(wrapper);
    });
    navegar(materialsScreen, infographicsScreen);
}
window.closeInfographics = () => navegar(infographicsScreen, materialsScreen);

// --- CAROUSEL NAVIGATION ---
window.scrollCarousel = (direction, containerId) => {
    console.log("Scrolling carousel", direction, containerId);
    const container = document.getElementById(containerId);
    if (!container) return console.error("Carousel container not found:", containerId);

    const scrollAmount = 300; // Card width + gap
    // Use direct scrollLeft for immediate feedback, smooth behavior can be added via CSS on container
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// Inicialização do app
document.addEventListener('DOMContentLoaded', () => {
    // Se quiser começar direto na home (debug)
    // navegar(document.getElementById('welcome-screen'), homeScreen);
});

// --- WELCOME SCREEN ---
window.entrarApp = () => {
    navegar(document.getElementById('welcome-screen'), homeScreen);
}

// Inicialização
(function initApp() {
    document.querySelectorAll('.app-container').forEach(el => el.classList.add('hidden'));
    // Show welcome screen initially
    const welcomeScreen = document.getElementById('welcome-screen');
    if (welcomeScreen) {
        welcomeScreen.classList.remove('hidden');
    } else if (homeScreen) {
        // Fallback if welcome screen missing
        homeScreen.classList.remove('hidden');
    }
})();