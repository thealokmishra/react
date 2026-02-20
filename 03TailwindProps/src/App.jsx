import Card from "./components/Card";
function App() {
  return (
    <>
      <div className="min-h-screen min-w-screen bg-gray-900 text-gray-100 flex items-center justify-center gap-6 p-4">
        {/* whatever value we pass here in card will be passed to our component as props */}
        <Card
          image="https://picsum.photos/300"
          alt="random image"
          title="Card 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea."
          btnLabel="Click me"
        />
        <Card
          image="https://picsum.photos/200"
          alt="random image"
          title="Card 2"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea."
          btnLabel="Click me"
        />
        <Card
          image="https://picsum.photos/100"
          alt="random image"
          title="Card 3"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ea."
          btnLabel="Click me"
        />
      </div>
    </>
  );
}

export default App;
