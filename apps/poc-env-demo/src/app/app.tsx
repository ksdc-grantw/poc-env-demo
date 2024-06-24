// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      <p>This is a VITE Env Var: {import.meta.env.VITE_ENV_VAR}</p>
      <p>This is a NX Env Var: {import.meta.env.NX_ENV_VAR}</p>
      <NxWelcome title="poc-env-demo" />
    </div>
  );
}

export default App;
