import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, fireEvent, waitFor, screen, act, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import data from '../../../api/src/data/data';
import ProfilePage from './profilePage';

const server = setupServer(
    rest.get('http://mockapi/profile', (req, res, ctx) => {
        ctx.status(200);
      return res(ctx.json(data));
    })
  );
  
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('loads profile page with related data', async () => {
      render(<ProfilePage />)

      await waitForElement(() => screen.getByTestId('name'));

      expect(screen.getByTestId('name')).toHaveTextContent('JoeGuckian');
      expect(screen.getByTestId('profileImage')).toBeInTheDocument()

      expect(screen.getByTestId('link-about')).toBeInTheDocument();
      expect(screen.getByTestId('link-industryDetails')).toBeInTheDocument();
      expect(screen.getByTestId('link-projects')).toBeInTheDocument();
      expect(screen.getByTestId('link-standout')).toBeInTheDocument();

      expect(screen.getByTestId('content-about')).toBeInTheDocument();
      expect(screen.getByTestId('content-industryDetails')).toBeInTheDocument();
      expect(screen.getByTestId('content-projects')).toBeInTheDocument();
      expect(screen.getByTestId('content-standout')).toBeInTheDocument();
  });