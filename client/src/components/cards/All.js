import React from 'react'
import Navbar from '../Navbar'

function All() {
    const cards = [
        {
          id: 1,
          title: 'Netflix',
          author: 'John Doe',
          date: 'June 15, 2023',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dolor mi, non efficitur metus semper nec. Nulla facilisi. Mauris cursus nec diam sit amet lobortis. Sed sed felis ut felis iaculis consequat. Sed aliquam arcu quis luctus lobortis.'
        },
        {
          id: 2,
          title: 'Netflix',
          author: 'John Doe',
          date: 'June 15, 2023',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dolor mi, non efficitur metus semper nec. Nulla facilisi. Mauris cursus nec diam sit amet lobortis. Sed sed felis ut felis iaculis consequat. Sed aliquam arcu quis luctus lobortis.'
        },
        {
          id: 3,
          title: 'Netflix',
          author: 'John Doe',
          date: 'June 15, 2023',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dolor mi, non efficitur metus semper nec. Nulla facilisi. Mauris cursus nec diam sit amet lobortis. Sed sed felis ut felis iaculis consequat. Sed aliquam arcu quis luctus lobortis.'
        },
        {
          id: 4,
          title: 'Netflix',
          author: 'John Doe',
          date: 'June 15, 2023',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dolor mi, non efficitur metus semper nec. Nulla facilisi. Mauris cursus nec diam sit amet lobortis. Sed sed felis ut felis iaculis consequat. Sed aliquam arcu quis luctus lobortis.'
        },
        {
          id: 5,
          title: 'Netflix',
          author: 'John Doe',
          date: 'June 15, 2023',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dolor mi, non efficitur metus semper nec. Nulla facilisi. Mauris cursus nec diam sit amet lobortis. Sed sed felis ut felis iaculis consequat. Sed aliquam arcu quis luctus lobortis.'
        },
        {
          id: 6,
          title: 'Netflix',
          author: 'John Doe',
          date: 'June 15, 2023',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus maximus dolor mi, non efficitur metus semper nec. Nulla facilisi. Mauris cursus nec diam sit amet lobortis. Sed sed felis ut felis iaculis consequat. Sed aliquam arcu quis luctus lobortis.'
        },
      ];
    
  return (
    <>
    <Navbar/>
    <div>
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-6 font">Cards</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map(card => (
          <div
            key={card.id}
            className="bg-white rounded shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
          >
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600 text-sm mb-4">
              By {card.author} | {card.date}
            </p>
            <p className="text-gray-700">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  )
}

export default All
