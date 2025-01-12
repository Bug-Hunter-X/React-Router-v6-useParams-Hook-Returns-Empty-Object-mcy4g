The solution is to correctly nest the component using `useParams` within the route that defines the parameters in the URL path.

```javascript
// Correct Usage
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  console.log(id); // id will now contain the parameter value
  return <div>My Component</div>;
}

function UserProfile(){
    return(
        <MyComponent/>
    )
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
By nesting `MyComponent` within the `UserProfile` component which is defined under the path containing ':id', we provide the context for `useParams` to function correctly.