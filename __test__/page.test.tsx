import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../app/page';
// import Page from '@/app/test-page/page';
 
describe('Page', () => {
    it('testing for text', () => {
        render(<Home />);
        const heading = screen.getByRole("heading", {
            name: /Home Page/i,
          });
        expect(heading).toBeInTheDocument();
    })
})