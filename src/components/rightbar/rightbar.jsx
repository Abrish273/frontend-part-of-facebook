import A from '../../assets/a.jpg'
import '../rightbar/rightBar.scss'

const Rightbar = () => {
  return (
    <div classNanme="rightbar" style={{ flex:"3", backgroundColor:"#f6f3f3", height:"calc(100vh - 70px)", position:"sticky", top:"60px", overflow:"scroll" }}>
      <div className="first-content" style={{ display:"flex", flexDirection:"column", width:"90%", margin:"20px 10px", gap:"10px", border:"none", boxShadow:"-6px 14px 17px -11px rgba(51,51,51,0.71)", borderRadius:"5px", backgroundColor:"white", padding:"10px 12px" }}>
        <span>Suggested Friends</span>
        <div className="first-friend" style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
          <div className="first-friend_pic-name" style={{ display:"flex", alignItems:"center", gap:"3px" }} >
            <img src={A} alt="friend" style={{ width:"35px", height: "35px", borderRadius:"50%", objectFit:"cover" }} />
            <span >Amare Abebe</span>
          </div>
          <div className="buttons" style={{ display: "flex", alignItems:"center", gap:"5px" }}>
             <button style={{border:"none", outline:"none", backgroundColor:"blue", padding:"5px 10px", color:"white", cursor:"pointer", borderRadius:"5px" }}>Follow</button>  
             <button style={{border:"none", outline:"none", backgroundColor:"red", padding:"5px 10px", color:"white", cursor:"pointer", borderRadius:"5px"}}>Delete</button>  

          </div> 
        </div>
        <div className="first-friend" style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
          <div className="first-friend_pic-name" style={{ display:"flex", alignItems:"center", gap:"3px" }} >
            <img src={A} alt="friend" style={{ width:"35px", height: "35px", borderRadius:"50%" }} />
            <span >Amare Abebe</span>
          </div>
          <div className="buttons" style={{ display: "flex", alignItems:"center", gap:"5px" }}>
             <button style={{border:"none", outline:"none", backgroundColor:"blue", padding:"5px 10px", color:"white", borderRadius:"5px" }}>Follow</button>  
             <button style={{border:"none", outline:"none", backgroundColor:"red", padding:"5px 10px", color:"white", borderRadius:"5px"}}>Delete</button>  
          </div> 
        </div>
      </div>
      <div className="second-content" style={{ display:"flex", flexDirection:"column", width:"90%", boxShadow:"-6px 14px 17px -11px rgba(51,51,51,0.71)", margin:"20px 10px", gap:"10px", border:"none", borderRadius:"5px", backgroundColor:"white", padding:"10px 12px" }}>
        <span>Latest Activities</span>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:"10px" }} >
          <div style={{ display:"flex", alignItems:"center", justifyContent:"flexStart", fontSize:"10px", gap:"2px" }}>
            <img src={A} alt="friend" style={{ width:"30px", height:"30px", borderRadius:"50%"}} />
            <span style={{ color:"black", fontSize:"13px" }} >Amare Abebe</span>
            <span style={{ color:"gray" }} >Changed their cover image</span>
          </div>
          <span style={{ fontSize:"10px" }}>1 min ago</span>  
        </div>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:"10px" }} >
          <div style={{ display:"flex", alignItems:"center", justifyContent:"flexStart", fontSize:"10px", gap:"2px" }}>
            <img src={A} alt="friend" style={{ width:"30px", height:"30px", borderRadius:"50%"}} />
            <span style={{ color:"black", fontSize:"13px" }} >Amare Abebe</span>
            <span style={{ color:"gray" }} >Changed their cover image</span>
          </div>
          <span style={{ fontSize:"10px" }}>1 min ago</span>  
        </div>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:"10px" }} >
          <div style={{ display:"flex", alignItems:"center", justifyContent:"flexStart", fontSize:"10px", gap:"2px" }}>
            <img src={A} alt="friend" style={{ width:"30px", height:"30px", borderRadius:"50%"}} />
            <span style={{ color:"black", fontSize:"13px" }} >Amare Abebe</span>
            <span style={{ color:"gray" }} >Changed their cover image</span>
          </div>
          <span style={{ fontSize:"10px" }}>1 min ago</span>  
        </div>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:"10px" }} >
          <div style={{ display:"flex", alignItems:"center", justifyContent:"flexStart", fontSize:"10px", gap:"2px" }}>
            <img src={A} alt="friend" style={{ width:"30px", height:"30px", borderRadius:"50%"}} />
            <span style={{ color:"black", fontSize:"13px" }} >Amare Abebe</span>
            <span style={{ color:"gray" }} >Changed their cover image</span>
          </div>
          <span style={{ fontSize:"10px" }}>1 min ago</span>  
        </div>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:"10px" }} >
          <div style={{ display:"flex", alignItems:"center", justifyContent:"flexStart", fontSize:"10px", gap:"2px" }}>
            <img src={A} alt="friend" style={{ width:"30px", height:"30px", borderRadius:"50%"}} />
            <span style={{ color:"black", fontSize:"13px" }} >Amare Abebe</span>
            <span style={{ color:"gray" }} >Changed their cover image</span>
          </div>
          <span style={{ fontSize:"10px" }}>1 min ago</span>  
        </div>
        
        </div>
      <div className="third-content" style={{ display:"flex", flexDirection:"column", position:"relative", width:"90%", margin:"20px 10px", boxShadow:"-6px 14px 17px -11px rgba(51,51,51,0.71)", gap:"10px", border:"none", borderRadius:"5px", backgroundColor:"white", padding:"10px 12px" }}>
        <div style={{ display:"flex", alignItems:"center", position:"relative" }}>
        <img src={A} alt="friend" style={{ width:"30px", height:"30px", borderRadius:"50%"}} />
        <div style={{ display:"block" ,color:"limegreen", width:"22px", height:"22px", borderRadius:"50%", position:"absolute", top:"0px", left:"30px" }} />
        <span>Amare Abebe</span> 
        </div>
        <div style={{ display:"flex", alignItems:"center", position:"relative" }}>
        <img src={A} alt="friend" style={{ width:"30px", height:"30px", borderRadius:"50%"}} />
          <i style={{ fontSize:"0.02px", color:"green", position:"absolute", top:"-8px", left:"11px" }}>
          
          </i>
          <span>Amare Abebe</span> 
        </div>
        <div style={{ display:"flex", alignItems:"center", position:"relative" }}>
        <img src={A} alt="friend" style={{ width:"30px", height:"30px", borderRadius:"50%"}} />
          <i style={{ fontSize:"0.02px", color:"green", position:"absolute", top:"-8px", left:"11px" }}>
          
          </i>
          <span>Amare Abebe</span> 
        </div>
        <div style={{ display:"flex", alignItems:"center", position:"relative" }}>
        <img src={A} alt="friend" style={{ width:"30px", height:"30px", borderRadius:"50%"}} />
          <i style={{ fontSize:"0.02px", color:"green", position:"absolute", top:"-8px", left:"11px" }}>
          
          </i>
          <span>Amare Abebe</span> 
        </div>
      </div>
    </div>
  )
}

export default Rightbar