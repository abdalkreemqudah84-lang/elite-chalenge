// 🚀 Elite Challenge Backend Server
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// بيانات تجريبية
const users = [
    { id: 1, name: "المدير العام", email: "admin@elite.com", role: "admin" },
    { id: 2, name: "محمد أحمد", email: "player1@test.com", role: "player", score: 850 }
];

const questions = [
    { id: 1, question: "ما هو العنصر الأكثر وفرة في الكون؟", category: "science", difficulty: "easy" },
    { id: 2, question: "متى وقعت الحرب العالمية الأولى؟", category: "history", difficulty: "easy" }
];

// الروابط
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: '🚀 خادم تحدي النخبة شغال',
        version: '1.0.0'
    });
});

app.get('/api/health', (req, res) => {
    res.json({
        status: '✅ الخادم يعمل',
        timestamp: new Date().toISOString()
    });
});

app.get('/api/questions', (req, res) => {
    res.json({
        success: true,
        count: questions.length,
        data: questions
    });
});

app.get('/api/users', (req, res) => {
    res.json({
        success: true,
        count: users.length,
        data: users
    });
});

app.get('/api/stats', (req, res) => {
    res.json({
        totalUsers: users.length,
        totalQuestions: questions.length,
        totalGames: 892,
        avgScore: 76
    });
});

// تشغيل الخادم
const PORT = 5000;
app.listen(PORT, () => {
    console.log('='.repeat(50));
    console.log('🚀 خادم تحدي النخبة');
    console.log(`📡 http://localhost:${PORT}`);
    console.log('='.repeat(50));
    console.log('📊 اختبر الروابط:');
    console.log(`• http://localhost:${PORT}/api/health`);
    console.log(`• http://localhost:${PORT}/api/questions`);
    console.log(`• http://localhost:${PORT}/api/stats`);
    console.log('='.repeat(50));
});