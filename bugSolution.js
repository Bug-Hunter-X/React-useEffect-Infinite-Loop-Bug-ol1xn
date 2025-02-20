```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: runs only once on mount
    // The empty dependency array ensures that the effect only runs after the first render 
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
    </div>
  );
}
```