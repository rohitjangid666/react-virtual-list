import VirtualList from './components/VirtualList';

function App() {
  const itemHeight = 100;
  const containerHeight = 900;
  const items = Array.from({ length: 10000 }, (_, i) => i + 1);

  const renderItems = (item: number, index: number) => (
    <div
      key={index}
      style={{
        height: itemHeight,
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 16,
        borderTop: index === 0 ? '1px solid #ccc' : undefined,
        borderBottom: '1px solid #ccc',
      }}
    >
      Item {item}
    </div>
  );

  return (
    <VirtualList itemHeight={itemHeight} containerHeight={containerHeight} items={items} renderItems={renderItems} />
  );
}

export default App;
