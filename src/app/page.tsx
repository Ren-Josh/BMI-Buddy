"use client"

import { FaCalculator } from "react-icons/fa6"
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function Home() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBMI] = useState<number | null>(null)

  const calculate = () => {
    if (!weight || !height) {
      setBMI(null);
      return
    }

    const w = parseFloat(weight);
    const h = parseFloat(height) * parseFloat(height);
    setBMI(Number((w / h).toFixed(2)));

  }

  const removeValue = () => {
    setWeight('');
    setHeight('');
    setBMI(null);
  }

  const getBMIRemark = (bmi: number) => {
    if (bmi <= 18.4) return "You're underweight. Consider consulting a health professional to ensure you're meeting your nutritional needs.";
    if (bmi >= 18.5 && bmi <= 24.9) return "You have a normal weight. Great job maintaining a healthy lifestyle!";
    if (bmi >= 25 && bmi <= 39.9) return "You're overweight. It might help to review your diet and exercise routine.";
    if (bmi >= 40) return "You're considered obese. It's recommended to speak with a healthcare provider for personalized guidance.";
  }

  return (
    <main className="min-h-svh flex flex-col p-6 overflow-auto items-center justify-center gap-5 dark:bg-gray-950">
      <div className="flex flex-row items-center gap-5">
        <FaCalculator className="h-12 md:h-24 w-10 md:w-20 dark:text-white" />
        <p className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl dark:text-white">BMI Buddy</p>
      </div>

      <div className="w-full max-w-3xl text-gray-900 dark:text-white">
        <p className="leading-7 text-center max-w-3xl">A website to help you track of your BMI and keep or move on to a healthy lifestyle!</p>
      </div>

      <div className="w-full max-w-3xl p-6 flex flex-col gap-3 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div>
          <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">Contribute</p>
          <p className="font-normal text-gray-700 dark:text-gray-400">Help me improve BMI Buddy</p>
        </div>
        <p className="text-lg tracking-tight text-gray-900 dark:text-white">Want to add another feature or have suggestions for improvement? I'd love to hear from you!</p>
        <p className="text-center tracking-tight text-gray-900 dark:text-white">Email me at <u className="text-emerald-700 dark:text-emerald-400">renjo.barrientos@gmail.com</u></p>
      </div>

      <div className="w-full max-w-3xl p-6 flex flex-col gap-5 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-sm">
        <div>
          <p className="text-lg text-gray-900 dark:text-white font-medium">Enter your BMI Information</p>
          <p className="text-gray-700 dark:text-gray-400">Calculator your Body Mass Index (BMI)</p>
        </div>

        <div className="self-center min-w-full max-w-3xl flex flex-col justify-center p-3 space-x-10 gap-5 border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800 rounded-lg shadow-sm md:flex-row md:min-w-full">
          <div className="flex flex-col gap-1 text-center w-full items-center">
            <p className="text-gray-900 dark:text-white">Weight (kilogram)</p>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} type='number' className="no-spinner md:w-3xs rounded-md border border-gray-900 dark:border-gray-400 text-center text-gray-900 dark:text-white"></input>
          </div>

          <div className="flex flex-col gap-1 text-center w-full items-center">
            <p className="text-gray-900 dark:text-white">Height (meters)</p>
            <input value={height} onChange={(e) => setHeight(e.target.value)} type="number" className="no-spinner md:w-3xs rounded-md border border-gray-900 dark:border-gray-400 text-center text-gray-900 dark:text-white"></input>
          </div>
        </div>

        {bmi !== null && (
          <div className="w-full flex flex-col bg-green-600 p-5 rounded-lg gap-5">

            <div>
              <p className="text-white text-md font-medium">Your BMI</p>

              <p className="text-gray-700 dark:text-gray-200">{getBMIRemark(bmi)}</p>
            </div>


            <p className="text-white text-5xl font-bold font-mono">{bmi}</p>
          </div>
        )}

        <div className="w-full border border-gray-200 dark:border-gray-700"></div>

        <div className="flex justify-end gap-5">
          <Button onClick={removeValue} disabled={!weight && !height} variant='destructive'>Reset</Button>
          <Button onClick={calculate} disabled={!weight || !height} className='text-white bg-emerald-400 dark:text-emerald-950 hover:bg-emerald-300'>Calculate BMI</Button>
        </div>

      </div>

    </main >
  );
}
