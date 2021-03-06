import server from './backend/mock-server'
import React from 'react'
import App from './frontend/components/App'
import { render, screen, fireEvent } from '@testing-library/react'
import { resetTodos } from './backend/helpers'
import '@testing-library/jest-dom/extend-expect'

// not needed for module project, START
beforeAll(() => { server.listen() })
afterAll(() => { server.close() })
afterEach(() => { server.resetHandlers() })
beforeEach(() => { resetTodos() })
// not needed for module project, END

test('App is NOT a class-based component', async () => {
  render(<App />)
  await screen.findByText('laundry')
  expect(
    App.prototype &&
    App.prototype.isReactComponent
  ).not.toBeTruthy()
})
