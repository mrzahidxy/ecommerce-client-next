import React from 'react'

const order = () => {
  return (
    <div>order</div>
  )
}

order.getLayout = function PageLayout(page) {
    return <div>{page}</div>;
  };
export default order