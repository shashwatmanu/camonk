import React from 'react'

const Steps = ({stepNumber}) => {
  return (
    <>
    <div style={{display:'flex', justifyContent:'space-between'}}>
        <div style={{width:'82.3px', height:'4px', backgroundColor:stepNumber >= 1 ? 'rgba(242, 165, 49, 1)' : 'rgba(223, 227, 227, 1)', borderRadius:'10px'}}></div>
        <div style={{width:'82.3px', height:'4px', backgroundColor:stepNumber >= 2 ? 'rgba(242, 165, 49, 1)' : 'rgba(223, 227, 227, 1)', borderRadius:'10px'}}></div>
        <div style={{width:'82.3px', height:'4px', backgroundColor:stepNumber >= 3 ? 'rgba(242, 165, 49, 1)' : 'rgba(223, 227, 227, 1)', borderRadius:'10px'}}></div>
        <div style={{width:'82.3px', height:'4px', backgroundColor:stepNumber >= 4 ? 'rgba(242, 165, 49, 1)' : 'rgba(223, 227, 227, 1)', borderRadius:'10px'}}></div>
        <div style={{width:'82.3px', height:'4px', backgroundColor:stepNumber >= 5 ? 'rgba(242, 165, 49, 1)' : 'rgba(223, 227, 227, 1)', borderRadius:'10px'}}></div>
        <div style={{width:'82.3px', height:'4px', backgroundColor:stepNumber >= 6 ? 'rgba(242, 165, 49, 1)' : 'rgba(223, 227, 227, 1)', borderRadius:'10px'}}></div>
        <div style={{width:'82.3px', height:'4px', backgroundColor:stepNumber >= 7 ? 'rgba(242, 165, 49, 1)' : 'rgba(223, 227, 227, 1)', borderRadius:'10px'}}></div>
        <div style={{width:'82.3px', height:'4px', backgroundColor:stepNumber >= 8 ? 'rgba(242, 165, 49, 1)' : 'rgba(223, 227, 227, 1)', borderRadius:'10px'}}></div>
        <div style={{width:'82.3px', height:'4px', backgroundColor:stepNumber >= 9 ? 'rgba(242, 165, 49, 1)' : 'rgba(223, 227, 227, 1)', borderRadius:'10px'}}></div>
        <div style={{width:'82.3px', height:'4px', backgroundColor:stepNumber >= 10 ? 'rgba(242, 165, 49, 1)' : 'rgba(223, 227, 227, 1)', borderRadius:'10px'}}></div>
    </div>
    </>
  )
}

export default Steps