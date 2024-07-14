import React from 'react';  
import './Section.css';  
  
interface Endpoint {  
  method: string;  
  path: string;  
  params?: string[];  
}  
  
interface SectionProps {  
  title: string;  
  endpoints: Endpoint[];  
}  
  
const Section: React.FC<SectionProps> = ({ title, endpoints }) => {  
  return (  
    <section className="section">  
      <h2>{title}</h2>  
      {endpoints.map((endpoint, index) => (  
        <div key={index} className="endpoint">  
          <span>{endpoint.method}</span>  
          <span>{endpoint.path}</span>  
          {endpoint.params ? (  
            <div className="params">  
              {endpoint.params.map((param, i) => (  
                <input key={i} type="text" placeholder={param} />  
              ))}  
            </div>  
          ) : (  
            <input type="text" />  
          )}  
          <button className="send-button">  
            <i className="paper-plane"></i>  
          </button>  
        </div>  
      ))}  
    </section>  
  );  
}  
  
export default Section;  
