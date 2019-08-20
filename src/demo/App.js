import React, { useRef, useEffect, useState } from 'react';
import { 
  Banner,
  Card,
  Popup,
  renderCard,
  renderPopup,
  renderBanner
 } from "../lib/index"

import "../lib/bootstrap.css"
import "../lib/components/style.css"
import './App.css';
const Child = props => {
  return <h5 className="pacifico" style={{color:"#fff", marginTop:5 }}>Hello <span>😷</span></h5>
}

const App = () => {

  const [isShowCard, setShowCard] = useState(false);
  const [isShowPopup, setShowPopup] = useState(false);
  const [isShowBanner, setShowBanner] = useState(false);


  useEffect(() => {
    setTimeout(setShowCard, 1000, !isShowCard)
    setTimeout(setShowPopup, 1000, !isShowPopup)
  },[])
  
  return (
    <div className="App" style={{backgroundColor:"#bfbfbf", margin:0, padding:0, height:"100%"}}>
    {renderCard("card", {
      bodyClick:() => setShowCard(!isShowCard),
      isShow:isShowCard,
      button:"Hello world",
      customBodyContainerStyle: {
        padding:"0px",
      },
      title:"Hello world",
      body: (
        <div>
          <img 
            alt=""
            style={{objectFit:"cover"}} 
            width={"100%"} height={"200px"} 
            src="https://images.pexels.com/photos/1533960/pexels-photo-1533960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
          <div style={{maegin:"auto", padding:"20px"}}>
            <p>Fugiat pariatur culpa enim officia et ea aliquip ad dolore sunt incididunt irure. Duis velit excepteur sint anim ut mollit fugiat adipisicing commodo sint cillum culpa. Laboris aliqua do sunt anim fugiat nostrud non ipsum velit. Commodo voluptate et enim aliqua deserunt dolor non</p>
          </div>
        </div>
      )
    })}


   {renderBanner("banner", {
     isShow:isShowBanner,
     bodyClick:() => setShowBanner(!isShowBanner),
     text:"Hello"
   })}
      


      <Banner 
        isShow={isShowBanner}
        bodyClick={() => setShowBanner(!isShowBanner)}
        text={<Child/>}
      />

{
  renderPopup("popup", {
      bodyClick:() => setShowPopup(!isShowPopup),
      isShow:isShowPopup,
      customBodyContainerStyle: {
        padding:"0px",
      },
      button:"Hello world",
      onButtonClick:() => console.log("click"),
      title:"Hello world",
      body:(
        <div style={{
          padding:"0px",
          margin:"0px"
        }}>
        <img 
          alt=""
          style={{objectFit:"cover"}} 
          width={"100%"} height={"200px"} 
          src="https://images.pexels.com/photos/1533960/pexels-photo-1533960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
        <div style={{maegin:"auto", padding:"20px"}}>
          <p>Fugiat pariatur culpa enim officia et ea aliquip ad dolore sunt incididunt irure. Duis velit excepteur sint anim ut mollit fugiat adipisicing commodo sint cillum culpa. Laboris aliqua do sunt anim fugiat nostrud non ipsum velit. Commodo voluptate et enim aliqua deserunt dolor non</p>
        </div>
      </div>
      )
    })
  }


      <Popup
        bodyClick={() => {
          setShowPopup(!isShowPopup);
          console.log("click")
        }}
        isShow={isShowPopup}
        button={"Hello world"}
        onButtonClick={() => console.log("click")}
        customHeaderStyle={{backgroundColor:"#5bc0de"}}
        title="Hello world"
        body={
          (
            <div style={{
              padding:"0px",
              margin:"0px"
            }}>
            <img 
              alt=""
              style={{objectFit:"cover"}} 
              width={"100%"} height={"200px"} 
              src="https://images.pexels.com/photos/1533960/pexels-photo-1533960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            <div style={{maegin:"auto", padding:"20px"}}>
              <p>Fugiat pariatur culpa enim officia et ea aliquip ad dolore sunt incididunt irure. Duis velit excepteur sint anim ut mollit fugiat adipisicing commodo sint cillum culpa. Laboris aliqua do sunt anim fugiat nostrud non ipsum velit. Commodo voluptate et enim aliqua deserunt dolor non</p>
            </div>
          </div>
          )
        }
      />

      <Card 
        bodyClick={() => setShowCard(!isShowCard)}
        isShow={isShowCard}
        button={"Hello world"}
        customHeaderStyle={{backgroundColor:"#5bc0de"}}
        onButtonClick={() => console.log("click")}
        title="Hello world"
        body="Fugiat pariatur culpa enim officia et ea aliquip ad dolore sunt incididunt irure. Duis velit excepteur sint anim ut mollit fugiat adipisicing commodo sint cillum culpa. Laboris aliqua do sunt anim fugiat nostrud non ipsum velit. Commodo voluptate et enim aliqua deserunt dolor non."
      />


      <p className="pacifico" style={{fontSize:20, color:"#fff"}}>
        Laboris elit cillum ipsum aliqua et exercitation ea ad culpa ipsum. Laborum qui anim Lorem adipisicing commodo labore ut eu velit est. Et est reprehenderit magna ea esse amet irure mollit tempor eu dolore tempor. Veniam commodo irure ut deserunt culpa est magna consectetur anim quis tempor tempor. Voluptate deserunt ad est amet anim mollit cillum.
        Excepteur aute exercitation adipisicing exercitation esse. Voluptate dolor nostrud aute mollit id minim nulla veniam elit deserunt amet. Nisi voluptate eiusmod eiusmod exercitation sunt enim pariatur aute. Aliquip fugiat nisi cillum deserunt. Consequat excepteur non adipisicing incididunt consectetur qui aliqua laborum minim Lorem ullamco tempor esse ut. Elit aliquip nostrud eu nisi dolor. Minim sint velit fugiat magna aliqua est tempor et officia elit excepteur elit.
        Aute veniam proident mollit reprehenderit velit et consequat consequat non deserunt exercitation consectetur ullamco. Dolor officia nisi ipsum do cillum officia fugiat eiusmod ipsum. Pariatur qui cillum minim deserunt laborum incididunt. Amet nulla ex voluptate labore esse laborum sint.
        Laboris nisi dolore labore Lorem occaecat. Dolore ullamco id excepteur veniam pariatur aute enim anim nisi aute quis nulla irure. Laborum consequat irure consectetur excepteur sint. In amet labore et exercitation eiusmod dolore eiusmod pariatur eu elit minim pariatur ex. Excepteur id do pariatur minim ea incididunt mollit in nulla dolore sunt sit ut ea.
        Cillum amet ex et consequat ut veniam deserunt elit consectetur proident tempor. Ullamco occaecat sint ex dolore. Nulla consequat nulla sunt id exercitation fugiat est id. Incididunt id excepteur eu commodo et consequat qui. Incididunt laborum excepteur exercitation pariatur reprehenderit reprehenderit eiusmod eiusmod ad sunt. Deserunt ullamco dolore in in reprehenderit sit aliquip sunt amet occaecat occaecat laboris. Dolor incididunt commodo duis sint cillum ullamco velit commodo magna Lorem.
        Nisi aute esse ea anim nostrud. Incididunt incididunt exercitation enim do reprehenderit incididunt cupidatat. Velit laborum fugiat non minim ea voluptate irure id labore eu officia Lorem. Qui consectetur sint duis adipisicing Lorem. Eiusmod culpa aute proident laboris exercitation sit aliqua aliqua amet. Occaecat consequat ullamco aliquip elit sunt labore minim fugiat ea esse aliquip ipsum pariatur sit. Fugiat irure ea ullamco velit elit tempor enim.
        Dolore amet voluptate ea veniam consequat consectetur quis ipsum do pariatur proident pariatur amet magna. Non sit ullamco fugiat sint nisi. Consectetur magna exercitation ad eiusmod non. Dolore nostrud culpa et non sint sunt reprehenderit aute duis magna ex mollit.
        Nisi ullamco deserunt ex in ut anim amet velit commodo mollit commodo in pariatur. Commodo est incididunt nulla cillum elit deserunt occaecat fugiat. Proident quis consectetur cupidatat minim laboris enim consectetur nisi. Incididunt qui nostrud consectetur reprehenderit. Et esse do ex magna ea. Commodo anim officia in veniam mollit ex est ipsum sint.
        Eu laborum consectetur irure sunt pariatur nisi consectetur. Magna irure anim labore labore. Excepteur amet amet amet ad. Laboris sint do reprehenderit et. Irure aliqua reprehenderit culpa sit sint proident dolore occaecat deserunt ullamco ut aliqua et. Lorem et commodo nostrud minim sunt qui ad ea ex non culpa nisi sit eiusmod.
        Fugiat minim non duis nulla ut laboris. Veniam ullamco esse eu deserunt labore ipsum duis anim laboris est magna sunt sunt. Quis nisi irure exercitation fugiat occaecat nostrud ut eiusmod exercitation minim. Voluptate irure Lorem ex consequat dolore do magna culpa aliqua fugiat exercitation.
        Commodo eiusmod voluptate reprehenderit labore eiusmod laboris dolor ea excepteur nulla. Commodo dolor cupidatat Lorem magna qui veniam anim ullamco dolore quis quis. Consectetur est voluptate culpa incididunt sint nostrud proident ullamco commodo sit.
        Excepteur velit non consectetur nostrud aute deserunt occaecat dolore consequat mollit qui exercitation minim. Incididunt aliquip irure reprehenderit minim ullamco id tempor. Laboris sit est quis incididunt id nostrud enim irure officia esse sunt aliquip. Anim velit incididunt in laboris aliqua quis ex ullamco labore amet fugiat cillum quis. Sunt commodo proident sunt quis irure. Duis pariatur qui aute consectetur irure cillum et duis laborum id sit. Aliqua consequat laborum aute dolore Lorem pariatur elit.
        Quis magna ipsum nisi do eiusmod tempor. Et proident qui non tempor duis cillum sint sit officia. Amet nulla deserunt quis nostrud ut anim proident quis adipisicing ex Lorem ad. Lorem tempor nostrud do laboris voluptate enim et magna ipsum velit.
        Pariatur proident proident proident id sint quis sit dolor fugiat id dolore minim aliquip eiusmod. Reprehenderit minim laborum in in quis laboris labore tempor quis id ea dolore culpa. Nulla esse pariatur tempor nisi qui Lorem velit.
        Ullamco deserunt proident mollit cillum ullamco consectetur exercitation ipsum. Nisi reprehenderit pariatur laborum ipsum nulla occaecat cupidatat nisi sit ipsum. Adipisicing et occaecat laboris labore cillum exercitation irure velit ad ad. Culpa enim qui qui velit laborum exercitation non commodo cupidatat non anim adipisicing. Cillum est sint consequat id magna duis qui fugiat. Est dolore sint ex veniam tempor incididunt duis sit magna et proident. Ullamco aliqua in duis ex veniam dolor sint deserunt incididunt Lorem consequat cupidatat nulla
        Sit consequat nostrud qui aliqua labore est magna sunt adipisicing dolore eu ea ullamco. Tempor eu cillum esse adipisicing irure nisi eiusmod eu consequat. Elit consequat sunt minim dolore ad anim velit esse voluptate non aute mollit sunt. Esse ad ea deserunt proident sunt qui sint minim. Culpa elit commodo laboris id Lorem irure amet in voluptate.
        Laboris elit cillum ipsum aliqua et exercitation ea ad culpa ipsum. Laborum qui anim Lorem adipisicing commodo labore ut eu velit est. Et est reprehenderit magna ea esse amet irure mollit tempor eu dolore tempor. Veniam commodo irure ut deserunt culpa est magna consectetur anim quis tempor tempor. Voluptate deserunt ad est amet anim mollit cillum.
        Excepteur aute exercitation adipisicing exercitation esse. Voluptate dolor nostrud aute mollit id minim nulla veniam elit deserunt amet. Nisi voluptate eiusmod eiusmod exercitation sunt enim pariatur aute. Aliquip fugiat nisi cillum deserunt. Consequat excepteur non adipisicing incididunt consectetur qui aliqua laborum minim Lorem ullamco tempor esse ut. Elit aliquip nostrud eu nisi dolor. Minim sint velit fugiat magna aliqua est tempor et officia elit excepteur elit.
        Aute veniam proident mollit reprehenderit velit et consequat consequat non deserunt exercitation consectetur ullamco. Dolor officia nisi ipsum do cillum officia fugiat eiusmod ipsum. Pariatur qui cillum minim deserunt laborum incididunt. Amet nulla ex voluptate labore esse laborum sint.
        Laboris nisi dolore labore Lorem occaecat. Dolore ullamco id excepteur veniam pariatur aute enim anim nisi aute quis nulla irure. Laborum consequat irure consectetur excepteur sint. In amet labore et exercitation eiusmod dolore eiusmod pariatur eu elit minim pariatur ex. Excepteur id do pariatur minim ea incididunt mollit in nulla dolore sunt sit ut ea.
        Cillum amet ex et consequat ut veniam deserunt elit consectetur proident tempor. Ullamco occaecat sint ex dolore. Nulla consequat nulla sunt id exercitation fugiat est id. Incididunt id excepteur eu commodo et consequat qui. Incididunt laborum excepteur exercitation pariatur reprehenderit reprehenderit eiusmod eiusmod ad sunt. Deserunt ullamco dolore in in reprehenderit sit aliquip sunt amet occaecat occaecat laboris. Dolor incididunt commodo duis sint cillum ullamco velit commodo magna Lorem.
        Nisi aute esse ea anim nostrud. Incididunt incididunt exercitation enim do reprehenderit incididunt cupidatat. Velit laborum fugiat non minim ea voluptate irure id labore eu officia Lorem. Qui consectetur sint duis adipisicing Lorem. Eiusmod culpa aute proident laboris exercitation sit aliqua aliqua amet. Occaecat consequat ullamco aliquip elit sunt labore minim fugiat ea esse aliquip ipsum pariatur sit. Fugiat irure ea ullamco velit elit tempor enim.
        Dolore amet voluptate ea veniam consequat consectetur quis ipsum do pariatur proident pariatur amet magna. Non sit ullamco fugiat sint nisi. Consectetur magna exercitation ad eiusmod non. Dolore nostrud culpa et non sint sunt reprehenderit aute duis magna ex mollit.
        Nisi ullamco deserunt ex in ut anim amet velit commodo mollit commodo in pariatur. Commodo est incididunt nulla cillum elit deserunt occaecat fugiat. Proident quis consectetur cupidatat minim laboris enim consectetur nisi. Incididunt qui nostrud consectetur reprehenderit. Et esse do ex magna ea. Commodo anim officia in veniam mollit ex est ipsum sint.
        Eu laborum consectetur irure sunt pariatur nisi consectetur. Magna irure anim labore labore. Excepteur amet amet amet ad. Laboris sint do reprehenderit et. Irure aliqua reprehenderit culpa sit sint proident dolore occaecat deserunt ullamco ut aliqua et. Lorem et commodo nostrud minim sunt qui ad ea ex non culpa nisi sit eiusmod.
        Fugiat minim non duis nulla ut laboris. Veniam ullamco esse eu deserunt labore ipsum duis anim laboris est magna sunt sunt. Quis nisi irure exercitation fugiat occaecat nostrud ut eiusmod exercitation minim. Voluptate irure Lorem ex consequat dolore do magna culpa aliqua fugiat exercitation.
        Commodo eiusmod voluptate reprehenderit labore eiusmod laboris dolor ea excepteur nulla. Commodo dolor cupidatat Lorem magna qui veniam anim ullamco dolore quis quis. Consectetur est voluptate culpa incididunt sint nostrud proident ullamco commodo sit.
        Excepteur velit non consectetur nostrud aute deserunt occaecat dolore consequat mollit qui exercitation minim. Incididunt aliquip irure reprehenderit minim ullamco id tempor. Laboris sit est quis incididunt id nostrud enim irure officia esse sunt aliquip. Anim velit incididunt in laboris aliqua quis ex ullamco labore amet fugiat cillum quis. Sunt commodo proident sunt quis irure. Duis pariatur qui aute consectetur irure cillum et duis laborum id sit. Aliqua consequat laborum aute dolore Lorem pariatur elit.
        Quis magna ipsum nisi do eiusmod tempor. Et proident qui non tempor duis cillum sint sit officia. Amet nulla deserunt quis nostrud ut anim proident quis adipisicing ex Lorem ad. Lorem tempor nostrud do laboris voluptate enim et magna ipsum velit.
        Pariatur proident proident proident id sint quis sit dolor fugiat id dolore minim aliquip eiusmod. Reprehenderit minim laborum in in quis laboris labore tempor quis id ea dolore culpa. Nulla esse pariatur tempor nisi qui Lorem velit.
        Ullamco deserunt proident mollit cillum ullamco consectetur exercitation ipsum. Nisi reprehenderit pariatur laborum ipsum nulla occaecat cupidatat nisi sit ipsum. Adipisicing et occaecat laboris labore cillum exercitation irure velit ad ad. Culpa enim qui qui velit laborum exercitation non commodo cupidatat non anim adipisicing. Cillum est sint consequat id magna duis qui fugiat. Est dolore sint ex veniam tempor incididunt duis sit magna et proident. Ullamco aliqua in duis ex veniam dolor sint deserunt incididunt Lorem consequat cupidatat nulla
        Sit consequat nostrud qui aliqua labore est magna sunt adipisicing dolore eu ea ullamco. Tempor eu cillum esse adipisicing irure nisi eiusmod eu consequat. Elit consequat sunt minim dolore ad anim velit esse voluptate non aute mollit sunt. Esse ad ea deserunt proident sunt qui sint minim. Culpa elit commodo laboris id Lorem irure amet in voluptate.
      </p>

    </div>
  );
}

export default App;
