'use client'
import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { IoBackspace } from 'react-icons/io5'

interface CalculationTypes {
  firstValue: string[]
  operation: string
  secondValue: string[]
  answer: string
}

const Page = () => {
  const [calculation, setCalculation] = useState<CalculationTypes>({
    firstValue: [],
    operation: '',
    secondValue: [],
    answer: ''
  })
  //handle =
  const calculate = () => {
    console.log('equal clicked')
    const operations: Record<string, () => string> = {
      '+': () => {
        const ans =
          parseInt(calculation.firstValue.join('')) +
          parseInt(calculation.secondValue.join(''))
        return ans.toString()
      },
      x: () => {
        const ans =
          parseInt(calculation.firstValue.join('')) *
          parseInt(calculation.secondValue.join(''))
        return ans.toString()
      },
      '-': () => {
        const ans =
          parseInt(calculation.firstValue.join('')) -
          parseInt(calculation.secondValue.join(''))
        return ans.toString()
      },
      '÷': () => {
        const ans =
          parseInt(calculation.firstValue.join('')) /
          parseInt(calculation.secondValue.join(''))
        return ans.toString()
      }
    }
    const result = operations[calculation.operation]()
    setCalculation(prevCalculation => ({
      ...prevCalculation,
      answer: result
    }))
    console.log('result:', result)
    return result
  }
  //handle AC
  const handleAC = () => {
    setCalculation({
      firstValue: [],
      secondValue: [],
      answer: '',
      operation: ''
    })
  }

  //handle values
  const handleInputChange = (value: string | number) => {
    setCalculation(prevCalculation => {
      const updatedCalculation = { ...prevCalculation }
      if (operations.includes(value.toString())) {
        updatedCalculation.operation = value.toString()
      } else if (!prevCalculation.operation) {
        updatedCalculation.firstValue = [
          ...prevCalculation.firstValue,
          value.toString()
        ]
      } else {
        updatedCalculation.secondValue = [
          ...prevCalculation.secondValue,
          value.toString()
        ]
      }
      console.log('Updated Calculation:', updatedCalculation)
      return updatedCalculation
    })
  }
  const operations = ['√', 'π', 'e', '!', '()', '%', '÷', 'x', '-', '+', '=']
  const buttons = [
    { name: '√', label: '√' },
    { name: 'π', label: 'π' },
    { name: 'e', label: 'e' },
    { name: '!', label: '!' },
    { name: 'down', label: <FaAngleDown /> },
    { name: 'AC', label: 'AC' },
    { name: '()', label: '()' },
    { name: '%', label: '%' },
    { name: '÷', label: '÷' },
    { name: 7, label: '7' },
    { name: 8, label: '8' },
    { name: 9, label: '9' },
    { name: 'x', label: 'x' },
    { name: 4, label: '4' },
    { name: 5, label: '5' },
    { name: 6, label: '6' },
    { name: '-', label: '-' },
    { name: 1, label: '1' },
    { name: 2, label: '2' },
    { name: 3, label: '3' },
    { name: '+', label: '+' },
    { name: 0, label: '0' },
    { name: '.', label: '.' },
    { name: 'backspace', label: <IoBackspace /> },
    { name: 'equal', label: '=' }
  ]
  return (
    <div className='section-3 rounded-xl m-4 bg-white p-10 w-full flex items-center justify-center'>
      <div className='shadow-lg shadow-gray-400/500 rounded-xl '>
        <div className=' h-[10rem] w-[17rem] bg-rose-50 rounded-xl'>
          <div>{calculation.firstValue ? calculation.firstValue : ''}</div>
          <div>{calculation.operation ? calculation.operation : ''}</div>
          <div>{calculation.secondValue ? calculation.secondValue : ''}</div>
          <div>{calculation.answer ? calculation.answer : ''}</div>
        </div>
        <div className='rounded-xl  m-8'>
          <div className='w-full flex flex-row justify-between p-3'>
            {buttons.slice(0, 5).map(btn => (
              <button
                className={`${
                  btn.name === 'down' ? 'bg-amber-100 rounded-md p-1 ' : ''
                } `}
                key={btn.name}
              >
                {btn.label}
              </button>
            ))}
          </div>
          <div className='w-full gap-2 grid grid-cols-4'>
            {buttons.slice(5, 25).map(btn => (
              <button
                className={` p-3  rounded-md my-1 ${
                  btn.name === 'AC'
                    ? 'bg-amber-200'
                    : [
                        7,
                        8,
                        9,
                        4,
                        5,
                        6,
                        1,
                        2,
                        3,
                        0,
                        'decimal-point',
                        'back-space'
                      ].includes(btn.name)
                    ? 'bg-fuchsia-50'
                    : 'bg-rose-100'
                }`}
                key={btn.name}
                onClick={
                  btn.name === 'equal'
                    ? () => calculate()
                    : btn.name === 'AC'
                    ? () => handleAC()
                    : () => handleInputChange(btn.name)
                }
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
