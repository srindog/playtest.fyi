'use client'


import { useState } from 'react';
import Select from 'react-select';
import { TENNIS } from '../lib/constants';

const Card = ({title, children}: any) => (
  <div className='flex flex-col shadow p-5 rounded'>
    <h3 className='flex items-center font-semibold md:text-lg text-base'>{title}</h3>
    {children}
  </div>
)

export default function Example({sports, examples}: any) {
  const [selectedSport, setSelectedSport] = useState({value: TENNIS, label: TENNIS})
  const sportOptions = sports.map((sport: string) => (
    {value: sport, label: sport}
  ))

  const selectedExamples = examples.filter((ex: any) => ex.sport === selectedSport.value)
  
  const fillIns = (selectedExamples.length !== 0) ? selectedExamples[0] : {
    sport: 'tennis',
    product: '{ENTER A SPORT}'
  }

  return (
    <div className='flex flex-col mt-2'>
      <div className='flex md:flex-row sm:flex-col flex-wrap justify-center items-center align-center mt-2 md:text-lg sm:text-base'>
        <div className='flex flex-row mt-2'>
          <p className='mr-2 mt-2'>
            You’re in the
          </p>
          <div className='flex flex-row'>
            <Select
              className="w-44 mr-2"
              classNamePrefix="select"
              placeholder="Select an industry..."
              name="sports"
              options={sportOptions}
              value={selectedSport}
              onChange={setSelectedSport}
            />
          </div>
          <p className='mt-2'>business,</p> 
        </div>
        <p className='ml-1 mt-3'>launching a new line of {fillIns.product}</p>
      </div>
      <div className='mt-5 grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-2'>
        <Card title='Strategically plan out playtests'>
          <p>Location: {fillIns.strategy.locations}</p>
          <p>Consumer Breakdown: {fillIns.strategy.consumerBreakdown}</p>
          <p>Consumer Type: {fillIns.strategy.consumerType}</p>
          <p>Testing Time Period: {fillIns.strategy.timePeriod}</p>
        </Card>
        <Card title='Get highly detailed playtest reviews'>
        </Card>
        <Card title='Analyze playtests for key insights'>
        </Card>
      </div>
    </div>
  )
}