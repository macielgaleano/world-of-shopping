import React from "react";
import { Link } from "react-router-dom";
import wordings from "../../wordings";
import "./styles.scss";

const ErrorBoundary = () => {
  const { warnings: { pageNotFound } } = wordings;

  return (
    <main className="error-boundary">
      <div className="error-boundary__content">
        <h1 className="error-boundary__content-title">{pageNotFound.title}</h1>
        <div className="error-boundary__content-message">
          <p className="error-boundary__content-message-code">404</p>
          <p className="error-boundary__content-message-text">{pageNotFound.subtitle}</p>
        </div>
        <div className="error-boundary__content-retry">
          <Link to="/" className="error-boundary__content-retry-link">
            {pageNotFound.retry} &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
};


export default ErrorBoundary;
