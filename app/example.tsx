'use client'


import { useState } from 'react';
import Select from 'react-select';
import { TENNIS } from '../lib/constants';

const Card = ({title, children}: any) => (
  <div className='flex flex-col shadow p-5 rounded text-left'>
    <h3 className='flex justify-center font-semibold md:text-lg text-base pb-1'>{title}</h3>
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
    <div className='flex flex-col'>
      <div className='flex flex-col flex-wrap justify-center items-center align-center mt-2'>
        <div className='flex flex-row mt-2'>
          <p className='mr-2 mt-2'>
            You’re in the
          </p>
          <div className='flex flex-row'>
            <Select
              className="w-44 mr-2 text-left"
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
        <p className='ml-1 mt-1'>launching a new line of {fillIns.product}</p>
      </div>
      <div className='mx-10 mt-5 grid md:grid-cols-3 sm:grid-cols-1 gap-5'>
        <Card title='Strategically plan out playtests'>
          <p>Location: {fillIns.strategy.locations}</p>
          <p>Consumer Breakdown: hi</p>
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