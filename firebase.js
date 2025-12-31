// firebase.js - Firebase v9 Modular SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { 
    getFirestore, 
    collection, 
    addDoc, 
    getDocs, 
    doc, 
    setDoc, 
    deleteDoc,
    updateDoc,
    query,
    where,
    orderBy,
    limit
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// استيراد الإعدادات من الملف الخارجي
import { firebaseConfig } from './firebase-config.js';

// تهيئة Firebase
const app = initializeApp(firebaseConfig);

// تهيئة Firestore
const db = getFirestore(app);

// تصدير الدوال الرئيسية
export {
    db,
    collection,
    addDoc,
    getDocs,
    doc,
    setDoc,
    deleteDoc,
    updateDoc,
    query,
    where,
    orderBy,
    limit
};

// دالة مساعدة للتحقق من الاتصال
export const checkConnection = async () => {
    try {
        const testRef = collection(db, 'connection_test');
        await addDoc(testRef, { timestamp: new Date() });
        return true;
    } catch (error) {
        console.error("فشل الاتصال بقاعدة البيانات:", error);
        return false;
    }
};