// config.js
const APP_CONFIG = {
    APP_NAME: "تحدي النخبة",
    VERSION: "2.0.0",
    API_BASE_URL: "http://localhost:5000/api",
    
    GAME_MODES: {
        QUICK: { questions: 10, time: 15, basePoints: 100 },
        NORMAL: { questions: 20, time: 30, basePoints: 250 },
        CHALLENGE: { questions: 15, time: 20, basePoints: 500 }
    },
    
    SCORING_SYSTEM: {
        calculateScore: function(difficulty, timeLeft, streak) {
            const basePoints = { easy: 100, medium: 250, hard: 500 };
            const base = basePoints[difficulty] || 100;
            const timeBonus = Math.floor(timeLeft * 2);
            const streakMultiplier = Math.min(Math.floor(streak / 3) + 1, 5);
            
            return Math.round((base + timeBonus) * streakMultiplier);
        }
    },
    
    LEVELS: [
        { level: 1, name: "المبتدئ", minXP: 0, badge: "🥚" },
        { level: 2, name: "الهاوي", minXP: 1000, badge: "🐣" },
        { level: 3, name: "المتوسط", minXP: 3000, badge: "🐥" },
        { level: 4, name: "المتقدم", minXP: 7000, badge: "🦅" },
        { level: 5, name: "الخبير", minXP: 15000, badge: "👑" },
        { level: 6, name: "الأسطورة", minXP: 30000, badge: "⭐" }
    ],
    
    CATEGORIES: [
        { id: 'science', name: 'العلوم', icon: '🔬' },
        { id: 'history', name: 'التاريخ', icon: '🏛️' },
        { id: 'geography', name: 'الجغرافيا', icon: '🌍' },
        { id: 'sports', name: 'الرياضة', icon: '⚽' },
        { id: 'art', name: 'الفن', icon: '🎨' },
        { id: 'tech', name: 'التكنولوجيا', icon: '💻' }
    ]
};

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 10px;
        color: white;
        font-weight: bold;
        z-index: 10001;
        animation: slideInRight 0.3s ease;
        backdrop-filter: blur(10px);
        border-left: 5px solid;
        max-width: 400px;
    `;
    
    if (type === 'success') {
        notification.style.background = 'rgba(46, 213, 115, 0.9)';
        notification.style.borderLeftColor = '#2ed573';
    } else if (type === 'error') {
        notification.style.background = 'rgba(255, 71, 87, 0.9)';
        notification.style.borderLeftColor = '#ff4757';
    } else {
        notification.style.background = 'rgba(0, 148, 255, 0.9)';
        notification.style.borderLeftColor = '#0094ff';
    }
    
    notification.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}