import { useStore } from '@builder.io/mitosis';

export default function Greet() {
  const state = useStore({
    name: '',
  });

  return (
    <div>
      <input
        value={state.name}
        onChange={(e) => (state.name = e.target.value)}
        placeholder="Your name"
      />
      <div>Hello, {state.name}!</div>
    </div>
  );
}