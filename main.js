(function () {
  'use strict';

  // ── 16 MBTI Results ──
  var results = {
    INTJ: { name: 'INTJ', nickname: '策略大師', percent: 2.1, rarity: 'SSR', keywords: '獨立、有遠見、高效率', desc: '你是天生的策略家，善於從全局出發規劃未來。獨立而果斷，追求效率與完美。你的思維清晰而深遠，總能在混沌中找到最佳路徑。', bestMatch: 'ENFP', worstMatch: 'ESFP', img: './assets/result-intj.png' },
    INTP: { name: 'INTP', nickname: '邏輯探索者', percent: 3.3, rarity: 'SR', keywords: '好奇、分析、創新', desc: '你的腦袋永遠在運轉，熱愛探索事物背後的原理。理性至上，追求知識的純粹。對你而言，理解世界的運作方式比什麼都重要。', bestMatch: 'ENTJ', worstMatch: 'ESFJ', img: './assets/result-intp.png' },
    ENTJ: { name: 'ENTJ', nickname: '天生指揮官', percent: 1.8, rarity: 'SSR', keywords: '果斷、領導力、效率', desc: '你天生就是領導者，善於組織和決策。目標明確，執行力驚人，總能帶領團隊走向成功。你相信行動勝於空談。', bestMatch: 'INTP', worstMatch: 'ISFP', img: './assets/result-entj.png' },
    ENTP: { name: 'ENTP', nickname: '靈感辯論家', percent: 3.2, rarity: 'SR', keywords: '機智、挑戰、創意', desc: '你是點子王，熱愛腦力激盪和辯論。不滿足於現狀，總是在尋找更好的可能性。你的思維跳躍而充滿創意。', bestMatch: 'INFJ', worstMatch: 'ISFJ', img: './assets/result-entp.png' },
    INFJ: { name: 'INFJ', nickname: '神秘洞察者', percent: 1.5, rarity: 'SSR', keywords: '理想主義、直覺、共情', desc: '你擁有洞察人心的天賦，總能看透表象之下的真相。理想主義而溫暖，致力於讓世界更美好。你的存在本身就是一道光。', bestMatch: 'ENTP', worstMatch: 'ESTP', img: './assets/result-infj.png' },
    INFP: { name: 'INFP', nickname: '夢想治癒師', percent: 4.4, rarity: 'SR', keywords: '純真、創意、同理心', desc: '你是溫柔的理想主義者，內心有一整個繽紛世界。重視真誠和意義，用溫暖治癒身邊的人。你的想像力是最美麗的禮物。', bestMatch: 'ENFJ', worstMatch: 'ESTJ', img: './assets/result-infp.png' },
    ENFJ: { name: 'ENFJ', nickname: '暖心引導者', percent: 2.5, rarity: 'SSR', keywords: '熱情、善解人意、鼓舞', desc: '你天生善於理解他人，熱情洋溢地關心每個人。是團隊的靈魂人物，總能激發他人的潛能。你的魅力讓人如沐春風。', bestMatch: 'INFP', worstMatch: 'ISTP', img: './assets/result-enfj.png' },
    ENFP: { name: 'ENFP', nickname: '熱情冒險家', percent: 8.1, rarity: 'R', keywords: '活力、想像力、樂觀', desc: '你是充滿熱情的自由靈魂，創意無限。永遠對新事物充滿好奇，用樂觀感染身邊每一個人。生活因你而更加精彩。', bestMatch: 'INTJ', worstMatch: 'ISTJ', img: './assets/result-enfp.png' },
    ISTJ: { name: 'ISTJ', nickname: '可靠守護者', percent: 11.6, rarity: 'N', keywords: '負責、實際、堅持', desc: '你是最值得信賴的人，說到做到、使命必達。重視傳統和秩序，是團隊的堅實基石。你的可靠是所有人的安心來源。', bestMatch: 'ESFP', worstMatch: 'ENFP', img: './assets/result-istj.png' },
    ISFJ: { name: 'ISFJ', nickname: '溫柔護衛者', percent: 13.8, rarity: 'N', keywords: '體貼、忠誠、細心', desc: '你默默付出，用細膩的心思照顧身邊所有人。記住每個人的喜好，是最溫暖的存在。你的愛藏在每一個細節裡。', bestMatch: 'ESTP', worstMatch: 'ENTP', img: './assets/result-isfj.png' },
    ESTJ: { name: 'ESTJ', nickname: '秩序執行者', percent: 8.7, rarity: 'R', keywords: '組織力、務實、決斷', desc: '你做事有條不紊，追求效率和成果。是天生的管理者，能把混亂變成秩序。你的執行力讓所有計畫都能落地。', bestMatch: 'ISFP', worstMatch: 'INFP', img: './assets/result-estj.png' },
    ESFJ: { name: 'ESFJ', nickname: '社交和事佬', percent: 12.3, rarity: 'N', keywords: '友善、付出、和諧', desc: '你是人群中的太陽，關心每個人的感受。善於營造和諧氛圍，讓大家都感到被重視。你的存在讓團隊更加溫暖。', bestMatch: 'ISTP', worstMatch: 'INTP', img: './assets/result-esfj.png' },
    ISTP: { name: 'ISTP', nickname: '冷靜工匠', percent: 5.4, rarity: 'R', keywords: '靈活、理性、獨立', desc: '你是冷靜的觀察者和行動者，善於動手解決問題。不說廢話，用實力說話。你的沉著冷靜是最可靠的武器。', bestMatch: 'ESFJ', worstMatch: 'ENFJ', img: './assets/result-istp.png' },
    ISFP: { name: 'ISFP', nickname: '自由藝術家', percent: 8.8, rarity: 'R', keywords: '敏感、美感、隨性', desc: '你是靈魂中自帶藝術氣息的人，用獨特視角感受世界。重視個人自由，活在當下。你的感受力是最珍貴的天賦。', bestMatch: 'ESTJ', worstMatch: 'ENTJ', img: './assets/result-isfp.png' },
    ESTP: { name: 'ESTP', nickname: '大膽行動派', percent: 4.3, rarity: 'SR', keywords: '冒險、機敏、魅力', desc: '你是最有行動力的人，喜歡挑戰和刺激。魅力十足，總能在關鍵時刻化險為夷。你的果敢讓人又驚又佩服。', bestMatch: 'ISFJ', worstMatch: 'INFJ', img: './assets/result-estp.png' },
    ESFP: { name: 'ESFP', nickname: '歡樂表演家', percent: 8.5, rarity: 'R', keywords: '熱情、即興、感染力', desc: '你是天生的表演者，走到哪裡就把歡樂帶到哪裡。活在當下，享受每一刻的精彩。你的笑容是最強大的感染力。', bestMatch: 'ISTJ', worstMatch: 'INTJ', img: './assets/result-esfp.png' }
  };

  // ── 24 Questions ──
  var questions = [
    // === E/I（外向 vs 內向）===
    { dimension: 'EI', illustration: './assets/questions/question-01.png', text: '週末到了，你比較想怎麼度過？', options: [{ text: '約朋友出去聚會、逛街、唱歌', side: 'E' }, { text: '待在家看書、追劇、享受獨處時光', side: 'I' }] },
    { dimension: 'EI', illustration: './assets/questions/question-02.png', text: '在一個課堂或會議上，你通常是？', options: [{ text: '主動發言、分享想法的人', side: 'E' }, { text: '安靜聆聽，想好了再說的人', side: 'I' }] },
    { dimension: 'EI', illustration: './assets/questions/question-03.png', text: '遇到問題時，你的第一反應是？', options: [{ text: '找朋友或同事討論，聊聊就有靈感', side: 'E' }, { text: '自己先想清楚，再決定要不要問人', side: 'I' }] },
    { dimension: 'EI', illustration: './assets/questions/question-04.png', text: '在派對上，你通常？', options: [{ text: '到處認識新朋友，越聊越興奮', side: 'E' }, { text: '找幾個熟人聊天，或找個安靜角落', side: 'I' }] },
    { dimension: 'EI', illustration: './assets/questions/question-05.png', text: '別人形容你時，更常說你？', options: [{ text: '開朗活潑、很容易親近', side: 'E' }, { text: '沉穩安靜、有點神秘', side: 'I' }] },
    { dimension: 'EI', illustration: './assets/questions/question-06.png', text: '長時間社交後，你的感受是？', options: [{ text: '充滿能量，覺得很開心', side: 'E' }, { text: '需要獨處充電，有點累了', side: 'I' }] },

    // === S/N（實感 vs 直覺）===
    { dimension: 'SN', illustration: './assets/questions/question-07.png', text: '你在看一幅畫時，會先注意到？', options: [{ text: '畫的技法、色彩搭配、構圖細節', side: 'S' }, { text: '畫想傳達的意境、故事和象徵意義', side: 'N' }] },
    { dimension: 'SN', illustration: './assets/questions/question-08.png', text: '計劃旅行時，你更傾向？', options: [{ text: '做好詳細攻略，景點、交通、預算都安排好', side: 'S' }, { text: '只訂大方向，到了再隨興探索', side: 'N' }] },
    { dimension: 'SN', illustration: './assets/questions/question-09.png', text: '老師或主管交代任務時，你希望？', options: [{ text: '有清楚的步驟和具體指示', side: 'S' }, { text: '只給方向和目標，讓我自己發揮', side: 'N' }] },
    { dimension: 'SN', illustration: './assets/questions/question-10.png', text: '你更欣賞哪種人？', options: [{ text: '腳踏實地、經驗豐富的務實者', side: 'S' }, { text: '天馬行空、充滿遠見的夢想家', side: 'N' }] },
    { dimension: 'SN', illustration: './assets/questions/question-11.png', text: '學習新事物時，你更喜歡？', options: [{ text: '從具體的例子和實際操作開始', side: 'S' }, { text: '先理解整體概念和理論框架', side: 'N' }] },
    { dimension: 'SN', illustration: './assets/questions/question-12.png', text: '你覺得自己更擅長？', options: [{ text: '處理眼前的事，把細節做到完美', side: 'S' }, { text: '預見未來趨勢，構思各種可能性', side: 'N' }] },

    // === T/F（思考 vs 情感）===
    { dimension: 'TF', illustration: './assets/questions/question-13.png', text: '好朋友做了一個你覺得錯誤的決定，你會？', options: [{ text: '直接指出問題，真正的朋友不需要拐彎抹角', side: 'T' }, { text: '先關心對方的感受，再委婉地給建議', side: 'F' }] },
    { dimension: 'TF', illustration: './assets/questions/question-14.png', text: '做重大決定時，你更依賴？', options: [{ text: '理性分析：列出利弊、數據、邏輯', side: 'T' }, { text: '內心感受：這個選擇讓不讓我舒服', side: 'F' }] },
    { dimension: 'TF', illustration: './assets/questions/question-15.png', text: '在團隊合作中發生爭執，你認為最重要的是？', options: [{ text: '找出最正確、最有效率的解決方案', side: 'T' }, { text: '確保每個人的感受都被照顧到', side: 'F' }] },
    { dimension: 'TF', illustration: './assets/questions/question-16.png', text: '看完一部電影，你傾向？', options: [{ text: '分析劇情邏輯、角色合理性', side: 'T' }, { text: '回味情感共鳴，討論最感動的情節', side: 'F' }] },
    { dimension: 'TF', illustration: './assets/questions/question-17.png', text: '你覺得「公平」是？', options: [{ text: '每個人按照規則一視同仁', side: 'T' }, { text: '考慮個別狀況，給予不同的照顧', side: 'F' }] },
    { dimension: 'TF', illustration: './assets/questions/question-18.png', text: '收到批評時，你的反應是？', options: [{ text: '客觀檢視批評有沒有道理，有幫助就改', side: 'T' }, { text: '先在意對方的態度，然後才能聽進內容', side: 'F' }] },

    // === J/P（判斷 vs 感知）===
    { dimension: 'JP', illustration: './assets/questions/question-19.png', text: '你的書桌或房間通常是？', options: [{ text: '整齊有序，每樣東西都有固定位置', side: 'J' }, { text: '有點亂但我找得到東西，這是我的風格', side: 'P' }] },
    { dimension: 'JP', illustration: './assets/questions/question-20.png', text: '面對截止日期，你通常？', options: [{ text: '提早完成，不喜歡拖到最後', side: 'J' }, { text: '截止前才靈感爆發，最後衝刺完成', side: 'P' }] },
    { dimension: 'JP', illustration: './assets/questions/question-21.png', text: '計劃改變時，你的反應是？', options: [{ text: '有點不安，我喜歡照計劃走', side: 'J' }, { text: '沒關係，反正隨機應變更有趣', side: 'P' }] },
    { dimension: 'JP', illustration: './assets/questions/question-22.png', text: '你更喜歡哪種工作方式？', options: [{ text: '列好待辦清單，一項一項勾掉', side: 'J' }, { text: '看心情和狀態決定先做什麼', side: 'P' }] },
    { dimension: 'JP', illustration: './assets/questions/question-23.png', text: '買東西時，你通常？', options: [{ text: '先做功課比較，確定需要才買', side: 'J' }, { text: '看到喜歡就買，享受隨興的快樂', side: 'P' }] },
    { dimension: 'JP', illustration: './assets/questions/question-24.png', text: '對於生活，你更嚮往？', options: [{ text: '穩定有規律的節奏，讓人安心', side: 'J' }, { text: '充滿變化和驚喜，每天都不一樣', side: 'P' }] }
  ];

  // ── State ──
  var currentQuestion = 0;
  var answers = []; // stores chosen side for each question
  var scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  // ── DOM refs ──
  var screenStart, screenQuiz, screenResult;
  var btnStart, btnShare, btnRestart, btnBack;
  var qCurrent, progressFill, questionIllustration, questionText, optionsContainer;

  function init() {
    screenStart = document.getElementById('screen-start');
    screenQuiz = document.getElementById('screen-quiz');
    screenResult = document.getElementById('screen-result');
    btnStart = document.getElementById('btn-start');
    btnShare = document.getElementById('btn-share');
    btnRestart = document.getElementById('btn-restart');
    btnBack = document.getElementById('btn-back');

    qCurrent = document.getElementById('q-current');
    progressFill = document.getElementById('progress-fill');
    questionIllustration = document.getElementById('question-illustration');
    questionText = document.getElementById('question-text');
    optionsContainer = document.getElementById('options-container');

    btnStart.addEventListener('click', startQuiz);
    btnShare.addEventListener('click', shareResult);
    btnRestart.addEventListener('click', resetQuiz);
    btnBack.addEventListener('click', goBack);
  }

  function switchScreen(from, to) {
    from.classList.remove('active');
    from.classList.add('hidden');
    to.classList.remove('hidden');
    to.classList.add('active');
  }

  function startQuiz() {
    currentQuestion = 0;
    answers = [];
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    switchScreen(screenStart, screenQuiz);
    renderQuestion();
  }

  function renderQuestion() {
    var q = questions[currentQuestion];
    qCurrent.textContent = currentQuestion + 1;
    progressFill.style.width = ((currentQuestion + 1) / questions.length) * 100 + '%';

    // Show/hide back button
    if (currentQuestion > 0) {
      btnBack.classList.remove('hidden');
    } else {
      btnBack.classList.add('hidden');
    }

    // Fade illustration
    questionIllustration.classList.add('fade-out');
    setTimeout(function () {
      questionIllustration.src = q.illustration;
      questionIllustration.onload = function () { questionIllustration.classList.remove('fade-out'); };
      questionIllustration.onerror = function () { questionIllustration.classList.remove('fade-out'); };
    }, 200);

    questionText.textContent = q.text;
    optionsContainer.innerHTML = '';

    q.options.forEach(function (opt, idx) {
      var btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt.text;
      // If already answered, highlight the selected one
      if (answers[currentQuestion] === opt.side) {
        btn.style.borderColor = 'var(--color-accent)';
        btn.style.background = 'var(--color-accent-rgba)';
      }
      btn.addEventListener('click', function () { selectOption(opt.side); });
      optionsContainer.appendChild(btn);
    });
  }

  function selectOption(side) {
    // If revisiting, undo previous answer
    if (answers[currentQuestion] !== undefined) {
      var prevSide = answers[currentQuestion];
      scores[prevSide]--;
    }

    answers[currentQuestion] = side;
    scores[side]++;

    currentQuestion++;
    if (currentQuestion >= questions.length) {
      showResult();
    } else {
      renderQuestion();
    }
  }

  function goBack() {
    if (currentQuestion > 0) {
      currentQuestion--;
      renderQuestion();
    }
  }

  function getType() {
    var ei = scores.E >= scores.I ? 'E' : 'I';
    var sn = scores.S >= scores.N ? 'S' : 'N';
    var tf = scores.T >= scores.F ? 'T' : 'F';
    var jp = scores.J >= scores.P ? 'J' : 'P';
    return ei + sn + tf + jp;
  }

  function showResult() {
    var type = getType();
    var res = results[type];

    // Portrait
    document.getElementById('result-image').src = res.img;
    document.getElementById('result-title').textContent = res.name + ' \u2014 ' + res.nickname;

    // Rarity badge
    var badge = document.getElementById('result-rarity');
    badge.textContent = '\u7A00\u6709\u5EA6\uFF1A' + res.percent + '%';
    badge.className = 'rarity-badge rarity-' + res.rarity.toLowerCase();

    // Description
    document.getElementById('result-desc').textContent = res.desc;

    // Dimension bars
    renderDimensionBars();

    // Compatibility
    var bestRes = results[res.bestMatch];
    var worstRes = results[res.worstMatch];
    document.getElementById('best-match-type').textContent = bestRes.name + ' ' + bestRes.nickname;
    document.getElementById('worst-match-type').textContent = worstRes.name + ' ' + worstRes.nickname;

    switchScreen(screenQuiz, screenResult);
  }

  function renderDimensionBars() {
    var container = document.getElementById('dimension-bars');
    container.innerHTML = '';

    var dims = [
      { left: 'E', right: 'I', leftLabel: 'E \u5916\u5411', rightLabel: 'I \u5167\u5411', cls: 'dim-ei' },
      { left: 'S', right: 'N', leftLabel: 'S \u5BE6\u611F', rightLabel: 'N \u76F4\u89BA', cls: 'dim-sn' },
      { left: 'T', right: 'F', leftLabel: 'T \u601D\u8003', rightLabel: 'F \u60C5\u611F', cls: 'dim-tf' },
      { left: 'J', right: 'P', leftLabel: 'J \u5224\u65B7', rightLabel: 'P \u611F\u77E5', cls: 'dim-jp' }
    ];

    dims.forEach(function (d) {
      var total = scores[d.left] + scores[d.right];
      var leftPct = total === 0 ? 50 : Math.round((scores[d.left] / total) * 100);

      var row = document.createElement('div');
      row.className = 'dim-row';

      var labels = document.createElement('div');
      labels.className = 'dim-labels';

      var ll = document.createElement('span');
      ll.className = 'dim-label-left';
      ll.textContent = d.leftLabel;
      ll.style.color = scores[d.left] >= scores[d.right] ? 'var(--color-text)' : 'var(--color-text-muted)';

      var lr = document.createElement('span');
      lr.className = 'dim-label-right';
      lr.textContent = d.rightLabel;
      lr.style.color = scores[d.right] > scores[d.left] ? 'var(--color-text)' : '';

      labels.appendChild(ll);
      labels.appendChild(lr);

      var barWrap = document.createElement('div');
      barWrap.className = 'dim-bar-wrap';
      var barFill = document.createElement('div');
      barFill.className = 'dim-bar-fill ' + d.cls;
      barFill.style.width = '0%';
      barWrap.appendChild(barFill);

      var percent = document.createElement('div');
      percent.className = 'dim-percent';
      percent.textContent = leftPct + '% / ' + (100 - leftPct) + '%';

      row.appendChild(labels);
      row.appendChild(barWrap);
      row.appendChild(percent);
      container.appendChild(row);

      // Animate
      setTimeout(function () { barFill.style.width = leftPct + '%'; }, 100);
    });
  }

  function shareResult() {
    var type = getType();
    var res = results[type];
    var url = window.location.href.split('?')[0] + '?utm_source=share&utm_medium=social&utm_campaign=tool-mbti-quiz-v1.0.0';
    var text = '\u{1F4AB} \u6211\u7684 MBTI \u4EBA\u683C\u662F ' + res.name + ' \u300C' + res.nickname + '\u300D\n' +
               res.rarity + ' \u00B7 \u5168\u7403\u50C5 ' + res.percent + '% \u7684\u4EBA\u662F\u9019\u578B\uFF01\n' +
               '\u4F60\u662F\u54EA\u7A2E MBTI \u4EBA\u683C\uFF1F\u5FEB\u4F86\u6E2C\u6E2C\u770B\uFF01\n' + url;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () { showToast(); });
    } else {
      var textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        showToast();
      } catch (err) {
        // silent fail
      }
      document.body.removeChild(textArea);
    }
  }

  function showToast() {
    var toast = document.getElementById('toast');
    toast.classList.remove('hidden');
    setTimeout(function () { toast.classList.add('hidden'); }, 2000);
  }

  function resetQuiz() {
    currentQuestion = 0;
    answers = [];
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    switchScreen(screenResult, screenStart);
  }

  // ── DOM Ready ──
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
