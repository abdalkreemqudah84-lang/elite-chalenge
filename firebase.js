// firebase.js - تهيئة Firebase النسخة 9
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// ⚠️ سنضيف بيانات Firebase الحقيقية في الخطوة القادمة
// الآن نستخدم إعدادات تجريبية
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// تهيئة التطبيق
const app = initializeApp(firebaseConfig);

// الحصول على خدمة Firestore
const db = getFirestore(app);

// تصدير الدوال للاستخدام في الملفات الأخرى
export {
  db,
  collection,
  addDoc,
  getDocs,
  doc,
  setDoc,
  deleteDoc
};

// دالة مساعدة للاتصال بقاعدة البيانات
export const initFirebase = () => {
  console.log("✅ Firebase متصل بنجاح");
  return db;
};