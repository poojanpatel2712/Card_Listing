import React from 'react'

function Card({title, budget_name, cardtype, spent, balance, expiry}) {

    const spentpercent = ((spent.value*100)/(balance.value+spent.value));
    const balancepercent = 100-spentpercent

  return (
    <div className='w-1/4 rounded-lg shadow-lg p-5'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col justify-center items-start'>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <h1 className='text-gray-600'>{budget_name}</h1>
        </div>
        <div className='w-10 h-auto'>
            {cardtype == "Burner" ? <img src={require("../../images/burner.png")} /> : <img src={require("../../images/subscription.png")} />}
        </div>
      </div>
      <div className='flex flex-row justify-between mt-3'>
        <div className='flex-col justify-center items-start'>
            <h1 className='text-start text-gray-600 text-lg'>Amount</h1>
            <h1 className='text-start'>{spent.value+balance.value}</h1>
        </div>
        <div className='flex-col justify-center items-start'>
            <h1 className='text-start text-gray-600 text-lg'>Frequency</h1>
            <h1 className='text-start'>Monthly</h1>
        </div>
        <div className='flex-col justify-center items-start'>
            <h1 className='text-start text-gray-600 text-lg'>Expiry</h1>
            <h1 className='text-start'>{expiry.toString().substring(0,10)}</h1>
        </div>
      </div>
      <div className=' flex flex-row w-full mt-3'>
        <div style={{width:`${spentpercent}%`}} className='bg-green-700 h-3 rounded-l-lg'></div>
        <div style={{width:`${balancepercent}%`}} className='bg-pink-700 h-3 rounded-r-lg'></div>
      </div>
      <div className='flex flex-col'>
        <div className='flex flex-row justify-between items-center mt-3'>
            <div className='flex flex-row items-center'>
                <div className='w-2 h-2 rounded-lg bg-green-700 mr-2'>

                </div>
                <h1 className='text-lg text-gray-600'>Spent</h1>
            </div>
            <div className='text-lg'>
                <h1>{spent.value} {spent.currency}</h1>
            </div>
        </div>
        <div className='flex flex-row justify-between items-center mt-2'>
            <div className='flex flex-row items-center'>
                <div className='w-2 h-2 rounded-lg bg-pink-700 mr-2'>

                </div>
                <h1 className='text-lg text-gray-600'>Balance</h1>
            </div>
            <div className='text-lg'>
                <h1>{balance.value} {balance.currency}</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
