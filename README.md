# React Testing Library Demo

This is a Next.js React application that demonstrates comprehensive testing using React Testing Library and Jest.

## Features

- **Counter Component**: A simple counter with increment, decrement, and reset functionality
- **TodoList Component**: A fully functional todo list with add, toggle, and delete capabilities
- **Comprehensive Testing**: Both components have extensive test coverage

## Components

### Counter Component (`src/components/Counter.tsx`)

- Increment/decrement buttons
- Reset functionality
- Customizable initial value and label
- Fully tested with 6 test cases

### TodoList Component (`src/components/TodoList.tsx`)

- Add todos via button or Enter key
- Toggle completion status
- Delete todos
- Empty state handling
- Fully tested with 7 test cases

## Testing Setup

The project uses:

- **React Testing Library**: For component testing
- **Jest**: Test runner
- **@testing-library/jest-dom**: Custom matchers
- **@testing-library/user-event**: User interaction simulation

### Test Files

- `src/components/__tests__/Counter.test.tsx` - 6 test cases
- `src/components/__tests__/TodoList.test.tsx` - 7 test cases

## Available Scripts

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run linter
npm run lint
```

## Test Coverage

### Counter Tests

- ✅ Renders with default and custom props
- ✅ Increments and decrements correctly
- ✅ Resets to initial value
- ✅ Handles negative numbers
- ✅ All buttons are accessible

### TodoList Tests

- ✅ Renders empty state initially
- ✅ Adds todos via button and Enter key
- ✅ Toggles completion status
- ✅ Deletes todos
- ✅ Handles multiple todos
- ✅ Prevents empty todos

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Run tests:

   ```bash
   npm test
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app

## Testing Best Practices Demonstrated

- Using `data-testid` attributes for reliable element selection
- Testing user interactions with `fireEvent`
- Testing component state changes
- Testing accessibility features
- Testing edge cases and error conditions
- Using descriptive test names and organized test suites
