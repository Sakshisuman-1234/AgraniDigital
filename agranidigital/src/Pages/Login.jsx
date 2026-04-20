import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import agraniLogo from '../assets/agranidigital-logo.jpeg';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginStatus, setLoginStatus] = useState(null); // 'success', 'error', or null

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginStatus(null);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setLoginStatus('success');
      console.log('Login attempt successful:', { email });
      
      // Auto-redirect after success
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }, 1500);
  };

  const handleSocialClick = (platform) => {
    alert(`Connecting to ${platform}... This feature will be functional once the backend is integrated.`);
  };

  return (
    <div className="ag-login-root">
      <Navbar />
      
      <div className="ag-login-container">
        <div className="ag-login-card animate-in">
          <div className="ag-login-header">
            <Link to="/" className="ag-login-logo">
              <img src={agraniLogo} alt="Agrani Digital" />
            </Link>
            <h1>Welcome Back</h1>
            <p>Enter your credentials to access your account</p>
          </div>

          {loginStatus === 'success' ? (
            <div className="ag-success-message">
              <div className="ag-success-check">✓</div>
              <h3>Login Successful!</h3>
              <p>Redirecting you to the dashboard...</p>
            </div>
          ) : (
            <>
              <form className="ag-login-form" onSubmit={handleSubmit}>
                <div className="ag-input-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="name@company.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                    disabled={isLoading}
                  />
                </div>

                <div className="ag-input-group">
                  <div className="ag-label-row">
                    <label htmlFor="password">Password</label>
                    <Link to="/forgot-password">Forgot password?</Link>
                  </div>
                  <input 
                    type="password" 
                    id="password" 
                    placeholder="••••••••" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                    disabled={isLoading}
                  />
                </div>

                <button type="submit" className="ag-login-btn" disabled={isLoading}>
                  {isLoading ? <span className="ag-loader"></span> : 'Sign In'}
                </button>
              </form>

              <div className="ag-login-divider">
                <span>or continue with</span>
              </div>

              <div className="ag-social-logins">
                <button 
                  className="ag-social-btn google" 
                  onClick={() => handleSocialClick('Google')}
                  disabled={isLoading}
                >
                  <svg viewBox="0 0 24 24">
                    <path fill="#ea4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582l3.155-3.154C17.65 1.7 14.975 0 12 0 7.339 0 3.284 2.736 1.332 6.709z"/>
                    <path fill="#4285f4" d="M23.642 12.284c0-.75-.068-1.472-.182-2.182H12v4.136h6.523c-.284 1.511-1.125 2.795-2.398 3.648l3.74 2.898c2.182-2.023 3.443-4.99 3.443-8.5z"/>
                    <path fill="#fbbc05" d="M1.332 17.291c.216.59.5 1.159.841 1.69l3.523-2.731c-.341-.531-.625-1.09-.841-1.69z"/>
                    <path fill="#34a853" d="M12 24c3.24 0 5.966-1.08 7.954-2.918l-3.74-2.898C15.114 18.9 13.67 19.5 12 19.5c-3.24 0-5.966-2.182-6.954-5.114L1.523 17.114C3.523 21.273 7.432 24 12 24z"/>
                  </svg>
                  <span>Google</span>
                </button>
                
                <button 
                  className="ag-social-btn facebook" 
                  onClick={() => handleSocialClick('Facebook')}
                  disabled={isLoading}
                >
                  <svg viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </button>

                <button 
                  className="ag-social-btn linkedin" 
                  onClick={() => handleSocialClick('LinkedIn')}
                  disabled={isLoading}
                >
                  <svg viewBox="0 0 24 24" fill="#0077b5">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </button>
              </div>

              <div className="ag-login-footer">
                Don't have an account? <Link to="/signup">Create one</Link>
              </div>
            </>
          )}
        </div>
      </div>

      <style>{`
        .ag-login-root {
          min-height: 100vh;
          width: 100%;
          background: radial-gradient(circle at top left, #f1f5f9 0%, #e2e8f0 100%);
          display: flex;
          flex-direction: column;
        }

        .ag-login-container {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .ag-login-card {
          width: 100%;
          max-width: 440px;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 24px;
          padding: 48px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05), 0 5px 15px rgba(0, 0, 0, 0.03);
          position: relative;
          overflow: hidden;
        }

        .ag-login-card.animate-in {
          animation: agCardIn 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes agCardIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .ag-login-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .ag-login-logo {
          display: inline-block;
          margin-bottom: 24px;
          transition: transform 0.3s ease;
        }
        .ag-login-logo:hover {
          transform: scale(1.05);
        }

        .ag-login-logo img {
          height: 56px;
          width: auto;
        }

        .ag-login-header h1 {
          font-size: 28px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .ag-login-header p {
          color: #64748b;
          font-size: 15px;
        }

        .ag-login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .ag-input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .ag-label-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .ag-label-row a {
          font-size: 13px;
          color: #2563eb;
          text-decoration: none;
          font-weight: 600;
        }

        .ag-label-row a:hover {
          text-decoration: underline;
        }

        .ag-input-group label {
          font-size: 14px;
          font-weight: 600;
          color: #334155;
        }

        .ag-input-group input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 12px;
          border: 1.5px solid #e2e8f0;
          background: #f8fafc;
          font-size: 15px;
          transition: all 0.2s ease;
          color: #0f172a;
        }

        .ag-input-group input:focus {
          outline: none;
          border-color: #2563eb;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1);
        }

        .ag-login-btn {
          width: 100%;
          min-height: 48px;
          padding: 12px;
          background: #123b71;
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-top: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ag-login-btn:hover:not(:disabled) {
          background: #0d284d;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(18, 59, 113, 0.2);
        }

        .ag-login-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .ag-loader {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .ag-success-message {
          text-align: center;
          padding: 20px 0;
          animation: fadeIn 0.4s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .ag-success-check {
          width: 60px;
          height: 60px;
          background: #10b981;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 30px;
          margin: 0 auto 20px;
          box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2);
        }

        .ag-success-message h3 {
          font-size: 20px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
        }

        .ag-login-divider {
          position: relative;
          text-align: center;
          margin: 32px 0;
        }

        .ag-login-divider::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 1px;
          background: #e2e8f0;
        }

        .ag-login-divider span {
          position: relative;
          background: #fff;
          padding: 0 16px;
          color: #94a3b8;
          font-size: 13px;
        }

        .ag-social-logins {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .ag-social-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          background: white;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .ag-social-btn:hover:not(:disabled) {
          background: #f8fafc;
          border-color: #cbd5e1;
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .ag-social-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .ag-social-btn svg {
          width: 24px;
          height: 24px;
        }

        .ag-social-btn span {
          font-size: 11px;
          font-weight: 700;
          color: #475569;
        }

        .ag-login-footer {
          margin-top: 40px;
          text-align: center;
          font-size: 14px;
          color: #64748b;
        }

        .ag-login-footer a {
          color: #2563eb;
          text-decoration: none;
          font-weight: 700;
        }

        @media (max-width: 480px) {
          .ag-login-card {
            padding: 32px 24px;
          }
          .ag-social-logins {
            grid-template-columns: 1fr;
          }
          .ag-social-btn {
            flex-direction: row;
            justify-content: center;
            gap: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;
