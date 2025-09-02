import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router'

export default function Details() {
  const { id } = useParams()
  function getDetails() {
    return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  }


  let { data, isLoading } = useQuery({
    queryKey: ['details', id],
    queryFn: getDetails,
  })
  if (isLoading) {
    return (
      <p className="text-black text-center h-screen flex justify-center items-center">
        Waiiiiit Foood not runnnn
      </p>
    );
  }
  let meal = data?.data?.meals[0]
  if (meal) {
    return (
      <>
        <div>
          <h1 className="text-4xl font-bold">{meal.strMeal}</h1>
          <div className="flex flex-wrap my-5">
            <div className="xl:w-[33.333%] w-full p-6">
              <img
                src={meal.strMealThumb}
                className="w-full  rounded-2xl"
                alt=""
              />
            </div>
            <div className="xl:w-[33.333%] w-full">
              <p className="px-5 text-black text-lg">{meal.strInstructions}</p>
            </div>
            <div className="xl:w-[33.333%] px-5 w-full">
              <h3 className="border-b-2 border-gray-400 text-black text-lg pb-2 ">
                Ingredients
              </h3>
              <div className="bg-amber-100 border-b-2 border-black p-1">
                <li className='flex justify-between items-center border-b-2'>
                  <h5 className="text-black text-lg pb-2 ">
                    {meal.strIngredient1}
                  </h5>
                  <span className="text-black  text-sm " >{meal.strMeasure1}</span>
                </li>
              </div>
              <div className="bg-amber-100 p-1 border-black border-b-2">
                <li className='flex justify-between items-center border-b-2'>
                  <h5 className="text-black text-lg pb-2 ">
                    {meal.strIngredient2}
                  </h5>
                  <span className="text-black  text-sm " >{meal.strMeasure2}</span>
                </li>
              </div>
              <div className="bg-amber-100 p-1 border-black border-b-2">
                <li className='flex justify-between items-center border-b-2'>
                  <h5 className="text-black text-lg pb-2 ">
                    {meal.strIngredient3}
                  </h5>
                  <span className="text-black  text-sm " >{meal.strMeasure3}</span>
                </li>
              </div>
              <div className="bg-amber-100 p-1 border-black border-b-2">
                <li className='flex justify-between items-center border-b-2'>
                  <h5 className="text-black text-lg pb-2 ">
                    {meal.strIngredient4}
                  </h5>
                  <span className="text-black  text-sm " >{meal.strMeasure4}</span>
                </li>
              </div>
              <div className="bg-amber-100 p-1 border-black border-b-2">
                <li className='flex justify-between items-center border-b-2'>
                  <h5 className="text-black text-lg pb-2 ">
                    {meal.strIngredient5}
                  </h5>
                  <span className="text-black  text-sm " >{meal.strMeasure5}</span>
                </li>
              </div>
              <div className="bg-amber-100 p-1 border-black border-b-2">
                <li className='flex justify-between items-center border-b-2'>
                  <h5 className="text-black text-lg pb-2 ">
                    {meal.strIngredient6}
                  </h5>
                  <span className="text-black  text-sm " >{meal.strMeasure6}</span>
                </li>
              </div>
              <div className="bg-amber-100 p-1 border-black border-b-2">
                <li className='flex justify-between items-center border-b-2'>
                  <h5 className="text-black text-lg pb-2 ">
                    {meal.strIngredient7}
                  </h5>
                  <span className="text-black  text-sm " >{meal.strMeasure7}</span>
                </li>
              </div>
              <div className="bg-amber-100 p-1 border-black border-b-2">
                <li className='flex justify-between items-center border-b-2'>
                  <h5 className="text-black text-lg pb-2 ">
                    {meal.strIngredient8}
                  </h5>
                  <span className="text-black  text-sm " >{meal.strMeasure8}</span>
                </li>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <div>
      <h1>DEtails</h1>
    </div>
  )
}
