
# React Lecture Notes – Jan 15, 2025

## Lecture #6: Exploring the World

---

### ✅ What is Shimmer UI?

A better way to show loading states is to use a shimmer UI.

A **shimmer UI** is a version of the UI that doesn’t contain actual content but instead mimics the layout and shapes of the content that will eventually appear. It uses a gradient animation that creates a shimmering effect over the placeholders, giving the user a sense of motion and progress.

**Purpose**: Avoids annoying loader (buffering state), and shows a similar structure to the actual content while loading.

---

### ✅ What is Microservice?

**Microservices** (Microservice Architecture) is a method of developing software systems as a suite of small, independently deployable services.

- Services communicate over well-defined APIs
- Each service is owned by a small, self-contained team

#### Benefits:
- Flexible Scaling
- Easy Deployment
- Technological Freedom
- Reusable Code
- Resilience

---

### ✅ What is Monolith Architecture?

A **Monolith Architecture** is a traditional software model built as a single unified unit.

- One codebase coupling all business logic, UI, server, and database
- Any change requires rebuilding and redeploying the entire app

**Drawbacks**: Restrictive and time-consuming updates.

---

### ✅ Why do we need a useEffect Hook?

`useEffect` is a hook used to **handle side effects** in React components.

#### Side Effects Examples:
- Fetching API data
- Updating DOM manually
- Setting up subscriptions/timers

#### Why use it?
- Local variables don’t persist between renders
- Changing them won’t trigger re-renders

#### useEffect Syntax:
```js
useEffect(() => {
  // callback function
}, [dependency]);
```

- No dependency array: runs after every render
- Empty array: runs once after first render
- With dependencies: runs when any dependency changes

---

### ✅ useState Hook – Anatomy and Example

```js
const [index, setIndex] = useState(0);

function handleClick() {
  setIndex(index + 1);
}
```

`useState` returns:
- `state` value
- `setter` function to update and re-render component

#### Lifecycle:
1. First render → `useState(0)` returns `[0, setIndex]`
2. `setIndex(1)` is called → triggers re-render
3. Second render → React remembers index is 1 → returns `[1, setIndex]`

---

### ✅ Button Example with State

```js
<button className='login' onClick={() => {
  if(btnName == 'Login'){
    setBtnName('Logout')
  } else {
    setBtnName('Login');
  }
}}>{btnName}</button>
```

- Button text is based on state
- Changing state re-renders component

---

## React Internals and Rendering

### ✅ What does "Rendering" mean?

- React "renders" a component by calling its function
- Rendering = preparing the **Virtual DOM**
- DOM update = changes applied to the **Real DOM**

---

### ✅ Virtual DOM & Reconciliation

- React uses Virtual DOM to detect UI changes
- Diffs new vs old virtual tree
- Applies minimal updates to real DOM

📌 Example: If button label changes, only text updates, not entire button.

---

### ✅ Render Scheduling in React

- React maintains a render queue
- Prioritizes updates (e.g. user inputs)
- With Concurrent Mode, React can pause/resume rendering

---

### ✅ useEffect Behavior Summary

| Syntax                        | When it Runs                              |
|------------------------------|-------------------------------------------|
| `useEffect(() => {})`        | After every render                        |
| `useEffect(() => {}, [])`    | Once after initial render                 |
| `useEffect(() => {}, [dep])` | On mount and whenever `dep` changes       |

---

### ✅ useState Best Practices

1. ❌ **Never use outside a component**
   - ✅ Use inside functional components

2. ❌ **Never use inside if/for/loop/function**
   - ✅ Always define at top level of component

3. ❌ **Never use inside a normal function**
   - ✅ Define state at top, update it inside event handlers

---

### ✅ Summary of React State Behavior

- State change triggers re-render
- React uses Virtual DOM to compute changes
- Only affected DOM parts update
- Avoid unnecessary re-renders using `React.memo`, `useMemo`, `useCallback`
- Never mutate state directly