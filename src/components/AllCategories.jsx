import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { Link, useSearchParams } from 'react-router'

export default function AllCategories() {
  const [searchParams] = useSearchParams()
  let category = searchParams.get('c') || "Beef"


  const { data, isLoading, isError } = useQuery({
    queryKey: ['allCategories'],
    queryFn: async () => {
      const res = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
      return res.data.meals
    }
  })

  if (isLoading) {
    return (
      <p className="text-black text-center h-screen flex justify-center items-center">
        Waiiiiit Foood not runnnn
      </p>
    );
  }
  if (isError) return <p>Error loading categories.</p>

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Cook a delicious meal with <span className='font-bold text-blue-950'>Fakhr’s</span> exclusive recipes</h1>
      <div className='flex flex-wrap flex-col md:flex-row gap-4'>
        {data.map((meal) =>
          <Link to={`?c=${meal.strCategory}`} className={`${category == meal.strCategory ? "bg-amber-700 text-white" : "bg-amber-50"} bg-amber-50 hover:bg-amber-700 hover:shadow-2xl hover:text-white text-black text-sm p-3  border-2 mx-2 rounded-2xl`}>{meal.strCategory}</Link>
        )}
      </div>
    </div>
  )
}
