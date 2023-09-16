import'./privacy.css'

function Privacy({name, phone}){
    // console.log(name, phone)
    return(
      <section>
          <h2>개인정보</h2>
          <p className='name'>이름 : {name} </p>
          <p>연락처 : {phone} </p>
        </section>
  
    )
  
  }

  export default Privacy