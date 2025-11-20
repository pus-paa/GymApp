import React from 'react';
import { Link } from 'react-router-dom';
import {ButtonOutline} from "./";
import {exercisePng, planImg} from "../images";
const Plan = ({name, img, alt, id, monthlyPrice, yearlyPrice}) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 duration-300 overflow-hidden border border-gray-700">
      <div 
        className="rounded-t-lg overflow-hidden w-full h-48 bg-gray-700 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${planImg})` }}
        role="img"
        aria-label={name}
      />
      <div className="p-6 text-center">
        <h3 className="text-2xl font-extrabold mt-4 mb-4 text-white">{name}</h3>
        <div className="space-y-3 mb-6">
          <div className="bg-gray-700 rounded-lg p-3">
            <p className="text-gray-300 text-sm mb-1">Monthly Plan</p>
            <p className="text-2xl font-bold text-white">Rs. {monthlyPrice}</p>
          </div>
          <div className="bg-gray-700 rounded-lg p-3">
            <p className="text-gray-300 text-sm mb-1">Yearly Plan</p>
            <p className="text-2xl font-bold text-white">Rs. {yearlyPrice}</p>
          </div>
        </div>
        <Link 
          to={`/plan-detail/${id}`}
          className="mt-4 inline-block text-white px-8 py-3 rounded-full font-semibold hover:bg-gym-red-dark bg-gym-red transition-colors duration-300 w-full"
        >
          Select Plan
        </Link>
      </div>
    </div>
  )
}

export default Plan;

