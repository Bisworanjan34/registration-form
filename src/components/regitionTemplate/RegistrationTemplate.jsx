// import React from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const RegistrationTemplate = () => {
   let input=useSelector((s)=>s.myinput.input)
    let {fname,lname,email,mobile,country,city,gender,summery,dob,zipcode,skill,projects,education}=input


  return (
    <div>
     <div className="container " style={{width:'60rem'}}>
        <div className="row overflow-Y-scroll w-100">
           {
            input && 
            <div className="col border border-2 bg-white text-dark my-2">
           <div className="name-sec">
           <h5 className='text-center fw-bold font '>RESUME</h5>
           <div className='bg-primary text-white py-1 px-2 text-center  text-capitalize'style={{height:'5.5rem'}}>
            <h5 className='h2  fw-bold '> {fname} {lname}</h5>
            <div className="d-flex mx-auto justify-content-center">
            <p style={{fontSize:'10px'}}>gender:- {gender} |</p>
            <p style={{fontSize:'10px'}}>Date-of-birth:-  {dob} |</p>
           
            <p style={{fontSize:'10px'}}> <FontAwesomeIcon icon={faAt} /> {email}</p>
            </div>
            <div className="div d-flex mx-auto justify-content-center">
            <p style={{fontSize:'10px'}}>mobile no: {mobile}</p>
            <p style={{fontSize:'10px'}} >country: {country}</p>
            <p style={{fontSize:'10px'}}> 
               <FontAwesomeIcon icon={faLocationDot} /> city: {city} |</p>
            <p style={{fontSize:'10px'}}>zip-code: {zipcode}</p>
            </div>

           </div>

           </div>
           
           
           
            <p className='mt-4 mb-3 w-75'><span className='fw-bold' style={{fontSize:'13px'}}>Summary</span><p style={{fontSize:'12px'}}>{summery}</p></p>
            <hr />
            <h5 style={{fontSize:'13px'}}>skills: </h5>
      
           <div className="div key-s">
                    {skill && skill.map((r,i)=> (
                   <div className="div" key={i}>
                 <ul>
                 <li style={{fontSize:'12px'}}>{r + '-'}</li>
                 </ul>
                   </div>
            ))}
           </div>
           <div className="education">
            <h5 style={{fontSize:'13px'}}>Education</h5>
              {
               education && education.map((e,i)=>{
                  return(
                    <ul key={i}>
                     <li className='border p-3 mt-3 bg-white shadow text-dark text-capitalize fw-bold' style={{fontSize:'10px'}}>{e.topic}-{e.clg_name}-{e.pass_year}-{e.clg_loc}-{e.perc}{'%'}</li>
                    
                    
                    </ul>
                  )
               })
              }
           </div>
              <div className="projects w-75">
               <h5 style={{fontSize:'13px'}}>Projects</h5>
                     {
                        projects && projects.map((p,i)=>{
                           return(
                              <div className="div" key={i}>
                                  <ul>
                                    <li style={{fontSize:'12px'}}>{p}</li>
                                  </ul>
                              </div>
                           )
                        })
                     }
              </div>

            <b>{fname} {lname} you are succesfull registor</b>
            
        </div>
           }
        </div>
       

     </div>
    </div>
  )
}

export default RegistrationTemplate
