import React,{useState} from 'react'
import { CButton,CCollapse,CCard,CCardBody} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
// import MyComponent from './pdf';
const Units = () => {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [visible5, setVisible5] = useState(false);
  return (
    <>     
           <CButton className=" w-full" onClick={() => setVisible1(!visible1)} aria-expanded={visible1} aria-controls="collapseWidthExample1">Unit 1</CButton>
           <div style={{ minHeight: '0'}}>
      <CCollapse id="collapseWidthExample1" horizontal visible={visible1}>
        <CCard style={{width: '100%'}}>
          <div className='flex'>
          <CCardBody style={{width: '30%',height:'400px'}}>
         
          
         <iframe src="https://drive.google.com/file/d/1Ry9IIhzKxH7Q_7epeFvq9pnZZ1YcdNru/preview" width="100%" height="100%" ></iframe>
         
         </CCardBody>
         <CCardBody style={{width: '30%',height:'400px'}}><iframe src="https://drive.google.com/file/d/1Ry9IIhzKxH7Q_7epeFvq9pnZZ1YcdNru/preview" width="100%" height="100%" ></iframe>
         </CCardBody>
         <CCardBody style={{width: '30%',height:'400px'}}><iframe src="https://drive.google.com/file/d/1Ry9IIhzKxH7Q_7epeFvq9pnZZ1YcdNru/preview" width="100%" height="100%" ></iframe>
         </CCardBody>
          </div>
          
        </CCard>
      </CCollapse>
    </div>
    {/* end of ut1 */}
           <CButton className=" w-full" onClick={() => setVisible2(!visible2)} aria-expanded={visible2} aria-controls="collapseWidthExample2">Unit 2</CButton>
           <div style={{ minHeight: '0px'}}>
      <CCollapse id="collapseWidthExample2" horizontal visible={visible2}>
        <CCard style={{width: '100%'}}>
          <div className='flex'>
          <CCardBody style={{width: '30%',height:'400px'}}>
         
          
         <iframe src="https://drive.google.com/file/d/1Ry9IIhzKxH7Q_7epeFvq9pnZZ1YcdNru/preview" width="100%" height="100%" ></iframe>
         
         </CCardBody>
         <CCardBody style={{width: '30%',height:'400px'}}><iframe src="https://drive.google.com/file/d/1Ry9IIhzKxH7Q_7epeFvq9pnZZ1YcdNru/preview" width="100%" height="100%" ></iframe>
         </CCardBody>
         <CCardBody style={{width: '30%',height:'400px'}}><iframe src="https://drive.google.com/file/d/1Ry9IIhzKxH7Q_7epeFvq9pnZZ1YcdNru/preview" width="100%" height="100%" ></iframe>
         </CCardBody>
          </div>
          
        </CCard>
      </CCollapse>
    </div>
    {/* end of ut2 */}
           <CButton className="w-full" onClick={() => setVisible3(!visible3)} aria-expanded={visible3} aria-controls="collapseWidthExample3">Unit 3</CButton>
           <CButton className="w-full" onClick={() => setVisible4(!visible4)} aria-expanded={visible4} aria-controls="collapseWidthExample4">Unit 4</CButton>
           <CButton className="w-full" onClick={() => setVisible5(!visible5)} aria-expanded={visible5} aria-controls="collapseWidthExample5">Unit 5</CButton>

    
    
    </>
  )
}

export default Units