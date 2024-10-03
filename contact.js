const firebaseConfig = {
    apiKey: "AIzaSyD0WaivScu4VQqB_dt_8CznUl57blKx_yo",
    authDomain: "contactform-d331f.firebaseapp.com",
    databaseURL: "https://contactform-d331f-default-rtdb.firebaseio.com",
    projectId: "contactform-d331f",
    storageBucket: "contactform-d331f.appspot.com",
    messagingSenderId: "295798379272",
    appId: "1:295798379272:web:15380cb228071e904692bd"
  };
  firebase.initializeApp(firebaseConfig);
  var contactFormDB = firebase.database().ref("contactForm");
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("email");
    var msgContent = getElementVal("message");
  
    saveMessages(name, emailid, msgContent);
  
    //  to alert
    alert('Message Sent!');
    setTimeout(()=> {
        document.getElementById("contactForm").reset();
    },2000)
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };