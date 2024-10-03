const firebaseConfig = {
    apiKey: "AIzaSyDnwdRc1cRbHxY1eKXeYpcJrPNK1NfGPWQ",
    authDomain: "joinform-91c01.firebaseapp.com",
    projectId: "joinform-91c01",
    storageBucket: "joinform-91c01.appspot.com",
    messagingSenderId: "1066323544524",
    databaseURL: "https://joinform-91c01-default-rtdb.firebaseio.com/",
    appId: "1:1066323544524:web:a3ed4615150883356a7569"
  };

  firebase.initializeApp(firebaseConfig);
  var joinFormDB = firebase.database().ref("joinForm");
  document.getElementById("joinForm").addEventListener("submit", submitForm);
  function submitForm(e) {
    e.preventDefault();
  
    var fn = getElementVal("fn");
    var ln = getElementVal("ln");
    var phn = getElementVal("phn");
    var qf = getElementVal("qf");
    var moc = getElementVal("moc");
    var age = getElementVal("age");
    var state = getElementVal("country-state");
    var city = getElementVal("city");
    var emailid = getElementVal("email");
  
    saveMessages(fn,ln,phn,qf, moc, age,state,city,emailid);
  
    //  to alert
    alert('Message Sent!');
    setTimeout(()=> {
        document.getElementById("joinForm").reset();
    },2000)
  }
  
  const saveMessages = (fn,ln,phn,qf, moc, age,state,city,emailid) => {
    var newJoinForm = joinFormDB.push();
  
    newJoinForm.set({
      firstName: fn,
      lastName : ln,
      phone: phn,
      moc: moc,
      qualifications : qf,
      age: age,
      state : state,
      city : city,
      emailID : emailid
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };