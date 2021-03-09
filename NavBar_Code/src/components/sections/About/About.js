import React from 'react';

import Section from '../../../HOC/Section';

const about = () => {
  return (
    <Section id='about'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            About Crop Darpan
          </h3></div><div>
	  <p>
                Normally, it is difficult for a typical farmer to identify the field problem. A typical farmer has to depend on agricultural expert to identify the crop problem.<br/>
	  The Crop Darpan tool is built to enable the typical farmer to identify the crop  problem. It considers that farmer possesses the smart phone (or a note book/laptop) with the internet connection and visits the field.  The Crop Darpan tool guides the farmer to identify the field problem. After identifying the field problem, the farmer can take corrective steps by understanding the  diagnostic advice  provided by the system or contact the agricultural expert.
                </p>
                <p>
                The protocol is as follows.
	        <ol><li>Visit the crop filed with the smart phone.</li>
	            <li>Download and Install <a href="https://play.google.com/store/apps/details?id=in.iiit.cropdarpan">"Crop Darpan"</a> app from playstore(for android devices only). or,</li>
	            <li>Visit the “Crop Darpan <a>(www.cropdarpan.in)</a> ” Web site.</li>
	            <li>Select the crop and language.</li> 
	            <li>Repeat the following steps, till the system reports the crop problem based on your input and displays the advice.<br/>
	                  <ul><li>Read each symptom related question carefully.</li>
	                      <li> Observe  the crop carefully</li>
	                      <li> Click “YES” by confirming  the existence of the symptom.</li></ul></li></ol> 
	  	Give feedback regarding your experience at cropdarpan@gmail.com. Rate and Review our app in the playstore.</p>
	       <p><b>Thank you!!!</b>
                </p>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-20 col-lg-18'>
              <h3 className='about-title'>About us</h3>
              <div className='about-description'>
               <p> This work is carried out under India-Japan Joint Research Laboratory Project entitled “Data Science based farming support system for sustainable crop production under climatic change (DSFS)”, funded by Department of Science and Technology, India (DST) and Japan Science and Technology Agency (JST).<br/>
	  The participating institutes are as follows.
	  <ol type="1">
	  <li>Indian Institute of Technology, Hyderabad, India (IIT Hyderabad)</li>
	  <li>International Institute of Information Technology, Hyderabad, India (IIIT Hyderabad)</li>
	  <li>Indian Institute of Technology, Bombay, India (IIT Bombay)</li>
	  <li>Professor Jayashankar Telanagana State Agricultural University, Hyderabad, India (PJTSAU)</li>
	  <li>University of Tokyo, Japan</li></ol>
This work has been carried out at IT for Agriculture Reseach Center (ITARC), IIIT Hyderabad under work package "Efficient Knowledge Transfer" of the above project.
All rights reserved.
For details please contact the chief investigator <a href="https://faculty.iiit.ac.in/~pkreddy/">Prof. P. Krishna Reddy</a>, IIIT Hyderabad, India .
	  </p>
              </div>
            </div>
          </div>
        </div>
	</div>
    </Section>
  );
};

export default about;
