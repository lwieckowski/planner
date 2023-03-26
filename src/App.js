import styled from "styled-components";


function App() {
  return (
    <Container>
      <Sidebar>
        <Button color="#BB86FC">All</Button>
        <Button color="#BB86FC">Important</Button>
        <Button color="#BB86FC">+ Add a task list</Button>
      </Sidebar>
      <Canvas>
        <Task color="#BB86FC">Pay bills</Task>
      </Canvas>
    </Container>
  );
}

export default App;

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  background-color: #121212;
  width: 100%;
  height: 100%;
`;

const Sidebar = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 500px;
`;

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  border-radius: 5px;
  color: ${props => props.color || "white"};
  width: 100%;
  height: 48px;
  margin: 5px;
  padding-left: 10px;
  &:hover {
    background-color: #212121;
  }
`;

const Task = styled.div`
  font-size: 1.5em;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: #212121;
  border-radius: 5px;
  width: 100%;
  height: 74px;
  margin: 5px;
  padding: 10px;
  color: ${props => props.color || "white"};
`;

const Canvas = styled.div`
  box-sizing: border-box;
  background-color: #191919;
  width: 100%;
  margin: 10px;
  border-radius: 5px;
  padding: 20px;
  color: ${props => props.color || "#FFFFFF"};
`;

