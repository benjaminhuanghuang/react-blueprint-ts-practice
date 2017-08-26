##
  ResourceList component + auth HOC = Composed Component that will check auth status before rendering

  ```
  import Authentication   // My HOC
  import Resources        // Component I want to wrap
  
  const ComposedComponent = Authentication(Resources);
 
  // Render the ComposedComponent
  <ComposedComponent resources={resourceList}/>
 ```