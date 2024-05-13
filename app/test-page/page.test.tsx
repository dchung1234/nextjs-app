import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '@/app/test-page/page';


describe('Page', () => {

  it("App Router: Works with dynamic route segments", () => {
    render(<Page />);
    expect(screen.getByRole("heading")).toHaveTextContent("Helllo Page");
  });
  
})