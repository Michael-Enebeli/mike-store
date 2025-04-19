import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const WhatsAppEmailIcons = () => {
  return (
    <div className="icons-container">
      <a href="https://wa.me/2348107792905" target="_blank" rel="noopener noreferrer" className="whatsapp-icon">
        <i className="fab fa-whatsapp"></i>
      </a>

      <a href="mailto:chukwudienebeli81@gmail.com"  title="Send an Email"className="email-icon">
        <i className="fas fa-envelope"></i>
      </a>

      <style>{`
        .icons-container {
          position: fixed;
          bottom: 5%;
          right: 7%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
        }

        .whatsapp-icon, .email-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: white;
          border-radius: 50%;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          margin: 5px;
          text-decoration: none; 
        }

        .whatsapp-icon {
          background-color: #25d366;
          animation: ripple-whatsapp 1.3s linear infinite;
        }

        .email-icon {
          background-color: #d93025;
          display: none;
          animation: ripple-email 1.3s linear infinite;
        }

        @keyframes ripple-whatsapp {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6); }
          70% { box-shadow: 0 0 0 20px rgba(37, 211, 102, 0.15); }
          100% { box-shadow: 0 0 0 20px rgba(37, 211, 102, 0); }
        }

        @keyframes ripple-email {
          0% { box-shadow: 0 0 0 0 rgba(217, 48, 37, 0.6); }
          70% { box-shadow: 0 0 0 20px rgba(217, 48, 37, 0.25); }
          100% { box-shadow: 0 0 0 20px rgba(217, 48, 37, 0); }
        }

       @media (min-width: 1024px) {
          .whatsapp-icon { display: none; }
          .email-icon { display: flex; }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppEmailIcons;
