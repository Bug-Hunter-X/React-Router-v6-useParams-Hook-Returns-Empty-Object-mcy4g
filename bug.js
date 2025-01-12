In React Router Dom v6, a common error occurs when using the `useParams` hook inside a component that isn't directly nested within a route that uses the `:param` in the path.  This leads to the `params` object being empty, resulting in unexpected behavior or errors when trying to access parameters.

```javascript
// Incorrect Usage
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  // id will be undefined unless MyComponent is nested correctly
  console.log(id); 
  return <div>My Component</div>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />}>
        <Route path=":id" element={<UserProfile />} />
      </Route> 
    </Routes>
  );
}
```