// ملف JavaScript الرئيسي لتحدي النخبة

// متغيرات عامة
let currentCategory = '';
let score = 0;
let timer = 30;
let timerInterval;

// عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 موقع تحدي النخبة جاهز!');

    // إعداد الأزرار
    setupButtons();

    // إعداد الأقسام
    setupCategories();

    // التحقق من حالة المستخدم
    checkUserStatus();

    // بدء الساعة التلقائية
    startClock();

    // عرض رسالة ترحيب
    setTimeout(showWelcomeMessage, 1000);

    // عرض حقيقة عشوائية كل 30 ثانية
    setInterval(displayRandomFact, 30000);
});

// التحقق من حالة المستخدم
function checkUserStatus() {
    const playerName = localStorage.getItem('playerName');
    const isSubscribed = localStorage.getItem('subscribed') === 'true';
    const trialUsed = localStorage.getItem('trialUsed') === 'true';

    if (playerName) {
        // تحديث واجهة المستخدم المسجل
        const loginSection = document.getElementById('loginSection');
        if (loginSection) {
            if (isSubscribed) {
                loginSection.innerHTML = `
                    <h3 style="color: #ffd700;"><i class="fas fa-crown"></i> مرحباً ${playerName}!</h3>
                    <p style="color: #bbbbff;">أنت عضو في النخبة 👑</p>
                    <div style="display: flex; gap: 15px; margin-top: 20px;">
                        <button class="btn-primary" onclick="startSinglePlayer()" style="flex: 1;">
                            <i class="fas fa-user"></i> لوحدك
                        </button>
                        <button class="btn-secondary" onclick="startMultiPlayer()" style="flex: 1;">
                            <i class="fas fa-users"></i> مع فريق
                        </button>
                    </div>
                `;
            } else if (trialUsed) {
                loginSection.innerHTML = `
                    <h3 style="color: #ffd700;"><i class="fas fa-user"></i> مرحباً ${playerName}!</h3>
                    <p style="color: #bbbbff;">لقد استخدمت تجربتك المجانية</p>
                    <div style="display: flex; gap: 15px; margin-top: 20px;">
                        <button class="btn-primary" onclick="goToSubscribe()" style="flex: 1;">
                            <i class="fas fa-crown"></i> اشترك الآن
                        </button>
                        <button class="btn-secondary" onclick="startMultiPlayer()" style="flex: 1;">
                            <i class="fas fa-users"></i> مع فريق
                        </button>
                    </div>
                `;
            } else {
                loginSection.innerHTML = `
                    <h3 style="color: #ffd700;"><i class="fas fa-user"></i> مرحباً ${playerName}!</h3>
                    <p style="color: #bbbbff;">أنت الآن جاهز للعب. اختر وضع اللعب:</p>
                    <div style="display: flex; gap: 15px; margin-top: 20px;">
                        <button class="btn-primary" onclick="startSinglePlayer()" style="flex: 1;">
                            <i class="fas fa-user"></i> لوحدك
                        </button>
                        <button class="btn-secondary" onclick="startMultiPlayer()" style="flex: 1;">
                            <i class="fas fa-users"></i> مع فريق
                        </button>
                    </div>
                `;
            }
        }
    }
}

// إعداد الأزرار
function setupButtons() {
    const startBtn = document.querySelector('.btn-primary');
    const randomBtn = document.querySelector('.btn-secondary');

    if (startBtn && !startBtn.onclick) {
        startBtn.addEventListener('click', function() {
            const playerName = localStorage.getItem('playerName');
            
            if (!playerName) {
                alert('❌ يرجى تسجيل الدخول أولاً!');
                return;
            }

            const trialUsed = localStorage.getItem('trialUsed');
            const isSubscribed = localStorage.getItem('subscribed') === 'true';

            if (!isSubscribed && trialUsed === 'true') {
                if (confirm('⚠️ لقد استخدمت تجربتك المجانية! هل تريد الاشتراك الآن؟')) {
                    window.location.href = 'subscribe.html';
                }
                return;
            }

            window.location.href = 'game.html';
        });
    }

    if (randomBtn && !randomBtn.onclick) {
        randomBtn.addEventListener('click', function() {
            startRandomChallenge();
        });
    }
}

// إعداد الأقسام
function setupCategories() {
    const categoryCards = document.querySelectorAll('.category-card');

    categoryCards.forEach(card => {
        if (!card.hasAttribute('data-listener')) {
            card.setAttribute('data-listener', 'true');
            
            card.addEventListener('click', function() {
                const categoryName = this.querySelector('h3').textContent;
                alert(`✅ تم اختيار قسم: ${categoryName}\nسيبدأ التحدي قريباً...`);

                // تغيير لون البطاقة المختارة
                categoryCards.forEach(c => c.style.backgroundColor = 'rgba(255, 255, 255, 0.08)');
                this.style.backgroundColor = 'rgba(255, 215, 0, 0.2)';

                currentCategory = categoryName;
            });

            // تأثير عند المرور بالفأرة
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
            });

            card.addEventListener('mouseleave', function() {
                if (!this.style.backgroundColor.includes('0.2')) {
                    this.style.transform = 'scale(1)';
                }
            });
        }
    });
}

// بدء تحدٍ عشوائي
function startRandomChallenge() {
    const playerName = localStorage.getItem('playerName');
    
    if (!playerName) {
        alert('❗ يرجى تسجيل الدخول أولاً!');
        return;
    }

    const categories = ['كرة القدم', 'الأفلام', 'الموسيقى', 'الإسلاميات', 'البراندات', 'الثقافة العامة'];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    // عرض القسم العشوائي
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        if (card.querySelector('h3').textContent === randomCategory) {
            card.style.backgroundColor = 'rgba(255, 215, 0, 0.2)';
            card.style.animation = 'pulse 1s infinite';

            // إزالة التحديد بعد 3 ثواني
            setTimeout(() => {
                card.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                card.style.animation = '';
            }, 3000);
        }
    });

    alert(`🎯 القسم العشوائي: ${randomCategory}\nجاري تحميل الأسئلة...`);
    currentCategory = randomCategory;

    // الانتقال للعبة بعد تأخير
    setTimeout(() => {
        window.location.href = 'game.html';
    }, 1500);
}

// بدء اللعبة الفردية
function startSinglePlayer() {
    const playerName = localStorage.getItem('playerName');
    
    if (!playerName) {
        alert('❗ يرجى تسجيل الدخول أولاً!');
        return;
    }

    const trialUsed = localStorage.getItem('trialUsed');
    const isSubscribed = localStorage.getItem('subscribed') === 'true';

    if (!isSubscribed && trialUsed === 'true') {
        if (!confirm('⚠️ لقد استخدمت تجربتك المجانية! هل تريد الاشتراك الآن؟')) {
            return;
        }
        window.location.href = 'subscribe.html';
        return;
    }

    // الانتقال للعبة
    window.location.href = 'game.html';
}

// بدء اللعبة الجماعية
function startMultiPlayer() {
    const playerName = localStorage.getItem('playerName');
    
    if (!playerName) {
        alert('❗ يرجى تسجيل الدخول أولاً!');
        return;
    }

    window.location.href = 'setup.html';
}

// الانتقال لصفحة الاشتراك
function goToSubscribe() {
    window.location.href = 'subscribe.html';
}

// بدء المؤقت
function startTimer(seconds) {
    timer = seconds;
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            console.log(`⏰ الوقت المتبقي: ${timer} ثانية`);
            
            // تحديث العرض إذا كان هناك عنصر للمؤقت
            const timerElement = document.getElementById('timerDisplay');
            if (timerElement) {
                timerElement.textContent = timer;
                
                // تغيير اللون عند قرب انتهاء الوقت
                if (timer <= 10) {
                    timerElement.style.color = '#F44336';
                } else if (timer <= 20) {
                    timerElement.style.color = '#FF9800';
                }
            }
        } else {
            clearInterval(timerInterval);
            console.log('⏰ انتهى الوقت!');
            
            // تنفيذ إجراء عند انتهاء الوقت
            if (typeof onTimeOut === 'function') {
                onTimeOut();
            }
        }
    }, 1000);
}

// إيقاف المؤقت
function stopTimer() {
    clearInterval(timerInterval);
    console.log('⏰ تم إيقاف المؤقت');
}

// ساعة تلقائية في الشريط العلوي
function startClock() {
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('ar-EG');

        // يمكن إضافة الساعة لواجهة المستخدم لاحقاً
        const clockElement = document.querySelector('.clock');
        if (clockElement) {
            clockElement.textContent = timeString;
        }
    }

    setInterval(updateClock, 1000);
    updateClock();
}

// تأثيرات إضافية
function addConfetti() {
    console.log('🎉 تخرج الألعاب النارية!');
    
    // إنشاء تأثير كونفيتي بسيط
    const confettiContainer = document.createElement('div');
    confettiContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
    `;
    
    document.body.appendChild(confettiContainer);
    
    // إنشاء قطع كونفيتي
    const colors = ['#ffd700', '#ff6b00', '#4285F4', '#EA4335', '#4CAF50', '#9C27B0'];
    
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: absolute;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
            top: -20px;
            left: ${Math.random() * 100}%;
            animation: fall ${Math.random() * 3 + 2}s linear forwards;
        `;
        
        confettiContainer.appendChild(confetti);
    }
    
    // إضافة أنماط CSS للحركة
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(${Math.random() * 360}deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // إزالة الكونفيتي بعد الانتهاء
    setTimeout(() => {
        document.body.removeChild(confettiContainer);
        document.head.removeChild(style);
    }, 3000);
}

// إضافة سؤال عشوائي للعرض
function displayRandomFact() {
    const facts = [
        "💡 هل تعلم: أول كأس عالم أقيم عام 1930 في الأوروغواي",
        "🎬 هل تعلم: فيلم الرسالة هو أشهر فيلم عن السيرة النبوية",
        "🎵 هل تعلم: أم كلثوم هي أشهر مغنية عربية في التاريخ",
        "🕌 هل تعلم: القرآن الكريم يحتوي على 114 سورة",
        "🛍️ هل تعلم: Nike اسمها مأخوذ من آلهة النصر اليونانية",
        "🌍 هل تعلم: أكبر دولة عربية مساحة هي الجزائر",
        "⚽ هل تعلم: كأس العالم 2026 سيكون في أمريكا الشمالية",
        "🎭 هل تعلم: مسرح شكسبير العالمي في لندن",
        "🔬 هل تعلم: ألبرت أينشتاين حصل على جائزة نوبل في الفيزياء عام 1921",
        "🎨 هل تعلم: لوحة الموناليزا رسمها ليوناردو دافنشي"
    ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    // يمكن عرض الحقيقة في مكان مخصص في الصفحة
    const factElement = document.querySelector('.random-fact');
    if (factElement) {
        factElement.textContent = randomFact;
        factElement.style.display = 'block';
        factElement.classList.add('fade-in');

        // إخفاء الحقيقة بعد 10 ثواني
        setTimeout(() => {
            factElement.style.display = 'none';
            factElement.classList.remove('fade-in');
        }, 10000);
    }
}

// عرض رسالة ترحيب
function showWelcomeMessage() {
    const playerName = localStorage.getItem('playerName');
    
    if (!playerName) return; // لا تظهر رسالة الترحيب إذا لم يكن هناك لاعب مسجل

    const welcomeMessages = [
        `مرحباً ${playerName}! جاهز للتحدي؟ 🏆`,
        `أهلاً وسهلاً ${playerName}! اختبر معلوماتك الآن! 🧠`,
        `مرحباً بالعبقري ${playerName}! لنرى كم تعرف! 💡`,
        `عوداً حميداً ${playerName}! حان وقت التحدي! ⚡`
    ];

    const randomMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];

    // التحقق إذا كانت هناك رسالة سابقة وإزالتها
    const oldMessage = document.querySelector('.welcome-message');
    if (oldMessage) {
        document.body.removeChild(oldMessage);
    }

    // إنشاء عنصر للرسالة
    const messageDiv = document.createElement('div');
    messageDiv.className = 'welcome-message';
    messageDiv.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #ffd700, #ff6b00);
            color: #1a237e;
            padding: 15px 25px;
            border-radius: 50px;
            font-weight: bold;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            z-index: 1000;
            animation: slideIn 0.5s ease-out;
            max-width: 400px;
        ">
            <i class="fas fa-star"></i> ${randomMessage}
        </div>
    `;

    document.body.appendChild(messageDiv);

    // إزالة الرسالة بعد 5 ثواني
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.style.animation = 'slideOut 0.5s ease-in';
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    document.body.removeChild(messageDiv);
                }
            }, 500);
        }
    }, 5000);
}

// إضافة أنماط للرسائل المتحركة
(function addAnimationStyles() {
    const styleId = 'animation-styles';
    if (document.getElementById(styleId)) return;
    
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }

        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
        }

        .welcome-message {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
    `;
    document.head.appendChild(style);
})();

// دالة مساعدة: تخزين النتيجة
function saveScore(score, mode = 'single') {
    const playerName = localStorage.getItem('playerName');
    if (!playerName) return;
    
    const scores = JSON.parse(localStorage.getItem('scores') || '[]');
    const newScore = {
        player: playerName,
        score: score,
        mode: mode,
        date: new Date().toISOString(),
        timestamp: Date.now()
    };
    
    scores.push(newScore);
    
    // الاحتفاظ بأعلى 10 نتائج فقط
    scores.sort((a, b) => b.score - a.score);
    const topScores = scores.slice(0, 10);
    
    localStorage.setItem('scores', JSON.stringify(topScores));
    console.log('💾 تم حفظ النتيجة:', newScore);
}

// دالة مساعدة: الحصول على أعلى النتائج
function getHighScores(limit = 5) {
    const scores = JSON.parse(localStorage.getItem('scores') || '[]');
    return scores.slice(0, limit);
}

// دالة مساعدة: تهيئة بيانات جديدة للمستخدم
function initializeUserData(playerName) {
    const userData = {
        name: playerName,
        joinedDate: new Date().toISOString(),
        gamesPlayed: 0,
        totalScore: 0,
        highestScore: 0,
        achievements: []
    };
    
    localStorage.setItem('userData', JSON.stringify(userData));
    return userData;
}

// دالة مساعدة: تحديث بيانات المستخدم
function updateUserData(score) {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    
    userData.gamesPlayed = (userData.gamesPlayed || 0) + 1;
    userData.totalScore = (userData.totalScore || 0) + score;
    userData.highestScore = Math.max(userData.highestScore || 0, score);
    
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log('📊 تم تحديث بيانات المستخدم:', userData);
}

// تصدير الدوال للاستخدام في الملفات الأخرى
if (typeof window !== 'undefined') {
    window.startSinglePlayer = startSinglePlayer;
    window.startMultiPlayer = startMultiPlayer;
    window.goToSubscribe = goToSubscribe;
    window.startTimer = startTimer;
    window.stopTimer = stopTimer;
    window.addConfetti = addConfetti;
    window.saveScore = saveScore;
    window.getHighScores = getHighScores;
    window.updateUserData = updateUserData;
}