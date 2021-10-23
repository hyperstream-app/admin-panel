import React from "react";
interface IItemsProps {
  name: string;
  price: string;
  description: string;
}

const Tbody: React.FC<IItemsProps> = ({ name, price, description }) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="text-sm font-medium text-gray-900">{"Pediasure"}</div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">
          {
            "To maximize your child's growth potential, he needs a reliable growth supplem"
          }
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        ₹{"200"}
      </td>
    </tr>
  );
};

export default Tbody;
