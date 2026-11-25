/*
  "Scam or Safe?" game logic.
  Everything runs in the visitor's browser. Nothing is stored or sent anywhere.
  Scenario text lives in js/scenarios.js.
*/
(function () {
  "use strict";

  var scenarios = window.YESOD_SCENARIOS || [];
  var total = scenarios.length;
  var index = 0;
  var score = 0;

  function $(id) {
    return document.getElementById(id);
  }

  var startPanel = $("game-start");
  var playPanel = $("game-play");
  var resultsPanel = $("game-results");

  var progressText = $("progress-text");
  var scoreText = $("score-text");
  var progressSteps = $("progress-steps");
  var channelIcon = $("scenario-channel-icon");
  var messageBox = $("scenario-message-box");

  // Simple line icons for each way a message can arrive
  var ICON_PATHS = {
    chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>',
    email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    voice: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
    video: '<rect x="2" y="6" width="14" height="12" rx="2"/><path d="m16 10 6-3v10l-6-3"/>',
    popup: '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>'
  };

  function kindOf(channel) {
    var c = (channel || "").toLowerCase();
    if (c.indexOf("email") > -1) return "email";
    if (c.indexOf("pop-up") > -1) return "popup";
    if (c.indexOf("video") > -1) return "video";
    if (c.indexOf("phone") > -1 || c.indexOf("voicemail") > -1) return "voice";
    return "chat";
  }

  var channelEl = $("scenario-channel");
  var titleEl = $("scenario-title");
  var setupEl = $("scenario-setup");
  var fromEl = $("scenario-from");
  var bodyEl = $("scenario-message");

  var btnScam = $("choice-scam");
  var btnSafe = $("choice-safe");

  var feedback = $("feedback");
  var feedbackTitle = $("feedback-title");
  var feedbackIcon = $("feedback-icon");
  var feedbackHeading = $("feedback-heading-text");
  var verdictEl = $("feedback-verdict");
  var explanationEl = $("feedback-explanation");
  var signsHeading = $("signs-heading");
  var signsList = $("signs-list");
  var tipEl = $("feedback-tip");
  var nextBtn = $("next-btn");

  function show(el) { el.hidden = false; }
  function hide(el) { el.hidden = true; }

  function setText(el, text) {
    el.textContent = text || "";
    el.hidden = !text;
  }

  function updateProgress(answeredCount) {
    progressText.textContent = "Scenario " + (index + 1) + " of " + total;
    scoreText.textContent = "Correct so far: " + score;
    var steps = progressSteps.children;
    for (var i = 0; i < steps.length; i++) {
      steps[i].className = i < answeredCount ? "done" : (i === index ? "current" : "");
    }
  }

  function renderScenario() {
    var s = scenarios[index];

    setText(channelEl, s.channel);
    var kind = kindOf(s.channel);
    channelIcon.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      ICON_PATHS[kind] + "</svg>";
    messageBox.setAttribute("data-kind", kind === "video" ? "voice" : kind);
    titleEl.textContent = s.title;
    setText(setupEl, s.setup);
    setText(fromEl, s.from);
    bodyEl.textContent = s.message;

    [btnScam, btnSafe].forEach(function (b) {
      b.disabled = false;
      b.setAttribute("aria-pressed", "false");
    });

    hide(feedback);
    feedback.className = "feedback";
    updateProgress(index);
  }

  function answer(choice) {
    var s = scenarios[index];
    var correct = choice === s.answer;
    if (correct) score += 1;

    (choice === "scam" ? btnScam : btnSafe).setAttribute("aria-pressed", "true");
    btnScam.disabled = true;
    btnSafe.disabled = true;

    feedback.className = "feedback " + (correct ? "is-correct" : "is-incorrect");
    feedbackIcon.textContent = correct ? "✓" : "✗";
    feedbackHeading.textContent = correct ? "Correct" : "Not quite";
    verdictEl.textContent =
      s.answer === "scam" ? "This was a SCAM." : "This one was SAFE.";
    explanationEl.textContent = s.explanation;

    signsHeading.textContent =
      s.answer === "scam" ? "Warning signs" : "Why it looks safe";
    signsList.innerHTML = "";
    s.signs.forEach(function (sign) {
      var li = document.createElement("li");
      li.textContent = sign;
      signsList.appendChild(li);
    });

    tipEl.textContent = s.tip;

    var isLast = index === total - 1;
    nextBtn.textContent = isLast ? "See your results" : "Next scenario";

    updateProgress(index + 1);
    show(feedback);
    feedbackTitle.focus();
  }

  function showResults() {
    hide(playPanel);
    $("results-score").textContent = score + " of " + total + " correct";
    $("results-num").textContent = String(score);
    $("results-of").textContent = "of " + total + " correct";

    var msg;
    if (score === total) {
      msg = "Excellent work. You spotted every one. Keep using these habits, and consider sharing this game with friends and family.";
    } else if (score >= Math.ceil(total * 0.7)) {
      msg = "Well done. You recognized most of the warning signs. Look back at any you missed. They’re exactly the kind scammers rely on.";
    } else {
      msg = "Thank you for practicing. These scams are designed to be convincing, and that’s why practice helps. Try again anytime. Each round makes the warning signs easier to spot.";
    }
    $("results-message").textContent = msg;

    show(resultsPanel);
    $("results-heading").focus();
  }

  function start() {
    index = 0;
    score = 0;
    hide(startPanel);
    hide(resultsPanel);
    show(playPanel);
    renderScenario();
    titleEl.focus();
  }

  if (!total) return;

  $("total-count").textContent = String(total);
  for (var n = 0; n < total; n++) {
    progressSteps.appendChild(document.createElement("span"));
  }
  show(startPanel);

  $("start-btn").addEventListener("click", start);
  $("restart-btn").addEventListener("click", start);
  btnScam.addEventListener("click", function () { answer("scam"); });
  btnSafe.addEventListener("click", function () { answer("safe"); });
  nextBtn.addEventListener("click", function () {
    if (index === total - 1) {
      showResults();
    } else {
      index += 1;
      renderScenario();
      titleEl.focus();
    }
  });
})();
