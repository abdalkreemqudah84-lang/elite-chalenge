// ملف الأسئلة الكامل لتحدي النخبة
// تم إصلاحه وتوسيعه ليشمل 6 أقسام

const allQuestions = {
    // القسم الجديد - العلوم
science: [
    {
        id: 31,
        question: "ما هو العنصر الكيميائي الأكثر وفرة في الكون؟",
        correct: 3,
        options: ["الأكسجين", "الكربون", "الهيدروجين", "الهيليوم"],
        category: "العلوم",
        difficulty: "سهل",
        points: 10
    },
    {
        id: 32,
        question: "كم عدد العظام في جسم الإنسان البالغ؟",
        correct: 4,
        options: ["200", "206", "212", "206"],
        category: "العلوم",
        difficulty: "سهل",
        points: 10
    },
    {
        id: 33,
        question: "ما هو أسرع حيوان بري في العالم؟",
        correct: 1,
        options: ["الفهد", "الأسد", "النمر", "الظبي"],
        category: "العلوم",
        difficulty: "سهل",
        points: 10
    },
    {
        id: 34,
        question: "ما هي أكبر كوكب في المجموعة الشمسية؟",
        correct: 2,
        options: ["الأرض", "المشتري", "زحل", "نبتون"],
        category: "العلوم",
        difficulty: "سهل",
        points: 10
    },
    {
        id: 35,
        question: "ما هو الغاز الذي تستخدمه النباتات في عملية البناء الضوئي؟",
        correct: 3,
        options: ["الأكسجين", "النيتروجين", "ثاني أكسيد الكربون", "الهيدروجين"],
        category: "العلوم",
        difficulty: "سهل",
        points: 10
    },
    {
        id: 36,
        question: "ما هو أصغر عظمة في جسم الإنسان؟",
        correct: 4,
        options: ["عظمة الركبة", "عظمة الأذن الوسطى", "عظمة الإصبع", "عظمة الركاب في الأذن"],
        category: "العلوم",
        difficulty: "متوسط",
        points: 15
    },
    {
        id: 37,
        question: "كم قلب للأخطبوط؟",
        correct: 2,
        options: ["1", "3", "2", "4"],
        category: "العلوم",
        difficulty: "متوسط",
        points: 15
    },
    {
        id: 38,
        question: "ما هو أصلب مادة طبيعية على وجه الأرض؟",
        correct: 1,
        options: ["الألماس", "الحديد", "الذهب", "الكوارتز"],
        category: "العلوم",
        difficulty: "متوسط",
        points: 15
    },
    {
        id: 39,
        question: "ما هي درجة غليان الماء بالمئوي؟",
        correct: 3,
        options: ["90°", "95°", "100°", "105°"],
        category: "العلوم",
        difficulty: "سهل",
        points: 10
    },
    {
        id: 40,
        question: "كم عدد الكروموسومات في الخلية البشرية الطبيعية؟",
        correct: 4,
        options: ["44", "46", "48", "46"],
        category: "العلوم",
        difficulty: "متوسط",
        points: 15
    }
],
// القسم الجديد - الجغرافيا
geography: [
    {
        id: 41,
        question: "ما هي أكبر دولة في العالم من حيث المساحة؟",
        correct: 1,
        options: ["روسيا", "كندا", "الصين", "الولايات المتحدة"],
        category: "الجغرافيا",
        difficulty: "سهل",
        points: 10
    },
    {
        id: 42,
        question: "ما هو أطول نهر في العالم؟",
        correct: 3,
        options: ["الأمازون", "يانجتسي", "النيل", "الميسيسيبي"],
        category: "الجغرافيا",
        difficulty: "سهل",
        points: 10
    },
    {
        id: 43,
        question: "ما هي عاصمة أستراليا؟",
        correct: 4,
        options: ["سيدني", "ملبورن", "بريزبن", "كانبرا"],
        category: "الجغرافيا",
        difficulty: "متوسط",
        points: 15
    },
    {
        id: 44,
        question: "في أي قارة تقع صحراء الربع الخالي؟",
        correct: 2,
        options: ["أفريقيا", "آسيا", "أمريكا الشمالية", "أستراليا"],
        category: "الجغرافيا",
        difficulty: "متوسط",
        points: 15
    },
    {
        id: 45,
        question: "ما هي أصغر دولة في العالم من حيث المساحة؟",
        correct: 3,
        options: ["موناكو", "نورو", "الفاتيكان", "سان مارينو"],
        category: "الجغرافيا",
        difficulty: "متوسط",
        points: 15
    },
    {
        id: 46,
        question: "كم عدد القارات في العالم؟",
        correct: 2,
        options: ["6", "7", "5", "8"],
        category: "الجغرافيا",
        difficulty: "سهل",
        points: 10
    },
    {
        id: 47,
        question: "ما هو أعلى جبل في العالم؟",
        correct: 1,
        options: ["إيفرست", "كيه 2", "كانغشينجونغا", "لوتس"],
        category: "الجغرافيا",
        difficulty: "سهل",
        points: 10
    },
    {
        id: 48,
        question: "ما هي أكبر جزيرة في العالم؟",
        correct: 4,
        options: ["مدغشقر", "بورنيو", "بابوا", "جرينلاند"],
        category: "الجغرافيا",
        difficulty: "متوسط",
        points: 15
    },
    {
        id: 49,
        question: "ما هي الدولة التي لديها أكبر عدد من الجزر؟",
        correct: 3,
        options: ["الفلبين", "إندونيسيا", "السويد", "اليابان"],
        category: "الجغرافيا",
        difficulty: "صعب",
        points: 20
    },
    {
        id: 50,
        question: "في أي محيط تقع جزر المالديف؟",
        correct: 2,
        options: ["المحيط الهادئ", "المحيط الهندي", "المحيط الأطلسي", "المحيط المتجمد الشمالي"],
        category: "الجغرافيا",
        difficulty: "متوسط",
        points: 15
    }
],
// القسم الجديد - الرياضيات
math: [
    {
        id: 51,
        question: "ما هو ناتج 7 × 8؟",
        correct: 4,
        options: ["54", "56", "58", "56"],
        category: "الرياضيات",
        difficulty: "سهل",
        points: 10
    },
    {
        id: 52,
        question: "ما هو العدد الأولي الذي يلي العدد 10؟",
        correct: 3,
        options: ["11", "12", "13", "14"],
        category: "الرياضيات",
        difficulty: "سهل",
        points: 10
    },
    {
        id: 53,
        question: "ما هو محيط الدائرة التي قطرها 14 سم؟ (ط ≈ 22/7)",
        correct: 2,
        options: ["44 سم", "44 سم", "88 سم", "154 سم"],
        category: "الرياضيات",
        difficulty: "متوسط",
        points: 15
    },
    {
        id: 54,
        question: "إذا كان س + 5 = 12، فما قيمة س؟",
        correct: 1,
        options: ["7", "8", "9", "10"],
        category: "الرياضيات",
        difficulty: "سهل",
        points: 10
    },
    {
        id: 55,
        question: "ما هو الجذر التربيعي للعدد 64؟",
        correct: 4,
        options: ["6", "7", "8", "8"],
        category: "الرياضيات",
        difficulty: "سهل",
        points: 10
    },
    {
        id: 56,
        question: "كم تساوي زوايا المثلث مجتمعة؟",
        correct: 3,
        options: ["90 درجة", "180 درجة", "180 درجة", "360 درجة"],
        category: "الرياضيات",
        difficulty: "سهل",
        points: 10
    },
    {
        id: 57,
        question: "ما هو الرقم الروماني لـ 50؟",
        correct: 2,
        options: ["X", "L", "C", "D"],
        category: "الرياضيات",
        difficulty: "متوسط",
        points: 15
    },
    {
        id: 58,
        question: "ما هو العدد الذي إذا ضرب في نفسه كان الناتج 121؟",
        correct: 1,
        options: ["11", "12", "13", "14"],
        category: "الرياضيات",
        difficulty: "سهل",
        points: 10
    },
    {
        id: 59,
        question: "كم تساوي 3/4 من 100؟",
        correct: 4,
        options: ["25", "50", "75", "75"],
        category: "الرياضيات",
        difficulty: "سهل",
        points: 10
    },
    {
        id: 60,
        question: "ما هو الرقم التالي في المتتالية: 2, 4, 8, 16, ...؟",
        correct: 3,
        options: ["24", "30", "32", "64"],
        category: "الرياضيات",
        difficulty: "متوسط",
        points: 15
    }
],
// القسم الجديد - الفنون
arts: [
    {
        id: 61,
        question: "من رسم لوحة الموناليزا؟",
        correct: 4,
        options: ["فان جوخ", "بيكاسو", "رامبرانت", "ليوناردو دافنشي"],
        category: "الفنون",
        difficulty: "سهل",
        points: 10
    },
    {
        id: 62,
        question: "ما هي الآلة الموسيقية التي تعزف بيتهوفن السمفونية التاسعة عليها؟",
        correct: 2,
        options: ["الكمان", "البيانو", "الناي", "العود"],
        category: "الفنون",
        difficulty: "متوسط",
        points: 15
    },
    {
        id: 63,
        question: "من هو مؤلف مسرحية هاملت؟",
        correct: 1,
        options: ["شكسبير", "تشيخوف", "إبسن", "موليير"],
        category: "الفنون",
        difficulty: "سهل",
        points: 10
    },
    {
        id: 64,
        question: "ما هو أسلوب الرسم الذي اشتهر به بابلو بيكاسو؟",
        correct: 3,
        options: ["الواقعية", "الانطباعية", "التكعيبية", "السريالية"],
        category: "الفنون",
        difficulty: "متوسط",
        points: 15
    },
    {
        id: 65,
        question: "من هو مؤلف موسيقى بحيرة البجع؟",
        correct: 4,
        options: ["موزارت", "باخ", "بيتهوفن", "تشايكوفسكي"],
        category: "الفنون",
        difficulty: "متوسط",
        points: 15
    },
    {
        id: 66,
        question: "ما هي الجائزة العالمية للسينما التي تقدم في مهرجان كان؟",
        correct: 2,
        options: ["الدب الذهبي", "السعفة الذهبية", "الأوسكار", "الأسد الذهبي"],
        category: "الفنون",
        difficulty: "متوسط",
        points: 15
    },
    {
        id: 67,
        question: "من هو الفنان العربي الذي اشتهر بلوحة حامل الجرة؟",
        correct: 1,
        options: ["محمود سعيد", "صلاح طاهر", "حامد ندا", "جاذبية سري"],
        category: "الفنون",
        difficulty: "صعب",
        points: 20
    },
    {
        id: 68,
        question: "ما هي أقدم آلة موسيقية عربية؟",
        correct: 3,
        options: ["العود", "الناي", "الدف", "القانون"],
        category: "الفنون",
        difficulty: "متوسط",
        points: 15
    },
    {
        id: 69,
        question: "من هو مؤسس المسرح القومي في مصر؟",
        correct: 4,
        options: ["فاطمة رشدي", "علي الكسار", "يوسف وهبي", "يوسف وهبي"],
        category: "الفنون",
        difficulty: "صعب",
        points: 20
    },
    {
        id: 70,
        question: "ما هو الفن المعماري الذي اشتهرت به الحضارة الإسلامية؟",
        correct: 2,
        options: ["الأعمدة", "القباب", "الأبراج", "الجسور"],
        category: "الفنون",
        difficulty: "سهل",
        points: 10
    }
],
    
    // في ملف questions.js، داخل allQuestions أضف:
history: // قسم التاريخ - 10 أسئلة جديدة
 historyQuestions = [
    {
        id: 21,
        question: "في أي سنة وقعت معركة حطين؟",
        correct: 3,
        options: ["1167", "1174", "1187", "1191"],
        category: "التاريخ",
        difficulty: "متوسط",
        points: 15
    },
    {
        id: 22,
        question: "من هو أول خليفة أموي؟",
        correct: 4,
        options: ["يزيد بن معاوية", "مروان بن الحكم", "عبد الملك بن مروان", "معاوية بن أبي سفيان"],
        category: "التاريخ",
        difficulty: "سهل",
        points: 10
    },
    {
        id: 23,
        question: "متى تم فتح الأندلس؟",
        correct: 2,
        options: ["699 م", "711 م", "732 م", "750 م"],
        category: "التاريخ",
        difficulty: "متوسط",
        points: 15
    },
    {
        id: 24,
        question: "من قاد الجيش الإسلامي في معركة اليرموك؟",
        correct: 1,
        options: ["خالد بن الوليد", "عمرو بن العاص", "سعد بن أبي وقاص", "أبو عبيدة بن الجراح"],
        category: "التاريخ",
        difficulty: "سهل",
        points: 10
    },
    {
        id: 25,
        question: "أين ولد النبي محمد صلى الله عليه وسلم؟",
        correct: 1,
        options: ["مكة", "المدينة", "الطائف", "ينبع"],
        category: "التاريخ",
        difficulty: "سهل",
        points: 10
    },
    {
        id: 26,
        question: "كم استمرت الخلافة العباسية؟",
        correct: 4,
        options: ["300 سنة", "400 سنة", "500 سنة", "508 سنوات"],
        category: "التاريخ",
        difficulty: "صعب",
        points: 20
    },
    {
        id: 27,
        question: "من هو مؤسس الدولة العثمانية؟",
        correct: 3,
        options: ["مراد الأول", "بايزيد الأول", "عثمان الأول", "أورخان غازي"],
        category: "التاريخ",
        difficulty: "متوسط",
        points: 15
    },
    {
        id: 28,
        question: "في أي عام سقطت غرناطة آخر معاقل المسلمين في الأندلس؟",
        correct: 2,
        options: ["1482", "1492", "1502", "1512"],
        category: "التاريخ",
        difficulty: "متوسط",
        points: 15
    },
    {
        id: 29,
        question: "ما هي أطول حضارة في التاريخ؟",
        correct: 3,
        options: ["الحضارة الرومانية", "الحضارة الفارسية", "الحضارة المصرية القديمة", "الحضارة الصينية"],
        category: "التاريخ",
        difficulty: "صعب",
        points: 20
    },
    {
        id: 30,
        question: "من كان أول إمبراطور لروما؟",
        correct: 4,
        options: ["يوليوس قيصر", "نيرون", "تراجان", "أغسطس"],
        category: "التاريخ",
        difficulty: "متوسط",
        points: 15
    }
],

    football: [
        {
            id: 1,
            question: "من هو الهداف التاريخي لكأس العالم؟",
            correct: 3,
            options: ["ليونيل ميسي", "كريستيانو رونالدو", "ميروسلاف كلوزه", "بيليه"],
            category: "كرة القدم",
            difficulty: "سهل"
        },
        {
            id: 2,
            question: "من فاز بكأس العالم 2022؟",
            correct: 3,
            options: ["البرازيل", "فرنسا", "الأرجنتين", "ألمانيا"],
            category: "كرة القدم",
            difficulty: "سهل"
        },
        {
            id: 3,
            question: "أي نادي يلقب بـ 'البارسا'؟",
            correct: 2,
            options: ["ريال مدريد", "برشلونة", "أتلتيكو مدريد", "فالنسيا"],
            category: "كرة القدم",
            difficulty: "سهل"
        },
        {
            id: 4,
            question: "كم مرة فازت البرازيل بكأس العالم؟",
            correct: 4,
            options: ["3 مرات", "4 مرات", "5 مرات", "6 مرات"],
            category: "كرة القدم",
            difficulty: "متوسط"
        },
        {
            id: 5,
            question: "من هو لاعب القرن من قبل الفيفا؟",
            correct: 1,
            options: ["بيليه", "مارادونا", "زيدان", "رونالدو البرازيلي"],
            category: "كرة القدم",
            difficulty: "متوسط"
        }
    ],
    
    movies: [
        {
            id: 6,
            question: "من مخرج فيلم 'الرسالة' عن السيرة النبوية؟",
            correct: 2,
            options: ["يوسف شاهين", "مصنطفى العقاد", "علي بدرخان", "حسين كمال"],
            category: "الأفلام",
            difficulty: "سهل"
        },
        {
            id: 7,
            question: "ما هو أول فيلم لأم كلثوم؟",
            correct: 3,
            options: ["سلامة", "نشيد الأمل", "وداد", "دنانير"],
            category: "الأفلام",
            difficulty: "متوسط"
        },
        {
            id: 8,
            question: "من بطّل فيلم 'الممر' عن حرب أكتوبر؟",
            correct: 4,
            options: ["محمد رمضان", "محمد سعد", "أحمد عز", "أحمد السقا"],
            category: "الأفلام",
            difficulty: "سهل"
        }
    ],
    
    music: [
        {
            id: 9,
            question: "ما هي جنسية المطربة فيروز؟",
            correct: 1,
            options: ["لبنانية", "سورية", "مصرية", "عراقية"],
            category: "الموسيقى",
            difficulty: "سهل"
        },
        {
            id: 10,
            question: "من هو ملحن أغنية 'الأرض' لعبد الحليم حافظ؟",
            correct: 2,
            options: ["محمد عبد الوهاب", "بليغ حمدي", "رياض السنباطي", "كمال الطويل"],
            category: "الموسيقى",
            difficulty: "صعب"
        }
    ],
    
    islamic: [
        {
            id: 11,
            question: "كم عدد سور القرآن الكريم؟",
            correct: 3,
            options: ["110", "112", "114", "120"],
            category: "الإسلاميات",
            difficulty: "سهل"
        },
        {
            id: 12,
            question: "من أول الخلفاء الراشدين؟",
            correct: 2,
            options: ["عمر بن الخطاب", "أبو بكر الصديق", "عثمان بن عفان", "علي بن أبي طالب"],
            category: "الإسلاميات",
            difficulty: "سهل"
        },
        {
            id: 13,
            question: "كم عدد أركان الإسلام؟",
            correct: 3,
            options: ["4", "5", "6", "7"],
            category: "الإسلاميات",
            difficulty: "سهل"
        }
    ],
    
    brands: [
        {
            id: 14,
            question: "ما هو أصل شركة Nike؟",
            correct: 1,
            options: ["أمريكية", "ألمانية", "يابانية", "إيطالية"],
            category: "البراندات",
            difficulty: "سهل"
        },
        {
            id: 15,
            question: "أي من هذه الشركات متخصصة في السيارات الفاخرة؟",
            correct: 4,
            options: ["Samsung", "Nokia", "Dell", "Mercedes-Benz"],
            category: "البراندات",
            difficulty: "سهل"
        }
    ],
    
    general: [
        {
            id: 16,
            question: "ما هي عاصمة فرنسا؟",
            correct: 1,
            options: ["باريس", "لندن", "روما", "برلين"],
            category: "ثقافة عامة",
            difficulty: "سهل"
        },
        {
            id: 17,
            question: "ما هو أطول نهر في العالم؟",
            correct: 3,
            options: ["الأمازون", "الميسيسيبي", "النيل", "الدانوب"],
            category: "ثقافة عامة",
            difficulty: "متوسط"
        },
        {
            id: 18,
            question: "كم عدد قارات العالم؟",
            correct: 2,
            options: ["6", "7", "5", "8"],
            category: "ثقافة عامة",
            difficulty: "سهل"
        },
        {
            id: 19,
            question: "ما هو الغاز الأكثر انتشاراً في الغلاف الجوي؟",
            correct: 3,
            options: ["الأكسجين", "ثاني أكسيد الكربون", "النيتروجين", "الهيدروجين"],
            category: "ثقافة عامة",
            difficulty: "متوسط"
        },
        {
            id: 20,
            question: "من اكتشف الجاذبية الأرضية؟",
            correct: 4,
            options: ["أينشتاين", "غاليليو", "تسلا", "نيوتن"],
            category: "ثقافة عامة",
            difficulty: "سهل"
        }
    ]
};

// دالة للحصول على أسئلة عشوائية
function getRandomQuestions(count = 5, category = 'all') {
    let questionsPool = [];
    
    if (category === 'all') {
        // جمع كل الأسئلة من كل الأقسام
        for (const cat in allQuestions) {
            questionsPool = questionsPool.concat(allQuestions[cat]);
        }
    } else if (allQuestions[category]) {
        // أخذ الأسئلة من قسم محدد
        questionsPool = allQuestions[category];
    } else {
        console.error('القسم غير موجود:', category);
        return [];
    }
    
    // خلط الأسئلة
    const shuffled = questionsPool.sort(() => 0.5 - Math.random());
    
    // إرجاع العدد المطلوب
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

// دالة للحصول على أسئلة حسب الصعوبة
function getQuestionsByDifficulty(difficulty, count = 5) {
    let filteredQuestions = [];
    
    for (const category in allQuestions) {
        const categoryQuestions = allQuestions[category].filter(q => q.difficulty === difficulty);
        filteredQuestions = filteredQuestions.concat(categoryQuestions);
    }
    
    const shuffled = filteredQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, shuffled.length));
}

console.log('✅ ملف الأسئلة جاهز! يحتوي على', 
    Object.values(allQuestions).reduce((total, arr) => total + arr.length, 0), 
    'سؤال في', Object.keys(allQuestions).length, 'أقسام'
);