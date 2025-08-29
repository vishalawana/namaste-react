const Header = () => <h1>Food App</h1>;

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

ReactDOM.createRoot(root).render(<AppLayout/>)