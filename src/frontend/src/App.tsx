import React from 'react';  
import './App.css';  
import Section from './components/Section';  
  
const App: React.FC = () => {  
  return (  
    <div className="app">  
      <header className="app-header">  
        <div>Web テンプレート</div>  
        <div className="header-links">  
          <a href="#">サインイン</a>  
          <a href="#">Microsoft.com</a>  
        </div>  
      </header>  
      <main>  
        <Section   
          title="Azure OpenAI Service"  
          endpoints={[  
            { method: 'GET', path: '/openai.com/information', params: ['システムプロンプト', 'パラメーター', 'メッセージ'] }  
          ]}  
        />  
        <Section   
          title="Azure Cosmos DB"  
          endpoints={[  
            { method: 'GET', path: '/cososdb/user' },  
            { method: 'POST', path: '/cosmosdb/user' },  
            { method: 'PUT', path: '/cosmosdb/user' },  
            { method: 'DELETE', path: '/cosmosdb/user' },  
          ]}  
        />  
        <Section   
          title="Azure Log Analytics"  
          endpoints={[  
            { method: 'GET', path: '/loganalytics/activity' },  
            { method: 'POST', path: '/loganalytics/activity' },  
          ]}  
        />  
      </main>  
    </div>  
  );  
}  
  
export default App;  
