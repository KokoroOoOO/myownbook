// 在你的项目根目录创建此文件
const firebaseConfig = {
    apiKey: "你的API_KEY",
    authDomain: "你的项目ID.firebaseapp.com",
    projectId: "你的项目ID",
    storageBucket: "你的项目ID.appspot.com",
    messagingSenderId: "你的Sender_ID",
    appId: "你的App_ID"
  };
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  // 自动同步管理器
  class FirestoreSync {
    constructor() {
      this.interval = null;
      this.startSync();
    }
  
    async startSync() {
      // 初次加载时同步现有数据
      const snapshot = await db.collection('appData').get();
      snapshot.forEach(doc => {
        localStorage.setItem(doc.id, JSON.stringify(doc.data().value));
      });
  
      // 定时同步（每5秒）
      this.interval = setInterval(() => {
        this.pushLocalToCloud();
      }, 5000);
    }
  
    pushLocalToCloud() {
      ['posts', 'interactions'].forEach(key => {
        const data = localStorage.getItem(key);
        if (data) {
          db.collection('appData').doc(key).set({
            value: JSON.parse(data),
            updatedAt: firebase.firestore.FieldValue.serverTimestamp()
          });
        }
      });
    }
  }
  
  // 初始化
  new FirestoreSync();
  