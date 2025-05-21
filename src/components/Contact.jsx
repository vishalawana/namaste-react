const Contact = ()=> {
    return (
        <div>
            <h1>Contact Us Page</h1>
            <p>dering is generating the virtual DOM. React updates the actual DOM only if something changes.
You can return different JSX based on state → this is how conditional rendering works.
You don’t manually re-render; React does that when state/props change.
🛠 Best Practices
Avoid unnecessary re-renders with React.memo, useMemo, and useCallback.
Don’t mutate state directly. Always use the setter (e.g., setState).
Keep components small so that re-renders are fast.
useEffect Behavior
Without Dependency Array (useEffec
Runs after every render (initial + updates).
Executes after the DOM updates.
With Empty Dependency Array 
Runs only once, after the first render.
Useful for fetching data or setting up subscriptions.(Execute after DOM updates )
Render = React prepares the UI.
DOM Update = React commits changes to the actual webpage.
With Dependencies (useEffect(() [dependency]))
Runs on mount and whenever the dependency changes.
Executes after all components render.
useState Best Practices
1. Never use useState outside of a component
React needs to track state within the component.
❌ Wrong: const [count, setCount] = useState(0); outside a component.
✅ Correct: Declare useState inside a functional component.
2. Never use useState inside an if, for, or another function
React must call hooks in the same order on every render.
Placing hooks inside conditions or loops can break state tracking.
✅ Always define useState at the top level of the component.
3. Never use useState inside a normal function
Hooks must be in the component's main function.
If used inside another function, React won't track state changes properly.
✅ Use state at the top level and update it inside event handlers
Controlled Component:
 A form element whose value is controlled by React state. React fully controls the input using the value and onChange props.
Uncontrolled Component:
 A form element that maintains its own internal state. React accesses its value using a ref to the DOM element.
            </p>
        </div>
    )
}
export default Contact;