import React from "react"

import AssortmentForm from './components/AssortmentForm'
import AssortmentModal from './components/AssortmentModal'
import AssortmentList from './components/AssortmentList'
import AssortmentDivider from './components/AssortmentDivider'
import AssortmentImage from './components/AssortmentImage'
import AssortmentBreadcrumbs from './components/AssortmentBreadcrumbs'

 
export default function AssortmentPage() {
    return (
        <>
        <AssortmentBreadcrumbs/>

        <div className="mediaColumn m0a mw500">
            <AssortmentImage/>
            <AssortmentForm/>
        </div>

        <AssortmentDivider/>

        <div className="m0a mw500">  
            <AssortmentModal/>  

            <AssortmentList/>
        </div>
        
        </>
    )
  }    
    
    
    
    
    
    