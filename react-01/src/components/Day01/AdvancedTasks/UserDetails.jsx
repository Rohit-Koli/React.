import React from 'react'
/
You can pass an array as a prop in React by simply including it as a property when rendering a component.

 Passing an Array as a Prop
```jsx
function ItemList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default function App() {
  const fruits = ["Apple", "Banana", "Cherry"];

  return <ItemList items={fruits} />;
}
```
 Key Points
- Pass the array as a prop: `<ItemList items={fruits} />`
- Access it via destructuring: `function ItemList({ items })`
- Use `.map()` to render items dynamically.
/
let emptyArr=[]
const UserDetails = ({users}) => {
  return(
    <div>
        <ul>
            {users.map((user,index)=>(
                <li key={index}>
                    {index+1}.{user.name} - {user.email} - {user.isAdmin ? " (Admin)" : ""}
                </li>
            ))}
        </ul>
    </div>
  )
}
export default UserDetails
