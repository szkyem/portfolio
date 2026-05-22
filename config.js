// 🔐 config.js - Firebase Credentials
// ⚠️ 重要：このファイルは GitHub に push されません（.gitignore で除外）
// このファイルはローカル開発環境にのみ存在します

// ⚠️ セキュリティ警告：
// このファイルには Firebase の全権限 API キーが含まれています。
// 絶対に GitHub に push しないでください。
// 絶対に他人と共有しないでください。
// 絶対に公開リポジトリに置かないでください。

// 📄 使い方：
// 1. このファイルを portfolio フォルダに保存
// 2. 以下の YOUR_* を あなたの Firebase 設定に置き換え
// 3. .gitignore で config.js が除外されていることを確認
// 4. ローカルで開発する時のみこのファイルを使用

window.FIREBASE_CONFIG = {
    // YOUR_API_KEY を Firebase Console から確認して置き換える
    apiKey: "YOUR_API_KEY_HERE",
    
    // YOUR_AUTH_DOMAIN を Firebase Console から確認して置き換える
    authDomain: "YOUR_AUTH_DOMAIN_HERE",
    
    // YOUR_DATABASE_URL を Firebase Console から確認して置き換える
    databaseURL: "YOUR_DATABASE_URL_HERE",
    
    // YOUR_PROJECT_ID を Firebase Console から確認して置き換える
    projectId: "YOUR_PROJECT_ID_HERE",
    
    // YOUR_STORAGE_BUCKET を Firebase Console から確認して置き換える
    storageBucket: "YOUR_STORAGE_BUCKET_HERE",
    
    // YOUR_MESSAGING_SENDER_ID を Firebase Console から確認して置き換える
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID_HERE",
    
    // YOUR_APP_ID を Firebase Console から確認して置き換える
    appId: "YOUR_APP_ID_HERE"
};

console.log('✅ config.js が読み込まれました。');
