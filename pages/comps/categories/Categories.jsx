import React from "react";

const Categories = () => {
  const items = [
    { id: 1, name: "Chair", quantity: 10 },
    { id: 2, name: "Sofa", quantity: 12 },
    { id: 3, name: "Bedroom", quantity: 23 },
    { id: 4, name: "Table", quantity: 15 },
    { id: 5, name: "Chair", quantity: 10 },
    { id: 6, name: "Sofa", quantity: 12 },
  ];

  return (
    <div className="container py-8">
      <h1 className="text-2xl text-gray-800 font-medium mb-5 uppercase">
        Shop By Category
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {items.map((item) => (
          <div className="relative rounded-smoverflow-hidden group" key={item.id}>
            <img
              className="w-full"
              src="https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?b=1&s=170667a&w=0&k=20&c=Ko289acalSrEKwYI5sb20u2WQa7KS9L-_0Ug4u2iEmc="
            />
            <span className="absolute inset-0 bg-black bg-opacity-30 font-medium text-white flex justify-center items-center group-hover:bg-opacity-50 transition">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
