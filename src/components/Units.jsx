import React,{useState} from 'react'
import { CButton,CCollapse,CCard,CCardBody} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import Header from './Header';
// import MyComponent from './pdf';
const Units = () => {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [visible5, setVisible5] = useState(false);
  return (
    <>  
    <Header/>   
    <div class="flex mt-2 justify-content-center">
           <CButton className=" w-40" onClick={() => setVisible1(!visible1)} aria-expanded={visible1} aria-controls="collapseWidthExample1">Unit 1</CButton>
           <div style={{ minHeight: '0'}}>
      <CCollapse id="collapseWidthExample1" horizontal visible={visible1}>
        <CCard style={{width: '100%'}}>
          <div className='flex'>
          <CCardBody style={{width: '30%',height:'400px'}}>      
          
         <iframe src="https://drive.google.com/file/d/1QsiSEgBVfPYKdJJaD6Hgyvd_n2jeX_Gu/preview" width="100%" height="100%" ></iframe>
         
         </CCardBody>
         <CCardBody style={{width: '30%',height:'400px'}}><iframe src="https://drive.google.com/file/d/1jPW2EKn0H1BKOx0h2ci0U0tbpDubK2R1/preview" width="100%" height="100%" ></iframe>
         </CCardBody>
         <CCardBody style={{width: '30%',height:'400px'}}><iframe src="" width="100%" height="100%" ></iframe>
         </CCardBody>
          </div>
          
        </CCard>
      </CCollapse>
    </div>
    </div>
    {/* end of ut1 */}
    <div class="flex mt-5 justify-content-center">
           <CButton className=" w-40" onClick={() => setVisible2(!visible2)} aria-expanded={visible2} aria-controls="collapseWidthExample2">Unit 2</CButton>
           <div style={{ minHeight: '0px'}}>
      <CCollapse id="collapseWidthExample2" horizontal visible={visible2}>
        <CCard style={{width: '100%'}}>
          <div className='flex'>
          <CCardBody style={{width: '30%',height:'400px'}}>
         
          
         <iframe src="https://drive.google.com/file/d/1YtI90hj4977JwGS4enIeLqeNthrwa-Pz/preview" width="100%" height="100%" ></iframe>
         
         </CCardBody>
         <CCardBody style={{width: '30%',height:'400px'}}><iframe src="https://drive.google.com/file/d/17oovrpCsz6VI5hgQo7XjdL4LRg46Nh9z/preview" width="100%" height="100%" ></iframe>
         </CCardBody>
         <CCardBody style={{width: '30%',height:'400px'}}><iframe src="" width="100%" height="100%" ></iframe>
         </CCardBody>
          </div>
          
        </CCard>
      </CCollapse>
    </div>
    </div>
    {/* end of ut2 */}
    <div class="flex mt-5 justify-content-center">
           <CButton className="w-40" onClick={() => setVisible3(!visible3)} aria-expanded={visible3} aria-controls="collapseWidthExample3">Unit 3</CButton>
           <div style={{ minHeight: '0px'}}>
      <CCollapse id="collapseWidthExample2" horizontal visible={visible3}>
        <CCard style={{width: '100%'}}>
          <div className='flex'>
          <CCardBody style={{width: '30%',height:'400px'}}>
         
          
          <iframe src="https://drive.google.com/file/d/1K62LA3_jP2DQnqOVuqJGT_q3zlI_7aMI/preview" width="100%" height="100%" allow="autoplay"></iframe>
         
         </CCardBody>
         <CCardBody style={{width: '30%',height:'400px'}}><iframe src="" width="100%" height="100%" ></iframe>
         </CCardBody>
         <CCardBody style={{width: '30%',height:'400px'}}><iframe src="" width="100%" height="100%" ></iframe>
         </CCardBody>
          </div>
          
        </CCard>
      </CCollapse>
    </div>
    </div>



    <div class="flex mt-5 justify-content-center">
           <CButton className="w-40" onClick={() => setVisible4(!visible4)} aria-expanded={visible4} aria-controls="collapseWidthExample4">Unit 4</CButton>
           <div style={{ minHeight: '0px'}}>
      <CCollapse id="collapseWidthExample2" horizontal visible={visible4}>
        <CCard style={{width: '100%'}}>
          <div className='flex'>
          <CCardBody style={{width: '30%',height:'400px'}}>
         
          
          <iframe src="https://drive.google.com/file/d/1MfC7W8n4b_YrlBGpHBpwutJacgrxTPfm/preview" width="100%" height="100%" allow="autoplay"></iframe>
         
         </CCardBody>
         <CCardBody style={{width: '30%',height:'400px'}}><iframe src="" width="100%" height="100%" ></iframe>
         </CCardBody>
         <CCardBody style={{width: '30%',height:'400px'}}><iframe src="" width="100%" height="100%" ></iframe>
         </CCardBody>
          </div>
          
        </CCard>
      </CCollapse>
    </div>
    </div>
    <div class="flex mt-5 justify-content-center">
           <CButton className="w-40" onClick={() => setVisible5(!visible5)} aria-expanded={visible5} aria-controls="collapseWidthExample5">Unit 5</CButton>
           <div style={{ minHeight: '0px'}}>
      <CCollapse id="collapseWidthExample2" horizontal visible={visible5}>
        <CCard style={{width: '100%'}}>
          <div className='flex'>
          <CCardBody style={{width: '30%',height:'400px'}}>          
          <iframe src="https://drive.google.com/file/d/1isygBg3WWF7bLRMmuSUhzSQuY-7c7_Bq/preview" width="100%" height="100%" allow="autoplay"></iframe>
         </CCardBody>
         <CCardBody style={{width: '30%',height:'400px'}}><iframe src="" width="100%" height="100%" ></iframe>
         </CCardBody>
         <CCardBody style={{width: '30%',height:'400px'}}><iframe src="" width="100%" height="100%" ></iframe>
         </CCardBody>
          </div>
          
        </CCard>
      </CCollapse>
    </div>
    </div>
           

    
    
    </>
  )
}

export default Units