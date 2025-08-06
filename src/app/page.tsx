import Counter from "../components/Counter";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            React Testing Library Demo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This app demonstrates React components with comprehensive testing
            using React Testing Library. Each component below has multiple test
            cases covering rendering, user interactions, and state changes.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Counter Component
            </h2>
            <p className="text-gray-600 mb-6">
              A simple counter with increment, decrement, and reset
              functionality. Tested for proper state management and user
              interactions.
            </p>
            <Counter initialValue={0} label="Interactive Counter" />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Todo List Component
            </h2>
            <p className="text-gray-600 mb-6">
              A fully functional todo list with add, toggle, and delete
              capabilities. Tested for complex state management and user
              interactions.
            </p>
            <TodoList />
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Testing Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Counter Tests
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Renders with default and custom props</li>
                <li>• Increments and decrements correctly</li>
                <li>• Resets to initial value</li>
                <li>• Handles negative numbers</li>
                <li>• All buttons are accessible</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                TodoList Tests
              </h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Renders empty state initially</li>
                <li>• Adds todos via button and Enter key</li>
                <li>• Toggles completion status</li>
                <li>• Deletes todos</li>
                <li>• Handles multiple todos</li>
                <li>• Prevents empty todos</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Run tests:</strong>{" "}
              <code className="bg-blue-100 px-2 py-1 rounded">npm test</code> or{" "}
              <code className="bg-blue-100 px-2 py-1 rounded">
                npm run test:watch
              </code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
