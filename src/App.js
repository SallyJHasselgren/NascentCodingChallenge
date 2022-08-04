import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import UserForm from './components/forms/UserForm';
import { AppProvider } from './utils/context';

function App() {
  return (
    <AppProvider>
      <UserForm></UserForm>
    </AppProvider>
  );
}

export default App;
