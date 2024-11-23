import { useVirtualList } from '../hooks/use-virtual-list';

interface VirtualListProps<T> {
  itemHeight: number;
  containerHeight: number;
  items: T[];
  renderItems: (item: T, index: number) => React.ReactNode;
}

const VirtualList = <T,>({ itemHeight, containerHeight, items, renderItems }: VirtualListProps<T>) => {
  const { containerRef, onScroll, totalHeight, startIndex, endIndex } = useVirtualList(
    itemHeight,
    containerHeight,
    items.length
  );

  const visibleItems = items.slice(startIndex, endIndex);

  return (
    <div ref={containerRef} onScroll={onScroll} style={{ width: '100%', height: containerHeight, overflowY: 'auto' }}>
      <div style={{ height: totalHeight, position: 'relative' }}>
        {visibleItems.map((item, index) => {
          const itemIndex = startIndex + index;

          return (
            <div
              key={itemIndex}
              style={{
                position: 'absolute',
                top: itemIndex * itemHeight,
                left: 0,
                right: 0,
                width: '100%',
                height: itemHeight,
              }}
            >
              {renderItems(item, itemIndex)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VirtualList;
