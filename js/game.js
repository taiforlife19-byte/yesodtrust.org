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
  var progressFill = $("progress-fill");

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
    progressFill.style.width = Math.round((answeredCount / total) * 100) + "%";
  }

  function renderScenario() {
    var s = scenarios[index];

    setText(channelEl, s.channel);
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
