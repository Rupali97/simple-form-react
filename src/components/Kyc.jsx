import React, {useEffect, useState} from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Kyc(props) {

  if(!props) return <div />
  return (
    <div style={{padding: 40}}>
      {
        props.apiData.kycDocs.map((item, i) => (
          <div key={i} style={{marginBottom: 20}}>
            <Typography 
              variant="h6" 
              gutterBottom
              > 
              {item.title} 
            </Typography>
            <Link href={`${item.url}`}>{item.url}</Link>
          </div>
        ))
      }
    </div>
  )
}

export default Kyc
