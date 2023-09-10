import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import ErrorBoundary from ".";

const renderErrorBoundary = () => render(<ErrorBoundary />, { wrapper: BrowserRouter });

describe('<ErrorBoundary />', () => {
  test('basic render', () => {
    renderErrorBoundary();
  });

  test('shows a link to navigate to the base URL', () => {
    renderErrorBoundary();

    const cardCategory = screen.getByRole('link');
    expect(cardCategory.getAttribute('href')).toBe('/');
  });
});