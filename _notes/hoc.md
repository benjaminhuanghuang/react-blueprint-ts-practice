# Higher order component
The Higher Order Component is a function that takes a component called WrappedComponent as an argument. 
HOC returns the WrappedComponent from its render function. 


## Auth
  Resources component + AuthenticationHOC = Composed Component that will check auth status before rendering

```
  import AuthenticationHOC   // My HOC
  import Resources        // Component I want to wrap
  
  const ComposedComponent = AuthenticationHOC(Resources);
 
  // Render the ComposedComponent
  <ComposedComponent resources={resourceList}/>
 ```


 