# reactjs-parent-child-state
# reactjs-parent-child-state

Component communication - State

1. State, setState - Updated component's state.
2. setState() - render() auto call.
     - Why not to updated state without setState()
     - why only state setter does not works. e.g. this.state.price=123
     - Why to avoid state change inside render().
        - Uncomment the setSTate() in side index.js -> render() 
3. State uplifting to parent - a recommended practice.
  

In this example, we have below states (component wise)
- App component - state =  visitor
- TwoWHeeler - state = price

Some basics to observe

- Parent can pass state to childs, then in child it is getting treated as props.
   - e.g. App passing "visitor={this.state.visitor}" in <TwoWheeler> and <FourWheeler>
- State change happens through setState().
- TwoWheeler changing its own state using handleOnCLickPrice().
- TwoWheeler initiate a state change in parent App and then receive change as in props.
 
Importnant facts :
- State can get initial value from parent Component
- State can "NOT" be changed by parent Component
- State can set default values inside Component - constructor	
- Props can change inside Component - setState()



**Steps to follow**

:one: clone git repo with 
**git clone https://github.com/SachinKasar/reactjs-parent-child-state.git**

:two: install npm packages with command
**npm install**

:three: start webpack server
**npm start**

:four: hit the url in browser **http://localhost:8080/**



