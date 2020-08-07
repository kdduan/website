import React from "react";
import Layout from '../components/Layout';
import './index.styles.scss';
import portfolioItems from '../components/portfolio-items';

function handleClickMacro(e) {
  const subCheckBoxes = document.getElementsByClassName("checkboxSub");
  for (let i = 0; i < subCheckBoxes.length; i++) {
    subCheckBoxes[i].checked = false;
  }

  const checkBoxes = document.getElementsByClassName("checkbox");
  for (let i = 0; i < checkBoxes.length; i++) {
    if (checkBoxes[i].id !== e.target.id) {    
      checkBoxes[i].checked = false;
    }
  }

  const allActive = document.getElementsByClassName("folio-title-sub active");
  for (let i = 0; i < allActive.length; i++) {
    allActive[i].className = 'folio-title-sub';
  }
}

function handleClickSub(e) {
  if (e.target.className.includes('active')) {
    e.target.className = 'folio-title-sub';
  } else {
    const checkBoxes = document.getElementsByClassName("checkboxSub");
    for (let i = 0; i < checkBoxes.length; i++) {
      if (checkBoxes[i].id !== e.target.id) {
        checkBoxes[i].checked = false;
      }
    }
    const allActive = document.getElementsByClassName("folio-title-sub active");
    for (let i = 0; i < allActive.length; i++) {
      allActive[i].className = 'folio-title-sub';
    }
    e.target.className = 'folio-title-sub active';
  }

}

function renderFolio() {
  return  portfolioItems.map(({title, idx, desc}) => {
    return (
      <div key={'div' + idx} className="tab">
        <input key={'index' + idx}  type="checkbox" className="checkbox" id={idx + title}/>
        <label key={'label' + idx}  className="tab-label" htmlFor={idx + title}>  
          <span key={'pTit' + idx} className='folio-title' onClick={handleClickMacro}>{title} </span>
        </label>
        <div key={'tab' + idx} className="tab-content">
          {renderBullets(desc)}
        </div>
      </div>
    )
  })
}


function renderBullets(items) {
  return items.map(({title, desc, idx}) => {
    return (
      <div key={'div' + idx} className="tab-sub">
        <input key={'index' + idx}  type="checkbox" className="checkboxSub" id={idx + title}/>
        <label key={'label' + idx}  className="tab-label-sub" htmlFor={idx + title}>  
          <span key={'pTit' + idx} className='folio-title-sub' id={idx + title} onClick={handleClickSub}>{title} </span>
        </label>
        <div key={'tab' + idx} className="tab-content-sub">
          {desc}
        </div>
      </div>
    )
  })
}

const Index = () => {


  return (
    <Layout>
      <p className="subtitle">
        Hi! I'm a rising junior at NYU studying Statistics, Mathematics, and Computer Science. 
        I'm an aspiring software engineer especially interested in Machine Learning
        applications and how they allow us to draw subtle insights from data. 
        I'm also a passionate fan of the 76ers and the (SuperBowl 52 champion) Eagles, avid
        cellist, and Sichuan cuisine enthusiast. If you're interested in any of 
        these things or just want to chat, feel free to reach out to me 
        through email or any social media. 
      </p>
      {renderFolio()}
    </Layout>
  )
}

export default Index
