import React from 'react';

const Menu = () => {
  const coffeeItems = [
    { id: 1, name: "Espresso", price: "Rs. 650", desc: "Bold and intense." },
    { id: 2, name: "Cappuccino", price: "Rs. 850", desc: "Creamy with foamy milk." },
    { id: 3, name: "Iced Latte", price: "Rs. 950", desc: "Refreshing cold brew." },
    { id: 4, name: "Mocha", price: "Rs. 1100", desc: "Chocolate meets coffee." }
  ];

  return (
    <section style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Our Coffee Menu ☕</h2>
      <div style={{ display: 'grid', gap: '15px' }}>
        {coffeeItems.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
            <h3 style={{ margin: '0' }}>{item.name}</h3>
            <p style={{ color: '#666' }}>{item.desc}</p>
            <strong style={{ color: '#d17a22' }}>{item.price}</strong>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;