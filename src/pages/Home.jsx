import React from 'react'
import AllCategories from '../components/AllCategories'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Link, useSearchParams } from 'react-router-dom'

export default function Home() {
    const [searchParams] = useSearchParams()
    let category = searchParams.get('c') || "Beef"

    const AllMeals = async () => {
        const res = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        )
        return res.data.meals
    }

    const { data, isLoading, isError } = useQuery({
        queryKey: ['recipesDefault', category],
        queryFn: AllMeals,
        staleTime:20000
    })

    if (isLoading) {
    return (
      <p className="text-black text-center h-screen flex justify-center items-center">
        Waiiiiit Foood not runnnn
      </p>
    );
  }
    if (isError) return <p className="p-4 text-red-500">Error loading meals.</p>
    if (!data?.length) return <p className="p-4">No meals found.</p>

    return (
        <>
            <h1 className="font-bold text-2xl mb-6">Learn, Cook, Eat Your Food</h1>
            <AllCategories />
            <div className="flex flex-wrap gap-6 mt-6">
                {data.map((meal) => (
                    <div
                        key={meal.idMeal}
                        className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%] bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center"
                    >
                        <img
                            src={meal.strMealThumb}
                            className="w-32 h-32 object-cover rounded-full"
                            alt={meal.strMeal}
                        />
                        <h4 className="text-black text-sm font-bold mt-3 mb-2">
                            {meal.strMeal}
                        </h4>
                        <Link
                            className="bg-green-500 hover:bg-green-600 transition text-white text-sm px-4 py-2 rounded-full"
                            to={`/meal/${meal.idMeal}`}
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}
