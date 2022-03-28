// mock server imports
import server from './backend/mock-server'
import { resetTodos } from './backend/helpers'

// we are going use JSX so we need 
import React from 'react'
// components to test
import App from './frontend/components/App'
import Todo from './frontend/components/Todo'

// imports from the testing libraries
import { render, screen, fireEvent } from '@testing-library/react'
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
