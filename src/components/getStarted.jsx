import React from 'react';
import '../styles/getStarted.css';


const GetStarted = () => {
  return (
    <section className="get-started">
      <h2 className="title">Get Started with Us</h2>
      <div className='follow'>Follow this steps to get started</div>
      <div className='blur'></div>
      <div className="steps">
        <div className="step">
         
         <div className='bmLi' ><svg className="svg-inline--fa fa-user-plus ggj" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"></path></svg></div>
          <h3 className="step-title"> <span className='getS'>1. </span> Sign Up</h3>
          <p className="step-description">Create an account to begin your journey with us.</p>
        </div>
        <div className="step">
        
          <div className='bmLi'><svg className="svg-inline--fa fa-wallet ggj" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wallet" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg></div>
          <h3 className="step-title"> <span className='getS' >2. </span>Choose a Service</h3>
          <p className="step-description">Select the financial services that best meet your needs.</p>
        </div>
        <div className="step">
      
        <div className='bmLi'><svg className="svg-inline--fa fa-chart-line ggj" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"></path></svg></div>
          <h3 className="step-title"><span className='getS'>3. </span>Invest or Save</h3>
          <p className="step-description">Begin investing or start managing your finances effectively.</p>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
