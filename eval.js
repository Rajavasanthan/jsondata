const inputval = "#exmple || @name && user_email"


const outputval = [
  {
    type: 'intent',
    value: 'exmple'
  },
  {
    type: 'operator',
    value: 'OR'
  },
  {
    type: 'entity',
    value: 'name'
  },
  {
    type: 'operator',
    value: 'AND'
  },
  {
    type: 'variable',
    value: 'user_email'
  }
]
